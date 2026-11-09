window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["sakataDojo"] = window.SITE_I18N["sakataDojo"] || {})["zh-Hans"] = {
  title: "酒田道场 - K线测验与形态图鉴",
  description: "酒田道场是一款通过真实历史图表，以测验和图鉴学习 30 种 K 线形态的 iPhone 和 iPad 应用。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="页面导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 返回应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">功能</a>
        <a href="#learning">学习方式</a>
        <a href="#patterns">图鉴</a>
        <a class="nav-store" href="https://apps.apple.com/jp/app/id6798115410" target="_blank" rel="noopener">App Store</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/sakataDojo.png" alt="酒田道场应用图标" width="82" height="82" />
          <div><strong>酒田道场</strong><span>支持 iPhone 和 iPad</span></div>
        </div>
        <p class="eyebrow">Candlestick quiz &amp; pattern guide</p>
        <h1>看透 K 线，<br /><span>洞察走势。</span></h1>
        <p class="lead">阅读真实的历史图表，在判断涨跌方向、识别 K 线形态的过程中学习。集测验与图鉴于一体，专为练习酒田战法形态打造的训练应用。</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6798115410" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看功能</a>
        </div>
        <ul class="hero-note" aria-label="支持信息">
          <li>支持 iPhone 和 iPad</li>
          <li>收录 30 种形态</li>
          <li>按自己的节奏反复练习</li>
        </ul>
      </div>
      <div class="hero-visual">
        <div class="hero-stack">
          <img class="hero-shot left" src="../image/SakataDojo/02_direction.jpg?v=3" alt="预测上涨还是下跌的测验界面" width="739" height="1600" />
          <img class="hero-shot right" src="../image/SakataDojo/05_study.jpg?v=3" alt="可查看 30 种形态的图鉴界面" width="739" height="1600" />
          <img class="hero-shot main" src="../image/SakataDojo/01_title.jpg?v=3" alt="酒田道场选择出题形式和题目数量的界面" width="739" height="1600" />
        </div>
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用收录内容">
    <div class="stat"><strong>30</strong><span>种 K 线形态</span></div>
    <div class="stat"><strong>2</strong><span>种测验模式可选</span></div>
    <div class="stat"><strong>10 · 20 · 50 · ∞</strong><span>题目数量任选</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>猜一猜，看一看，学到手。</h2>
        <p>不只是死记形态，而是在真实图表与形态出现后的走势之间来回对照，真正学会。</p>
      </div>

      <div class="features">
        <article class="feature" data-number="1">
          <div class="feature-icon" aria-hidden="true">↕</div>
          <h3>涨跌测验</h3>
          <p>观看隐藏了形态名称的真实图表，二选一预测之后会上涨还是下跌。</p>
        </article>
        <article class="feature" data-number="2">
          <div class="feature-icon" aria-hidden="true">四</div>
          <h3>形态名称四选一</h3>
          <p>根据 K 线的排列，选出红三兵、三只乌鸦、早晨之星等形态名称。</p>
        </article>
        <article class="feature" data-number="3">
          <div class="feature-icon" aria-hidden="true">✓</div>
          <h3>连形态后的走势也一并确认</h3>
          <p>核对答案时，会以浅色显示形态出现后的 K 线。不止于答对，还能回顾之后的走势。</p>
        </article>
        <article class="feature" data-number="4">
          <div class="feature-icon" aria-hidden="true">本</div>
          <h3>30 种形态图鉴</h3>
          <p>按看涨信号与看跌信号分类，随时复习每种形态的含义、看法以及多个真实图表案例。</p>
        </article>
      </div>
    </section>

    <section class="section" id="learning">
      <div class="section-heading">
        <p class="section-label">LEARNING FLOW</p>
        <h2>看透，确认，学到手。</h2>
        <p>每道题都是一个小循环，逐步培养你的看盘能力。</p>
      </div>
      <div class="learning-grid">
        <article class="learning-card">
          <div class="learning-media" style="--card-glow:rgba(32,140,255,.28)"><img src="../image/SakataDojo/02_direction.jpg?v=3" alt="选择上涨或下跌的测验界面" loading="lazy" width="739" height="1600" /></div>
          <div class="learning-copy"><small>01 — READ</small><h3>用自己的眼睛判断</h3><p>从隐藏了形态名称的真实案例中，预测之后会上涨还是下跌。</p></div>
        </article>
        <article class="learning-card" style="--accent:var(--magenta)">
          <div class="learning-media" style="--card-glow:rgba(255,78,203,.24)"><img src="../image/SakataDojo/04_answer.jpg?v=4" alt="确认正确答案与形态出现后走势的界面" loading="lazy" width="739" height="1600" /></div>
          <div class="learning-copy"><small>02 — CHECK</small><h3>看到答案之后的走势</h3><p>除了正确答案和解说，还能在同一界面回顾形态出现后的走势。</p></div>
        </article>
        <article class="learning-card" style="--accent:var(--gold)">
          <div class="learning-media" style="--card-glow:rgba(255,186,69,.22)"><img src="../image/SakataDojo/05_study.jpg?v=3" alt="一览 K 线形态的图鉴界面" loading="lazy" width="739" height="1600" /></div>
          <div class="learning-copy"><small>03 — REVIEW</small><h3>用图鉴即时复习</h3><p>确认含义、看法与真实案例，在图鉴和测验之间来回练习，把拿不准的形态彻底掌握。</p></div>
        </article>
      </div>
    </section>

    <section class="section pattern-panel" id="patterns">
      <div class="pattern-panel-copy">
        <p class="section-label">30 PATTERNS</p>
        <h2>酒田战法的形态，<br />一个一个学。</h2>
        <p>从经典的看涨、看跌信号到组合形态，结合真实案例有条理地学习。</p>
      </div>
      <div class="pattern-groups">
        <div class="pattern-group">
          <h3><span class="signal-dot" style="--signal:var(--red)"></span>看涨信号</h3>
          <div class="pattern-tags"><span>红三兵</span><span>早晨之星</span><span>看涨吞没</span><span>刺透形态</span><span>平头底部</span></div>
        </div>
        <div class="pattern-group">
          <h3><span class="signal-dot" style="--signal:var(--blue)"></span>看跌信号</h3>
          <div class="pattern-tags"><span>三只乌鸦</span><span>黄昏之星</span><span>看跌吞没</span><span>乌云盖顶</span><span>平头顶部</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>酒田道场的界面</h2>
        <p>在 iPhone 上可以单手专注答题，在 iPad 上则能以更大的画面查看图表。</p>
      </div>
      <div class="gallery" aria-label="酒田道场截图">
        <figure><img src="../image/SakataDojo/01_title.jpg?v=2" alt="酒田道场选择出题形式和题目数量的界面" loading="lazy" width="739" height="1600" /><figcaption>两种出题形式</figcaption></figure>
        <figure><img src="../image/SakataDojo/02_direction.jpg?v=2" alt="看图表选择上涨或下跌的测验界面" loading="lazy" width="739" height="1600" /><figcaption>涨跌测验</figcaption></figure>
        <figure><img src="../image/SakataDojo/03_pattern.jpg?v=2" alt="四选一回答 K 线形态名称的界面" loading="lazy" width="739" height="1600" /><figcaption>形态名称四选一</figcaption></figure>
        <figure><img src="../image/SakataDojo/04_answer.jpg?v=4" alt="显示正确答案与形态出现后走势的界面" loading="lazy" width="739" height="1600" /><figcaption>答案与后续走势</figcaption></figure>
        <figure><img src="../image/SakataDojo/05_study.jpg?v=2" alt="一览 30 种 K 线形态的图鉴界面" loading="lazy" width="739" height="1600" /><figcaption>30 种形态图鉴</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下载酒田道场">
      <img class="download-icon" src="../image/icon/sakataDojo.png" alt="" width="88" height="88" />
      <div class="download-copy"><h2>看盘的眼光，从今天开始练。</h2><p>用真实案例学习的 K 线测验与形态图鉴。</p></div>
      <a class="button primary" href="https://apps.apple.com/jp/app/id6798115410" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="section notice" aria-labelledby="investment-notice">
      <div class="notice-mark" aria-hidden="true">!</div>
      <div>
        <h2 id="investment-notice">投资风险提示</h2>
        <p>本应用仅用于学习 K 线形态，不构成对任何特定证券的买卖建议或投资建议。所列案例均为历史数据，不代表对未来走势的任何保证。</p>
      </div>
    </section>

    <section class="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、需求或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>我们不会收集任何可识别个人身份的信息。详细处理方式请参阅通用隐私政策。</p>
        <a class="text-link" href="../privacy.html">阅读隐私政策</a>
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
