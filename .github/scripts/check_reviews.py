"""App Store Connect API から未返信レビューを取得し、メール本文を reviews.txt に書き出す。

環境変数:
  ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY : App Store Connect API キー
  ASC_APP_IDS : 対象アプリの Apple ID（カンマ区切りで複数指定可）
"""
import os
import time
from datetime import datetime, timedelta, timezone

import jwt
import requests

API = "https://api.appstoreconnect.apple.com/v1"
JST = timezone(timedelta(hours=9))


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
    app_ids = [x.strip() for x in os.environ["ASC_APP_IDS"].split(",") if x.strip()]
    session = requests.Session()
    session.headers["Authorization"] = f"Bearer {make_token()}"

    total = 0
    sections = []
    for app_id in app_ids:
        name = get(session, f"{API}/apps/{app_id}")["data"]["attributes"]["name"]
        reviews = fetch_unanswered(session, app_id)
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

    with open(os.environ["GITHUB_OUTPUT"], "a") as f:
        f.write(f"count={total}\n")


if __name__ == "__main__":
    main()
