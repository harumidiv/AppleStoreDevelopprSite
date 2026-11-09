window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["ebiFly"] = window.SITE_I18N["ebiFly"] || {})["zh-Hans"] = {
  title: "炸虾飞飞 - 飞吧！炸虾",
  description: "《炸虾飞飞》是一款把炸虾发射到天空尽头的动作游戏。裹上面衣、下锅油炸、淋上酱汁就发射！躲开飞鸟、飞机和陨石，比比谁能飞得更高。",
  html: `
  <header class="hero">
    <img class="cloud c1" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c2" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c3" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c4" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="flyer f1" src="../image/EbiFly/art/shrimp-normal.png" alt="" aria-hidden="true" />
    <img class="flyer f2" src="../image/EbiFly/art/shrimp-heart.png" alt="" aria-hidden="true" />
    <img class="flyer f3" src="../image/EbiFly/art/shrimp-crown.png" alt="" aria-hidden="true" />

    <nav class="topbar wrap" aria-label="页面导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#flow">玩法</a>
        <a href="#sky">天空区域</a>
        <a href="#features">特色</a>
        <a href="#screenshots">画面</a>
        <a href="#support">支持</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/ebiFly.png" alt="炸虾飞飞的应用图标" width="84" height="84" />
          <div><strong>炸虾飞飞</strong><span>支持 iPhone、iPad／免费</span></div>
        </div>
        <p class="kicker">飞吧！</p>
        <h1>炸虾飞飞</h1>
        <p class="lead">今天要做什么样的炸虾呢……？？<wbr />裹上面衣，<wbr />下锅油炸，<wbr />淋上酱汁，<wbr />发射到天空尽头！<wbr />躲开飞鸟、飞机<wbr />和陨石，<wbr />你能飞多高呢？</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id1461666071" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#flow">查看玩法</a>
        </div>
        <ul class="hero-note" aria-label="支持信息">
          <li>支持 iPhone、iPad</li>
          <li>摇一摇、倾斜操作</li>
          <li>Game Center 排行榜</li>
        </ul>
      </div>
      <div class="hero-visual">
        <img class="hero-shot left" src="../image/EbiFly/screen_batter.jpg" alt="接住掉落面包糠的裹衣画面" width="739" height="1606" />
        <img class="hero-shot right" src="../image/EbiFly/screen_fly.jpg" alt="一边躲避障碍物一边在天空飞行的画面" width="739" height="1606" />
        <img class="hero-shot main" src="../image/EbiFly/screen_title.jpg" alt="炸虾在空中飞来飞去的标题画面" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用特色">
    <div class="stat"><strong>5 个步骤</strong><span>制作、裹衣、油炸、酱汁、发射</span></div>
    <div class="stat"><strong>直冲太空</strong><span>躲开障碍物，一路向上</span></div>
    <div class="stat"><strong>排行榜</strong><span>在 Game Center 比拼飞行距离</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>做好，<wbr />炸好，<wbr />飞起来。</h2>
        <p>准备工作做得好不好，直接决定飞行表现。每局大约 1 分钟，可以无限次挑战。</p>
      </div>
      <ol class="steps">
        <li class="step">
          <div class="step-media" style="--step-bg: #fff1c9"><img src="../image/EbiFly/screen_make.jpg" alt="选择虾尾和身体长度的画面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>制作</h3><p>选择虾尾形状和身体长度，做出独一无二的炸虾。</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #f6dc95"><img src="../image/EbiFly/screen_batter.jpg" alt="接住面包糠的画面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>裹衣</h3><p>接住从天而降的面包糠。金色面包糠算 3 个，小心别碰到水滴。</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #3c4a52"><img src="../image/EbiFly/screen_fry.jpg" alt="停止油炸火候计量表的画面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>油炸</h3><p>看准时机停下计量表，目标是金黄酥脆。</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #ffe0d2"><img src="../image/EbiFly/screen_shake.jpg" alt="摇动 iPhone 淋酱汁的画面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>酱汁</h3><p>摇动 iPhone 淋上酱汁。摇得越多，上升得越快！</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #7fd3ff"><img src="../image/EbiFly/screen_fly.jpg" alt="躲避障碍物飞行的画面" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>发射</h3><p>倾斜手机躲开障碍物，吃到酱汁瓶就能补充燃料。</p></div>
        </li>
      </ol>
    </section>

    <section class="sky-panel" id="sky" aria-labelledby="sky-heading">
      <div>
        <div class="section-heading">
          <p class="section-label">SKY ZONES</p>
          <h2 id="sky-heading">飞得越高，<wbr />天空越不一样。</h2>
          <p>高度越高，出现的障碍物也会改变。一旦撞上就结束了。在燃料耗尽之前，你能飞到哪里呢？</p>
        </div>
        <ul class="zones">
          <li><img src="../image/EbiFly/art/bird.png" alt="" /><div><strong>飞鸟区域</strong><span>先躲开在云间飞翔的小鸟吧</span></div></li>
          <li><img src="../image/EbiFly/art/plane.png" alt="" /><div><strong>飞机区域　1,500m～</strong><span>长长的飞机会飞快地横穿而过</span></div></li>
          <li><img src="../image/EbiFly/art/meteor.png" alt="" /><div><strong>陨石区域　3,400m～</strong><span>小心从上方坠落的陨石</span></div></li>
          <li><img src="../image/EbiFly/art/fuel.png" alt="" /><div><strong>补充燃料</strong><span>拿到酱汁瓶就能恢复燃料！</span></div></li>
        </ul>
      </div>
      <img class="sky-shot" src="../image/EbiFly/screen_fly.jpg" alt="显示燃料计量表和上升速度的飞行画面" loading="lazy" width="739" height="1606" />
    </section>

    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>目标是成为<wbr />真正的炸虾飞行家。</h2>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/crumb.png" alt="" style="height:42px" /><img src="../image/EbiFly/art/fuel.png" alt="" /><img src="../image/EbiFly/art/water-drop.png" alt="" style="height:50px" /></div>
          <h3>准备决定飞行</h3>
          <p>面包糠和火候决定燃料，酱汁决定上升速度。在哪里拉开差距，全看你自己。</p>
        </article>
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/shrimp-crown.png" alt="" /><img src="../image/EbiFly/art/shrimp-heart.png" alt="" /><img src="../image/EbiFly/art/shrimp-normal.png" alt="" /></div>
          <h3>称号与虾尾收集</h3>
          <p>刷新纪录就能提升称号，飞过 3,000m 还能使用特别的“皇冠虾尾”。</p>
          <ul class="ranks" aria-label="称号示例"><li>生虾</li><li>见习炸虾</li><li>金黄炸虾</li><li>宇宙炸虾</li></ul>
        </article>
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/star.png" alt="" style="height:44px" /><img src="../image/EbiFly/art/star.png" alt="" /><img src="../image/EbiFly/art/star.png" alt="" style="height:44px" /></div>
          <h3>排行榜一决胜负</h3>
          <p>飞行距离会记录在 Game Center 排行榜上。和朋友以及所有玩家比一比，看谁飞得最远。</p>
        </article>
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENS</p>
        <h2>炸虾飞飞的画面</h2>
      </div>
      <div class="shots">
        <figure><img src="../image/EbiFly/screen_title.jpg" alt="标题画面" loading="lazy" width="739" height="1606" /><figcaption>点击天空会出现障碍物！</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_make.jpg" alt="制作炸虾的画面" loading="lazy" width="739" height="1606" /><figcaption>制作炸虾</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_batter.jpg" alt="裹衣画面" loading="lazy" width="739" height="1606" /><figcaption>接住面包糠</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_fry.jpg" alt="油炸画面" loading="lazy" width="739" height="1606" /><figcaption>瞄准金黄色</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_shake.jpg" alt="酱汁画面" loading="lazy" width="739" height="1606" /><figcaption>摇一摇淋酱汁</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_fly.jpg" alt="发射画面" loading="lazy" width="739" height="1606" /><figcaption>躲开障碍向上冲</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_result.jpg" alt="结果画面" loading="lazy" width="739" height="1606" /><figcaption>装进便当，公布结果</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_records.jpg" alt="纪录画面" loading="lazy" width="739" height="1606" /><figcaption>纪录与收藏</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下载炸虾飞飞">
      <img class="download-icon" src="../image/icon/ebiFly.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>谁才是真正的<wbr />炸虾飞行家！？</h2><p>裹上面衣，下锅油炸，飞向天空尽头。免费畅玩。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id1461666071" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、建议或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>本应用使用 Google AdMob 展示广告，并使用 Apple 的 Game Center 提供排行榜。iPhone 的摇动和倾斜动作仅在设备内用于操作，绝不会发送到外部。详情请查看隐私政策。</p>
        <a class="text-link" href="../privacy.html">阅读隐私政策</a>
      </article>
      <article class="support-card">
        <h2>玩不顺时</h2>
        <ul>
          <li>摇动没有反应时，也可以点击屏幕来淋酱汁</li>
          <li>不方便倾斜时，也可以在屏幕上左右拖动来躲避</li>
          <li>无法查看排行榜时，请在设备的“设置”中登录 Game Center</li>
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
