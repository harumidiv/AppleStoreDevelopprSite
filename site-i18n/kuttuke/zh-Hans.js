window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["kuttuke"] = window.SITE_I18N["kuttuke"] || {})["zh-Hans"] = {
  title: "KUTTUKE - 照片合体进化的掉落消除游戏",
  description: "KUTTUKE 是一款用自己的照片抠图来玩的掉落消除游戏。相同的照片碰在一起，就会进化成下一张照片。用家人、宠物或偶像的照片，打造专属于你的进化组合。支持 iPhone 和 iPad。",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="页面导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#flow">玩法</a>
        <a href="#screenshots">画面</a>
        <a href="#support">支持</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/kuttuke.png" alt="KUTTUKE 的应用图标" width="84" height="84" />
          <div><strong>KUTTUKE</strong><span>支持 iPhone、iPad</span></div>
        </div>
        <h1>你的<wbr />照片<br /><em>合体</em><wbr />进化！</h1>
        <p class="lead">从照片里抠出喜欢的东西，<wbr />按从小到大的顺序排好就行。<wbr />相同的照片碰在一起，<wbr />就会进化成下一张，越变越大——<wbr />这就是用照片玩的掉落消除游戏。<wbr /></p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6820843882" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支持信息">
          <li>支持 iPhone、iPad</li>
          <li>用自己的照片来玩</li>
          <li>Game Center 排行榜</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffd140" stroke="#1b1f20" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#1b1f20" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/Kuttuke/screen_editor.jpg" alt="将照片按从小到大排列的进化组合编辑画面" width="739" height="1605" />
        <img class="hero-shot right" src="../image/Kuttuke/screen_result.jpg" alt="用彩带庆祝上榜的结果画面" width="739" height="1605" />
        <img class="hero-shot main" src="../image/Kuttuke/screen_game.jpg" alt="抠图照片层层堆叠的游戏画面" width="739" height="1605" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用特色">
    <div class="stat"><strong>6～11 张</strong><span>用喜欢的照片组成进化组合</span></div>
    <div class="stat"><strong>按数量分榜</strong><span>Game Center 排行榜</span></div>
    <div class="stat"><strong>代码分享</strong><span>和朋友玩同一个关卡</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>你的照片，<wbr />直接变成游戏。</h2>
        <p>家人、宠物、偶像、旅行回忆。心爱的照片都能变成合体成长的益智游戏。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📸</div>
          <h3>抠图变成素材</h3>
          <p>只要长按照片中的人或物就能抠图。抠好的素材会被保存，在其他关卡中也能反复使用。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🔗</div>
          <h3>合体让它越长越大</h3>
          <p>相同的照片撞在一起，就会进化成下一张。最终形态相互合体时，会闪亮消失并获得额外加分！</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🏆</div>
          <h3>按素材数量分榜</h3>
          <p>根据使用的照片数量（6～11 个）分别设有 Game Center 排行榜。上榜后，会用名次和彩带为你庆祝。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">💌</div>
          <h3>把关卡分享给朋友</h3>
          <p>做好的关卡可以用 8 位代码发给朋友。收到的朋友也能用同样的照片和进化音效来玩。</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>抠图、<wbr />排序、<wbr />合体。</h2>
        <p>从选照片到开始游戏，只需 4 个步骤。</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--mint)"><img src="../image/Kuttuke/screen_editor.jpg" alt="进化组合编辑画面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 1</small><h3>从照片抠图</h3><p>选择照片，长按想用的主体即可抠图。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/Kuttuke/screen_home.jpg" alt="排列着已创建关卡的主页画面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 2</small><h3>从小到大排好</h3><p>把 6～11 个照片按进化顺序排好，关卡就完成了。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--yellow)"><img src="../image/Kuttuke/screen_game.jpg" alt="让照片掉落的游戏画面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 3</small><h3>掉落、合体</h3><p>手指左右移动，松开就会掉落。让相同的照片合体进化吧。</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--pink)"><img src="../image/Kuttuke/screen_share.jpg" alt="显示关卡分享码的画面" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 4</small><h3>和朋友分享</h3><p>可以把分数图片分享到社交网络，也可以用代码发送关卡。</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" aria-labelledby="rank-heading">
      <div class="rank-copy">
        <p class="section-label">RANKING</p>
        <h2 id="rank-heading">和全球的<wbr />对手，<br />用分数一决胜负。</h2>
        <p>在按照片数量划分的 Game Center 排行榜上，与全球玩家一较高下。刷新个人最佳并上榜后，结果画面会显示你的名次。</p>
        <small>※参加排行榜需要登录 Game Center。</small>
      </div>
      <div class="rank-shots">
        <img src="../image/Kuttuke/screen_game.jpg" alt="照片层层堆叠的游戏画面" loading="lazy" width="739" height="1605" />
        <img src="../image/Kuttuke/screen_result.jpg" alt="登上全球第 1 名的结果画面" loading="lazy" width="739" height="1605" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>KUTTUKE 的画面</h2>
        <p>横向滚动即可浏览所有画面。</p>
      </div>
      <div class="gallery" aria-label="KUTTUKE 的截图">
        <figure><img src="../image/Kuttuke/01_game.jpg" alt="照片合体进化！" loading="lazy" width="739" height="1605" /><figcaption>照片合体进化</figcaption></figure>
        <figure><img src="../image/Kuttuke/02_editor.jpg" alt="用喜欢的照片组成进化组合" loading="lazy" width="739" height="1605" /><figcaption>创建进化组合</figcaption></figure>
        <figure><img src="../image/Kuttuke/03_result.jpg" alt="在按数量分榜的排行榜上一决胜负" loading="lazy" width="739" height="1605" /><figcaption>按数量分榜</figcaption></figure>
        <figure><img src="../image/Kuttuke/04_share.jpg" alt="把做好的关卡发给朋友" loading="lazy" width="739" height="1605" /><figcaption>分享给朋友</figcaption></figure>
        <figure><img src="../image/Kuttuke/05_home.jpg" alt="想做多少就做多少，尽情畅玩" loading="lazy" width="739" height="1605" /><figcaption>收集关卡</figcaption></figure>
      </div>
    </section>

    <section class="section sound" aria-labelledby="sound-heading">
      <div class="sound-mark" aria-hidden="true">🎤</div>
      <div>
        <h2 id="sound-heading">进化音效，<wbr />也能用你自己的声音。</h2>
        <p>在“高级设置”中，可以为每张照片设置进化时播放的音效。可以当场录音，也可以选择音频文件。未设置音效的照片会播放默认的“啵嘤”。</p>
      </div>
    </section>

    <section class="download-cta" aria-label="下载 KUTTUKE">
      <img class="download-icon" src="../image/icon/kuttuke.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>用心爱的照片，<wbr />来合体吧。</h2><p>用自己的照片来玩的掉落消除游戏。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6820843882" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、建议或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>抠好的照片和关卡都保存在设备内。只有在把关卡分享给朋友时，才会将照片和音频上传到 iCloud。详情请查看隐私政策。</p>
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
