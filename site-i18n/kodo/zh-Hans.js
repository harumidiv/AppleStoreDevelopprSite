window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["kodo"] = window.SITE_I18N["kodo"] || {})["zh-Hans"] = {
  title: "Kodo -心脏博物馆- - 把生命的心跳握在掌心",
  description: "Kodo -心脏博物馆- 是一款通过屏幕和 iPhone 振动感受各种生物心跳的应用。从每分钟800次的麻雀，到每分钟20次的大象，在掌心比较9种生物的生命速度。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="页面导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#specimens">标本</a>
        <a href="#flow">使用方法</a>
        <a href="#monitor">心电图</a>
        <a href="#screenshots">截图</a>
        <a href="#support">支持</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/kodo.png" alt="Kodo -心脏博物馆- 的应用图标" width="84" height="84" />
          <div><strong>Kodo -心脏博物馆-</strong><span>KODO SPECIMENS</span></div>
        </div>
        <h1>生命的<em>速度</em>，<wbr />因生物而<wbr />不同。</h1>
        <p class="lead">麻雀的心脏每分钟跳动800次，<wbr />大象却只有20次。<wbr />“Kodo -心脏博物馆-”是一款<wbr />通过屏幕和 iPhone 振动，<wbr />感受各种生物心跳的<wbr />“心跳标本”应用。<wbr />把手放在自己的胸口，<wbr />比一比有多大的不同吧。</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/6444230294" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支持信息">
          <li>支持 iPhone</li>
          <li>通过振动感受心跳</li>
          <li>支持10种语言</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="pulse one" viewBox="0 0 140 44" aria-hidden="true"><path d="M2 26 H46 L54 34 L66 6 L76 40 L84 22 H138" fill="none" stroke="#ff5a52" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg class="pulse two" viewBox="0 0 140 44" aria-hidden="true"><path d="M2 26 H46 L54 34 L66 6 L76 40 L84 22 H138" fill="none" stroke="#ece8e3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/Kodo/03_monitor_list.jpg" alt="以心电图排列各种生物心跳的列表画面" width="739" height="1606" />
        <img class="hero-shot right" src="../image/Kodo/02_detail_horse.jpg" alt="以全速奔跑状态显示马的心跳的画面" width="739" height="1606" />
        <img class="hero-shot main" src="../image/Kodo/01_list.jpg" alt="生物心跳像标本盒一样排列的列表画面" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用特色">
    <div class="stat"><strong>9种</strong><span>从人类到老鼠的心跳标本</span></div>
    <div class="stat"><strong>20〜800 bpm</strong><span>生命的速度竟如此不同</span></div>
    <div class="stat"><strong>振动体验</strong><span>心跳节奏传到掌心</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>用眼睛和掌心，<wbr />感受<wbr />心跳。</h2>
        <p>像标本盒一样排列的生物心脏，正以各自的速度跳动着。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🫀</div>
          <h3>9种心跳标本</h3>
          <p>人类、麻雀、大象、章鱼、鸡、猫、狗、马、老鼠。每种生物的心脏都会配合心率（bpm），以它自己的速度跳动。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📳</div>
          <h3>通过振动感受心跳</h3>
          <p>选择一种生物，iPhone 就会随着心跳节奏“扑通、扑通”地振动。把手放在自己的胸口，比较速度的差异。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🏃</div>
          <h3>随状态变化的心率</h3>
          <p>人类有“静息、运动、睡眠”，麻雀有“飞行中”，马有“全速奔跑”等。切换状态，心跳的速度也会随之改变。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📈</div>
          <h3>也能用心电监护仪查看</h3>
          <p>点击右上角的“文字”按钮，即可用心电图波形代替图片显示心跳。通过数字和波形，速度的差异一目了然。</p>
        </article>
      </div>
    </section>

    <section class="section" id="specimens">
      <div class="section-heading">
        <p class="section-label">SPECIMENS</p>
        <h2>馆藏的<wbr />9种心跳</h2>
        <p>以下为静息心率。红点也会以各自的心跳节奏跳动。</p>
      </div>
      <ul class="specimens" aria-label="各种生物的心率">
        <li><span class="no">No.01</span><span class="name"><span class="dot" style="--beat: .85s" aria-hidden="true"></span>人类</span><span class="bpm">71<small>bpm</small></span></li>
        <li><span class="no">No.02</span><span class="name"><span class="dot" style="--beat: .075s" aria-hidden="true"></span>麻雀</span><span class="bpm">800<small>bpm</small></span></li>
        <li><span class="no">No.03</span><span class="name"><span class="dot" style="--beat: 3s" aria-hidden="true"></span>大象</span><span class="bpm">20<small>bpm</small></span></li>
        <li><span class="no">No.04</span><span class="name"><span class="dot" style="--beat: 1.7s" aria-hidden="true"></span>章鱼</span><span class="bpm">35<small>bpm</small></span></li>
        <li><span class="no">No.05</span><span class="name"><span class="dot" style="--beat: .3s" aria-hidden="true"></span>鸡</span><span class="bpm">200<small>bpm</small></span></li>
        <li><span class="no">No.06</span><span class="name"><span class="dot" style="--beat: .5s" aria-hidden="true"></span>猫</span><span class="bpm">120<small>bpm</small></span></li>
        <li><span class="no">No.07</span><span class="name"><span class="dot" style="--beat: .7s" aria-hidden="true"></span>狗</span><span class="bpm">86<small>bpm</small></span></li>
        <li><span class="no">No.08</span><span class="name"><span class="dot" style="--beat: 1.5s" aria-hidden="true"></span>马</span><span class="bpm">40<small>bpm</small></span></li>
        <li><span class="no">No.09</span><span class="name"><span class="dot" style="--beat: .11s" aria-hidden="true"></span>老鼠</span><span class="bpm">545<small>bpm</small></span></li>
      </ul>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO USE</p>
        <h2>选择，<wbr />感受，<wbr />比较。</h2>
        <p>只需从列表中选择一种生物，马上就能感受到它的心跳。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media"><img src="../image/Kodo/01_list.jpg" alt="心跳标本的列表画面" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 1</small><h3>选择生物</h3><p>在标本盒般的列表中，点击你感兴趣的生物。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #2a0504"><img src="../image/Kodo/05_detail_human.jpg" alt="以运动状态显示人类心跳的画面" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 2</small><h3>感受振动</h3><p>把 iPhone 握在手中，就能感受到随心跳节奏传来的振动。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #3d0b08"><img src="../image/Kodo/02_detail_horse.jpg" alt="以全速奔跑状态显示马的心跳的画面" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 3</small><h3>切换状态</h3><p>选择“静息”“全速奔跑”等状态，心跳的速度就会改变。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #1d1b19"><img src="../image/Kodo/04_monitor_detail_horse.jpg" alt="用心电监护仪显示马的心跳的画面" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 4</small><h3>和下一种生物比较</h3><p>点击左右箭头或滑动，即可切换到其他生物的心跳。</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" id="monitor" aria-labelledby="monitor-heading">
      <div class="rank-copy">
        <p class="section-label">MONITOR</p>
        <h2 id="monitor-heading">用波形来看，<wbr /><br />速度的差异<wbr />一清二楚。</h2>
        <p>在列表右上角可以切换“图像”和“文字”。切换到“文字”后，所有生物的心跳都会以心电图波形排列，可以对比麻雀和老鼠细密的波形与大象舒缓的波形。详情画面会在大大的心电监护仪上显示心率和心跳间隔。</p>
        <ul class="modes" aria-label="列表显示方式">
          <li>图像：生物的样子与跳动的心脏</li><li>文字：心电图波形与心率</li>
        </ul>
      </div>
      <div class="rank-shots">
        <img src="../image/Kodo/03_monitor_list.jpg" alt="以心电图波形排列的列表画面" loading="lazy" width="739" height="1606" />
        <img src="../image/Kodo/04_monitor_detail_horse.jpg" alt="马的心电监护仪画面" loading="lazy" width="739" height="1606" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Kodo -心脏博物馆- 的画面</h2>
        <p>横向滑动即可查看所有画面。</p>
      </div>
      <div class="gallery" aria-label="Kodo -心脏博物馆- 的截图">
        <figure><img src="../image/Kodo/01_list.jpg" alt="心跳标本的列表画面" loading="lazy" width="739" height="1606" /><figcaption>心跳标本列表</figcaption></figure>
        <figure><img src="../image/Kodo/02_detail_horse.jpg" alt="马的心跳详情画面" loading="lazy" width="739" height="1606" /><figcaption>随状态变化的心率</figcaption></figure>
        <figure><img src="../image/Kodo/03_monitor_list.jpg" alt="以心电图波形排列的列表画面" loading="lazy" width="739" height="1606" /><figcaption>用心电图排列</figcaption></figure>
        <figure><img src="../image/Kodo/04_monitor_detail_horse.jpg" alt="马的心电监护仪画面" loading="lazy" width="739" height="1606" /><figcaption>心电监护仪</figcaption></figure>
        <figure><img src="../image/Kodo/05_detail_human.jpg" alt="人类的心跳详情画面" loading="lazy" width="739" height="1606" /><figcaption>与自己的心跳比较</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下载 Kodo -心脏博物馆-">
      <img class="download-icon" src="../image/icon/kodo.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>万物的心跳，<wbr />尽在掌心。</h2><p>通过振动感受每种生物独特生命速度的心跳标本应用。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/6444230294" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、建议或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>本应用不会收集姓名等可识别个人身份的信息。本应用使用 Google AdMob 显示广告。详情请参阅隐私政策。</p>
        <a class="text-link" href="../privacy.html">阅读隐私政策</a>
      </article>
      <article class="support-card">
        <h2>感觉不到振动时</h2>
        <ul>
          <li>只有在打开生物详情画面时才会振动</li>
          <li>请在设备的“设置”＞“声音与触感”中，确认“系统触感反馈”已开启</li>
          <li>请用掌心稳稳握住 iPhone</li>
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
