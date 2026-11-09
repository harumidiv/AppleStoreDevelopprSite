window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["ebiFly"] = window.SITE_I18N["ebiFly"] || {})["zh-Hant"] = {
  title: "炸蝦飛飛 - 飛吧！炸蝦",
  description: "《炸蝦飛飛》是一款把炸蝦發射到天空盡頭的動作遊戲。裹上麵衣、下鍋油炸、淋上醬汁就發射！閃過飛鳥、飛機和隕石，比比看誰能飛得更高。",
  html: `
  <header class="hero">
    <img class="cloud c1" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c2" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c3" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c4" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="flyer f1" src="../image/EbiFly/art/shrimp-normal.png" alt="" aria-hidden="true" />
    <img class="flyer f2" src="../image/EbiFly/art/shrimp-heart.png" alt="" aria-hidden="true" />
    <img class="flyer f3" src="../image/EbiFly/art/shrimp-crown.png" alt="" aria-hidden="true" />

    <nav class="topbar wrap" aria-label="頁面導覽">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> App 列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#flow">玩法</a>
        <a href="#sky">天空區域</a>
        <a href="#features">特色</a>
        <a href="#screenshots">畫面</a>
        <a href="#support">支援</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/ebiFly.png" alt="炸蝦飛飛的 App 圖示" width="84" height="84" />
          <div><strong>炸蝦飛飛</strong><span>支援 iPhone、iPad／免費</span></div>
        </div>
        <p class="kicker">飛吧！</p>
        <h1>炸蝦飛飛</h1>
        <p class="lead">今天要做什麼樣的炸蝦呢……？？<wbr />裹上麵衣，<wbr />下鍋油炸，<wbr />淋上醬汁，<wbr />發射到天空的盡頭！<wbr />閃過飛鳥、飛機<wbr />和隕石，<wbr />你能飛多高呢？</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id1461666071" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#flow">查看玩法</a>
        </div>
        <ul class="hero-note" aria-label="支援資訊">
          <li>支援 iPhone、iPad</li>
          <li>搖晃、傾斜操作</li>
          <li>Game Center 排行榜</li>
        </ul>
      </div>
      <div class="hero-visual">
        <img class="hero-shot left" src="../image/EbiFly/screen_batter.jpg" alt="接住掉落麵包粉的裹衣畫面" width="739" height="1606" />
        <img class="hero-shot right" src="../image/EbiFly/screen_fly.jpg" alt="一邊閃避障礙物一邊在天空飛行的畫面" width="739" height="1606" />
        <img class="hero-shot main" src="../image/EbiFly/screen_title.jpg" alt="炸蝦在空中飛來飛去的標題畫面" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="App 特色">
    <div class="stat"><strong>5 個步驟</strong><span>製作、裹衣、油炸、醬汁、發射</span></div>
    <div class="stat"><strong>直衝太空</strong><span>閃過障礙物，一路往上</span></div>
    <div class="stat"><strong>排行榜</strong><span>在 Game Center 比拚飛行距離</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>做好，<wbr />炸好，<wbr />飛出去。</h2>
        <p>準備做得好不好，會直接影響飛行表現。每局大約 1 分鐘，想挑戰幾次都可以。</p>
      </div>
      <ol class="steps">
        <li class="step">
          <div class="step-media" style="--step-bg: #fff1c9"><img src="../image/EbiFly/screen_make.jpg" alt="選擇蝦尾與身體長度的畫面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>製作</h3><p>選擇蝦尾形狀和身體長度，做出專屬於你的蝦子。</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #f6dc95"><img src="../image/EbiFly/screen_batter.jpg" alt="接住麵包粉的畫面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>裹衣</h3><p>接住從天而降的麵包粉。金色麵包粉算 3 個，小心別碰到水滴。</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #3c4a52"><img src="../image/EbiFly/screen_fry.jpg" alt="停下油炸火候量表的畫面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>油炸</h3><p>抓準時機停下量表，目標是金黃酥脆。</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #ffe0d2"><img src="../image/EbiFly/screen_shake.jpg" alt="搖晃 iPhone 淋醬汁的畫面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>醬汁</h3><p>搖晃 iPhone 淋上醬汁。搖得越多，上升得越快！</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #7fd3ff"><img src="../image/EbiFly/screen_fly.jpg" alt="閃避障礙物飛行的畫面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>發射</h3><p>傾斜手機閃過障礙物，拿到醬汁瓶就能補充燃料。</p></div>
        </li>
      </ol>
    </section>

    <section class="sky-panel" id="sky" aria-labelledby="sky-heading">
      <div>
        <div class="section-heading">
          <p class="section-label">SKY ZONES</p>
          <h2 id="sky-heading">飛得越高，<wbr />天空越不一樣。</h2>
          <p>高度上升後，出現的障礙物也會改變。一撞到就結束。在燃料用完之前，你能飛到哪裡呢？</p>
        </div>
        <ul class="zones">
          <li><img src="../image/EbiFly/art/bird.png" alt="" /><div><strong>飛鳥區域</strong><span>先閃過在雲間飛翔的小鳥吧</span></div></li>
          <li><img src="../image/EbiFly/art/plane.png" alt="" /><div><strong>飛機區域　1,500m～</strong><span>長長的飛機會快速橫越畫面</span></div></li>
          <li><img src="../image/EbiFly/art/meteor.png" alt="" /><div><strong>隕石區域　3,400m～</strong><span>小心從上方落下的隕石</span></div></li>
          <li><img src="../image/EbiFly/art/fuel.png" alt="" /><div><strong>補充燃料</strong><span>拿到醬汁瓶就能恢復燃料！</span></div></li>
        </ul>
      </div>
      <img class="sky-shot" src="../image/EbiFly/screen_fly.jpg" alt="顯示燃料量表與上升速度的飛行畫面" loading="lazy" width="739" height="1606" />
    </section>

    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>目標是成為<wbr />真正的炸蝦飛行家。</h2>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/crumb.png" alt="" style="height:42px" /><img src="../image/EbiFly/art/fuel.png" alt="" /><img src="../image/EbiFly/art/water-drop.png" alt="" style="height:50px" /></div>
          <h3>準備決定飛行</h3>
          <p>麵包粉和火候決定燃料，醬汁決定上升速度。要在哪裡拉開差距，就看你了。</p>
        </article>
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/shrimp-crown.png" alt="" /><img src="../image/EbiFly/art/shrimp-heart.png" alt="" /><img src="../image/EbiFly/art/shrimp-normal.png" alt="" /></div>
          <h3>稱號與蝦尾收集</h3>
          <p>刷新紀錄就能提升稱號，飛過 3,000m 還能使用特別的「皇冠蝦尾」。</p>
          <ul class="ranks" aria-label="稱號範例"><li>生蝦</li><li>見習炸蝦</li><li>金黃炸蝦</li><li>宇宙炸蝦</li></ul>
        </article>
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/star.png" alt="" style="height:44px" /><img src="../image/EbiFly/art/star.png" alt="" /><img src="../image/EbiFly/art/star.png" alt="" style="height:44px" /></div>
          <h3>排行榜一較高下</h3>
          <p>飛行距離會記錄在 Game Center 排行榜上。和朋友及所有玩家比一比，看誰飛得最遠。</p>
        </article>
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENS</p>
        <h2>炸蝦飛飛的畫面</h2>
      </div>
      <div class="shots">
        <figure><img src="../image/EbiFly/screen_title.jpg" alt="標題畫面" loading="lazy" width="739" height="1606" /><figcaption>點一下天空就會出現障礙物！</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_make.jpg" alt="製作蝦子的畫面" loading="lazy" width="739" height="1606" /><figcaption>製作蝦子</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_batter.jpg" alt="裹衣畫面" loading="lazy" width="739" height="1606" /><figcaption>接住麵包粉</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_fry.jpg" alt="油炸畫面" loading="lazy" width="739" height="1606" /><figcaption>瞄準金黃色</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_shake.jpg" alt="醬汁畫面" loading="lazy" width="739" height="1606" /><figcaption>搖一搖淋醬汁</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_fly.jpg" alt="發射畫面" loading="lazy" width="739" height="1606" /><figcaption>閃過障礙往上衝</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_result.jpg" alt="結果畫面" loading="lazy" width="739" height="1606" /><figcaption>裝進便當，公布結果</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_records.jpg" alt="紀錄畫面" loading="lazy" width="739" height="1606" /><figcaption>紀錄與收藏</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下載炸蝦飛飛">
      <img class="download-icon" src="../image/icon/ebiFly.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>誰才是真正的<wbr />炸蝦飛行家！？</h2><p>裹上麵衣，下鍋油炸，飛向天空盡頭。免費暢玩。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id1461666071" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支援資訊">
      <article class="support-card">
        <h2>聯絡我們</h2>
        <p>歡迎提供意見、需求或回報問題。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">透過 Twitter 私訊聯絡</a>
      </article>
      <article class="support-card">
        <h2>隱私權</h2>
        <p>本 App 使用 Google AdMob 顯示廣告，並使用 Apple 的 Game Center 提供排行榜。iPhone 的搖晃與傾斜動作只會在裝置內用於操作，絕不會傳送到外部。詳情請參閱隱私權政策。</p>
        <a class="text-link" href="../privacy.html">閱讀隱私權政策</a>
      </article>
      <article class="support-card">
        <h2>玩得不順時</h2>
        <ul>
          <li>搖晃沒有反應時，也可以點一下螢幕來淋醬汁</li>
          <li>不方便傾斜時，也可以在螢幕上左右拖曳來閃避</li>
          <li>無法查看排行榜時，請在裝置的「設定」中登入 Game Center</li>
        </ul>
      </article>
    </section>
  </main>

  <footer>
    <div class="footer-row wrap">
      <span>© 2026 Harumi Sagawa — Apps</span>
      <a href="../index.html">返回 App 列表</a>
    </div>
  </footer>
`
};
