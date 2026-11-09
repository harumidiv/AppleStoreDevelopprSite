window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["imageTower"] = window.SITE_I18N["imageTower"] || {})["zh-Hans"] = {
  title: "Nokke Tower - 让照片叠成高塔",
  description: "Nokke Tower 是一款把照片中抠出的主体一层层叠高的叠塔游戏。抠出你的宠物、美食或心爱的周边，挑战能叠多高。自己做的关卡还能用代码分享给朋友。支持 iPhone 和 iPad。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="页面导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 返回应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#flow">玩法</a>
        <a href="#screenshots">截图</a>
        <a href="#support">支持</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/imageTower.png" alt="Nokke Tower 应用图标" width="84" height="84" />
          <div><strong>Nokke Tower</strong><span>支持 iPhone 和 iPad</span></div>
        </div>
        <h1>照片，<br />叠成<em>高塔</em><wbr />。</h1>
        <p class="lead">从照片里抠出喜欢的东西，<wbr />从上方丢下去叠起来就行。<wbr />家里的猫、今天的饭菜、心爱的周边，<wbr />用你最爱的照片，<wbr />挑战能叠多高吧！<wbr /></p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6822193103" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支持信息">
          <li>支持 iPhone 和 iPad</li>
          <li>用自己的照片来玩</li>
          <li>用代码分享关卡</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffc73d" stroke="#1f292e" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#1f292e" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/ImageTower/screen_editor.jpg" alt="选择抠图素材来制作关卡的界面" width="739" height="1605" />
        <img class="hero-shot right" src="../image/ImageTower/screen_result.jpg" alt="显示叠了几个的游戏结束界面" width="739" height="1605" />
        <img class="hero-shot main" src="../image/ImageTower/screen_game.jpg" alt="抠出的照片层层叠起的游戏界面" width="739" height="1605" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用特色">
    <div class="stat"><strong>6〜11 个</strong><span>用喜欢的抠图组成关卡</span></div>
    <div class="stat"><strong>旋转叠高</strong><span>看准平衡再放手</span></div>
    <div class="stat"><strong>代码分享</strong><span>和朋友玩同一个关卡</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>你的照片，<wbr />直接变成游戏。</h2>
        <p>宠物、美食、心爱的周边、家人的合照。你最爱的照片，都能变成一座可以叠着玩的高塔。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📸</div>
          <h3>照片自动抠图</h3>
          <p>只要选择照片，就能自动抠出主体。可以从一张照片中抠出多个主体，也可以添加在“照片”App 中拷贝的抠图。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🗼</div>
          <h3>丢下、旋转、叠起来</h3>
          <p>手指左右移动，松开即落下；点右下角的按钮即可旋转。把形状各异的照片稳稳叠高，别让塔倒了！</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🎨</div>
          <h3>专属于你的关卡</h3>
          <p>只需选出 6〜11 个抠图并决定掉落顺序。取个“我家猫咪塔”之类的名字保存起来，随时都能玩。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">💌</div>
          <h3>把关卡分享给朋友</h3>
          <p>做好的关卡可以用 8 位代码发给朋友。输入收到的代码，也能玩朋友做的关卡。</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>抠图、<wbr />排序、<wbr />叠高。</h2>
        <p>从选择照片到开始游戏，只需 4 个步骤。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--sky)"><img src="../image/ImageTower/screen_editor.jpg" alt="关卡制作界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 1</small><h3>从照片抠图</h3><p>选择照片，抠出想要使用的主体。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/ImageTower/screen_home.jpg" alt="列出已制作关卡的主界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 2</small><h3>制作关卡</h3><p>选出 6〜11 个抠图并排好顺序，关卡就完成了。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--yellow)"><img src="../image/ImageTower/screen_game.jpg" alt="丢下照片并叠高的游戏界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 3</small><h3>丢下、叠高</h3><p>左右移动后松开手指即落下，点右下角的按钮可旋转。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--purple)"><img src="../image/ImageTower/screen_result.jpg" alt="显示叠了几个的结果界面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 4</small><h3>分享成绩</h3><p>可以把叠好的高塔截图分享到社交平台，也可以用代码发送关卡。</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" aria-labelledby="share-heading">
      <div class="rank-copy">
        <p class="section-label">SHARE</p>
        <h2 id="share-heading">你叠了<wbr />多高？<br />截图<wbr />分享吧。</h2>
        <p>游戏结束后，可以把整座高塔截成一张图，直接分享到社交平台。刷新了个人纪录，就去向朋友炫耀一下吧！</p>
        <small>※ 用代码分享关卡需要登录 iCloud。</small>
      </div>
      <div class="rank-shots">
        <img src="../image/ImageTower/screen_game.jpg" alt="照片层层叠起的游戏界面" loading="lazy" width="739" height="1605" />
        <img src="../image/ImageTower/screen_result.jpg" alt="带有截图分享按钮的结果界面" loading="lazy" width="739" height="1605" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Nokke Tower 的界面</h2>
        <p>左右滑动即可查看所有界面。</p>
      </div>
      <div class="gallery" aria-label="Nokke Tower 截图">
        <figure><img src="../image/ImageTower/01_tower.jpg" alt="照片，叠成高塔。" loading="lazy" width="739" height="1605" /><figcaption>照片叠成高塔</figcaption></figure>
        <figure><img src="../image/ImageTower/02_create.jpg" alt="用喜欢的照片制作关卡" loading="lazy" width="739" height="1605" /><figcaption>制作关卡</figcaption></figure>
        <figure><img src="../image/ImageTower/03_stages.jpg" alt="专属于你的关卡随时都能玩" loading="lazy" width="739" height="1605" /><figcaption>我的关卡</figcaption></figure>
        <figure><img src="../image/ImageTower/04_share.jpg" alt="能叠多高？截图轻松分享成绩" loading="lazy" width="739" height="1605" /><figcaption>分享成绩</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下载 Nokke Tower">
      <img class="download-icon" src="../image/icon/imageTower.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>把最爱的照片，<wbr />叠起来吧。</h2><p>用自己的照片来玩的叠塔游戏。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6822193103" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、需求或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>抠图和关卡都保存在设备上。只有在分享关卡时，才会将抠图图像和关卡名称上传到 iCloud。此外，本应用使用 Google AdMob 展示广告。详情请参阅隐私政策。</p>
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
