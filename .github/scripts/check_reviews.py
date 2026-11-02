"""App Store Connect API から未返信レビューを取得し、メール本文を reviews.txt に書き出す。

対象アプリは、サイトの HTML に書かれた App Store のリンク（apps.apple.com/.../id123...）から自動で集める。

環境変数:
  ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY : App Store Connect API キー
  ASC_APP_IDS : （任意）指定した場合は HTML から集めずにこの ID だけを対象にする（カンマ区切り）
"""
import os
import re
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path

import jwt
import requests

API = "https://api.appstoreconnect.apple.com/v1"
JST = timezone(timedelta(hours=9))
SITE_ROOT = Path(__file__).resolve().parents[2]
APP_LINK = re.compile(r"apps\.apple\.com/[^\"'\s<>]*?/(?:id)?(\d{6,})")


def collect_app_ids():
    """環境変数 ASC_APP_IDS があればそれを、なければサイトの HTML から App Store の ID を集める。"""
    manual = os.environ.get("ASC_APP_IDS", "").strip()
    if manual:
        return [x.strip() for x in manual.split(",") if x.strip()]
    ids = set()
    for html in SITE_ROOT.rglob("*.html"):
        ids.update(APP_LINK.findall(html.read_text(encoding="utf-8", errors="ignore")))
    return sorted(ids)


def make_token():
    now = int(time.time())
    return jwt.encode(
        {
            "iss": os.environ["ASC_ISSUER_ID"],
            "iat": now,
            "exp": now + 1200,
            "aud": "appstoreconnect-v1",
        },
        os.environ["ASC_PRIVATE_KEY"],
        algorithm="ES256",
        headers={"kid": os.environ["ASC_KEY_ID"], "typ": "JWT"},
    )


def get(session, url, params=None):
    r = session.get(url, params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def fetch_unanswered(session, app_id):
    url = f"{API}/apps/{app_id}/customerReviews"
    params = {
        "exists[publishedResponse]": "false",
        "sort": "-createdDate",
        "limit": 200,
    }
    reviews = []
    while url:
        data = get(session, url, params)
        reviews += data["data"]
        url, params = data.get("links", {}).get("next"), None
    return reviews


def format_review(rv):
    a = rv["attributes"]
    rating = a.get("rating", 0)
    created = datetime.fromisoformat(a["createdDate"]).astimezone(JST)
    return (
        f"{'★' * rating}{'☆' * (5 - rating)}  {a.get('territory', '')}  "
        f"{created:%Y-%m-%d %H:%M}\n"
        f"【{a.get('title', '')}】\n"
        f"{a.get('body', '')}\n"
        f"— {a.get('reviewerNickname', '')}"
    )


def main():
    app_ids = collect_app_ids()
    print(f"対象アプリ: {len(app_ids)}件 {app_ids}")
    session = requests.Session()
    session.headers["Authorization"] = f"Bearer {make_token()}"

    total = 0
    sections = []
    skipped = []
    for app_id in app_ids:
        try:
            name = get(session, f"{API}/apps/{app_id}")["data"]["attributes"]["name"]
            reviews = fetch_unanswered(session, app_id)
        except requests.HTTPError as e:
            # 別チームのアプリや配信終了したアプリは取得できないので飛ばす
            print(f"::warning::{app_id} をスキップしました（HTTP {e.response.status_code}）")
            skipped.append(app_id)
            continue
        print(f"{name} ({app_id}): {len(reviews)} unanswered")
        if not reviews:
            continue
        total += len(reviews)
        body = "\n\n".join(format_review(rv) for rv in reviews)
        sections.append(
            f"■ {name}（{len(reviews)}件）\n"
            f"https://appstoreconnect.apple.com/apps/{app_id}\n\n"
            f"{body}"
        )

    with open("reviews.txt", "w", encoding="utf-8") as f:
        f.write(f"未返信のレビューが {total} 件あります。\n")
        for section in sections:
            f.write("\n" + "=" * 40 + "\n" + section + "\n")
        if skipped:
            f.write(
                "\n" + "=" * 40 + "\n"
                f"※ 次のアプリは取得できなかったためスキップしました: {', '.join(skipped)}\n"
            )

    if app_ids and len(skipped) == len(app_ids):
        raise SystemExit("すべてのアプリの取得に失敗しました。API キーの設定を確認してください。")

    with open(os.environ["GITHUB_OUTPUT"], "a") as f:
        f.write(f"count={total}\n")


if __name__ == "__main__":
    main()
