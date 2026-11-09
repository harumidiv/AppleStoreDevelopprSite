window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["mikkeAnswer"] = window.SITE_I18N["mikkeAnswer"] || {})["zh-Hant"] = {
  title: "Mikke Answer - 一眼看出大家來找碴的答案",
  description: "Mikke Answer 是一款 iPhone 和 iPad App，能告訴你怎麼也找不到的「大家來找碴」答案。拍下兩張圖、對齊範圍，再用手指將它們疊在一起，不同之處就會被畫上⭕️。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="頁面導覽">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> App 列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#flow">使用方式</a>
        <a href="#overlay">疊合找碴</a>
        <a href="#screenshots">畫面</a>
        <a href="#support">支援</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/mikkeAnswer.png" alt="Mikke Answer 的 App 圖示" width="84" height="84" />
          <div><strong>Mikke Answer</strong><span>支援 iPhone 和 iPad</span></div>
        </div>
        <h1>找不到的<br /><em>不同之處</em>，<wbr />告訴你。</h1>
        <p class="lead">只剩最後 1 處，<wbr />卻怎麼也找不到。<wbr />這時候，<wbr />只要拍下找碴題目，<wbr />用手指把兩張圖疊在一起。<wbr />不同之處會畫上⭕️，<wbr />答案一眼就能看出。</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6825153683" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支援資訊">
          <li>支援 iPhone 和 iPad</li>
          <li>可拍照或從照片匯入</li>
          <li>照片只在裝置上分析</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#262b38" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ff3355" stroke="#262b38" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/MikkeAnswer/screen_editor.jpg" alt="指定兩張圖範圍的畫面" width="739" height="1605" />
        <img class="hero-shot right" src="../image/MikkeAnswer/screen_overlay-diff.jpg" alt="疊合兩張圖讓差異浮現的畫面" width="739" height="1605" />
        <img class="hero-shot main" src="../image/MikkeAnswer/screen_result.jpg" alt="找到的不同之處畫上⭕️的結果畫面" width="739" height="1605" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="App 特色">
    <div class="stat"><strong>4 個步驟</strong><span>拍照、對齊、疊合就好</span></div>
    <div class="stat"><strong>最多 15 處</strong><span>找到的不同之處標上⭕️和編號</span></div>
    <div class="stat"><strong>裝置端分析</strong><span>照片不會外傳</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>告別「最後 1 處<wbr />怎麼也找不到」<wbr />的煩惱。</h2>
        <p>無論是雜誌、習作本，還是餐廳紙餐墊上的找碴遊戲，拍張照片就能對答案。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📷</div>
          <h3>現場拍攝或從照片選擇</h3>
          <p>兩張圖並排的找碴題目，可以當場拍攝，也可以從「照片」App 中選擇。左右並排或上下排列的圖都能讀取。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">✂️</div>
          <h3>對齊四角，裁切圖片</h3>
          <p>只要把 ● 對齊兩張圖各自的四個角落。即使是斜著拍的照片，也會校正成正面並統一大小。相鄰的兩張圖可以切換「左圖」和「右圖」，逐張調整。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🖐️</div>
          <h3>手指移動，完美疊合</h3>
          <p>透過拖移、捏合和旋轉，把裁切好的兩張圖疊在一起。一開始就位於大致對齊的位置，最後的細微偏差由 App 自動對齊。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">⭕️</div>
          <h3>用⭕️標出答案</h3>
          <p>找到的不同之處會標上⭕️和編號。從列表中選擇，就能在兩張圖中放大比對該處。尋找靈敏度可透過「低」到「高」的滑桿調整。</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO USE</p>
        <h2>拍一拍，<wbr />對一對，<wbr />疊一疊。</h2>
        <p>從匯入找碴題目到得出答案，只要 4 個步驟。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--blue)"><img src="../image/MikkeAnswer/screen_editor.jpg" alt="指定兩張圖範圍的畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 1</small><h3>拍照並對齊範圍</h3><p>拍下找碴題目，把 ● 對齊兩張圖的四個角落。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--green)"><img src="../image/MikkeAnswer/screen_overlay.jpg" alt="以半透明疊合兩張圖的畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 2</small><h3>用手指疊合</h3><p>移動右圖，讓它與左圖完全疊合。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/MikkeAnswer/screen_result.jpg" alt="不同之處畫上⭕️的結果畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 3</small><h3>答案畫上⭕️</h3><p>點一下「尋找不同之處」，不同的地方就會標上⭕️和編號。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #ff8aa0"><img src="../image/MikkeAnswer/screen_detail.jpg" alt="放大比對不同之處的畫面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 4</small><h3>放大確認</h3><p>從列表中選擇，就能放大比對該處。</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" id="overlay" aria-labelledby="overlay-heading">
      <div class="rank-copy">
        <p class="section-label">OVERLAY</p>
        <h2 id="overlay-heading">疊在一起，<wbr /><br />差異自然浮現。</h2>
        <p>疊合畫面可在「半透明」和「差異」兩種顯示之間切換。切換到「差異」後，兩張圖完全疊合的部分會互相抵消變黑，只有不同之處會帶著顏色浮現出來。也推薦你在看⭕️之前，先用自己的眼睛對答案。</p>
        <ul class="modes" aria-label="疊合畫面的顯示方式">
          <li>半透明：用滑桿調整透明度</li><li>差異：只有不同之處保留顏色</li>
        </ul>
      </div>
      <div class="rank-shots">
        <img src="../image/MikkeAnswer/screen_overlay.jpg" alt="以半透明疊合的畫面" loading="lazy" width="739" height="1605" />
        <img src="../image/MikkeAnswer/screen_overlay-diff.jpg" alt="透過差異顯示讓不同之處浮現的畫面" loading="lazy" width="739" height="1605" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Mikke Answer 的畫面</h2>
        <p>橫向滑動即可查看所有畫面。</p>
      </div>
      <div class="gallery" aria-label="Mikke Answer 的螢幕截圖">
        <figure><img src="../image/MikkeAnswer/01_result.jpg" alt="找不到的不同之處，告訴你" loading="lazy" width="739" height="1605" /><figcaption>答案畫上⭕️</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/02_overlay-diff.jpg" alt="疊在一起，差異自然浮現" loading="lazy" width="739" height="1605" /><figcaption>差異顯示讓不同浮現</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/03_overlay.jpg" alt="用手指移動，完美疊合" loading="lazy" width="739" height="1605" /><figcaption>用手指疊合</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/04_editor.jpg" alt="只要對齊兩張圖的四個角落" loading="lazy" width="739" height="1605" /><figcaption>對齊四角</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/05_detail.jpg" alt="哪裡不同，一眼就能看出" loading="lazy" width="739" height="1605" /><figcaption>放大比對</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下載 Mikke Answer">
      <img class="download-icon" src="../image/icon/mikkeAnswer.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>最後那 1 處不同，<wbr />把它找出來吧。</h2><p>只要拍照、疊合，就能知道答案的找碴 App。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6825153683" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支援資訊">
      <article class="support-card">
        <h2>聯絡我們</h2>
        <p>歡迎提供意見、建議或回報問題。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">透過 Twitter 私訊聯絡</a>
      </article>
      <article class="support-card">
        <h2>隱私權</h2>
        <p>拍攝的照片和選擇的圖片，只會在裝置上處理，用來尋找不同之處。照片不會傳送到外部，也不會儲存在 App 中。詳情請參閱隱私權政策。</p>
        <a class="text-link" href="../privacy.html">閱讀隱私權政策</a>
      </article>
      <article class="support-card">
        <h2>找不太到的時候</h2>
        <ul>
          <li>在明亮的地方拍攝，讓兩張圖完整入鏡</li>
          <li>從「調整範圍與疊合」重新對齊四角和疊合位置</li>
          <li>將疊合畫面切換為「差異」，疊到畫面變黑為止</li>
          <li>將結果畫面的滑桿調向「高」</li>
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
