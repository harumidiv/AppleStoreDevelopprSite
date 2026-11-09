window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["munyu"] = window.SITE_I18N["munyu"] || {})["zh-Hant"] = {
  title: "Munyu - 吃蘑菇進化的毛毛蟲動作遊戲",
  description: "Munyu 是一款毛毛蟲吃蘑菇不斷進化的單線動作遊戲。蘑菇顏色與魔法自由搭配，最終型態共12種。只要用手指滑動就能輕鬆操作，挑戰3個區域與3隻魔王吧！",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="頁面導覽">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> App 列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#evolution">進化</a>
        <a href="#areas">區域</a>
        <a href="#screenshots">畫面</a>
        <a href="#support">支援</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/munyu.png" alt="Munyu 的 App 圖示" width="84" height="84" />
          <div><strong>Munyu</strong><span>支援 iPhone 與 iPad</span></div>
        </div>
        <h1>吃吧，<wbr />進化吧，<br /><em>打倒魔王！</em></h1>
        <p class="lead">小小的毛毛蟲「Munyu」<wbr />一邊吃蘑菇<wbr />一邊沿著小路前進的動作遊戲。<wbr />依照吃下的蘑菇顏色<wbr />與魔法的組合，<wbr />進化成各式各樣的模樣。<wbr />你的 Munyu<wbr />會變成什麼樣子呢？</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id1461761608" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支援資訊">
          <li>滑動就能玩的簡單操作</li>
          <li>最終型態共12種</li>
          <li>Game Center排行榜</li>
        </ul>
      </div>
      <div class="hero-visual">
        <img class="hero-shot left" src="../image/Munyu/screen_title.jpg" alt="介紹各種進化型態的標題畫面" width="739" height="1606" />
        <img class="hero-shot right" src="../image/Munyu/screen_boss.jpg" alt="與螳螂將軍對戰的魔王戰畫面" width="739" height="1606" />
        <img class="hero-shot main" src="../image/Munyu/screen_evo.jpg" alt="進化成岩漿Munyu瞬間的遊戲畫面" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="App 特色">
    <div class="stat"><strong>共12種</strong><span>由蘑菇與魔法決定的最終型態</span></div>
    <div class="stat"><strong>最高Lv.10</strong><span>每次升級都會進化</span></div>
    <div class="stat"><strong>3隻魔王</strong><span>草原、洞窟、夕陽森林</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>滑動前進，<wbr />越來越強。</h2>
        <p>只要用手指滑動，就能吃蘑菇、打倒蟲子、挑戰魔王。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">👆</div>
          <h3>滑動就能玩的簡單操作</h3>
          <p>在畫面上滑動，Munyu 就會上下左右移動。等級提升後會自動發射葉子彈，把擋路的蟲子和岩石一一擊倒，一路前進。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🍄</div>
          <h3>蘑菇顏色決定進化方向</h3>
          <p>紅蘑菇代表攻擊，藍蘑菇代表防禦，綠蘑菇代表魔法。吃最多的蘑菇決定進化路線。每次升級名字與外觀都會改變，到了Lv.10就會變成「傳說型態」。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🎁</div>
          <h3>寶箱與強化道具</h3>
          <p>擊碎岩石或打開寶箱，就能取得連射UP、彈數UP、追蹤彈、貫穿彈等強化道具。取得火、冰、雷魔法後，還能使用專屬攻擊。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🕳️</div>
          <h3>秘密洞窟</h3>
          <p>小路途中藏著滿是蘑菇與寶箱的「秘密洞窟」。找到的話就進去看看吧。善加利用，就能一口氣變強。</p>
        </article>
      </div>
    </section>

    <section class="section evo-panel" id="evolution" aria-labelledby="evo-heading">
      <div class="section-heading">
        <p class="section-label">EVOLUTION</p>
        <h2 id="evo-heading">蘑菇顏色 × 魔法，<wbr />共12種型態。</h2>
        <p>Lv.2時由蘑菇顏色決定進化路線，Lv.5時由持有的魔法決定最終型態。</p>
      </div>
      <div class="lines">
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--red)" aria-hidden="true"></span>犄角Munyu</h3>
          <p>紅蘑菇 · 擅長攻擊</p>
          <ul class="forms">
            <li>獨角仙Munyu<small>無魔法</small></li>
            <li>岩漿Munyu<small>火</small></li>
            <li>冰柱Munyu<small>冰</small></li>
            <li>霹靂Munyu<small>雷</small></li>
          </ul>
        </article>
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--blue)" aria-hidden="true"></span>甲殼Munyu</h3>
          <p>藍蘑菇 · 擅長防禦</p>
          <ul class="forms">
            <li>鎧甲Munyu<small>無魔法</small></li>
            <li>熔岩Munyu<small>火</small></li>
            <li>冰山Munyu<small>冰</small></li>
            <li>雷神Munyu<small>雷</small></li>
          </ul>
        </article>
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--leaf)" aria-hidden="true"></span>葉子Munyu</h3>
          <p>綠蘑菇 · 擅長魔法</p>
          <ul class="forms">
            <li>妖精Munyu<small>無魔法</small></li>
            <li>火鳥Munyu<small>火</small></li>
            <li>雪精靈Munyu<small>冰</small></li>
            <li>雷鳥Munyu<small>雷</small></li>
          </ul>
        </article>
      </div>
      <p class="evo-note">之後還會經過「大」「超」「王者」「神」不斷變強，在Lv.10成為「傳說的〇〇Munyu」。犄角變長、鎧甲上的尖刺變多、翅膀變大……每個等級的外觀也都不一樣。</p>
    </section>

    <section class="section" id="areas">
      <div class="section-heading">
        <p class="section-label">AREAS</p>
        <h2>3個區域，<wbr />3隻魔王。</h2>
        <p>每個區域的盡頭都有魔王在等著你。打倒牠就會出現階梯，可以前往下一個區域。</p>
      </div>
      <div class="areas">
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_play.jpg" alt="在草原上噴火戰鬥的畫面" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 1</small><h3>草原 與 烏鴉大王</h3><p>螞蟻、蜜蜂、瓢蟲出沒的第一個區域。魔王是會撒下羽毛的烏鴉大王。</p>
        </article>
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_cave.jpg" alt="在洞窟中與鼠婦和蝙蝠戰鬥的畫面" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 2</small><h3>洞窟 與 鼴鼠頭目</h3><p>鼠婦、蝙蝠、蜘蛛潛伏的黑暗洞窟。小心從地底探出頭來的鼴鼠頭目。</p>
        </article>
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_boss.jpg" alt="在夕陽森林中與螳螂將軍戰鬥的畫面" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 3</small><h3>夕陽森林 與 螳螂將軍</h3><p>鍬形蟲、飛蛾、蝸牛擋住去路的最後森林。打倒用風刃與衝撞猛攻的螳螂將軍吧！</p>
        </article>
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Munyu 的畫面</h2>
        <p>橫向捲動即可查看所有畫面。</p>
      </div>
      <div class="gallery" aria-label="Munyu 的螢幕截圖">
        <figure><img src="../image/Munyu/01_title.jpg" alt="吃吧，進化吧，打倒魔王！" loading="lazy" width="739" height="1606" /><figcaption>吃吧，進化吧，打倒魔王</figcaption></figure>
        <figure><img src="../image/Munyu/02_evo.jpg" alt="蘑菇顏色改變進化！" loading="lazy" width="739" height="1606" /><figcaption>蘑菇顏色改變進化</figcaption></figure>
        <figure><img src="../image/Munyu/03_forms.jpg" alt="最終型態共12種！" loading="lazy" width="739" height="1606" /><figcaption>最終型態共12種</figcaption></figure>
        <figure><img src="../image/Munyu/04_play.jpg" alt="滑動就能玩的簡單操作！" loading="lazy" width="739" height="1606" /><figcaption>滑動就能玩的簡單操作</figcaption></figure>
        <figure><img src="../image/Munyu/05_boss.jpg" alt="挑戰3隻強大的魔王！" loading="lazy" width="739" height="1606" /><figcaption>挑戰3隻魔王</figcaption></figure>
        <figure><img src="../image/Munyu/06_cave.jpg" alt="橫越3個區域的大冒險！" loading="lazy" width="739" height="1606" /><figcaption>橫越3個區域的大冒險</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下載 Munyu">
      <img class="download-icon" src="../image/icon/munyu.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>你的 Munyu，<wbr />會進化成什麼模樣？</h2><p>只要滑動就能玩的毛毛蟲進化動作遊戲。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id1461761608" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支援資訊">
      <article class="support-card">
        <h2>聯絡我們</h2>
        <p>歡迎提供意見、建議或回報問題。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">透過 Twitter 私訊聯絡</a>
      </article>
      <article class="support-card">
        <h2>隱私權</h2>
        <p>最佳分數會儲存在裝置中。為了排行榜功能，分數會傳送至 Game Center。此外，本 App 使用 Google AdMob 顯示廣告。詳情請參閱隱私權政策。</p>
        <a class="text-link" href="../privacy.html">閱讀隱私權政策</a>
      </article>
      <article class="support-card">
        <h2>致謝</h2>
        <p>音效使用了免費音樂素材網站「魔王魂」的素材。</p>
        <a class="text-link" href="https://maou.audio/" target="_blank" rel="noopener">魔王魂</a>
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
