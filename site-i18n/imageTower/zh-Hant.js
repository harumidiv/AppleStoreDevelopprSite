window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["imageTower"] = window.SITE_I18N["imageTower"] || {})["zh-Hant"] = {
  title: "Nokke Tower - 讓照片疊成高塔",
  description: "Nokke Tower 是一款把照片去背後的主體一層層疊高的疊塔遊戲。把你的寵物、美食或心愛的周邊去背，挑戰能疊多高。自己做的關卡還能用代碼分享給朋友。支援 iPhone 與 iPad。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="頁面導覽">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 返回 App 列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#flow">玩法</a>
        <a href="#screenshots">畫面</a>
        <a href="#support">支援</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/imageTower.png" alt="Nokke Tower 的 App 圖示" width="84" height="84" />
          <div><strong>Nokke Tower</strong><span>支援 iPhone 與 iPad</span></div>
        </div>
        <h1>照片，<br />疊成<em>高塔</em><wbr />。</h1>
        <p class="lead">從照片把喜歡的東西去背，<wbr />從上方丟下來疊高就好。<wbr />家裡的貓、今天的午餐、心愛的周邊，<wbr />用你最愛的照片，<wbr />挑戰能疊多高吧！<wbr /></p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6822193103" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支援資訊">
          <li>支援 iPhone 與 iPad</li>
          <li>用自己的照片來玩</li>
          <li>用代碼分享關卡</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffc73d" stroke="#1f292e" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#1f292e" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/ImageTower/screen_editor.jpg" alt="選擇去背素材來建立關卡的畫面" width="739" height="1605" />
        <img class="hero-shot right" src="../image/ImageTower/screen_result.jpg" alt="顯示疊了幾個的遊戲結束畫面" width="739" height="1605" />
        <img class="hero-shot main" src="../image/ImageTower/screen_game.jpg" alt="去背照片層層疊起的遊戲畫面" width="739" height="1605" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="App 特色">
    <div class="stat"><strong>6〜11 個</strong><span>用喜歡的去背圖組成關卡</span></div>
    <div class="stat"><strong>旋轉疊高</strong><span>看準平衡再放手</span></div>
    <div class="stat"><strong>代碼分享</strong><span>和朋友玩同一個關卡</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>你的照片，<wbr />直接變成遊戲。</h2>
        <p>寵物、美食、心愛的周邊、家人的合照。你最愛的照片，都能變成一座可以疊著玩的高塔。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📸</div>
          <h3>照片自動去背</h3>
          <p>只要選擇照片，就能自動把主體去背。可以從一張照片去背多個主體，也能加入在「照片」App 中拷貝的去背圖。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🗼</div>
          <h3>丟下、旋轉、疊上去</h3>
          <p>手指左右移動，放開即落下；點右下角的按鈕即可旋轉。把形狀各異的照片穩穩疊高，別讓塔倒了！</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🎨</div>
          <h3>專屬於你的關卡</h3>
          <p>只要選出 6〜11 個去背圖並決定掉落順序。取個「我家貓咪塔」之類的名字儲存起來，隨時都能玩。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">💌</div>
          <h3>把關卡分享給朋友</h3>
          <p>做好的關卡可以用 8 個字元的代碼傳給朋友。輸入收到的代碼，也能玩朋友做的關卡。</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>去背、<wbr />排序、<wbr />疊高。</h2>
        <p>從選擇照片到開始遊玩，只要 4 個步驟。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--sky)"><img src="../image/ImageTower/screen_editor.jpg" alt="建立關卡的畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 1</small><h3>照片去背</h3><p>選擇照片，把想使用的主體去背。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/ImageTower/screen_home.jpg" alt="列出已建立關卡的主畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 2</small><h3>建立關卡</h3><p>選出 6〜11 個去背圖並排好順序，關卡就完成了。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--yellow)"><img src="../image/ImageTower/screen_game.jpg" alt="丟下照片並疊高的遊戲畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 3</small><h3>丟下、疊高</h3><p>左右移動後放開手指即落下，點右下角的按鈕可旋轉。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--purple)"><img src="../image/ImageTower/screen_result.jpg" alt="顯示疊了幾個的結果畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 4</small><h3>分享成果</h3><p>可以把疊好的高塔截圖分享到社群，也能用代碼傳送關卡。</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" aria-labelledby="share-heading">
      <div class="rank-copy">
        <p class="section-label">SHARE</p>
        <h2 id="share-heading">你疊了<wbr />多高？<br />截圖<wbr />分享吧。</h2>
        <p>遊戲結束後，可以把整座高塔截成一張圖，直接分享到社群。刷新個人紀錄的話，就去向朋友炫耀一下吧！</p>
        <small>※ 用代碼分享關卡需要登入 iCloud。</small>
      </div>
      <div class="rank-shots">
        <img src="../image/ImageTower/screen_game.jpg" alt="照片層層疊起的遊戲畫面" loading="lazy" width="739" height="1605" />
        <img src="../image/ImageTower/screen_result.jpg" alt="有「分享截圖」按鈕的結果畫面" loading="lazy" width="739" height="1605" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Nokke Tower 的畫面</h2>
        <p>左右滑動即可查看所有畫面。</p>
      </div>
      <div class="gallery" aria-label="Nokke Tower 的截圖">
        <figure><img src="../image/ImageTower/01_tower.jpg" alt="照片，疊成高塔。" loading="lazy" width="739" height="1605" /><figcaption>照片疊成高塔</figcaption></figure>
        <figure><img src="../image/ImageTower/02_create.jpg" alt="用喜歡的照片建立關卡" loading="lazy" width="739" height="1605" /><figcaption>建立關卡</figcaption></figure>
        <figure><img src="../image/ImageTower/03_stages.jpg" alt="專屬於你的關卡隨時都能玩" loading="lazy" width="739" height="1605" /><figcaption>我的關卡</figcaption></figure>
        <figure><img src="../image/ImageTower/04_share.jpg" alt="能疊多高？用截圖輕鬆分享成果" loading="lazy" width="739" height="1605" /><figcaption>分享成果</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下載 Nokke Tower">
      <img class="download-icon" src="../image/icon/imageTower.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>把最愛的照片，<wbr />疊起來吧。</h2><p>用自己的照片來玩的疊塔遊戲。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6822193103" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支援資訊">
      <article class="support-card">
        <h2>聯絡我們</h2>
        <p>歡迎提供意見、需求或回報問題。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">透過 Twitter 私訊聯絡</a>
      </article>
      <article class="support-card">
        <h2>隱私</h2>
        <p>去背照片與關卡都儲存在裝置上。只有在分享關卡時，才會將去背影像與關卡名稱上傳到 iCloud。此外，本 App 使用 Google AdMob 顯示廣告。詳情請參閱隱私權政策。</p>
        <a class="text-link" href="../privacy.html">閱讀隱私權政策</a>
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
