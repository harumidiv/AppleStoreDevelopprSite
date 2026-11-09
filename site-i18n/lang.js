// アプリ紹介ページ（一覧・詳細）共通の言語切り替え
//
// 使い方：<head> に次のように書き、プルダウンを置きたい場所に <span data-lang-slot></span> を置く
//   <script src="../site-i18n/lang.js" data-page="munyu" defer></script>
//
// data-mode="page"（既定）：site-i18n/<page>/<言語>.js の html で <body> の中身をまるごと差し替える
// data-mode="dict"       ：[data-i18n] の要素だけ差し替え、残りはページ側が "sitelangchange" イベントで描き直す
(function () {
  var LANGS = [
    ["ja", "日本語"],
    ["en", "English"],
    ["zh-Hans", "简体中文"],
    ["zh-Hant", "繁體中文"],
    ["ko", "한국어"]
  ];
  // プライバシーポリシーと同じキー。どのページで選んでも次のページに引き継がれる
  var KEY = "siteLang";

  var me = document.currentScript;
  var page = me.getAttribute("data-page");
  var mode = me.getAttribute("data-mode") || "page";
  var base = me.src.replace(/lang\.js(\?.*)?$/, "");

  var ALL = window.SITE_I18N = window.SITE_I18N || {};
  var I18N = ALL[page] = ALL[page] || {};
  var supported = {};
  LANGS.forEach(function (l) { supported[l[0]] = true; });

  var desc = document.querySelector('meta[name="description"]');

  // 日本語（元の HTML）を覚えておく
  if (mode === "page") {
    I18N.ja = { title: document.title, description: desc && desc.content, html: document.body.innerHTML };
  } else {
    var text = {}, aria = {};
    document.querySelectorAll("[data-i18n]").forEach(function (n) { text[n.getAttribute("data-i18n")] = n.innerHTML; });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) { aria[n.getAttribute("data-i18n-aria")] = n.getAttribute("aria-label"); });
    I18N.ja = { title: document.title, description: desc && desc.content, text: text, aria: aria };
  }

  var style = document.createElement("style");
  style.textContent =
    ".site-lang{display:inline-flex;align-items:center;gap:6px;font-size:.86rem;font-weight:700;line-height:1;}" +
    ".site-lang select{font:inherit;font-size:.86rem;color:#1e1b3a;padding:7px 30px 7px 12px;border:2px solid #1e1b3a;border-radius:999px;" +
    "background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%231e1b3a' stroke-width='1.8'/%3E%3C/svg%3E\") no-repeat right 11px center;" +
    "-webkit-appearance:none;appearance:none;cursor:pointer;max-width:100%;}" +
    ".site-lang select:focus-visible{outline:3px solid #2563eb;outline-offset:2px;}" +
    ".site-lang.floating{position:fixed;top:12px;right:12px;z-index:1000;}" +
    "body[aria-busy=true]{opacity:.6;transition:opacity .15s;}";
  document.head.appendChild(style);

  var label = document.createElement("label");
  label.className = "site-lang";
  label.innerHTML = '<span aria-hidden="true">🌐</span>';
  var select = document.createElement("select");
  select.setAttribute("aria-label", "Language");
  LANGS.forEach(function (l) {
    var o = document.createElement("option");
    o.value = l[0];
    o.lang = l[0];
    o.textContent = l[1];
    select.appendChild(o);
  });
  label.appendChild(select);
  select.addEventListener("change", function () { choose(select.value, true); });

  function mount() {
    var slot = document.querySelector("[data-lang-slot]");
    label.classList.toggle("floating", !slot);
    (slot || document.body).appendChild(label);
  }
  mount();

  function load(code, done) {
    if (I18N[code]) return done(true);
    var s = document.createElement("script");
    s.src = base + page + "/" + code + ".js";
    s.onload = function () { done(!!I18N[code]); };
    s.onerror = function () { done(false); };
    document.head.appendChild(s);
  }

  var current = "ja";
  function apply(code) {
    var t = I18N[code];
    if (mode === "page") {
      if (code !== current) {
        document.body.innerHTML = t.html;
        mount();
        if (location.hash) {
          var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
          if (target) target.scrollIntoView();
        }
      }
    } else {
      document.querySelectorAll("[data-i18n]").forEach(function (n) {
        var v = t.text && t.text[n.getAttribute("data-i18n")];
        if (v != null) n.innerHTML = v;
      });
      document.querySelectorAll("[data-i18n-aria]").forEach(function (n) {
        var v = t.aria && t.aria[n.getAttribute("data-i18n-aria")];
        if (v != null) n.setAttribute("aria-label", v);
      });
      document.dispatchEvent(new CustomEvent("sitelangchange", { detail: { lang: code, t: code === "ja" ? null : t } }));
    }
    document.title = t.title;
    if (desc && t.description) desc.content = t.description;
    document.documentElement.lang = code;
    select.value = code;
    current = code;
  }

  function choose(code, save) {
    if (!supported[code]) code = "ja";
    document.body.setAttribute("aria-busy", "true");
    load(code, function (ok) {
      document.body.removeAttribute("aria-busy");
      if (!ok) code = "ja";
      apply(code);
      if (save) {
        try { localStorage.setItem(KEY, code); } catch (e) {}
        try {
          var url = new URL(location.href);
          if (code === "ja") url.searchParams.delete("lang");
          else url.searchParams.set("lang", code);
          history.replaceState(null, "", url);
        } catch (e) {}
      }
    });
  }

  // ?lang=en のような URL 指定、前回選んだ言語の順に使う。なければ日本語のまま。
  // プライバシーポリシーでだけ選べる言語（フランス語など）が残っていたら英語で表示する
  var initial = null;
  try { initial = new URLSearchParams(location.search).get("lang"); } catch (e) {}
  if (!initial) { try { initial = localStorage.getItem(KEY); } catch (e) {} }
  if (initial && !supported[initial]) initial = "en";
  if (initial && initial !== "ja") choose(initial, false);
})();
