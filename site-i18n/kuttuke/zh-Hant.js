window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["kuttuke"] = window.SITE_I18N["kuttuke"] || {})["zh-Hant"] = {
  title: "KUTTUKE - 照片合體進化的掉落益智遊戲",
  description: "KUTTUKE 是一款用自己的照片去背來玩的掉落益智遊戲。相同的照片碰在一起，就會進化成下一張照片。用家人、寵物或偶像的照片，打造專屬於你的進化組合。支援 iPhone 與 iPad。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="頁面導覽">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> App 列表</a>
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
          <img class="app-icon" src="../image/icon/kuttuke.png" alt="KUTTUKE 的 App 圖示" width="84" height="84" />
          <div><strong>KUTTUKE</strong><span>支援 iPhone、iPad</span></div>
        </div>
        <h1>你的<wbr />照片<br /><em>合體</em><wbr />進化！</h1>
        <p class="lead">從照片裡去背出喜歡的東西，<wbr />依照由小到大的順序排好就行。<wbr />相同的照片碰在一起，<wbr />就會進化成下一張，越長越大——<wbr />這就是用照片玩的掉落益智遊戲。<wbr /></p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6820843882" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支援資訊">
          <li>支援 iPhone、iPad</li>
          <li>用自己的照片來玩</li>
          <li>Game Center 排行榜</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffd140" stroke="#1b1f20" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#1b1f20" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/Kuttuke/screen_editor.jpg" alt="將照片由小到大排列的進化組合編輯畫面" width="739" height="1605" />
        <img class="hero-shot right" src="../image/Kuttuke/screen_result.jpg" alt="用彩帶慶祝上榜的結果畫面" width="739" height="1605" />
        <img class="hero-shot main" src="../image/Kuttuke/screen_game.jpg" alt="去背照片層層堆疊的遊戲畫面" width="739" height="1605" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="App 特色">
    <div class="stat"><strong>6～11 張</strong><span>用喜歡的照片組成進化組合</span></div>
    <div class="stat"><strong>依數量分榜</strong><span>Game Center 排行榜</span></div>
    <div class="stat"><strong>代碼分享</strong><span>和朋友玩同一個關卡</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>你的照片，<wbr />直接變成遊戲。</h2>
        <p>家人、寵物、偶像、旅行回憶。心愛的照片都能變成合體成長的益智遊戲。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📸</div>
          <h3>去背變成素材</h3>
          <p>只要按住照片中的人或物就能去背。去背後的素材會被儲存，在其他關卡也能重複使用。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🔗</div>
          <h3>合體讓它越長越大</h3>
          <p>相同的照片撞在一起，就會進化成下一張。最終形態互相合體時，會閃亮消失並獲得額外加分！</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🏆</div>
          <h3>依素材數量分榜</h3>
          <p>依使用的照片數量（6～11 個）分別設有 Game Center 排行榜。上榜後，會用名次和彩帶為你慶祝。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">💌</div>
          <h3>把關卡分享給朋友</h3>
          <p>做好的關卡可以用 8 個字元的代碼傳給朋友。收到的朋友也能用同樣的照片和進化音效來玩。</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>去背、<wbr />排序、<wbr />合體。</h2>
        <p>從選照片到開始遊戲，只要 4 個步驟。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--mint)"><img src="../image/Kuttuke/screen_editor.jpg" alt="進化組合編輯畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 1</small><h3>照片去背</h3><p>選擇照片，按住想使用的主體即可去背。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/Kuttuke/screen_home.jpg" alt="排列著已建立關卡的主畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 2</small><h3>由小到大排好</h3><p>把 6～11 個照片依進化順序排好，關卡就完成了。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--yellow)"><img src="../image/Kuttuke/screen_game.jpg" alt="讓照片掉落的遊戲畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 3</small><h3>掉落、合體</h3><p>手指左右移動，放開就會掉落。讓相同的照片合體進化吧。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--pink)"><img src="../image/Kuttuke/screen_share.jpg" alt="顯示關卡分享代碼的畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 4</small><h3>和朋友分享</h3><p>可以把分數圖片分享到社群網站，也可以用代碼傳送關卡。</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" aria-labelledby="rank-heading">
      <div class="rank-copy">
        <p class="section-label">RANKING</p>
        <h2 id="rank-heading">和全球的<wbr />對手，<br />用分數一決勝負。</h2>
        <p>在依照片數量劃分的 Game Center 排行榜上，與全球玩家一較高下。刷新個人最佳並上榜後，結果畫面會顯示你的名次。</p>
        <small>※參加排行榜需要登入 Game Center。</small>
      </div>
      <div class="rank-shots">
        <img src="../image/Kuttuke/screen_game.jpg" alt="照片層層堆疊的遊戲畫面" loading="lazy" width="739" height="1605" />
        <img src="../image/Kuttuke/screen_result.jpg" alt="登上全球第 1 名的結果畫面" loading="lazy" width="739" height="1605" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>KUTTUKE 的畫面</h2>
        <p>橫向捲動即可瀏覽所有畫面。</p>
      </div>
      <div class="gallery" aria-label="KUTTUKE 的螢幕截圖">
        <figure><img src="../image/Kuttuke/01_game.jpg" alt="照片合體進化！" loading="lazy" width="739" height="1605" /><figcaption>照片合體進化</figcaption></figure>
        <figure><img src="../image/Kuttuke/02_editor.jpg" alt="用喜歡的照片組成進化組合" loading="lazy" width="739" height="1605" /><figcaption>建立進化組合</figcaption></figure>
        <figure><img src="../image/Kuttuke/03_result.jpg" alt="在依數量分榜的排行榜上一決勝負" loading="lazy" width="739" height="1605" /><figcaption>依數量分榜</figcaption></figure>
        <figure><img src="../image/Kuttuke/04_share.jpg" alt="把做好的關卡傳給朋友" loading="lazy" width="739" height="1605" /><figcaption>分享給朋友</figcaption></figure>
        <figure><img src="../image/Kuttuke/05_home.jpg" alt="想做幾個就做幾個，盡情暢玩" loading="lazy" width="739" height="1605" /><figcaption>收集關卡</figcaption></figure>
      </div>
    </section>

    <section class="section sound" aria-labelledby="sound-heading">
      <div class="sound-mark" aria-hidden="true">🎤</div>
      <div>
        <h2 id="sound-heading">進化音效，<wbr />也能用自己的聲音。</h2>
        <p>在「進階設定」中，可以為每張照片設定進化時播放的音效。可以當場錄音，也可以選擇音訊檔案。未設定音效的照片會播放預設的「啵嚶」。</p>
      </div>
    </section>

    <section class="download-cta" aria-label="下載 KUTTUKE">
      <img class="download-icon" src="../image/icon/kuttuke.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>用心愛的照片，<wbr />來合體吧。</h2><p>用自己的照片來玩的掉落益智遊戲。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6820843882" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支援資訊">
      <article class="support-card">
        <h2>聯絡我們</h2>
        <p>歡迎提供意見、需求或回報問題。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">透過 Twitter 私訊聯絡</a>
      </article>
      <article class="support-card">
        <h2>隱私權</h2>
        <p>去背的照片和關卡都會儲存在裝置內。只有在把關卡分享給朋友時，才會將照片和音訊上傳到 iCloud。詳情請參閱隱私權政策。</p>
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
