window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["mikkeAnswer"] = window.SITE_I18N["mikkeAnswer"] || {})["zh-Hans"] = {
  title: "Mikke Answer - 一眼看出找不同的答案",
  description: "Mikke Answer 是一款 iPhone 和 iPad 应用，能告诉你怎么也找不到的“找不同”答案。拍下两张图、对齐范围，再用手指将它们叠在一起，不同之处就会被画上⭕️。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="页面导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#flow">使用方法</a>
        <a href="#overlay">叠加查找</a>
        <a href="#screenshots">界面</a>
        <a href="#support">支持</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/mikkeAnswer.png" alt="Mikke Answer 的应用图标" width="84" height="84" />
          <div><strong>Mikke Answer</strong><span>支持 iPhone 和 iPad</span></div>
        </div>
        <h1>找不到的<br /><em>不同之处</em>，<wbr />告诉你。</h1>
        <p class="lead">只剩最后 1 处，<wbr />却怎么也找不到。<wbr />这时候，<wbr />只要拍下找不同的题目，<wbr />用手指把两张图叠在一起。<wbr />不同之处会画上⭕️，<wbr />答案一眼就能看出。</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6825153683" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支持信息">
          <li>支持 iPhone 和 iPad</li>
          <li>可拍照或从照片导入</li>
          <li>照片仅在设备上分析</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#262b38" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ff3355" stroke="#262b38" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/MikkeAnswer/screen_editor.jpg" alt="指定两张图范围的界面" width="739" height="1605" />
        <img class="hero-shot right" src="../image/MikkeAnswer/screen_overlay-diff.jpg" alt="叠加两张图让差异浮现的界面" width="739" height="1605" />
        <img class="hero-shot main" src="../image/MikkeAnswer/screen_result.jpg" alt="找到的不同之处画上⭕️的结果界面" width="739" height="1605" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用特色">
    <div class="stat"><strong>4 个步骤</strong><span>拍照、对齐、叠加即可</span></div>
    <div class="stat"><strong>最多 15 处</strong><span>找到的不同之处标上⭕️和编号</span></div>
    <div class="stat"><strong>设备端分析</strong><span>照片不会外传</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>告别“最后 1 处<wbr />怎么也找不到”<wbr />的烦恼。</h2>
        <p>无论是杂志、练习册，还是餐厅纸质餐垫上的找不同，拍张照片就能核对答案。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📷</div>
          <h3>现场拍摄或从照片选择</h3>
          <p>两张图并排的找不同题目，可以当场拍摄，也可以从“照片”应用中选择。左右并排或上下排列的图都能读取。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">✂️</div>
          <h3>对齐四角，裁切图片</h3>
          <p>只需把 ● 对齐两张图各自的四个角。即使是斜着拍的照片，也会校正成正面并统一大小。相邻的两张图可以切换“左图”和“右图”，逐张调整。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🖐️</div>
          <h3>手指移动，完美重合</h3>
          <p>通过拖移、捏合和旋转，把裁切好的两张图叠在一起。一开始就处于大致对齐的位置，最后的细微偏差由应用自动对齐。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">⭕️</div>
          <h3>用⭕️标出答案</h3>
          <p>找到的不同之处会标上⭕️和编号。从列表中选择，即可在两张图中放大对比该处。查找灵敏度可通过“低”到“高”的滑块调整。</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO USE</p>
        <h2>拍一拍，<wbr />对一对，<wbr />叠一叠。</h2>
        <p>从导入找不同题目到得出答案，只需 4 个步骤。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--blue)"><img src="../image/MikkeAnswer/screen_editor.jpg" alt="指定两张图范围的界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 1</small><h3>拍照并对齐范围</h3><p>拍下找不同题目，把 ● 对齐两张图的四个角。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--green)"><img src="../image/MikkeAnswer/screen_overlay.jpg" alt="半透明叠加两张图的界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 2</small><h3>用手指叠加</h3><p>移动右图，使其与左图完全重合。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/MikkeAnswer/screen_result.jpg" alt="不同之处画上⭕️的结果界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 3</small><h3>答案画上⭕️</h3><p>点按“查找不同”，不同之处就会标上⭕️和编号。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #ff8aa0"><img src="../image/MikkeAnswer/screen_detail.jpg" alt="放大对比不同之处的界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 4</small><h3>放大确认</h3><p>从列表中选择，即可放大对比该处。</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" id="overlay" aria-labelledby="overlay-heading">
      <div class="rank-copy">
        <p class="section-label">OVERLAY</p>
        <h2 id="overlay-heading">叠在一起，<wbr /><br />差异自然浮现。</h2>
        <p>叠加界面可在“半透明”和“差异”两种显示之间切换。切换到“差异”后，两张图完全重合的部分会相互抵消变黑，只有不同之处会带着颜色浮现出来。也推荐你在看⭕️之前，先用自己的眼睛核对答案。</p>
        <ul class="modes" aria-label="叠加界面的显示方式">
          <li>半透明：用滑块调整透明度</li><li>差异：只有不同之处保留颜色</li>
        </ul>
      </div>
      <div class="rank-shots">
        <img src="../image/MikkeAnswer/screen_overlay.jpg" alt="半透明叠加的界面" loading="lazy" width="739" height="1605" />
        <img src="../image/MikkeAnswer/screen_overlay-diff.jpg" alt="通过差异显示让不同之处浮现的界面" loading="lazy" width="739" height="1605" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Mikke Answer 的界面</h2>
        <p>横向滑动即可查看所有界面。</p>
      </div>
      <div class="gallery" aria-label="Mikke Answer 的截图">
        <figure><img src="../image/MikkeAnswer/01_result.jpg" alt="找不到的不同之处，告诉你" loading="lazy" width="739" height="1605" /><figcaption>答案画上⭕️</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/02_overlay-diff.jpg" alt="叠在一起，差异自然浮现" loading="lazy" width="739" height="1605" /><figcaption>差异显示让不同浮现</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/03_overlay.jpg" alt="用手指移动，完美重合" loading="lazy" width="739" height="1605" /><figcaption>用手指叠加</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/04_editor.jpg" alt="只需对齐两张图的四个角" loading="lazy" width="739" height="1605" /><figcaption>对齐四角</figcaption></figure>
        <figure><img src="../image/MikkeAnswer/05_detail.jpg" alt="哪里不同，一眼就能看出" loading="lazy" width="739" height="1605" /><figcaption>放大对比</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下载 Mikke Answer">
      <img class="download-icon" src="../image/icon/mikkeAnswer.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>最后那 1 处不同，<wbr />找到它吧。</h2><p>只需拍照、叠加，就能知道答案的找不同应用。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6825153683" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、建议或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>拍摄的照片和选择的图片，只会在设备上处理，用于查找不同之处。照片不会被发送到外部，也不会保存在应用中。详情请参阅隐私政策。</p>
        <a class="text-link" href="../privacy.html">阅读隐私政策</a>
      </article>
      <article class="support-card">
        <h2>找不准的时候</h2>
        <ul>
          <li>在明亮的地方拍摄，确保两张图完整入镜</li>
          <li>通过“调整范围与叠加”，重新对齐四角和重合位置</li>
          <li>将叠加界面切换为“差异”，叠到画面变黑为止</li>
          <li>将结果界面的滑块调向“高”</li>
        </ul>
      </article>
    </section>
  </main>

  <footer>
    <div class="footer-row wrap">
      <span>© 2026 Harumi Sagawa — Apps</span>
      <a href="../index.html">返回应用列表</a>
    </div>
  </footer>
`
};
