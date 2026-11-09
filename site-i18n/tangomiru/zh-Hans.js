window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["tangomiru"] = window.SITE_I18N["tangomiru"] || {})["zh-Hans"] = {
  title: "Tangomiru - 粘贴英文，生成专属单词本",
  description: "Tangomiru 是一款 iPhone 和 iPad 应用，只需粘贴想读的英文，就能提取其中不认识的单词和短语，生成你的专属单词本和四选一测验。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="页面内导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#flow">使用方法</a>
        <a href="#screenshots">界面</a>
        <a href="#support">支持</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/tangomiru.png" alt="Tangomiru 应用图标" width="84" height="84" />
          <div><strong>Tangomiru</strong><span>支持 iPhone 和 iPad</span></div>
        </div>
        <h1>粘贴英文，<wbr />即可生成<br />你的专属<wbr />单词本。</h1>
        <p class="lead">只需粘贴英文新闻或文章的正文，<wbr />就能提取出你不认识的单词和短语，<wbr />为你生成专属单词本和四选一测验。<wbr />记住的单词越多，<wbr />原文就读得越流畅。<wbr /></p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6818413919" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看功能</a>
        </div>
        <ul class="hero-note" aria-label="亮点">
          <li>支持 iPhone 和 iPad</li>
          <li>AI 处理在设备端完成</li>
          <li>内置词典，任何设备都能用</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffe65a" stroke="#2b2350" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#2b2350" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/Tangomiru/screen_review.jpg" alt="从英文中提取的单词及释义列表" width="739" height="1606" />
        <img class="hero-shot right" src="../image/Tangomiru/screen_reading.jpg" alt="用颜色标出未掌握单词的阅读模式" width="739" height="1606" />
        <img class="hero-shot main" src="../image/Tangomiru/screen_quiz.jpg" alt="从四个选项中选出英文单词释义的测验界面" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用特色">
    <div class="stat"><strong>复制粘贴即成</strong><span>从英文自动生成单词本</span></div>
    <div class="stat"><strong>每题 10 秒</strong><span>节奏轻快的四选一测验</span></div>
    <div class="stat"><strong>5 个等级</strong><span>每个单词的掌握程度</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>想读的英文，<wbr />直接变成教材。</h2>
        <p>不用市面上的单词书，而是从你此刻想读的英文中记单词。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">A</div>
          <h3>粘贴即成单词本</h3>
          <p>自动排除初中水平的基础词汇，只提取值得记忆的单词和短语。释义显示的是该词在这篇英文中的实际含义。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">4</div>
          <h3>轻快的四选一测验</h3>
          <p>看英文单词，从四个选项中选出对应的日语释义。答得快的单词会更快进入“已掌握”，花时间较长的单词会再次出题。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">%</div>
          <h3>掌握程度一目了然</h3>
          <p>每个单词按“已掌握”“记不太清”“不擅长”“非常不擅长”“未学习”分类管理。通过每篇英文的掌握率，了解自己已经能读懂多少。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">読</div>
          <h3>用阅读模式回到原文</h3>
          <p>只用颜色标出尚未掌握的单词。点按单词即可立即查看释义。</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO USE</p>
        <h2>粘贴、<wbr />答题、<wbr />读懂。</h2>
        <p>从找到英文到读懂它，只需 4 步。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--mint)"><img src="../image/Tangomiru/screen_review.jpg" alt="提取出的单词列表" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 1</small><h3>粘贴英文</h3><p>复制文章正文并粘贴即可，自动提取单词和短语。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/Tangomiru/screen_quiz.jpg" alt="四选一测验" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 2</small><h3>通过测验记忆</h3><p>优先出题尚未掌握的单词，答错的单词可当场复习。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--yellow)"><img src="../image/Tangomiru/screen_detail.jpg" alt="掌握率与明细" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 3</small><h3>确认进步</h3><p>通过掌握率和明细，了解哪些单词已经记住。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--pink)"><img src="../image/Tangomiru/screen_reading.jpg" alt="阅读模式" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 4</small><h3>阅读原文</h3><p>在阅读模式下，只需确认尚未掌握的单词，就能顺畅读下去。</p>
        </article>
      </div>
    </section>

    <section class="section ai-panel" aria-labelledby="ai-heading">
      <div class="ai-copy">
        <p class="section-label">APPLE INTELLIGENCE</p>
        <h2 id="ai-heading">在支持的设备上，<br />读得<wbr />更深入。</h2>
        <p>逐句显示日语翻译和讲解，帮助你学习句子结构和语法要点。在考查文章内容的“内容理解测验”中，还会高亮显示作为答案依据的英文句子。</p>
        <small>※所有 AI 处理均在设备端完成，输入的英文不会被发送到外部。即使是不支持的设备，也能借助内置词典使用单词本和测验。</small>
      </div>
      <div class="ai-shots">
        <img src="../image/Tangomiru/screen_study.jpg" alt="逐句显示翻译和讲解的界面" loading="lazy" width="739" height="1606" />
        <img src="../image/Tangomiru/screen_comprehension.jpg" alt="在内容理解测验中高亮依据句子的界面" loading="lazy" width="739" height="1606" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Tangomiru 的界面</h2>
        <p>左右滑动即可查看所有界面。</p>
      </div>
      <div class="gallery" aria-label="Tangomiru 的截图">
        <figure><img src="../image/Tangomiru/01_review.jpg" alt="粘贴英文即可生成单词本" loading="lazy" width="739" height="1599" /><figcaption>自动生成单词本</figcaption></figure>
        <figure><img src="../image/Tangomiru/02_quiz.jpg" alt="用四选一测验轻松记单词" loading="lazy" width="739" height="1599" /><figcaption>四选一测验</figcaption></figure>
        <figure><img src="../image/Tangomiru/03_detail.jpg" alt="通过掌握率看见成长" loading="lazy" width="739" height="1599" /><figcaption>掌握率与明细</figcaption></figure>
        <figure><img src="../image/Tangomiru/04_reading.jpg" alt="用颜色区分未掌握的单词" loading="lazy" width="739" height="1599" /><figcaption>阅读模式</figcaption></figure>
        <figure><img src="../image/Tangomiru/05_study.jpg" alt="逐句翻译与讲解" loading="lazy" width="739" height="1599" /><figcaption>逐句学习</figcaption></figure>
        <figure><img src="../image/Tangomiru/06_comprehension.jpg" alt="用内容理解测验检验是否读懂" loading="lazy" width="739" height="1599" /><figcaption>内容理解测验</figcaption></figure>
        <figure><img src="../image/Tangomiru/07_library.jpg" alt="把喜欢的英文一篇篇变成教材" loading="lazy" width="739" height="1599" /><figcaption>英文资料库</figcaption></figure>
      </div>
    </section>

    <section class="section plan" aria-labelledby="plan-heading">
      <div class="plan-mark" aria-hidden="true">👑</div>
      <div>
        <h2 id="plan-heading">无广告方案<wbr />（按月）</h2>
        <p>这是一项可隐藏 App 内所有广告的自动续期订阅。你可以随时在 App Store 的账户设置中管理或取消。</p>
      </div>
    </section>

    <section class="download-cta" aria-label="下载 Tangomiru">
      <img class="download-icon" src="../image/icon/tangomiru.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>从想读的英文中，<wbr />学今天的单词。</h2><p>粘贴英文，即可生成专属单词本。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6818413919" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、建议或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>学习记录仅保存在设备上。关于广告投放相关信息的处理方式，请参阅 Tangomiru 的隐私政策。</p>
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
