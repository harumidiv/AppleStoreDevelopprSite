window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["munyu"] = window.SITE_I18N["munyu"] || {})["zh-Hans"] = {
  title: "Munyu - 吃蘑菇进化的毛毛虫动作游戏",
  description: "Munyu 是一款毛毛虫吃蘑菇不断进化的单线动作游戏。蘑菇颜色与魔法自由组合，最终形态共12种。只需手指滑动即可轻松操作，挑战3个区域和3位Boss吧！",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="页面导航">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 应用列表</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">特色</a>
        <a href="#evolution">进化</a>
        <a href="#areas">区域</a>
        <a href="#screenshots">截图</a>
        <a href="#support">支持</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/munyu.png" alt="Munyu 的应用图标" width="84" height="84" />
          <div><strong>Munyu</strong><span>支持 iPhone 与 iPad</span></div>
        </div>
        <h1>吃吧，<wbr />进化吧，<br /><em>打倒Boss！</em></h1>
        <p class="lead">小小的毛毛虫“Munyu”<wbr />一边吃蘑菇<wbr />一边沿着小路前进的动作游戏。<wbr />根据吃下的蘑菇颜色<wbr />与魔法的组合，<wbr />进化成各种不同的样子。<wbr />你的 Munyu<wbr />会变成什么模样呢？</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id1461761608" target="_blank" rel="noopener">在 App Store 查看</a>
          <a class="button secondary" href="#features">查看特色</a>
        </div>
        <ul class="hero-note" aria-label="支持信息">
          <li>滑动即可的简单操作</li>
          <li>最终形态共12种</li>
          <li>Game Center排行榜</li>
        </ul>
      </div>
      <div class="hero-visual">
        <img class="hero-shot left" src="../image/Munyu/screen_title.jpg" alt="展示各种进化形态的标题画面" width="739" height="1606" />
        <img class="hero-shot right" src="../image/Munyu/screen_boss.jpg" alt="与螳螂将军战斗的Boss战画面" width="739" height="1606" />
        <img class="hero-shot main" src="../image/Munyu/screen_evo.jpg" alt="进化为岩浆Munyu瞬间的游戏画面" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="应用特色">
    <div class="stat"><strong>共12种</strong><span>由蘑菇和魔法决定的最终形态</span></div>
    <div class="stat"><strong>最高Lv.10</strong><span>每次升级都会进化</span></div>
    <div class="stat"><strong>3位Boss</strong><span>草原、洞窟、夕阳森林</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>滑动前进，<wbr />越来越强。</h2>
        <p>只需用手指滑动，就能吃蘑菇、打虫子、挑战Boss。</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">👆</div>
          <h3>滑动即可的简单操作</h3>
          <p>在屏幕上滑动，Munyu 就会上下左右移动。等级提升后会自动发射叶子弹，把挡路的虫子和岩石统统打倒，一路前进。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🍄</div>
          <h3>蘑菇颜色决定进化方向</h3>
          <p>红蘑菇代表攻击，蓝蘑菇代表防御，绿蘑菇代表魔法。吃得最多的蘑菇将决定进化路线。每次升级名字和外观都会改变，到了Lv.10就会成为“传说形态”。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🎁</div>
          <h3>宝箱与强化道具</h3>
          <p>打碎岩石或打开宝箱，就能获得连射UP、弹数UP、追踪弹、贯穿弹等强化道具。获得火、冰、雷魔法后，还能使用专属攻击。</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🕳️</div>
          <h3>秘密洞窟</h3>
          <p>小路途中隐藏着装满蘑菇和宝箱的“秘密洞窟”。发现了就进去看看吧。善加利用，就能一口气变强。</p>
        </article>
      </div>
    </section>

    <section class="section evo-panel" id="evolution" aria-labelledby="evo-heading">
      <div class="section-heading">
        <p class="section-label">EVOLUTION</p>
        <h2 id="evo-heading">蘑菇颜色 × 魔法，<wbr />共12种形态。</h2>
        <p>Lv.2时由蘑菇颜色决定进化路线，Lv.5时由持有的魔法决定最终形态。</p>
      </div>
      <div class="lines">
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--red)" aria-hidden="true"></span>犄角Munyu</h3>
          <p>红蘑菇 · 擅长攻击</p>
          <ul class="forms">
            <li>独角仙Munyu<small>无魔法</small></li>
            <li>岩浆Munyu<small>火</small></li>
            <li>冰柱Munyu<small>冰</small></li>
            <li>霹雳Munyu<small>雷</small></li>
          </ul>
        </article>
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--blue)" aria-hidden="true"></span>甲壳Munyu</h3>
          <p>蓝蘑菇 · 擅长防御</p>
          <ul class="forms">
            <li>铠甲Munyu<small>无魔法</small></li>
            <li>熔岩Munyu<small>火</small></li>
            <li>冰山Munyu<small>冰</small></li>
            <li>雷神Munyu<small>雷</small></li>
          </ul>
        </article>
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--leaf)" aria-hidden="true"></span>叶子Munyu</h3>
          <p>绿蘑菇 · 擅长魔法</p>
          <ul class="forms">
            <li>妖精Munyu<small>无魔法</small></li>
            <li>火鸟Munyu<small>火</small></li>
            <li>雪精灵Munyu<small>冰</small></li>
            <li>雷鸟Munyu<small>雷</small></li>
          </ul>
        </article>
      </div>
      <p class="evo-note">之后还会经历“大”“超”“王者”“神”不断变强，在Lv.10成为“传说的〇〇Munyu”。犄角变长、铠甲上的尖刺变多、翅膀变大……每个等级的外观也都不一样。</p>
    </section>

    <section class="section" id="areas">
      <div class="section-heading">
        <p class="section-label">AREAS</p>
        <h2>3个区域，<wbr />3位Boss。</h2>
        <p>每个区域的尽头都有Boss在等着你。打倒它就会出现阶梯，可以前往下一个区域。</p>
      </div>
      <div class="areas">
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_play.jpg" alt="在草原上喷火战斗的画面" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 1</small><h3>草原 与 乌鸦大王</h3><p>蚂蚁、蜜蜂、瓢虫出没的第一个区域。Boss是会撒下羽毛的乌鸦大王。</p>
        </article>
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_cave.jpg" alt="在洞窟中与鼠妇和蝙蝠战斗的画面" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 2</small><h3>洞窟 与 鼹鼠头领</h3><p>鼠妇、蝙蝠、蜘蛛潜伏的黑暗洞窟。小心从地下探出头来的鼹鼠头领。</p>
        </article>
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_boss.jpg" alt="在夕阳森林中与螳螂将军战斗的画面" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 3</small><h3>夕阳森林 与 螳螂将军</h3><p>锹甲、飞蛾、蜗牛挡住去路的最后森林。打倒用风刃和冲撞发起猛攻的螳螂将军吧！</p>
        </article>
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Munyu 的画面</h2>
        <p>横向滑动即可查看所有画面。</p>
      </div>
      <div class="gallery" aria-label="Munyu 的截图">
        <figure><img src="../image/Munyu/01_title.jpg" alt="吃吧，进化吧，打倒Boss！" loading="lazy" width="739" height="1606" /><figcaption>吃吧，进化吧，打倒Boss</figcaption></figure>
        <figure><img src="../image/Munyu/02_evo.jpg" alt="蘑菇颜色改变进化！" loading="lazy" width="739" height="1606" /><figcaption>蘑菇颜色改变进化</figcaption></figure>
        <figure><img src="../image/Munyu/03_forms.jpg" alt="最终形态共12种！" loading="lazy" width="739" height="1606" /><figcaption>最终形态共12种</figcaption></figure>
        <figure><img src="../image/Munyu/04_play.jpg" alt="滑动即可的简单操作！" loading="lazy" width="739" height="1606" /><figcaption>滑动即可的简单操作</figcaption></figure>
        <figure><img src="../image/Munyu/05_boss.jpg" alt="挑战3位强大的Boss！" loading="lazy" width="739" height="1606" /><figcaption>挑战3位Boss</figcaption></figure>
        <figure><img src="../image/Munyu/06_cave.jpg" alt="穿越3个区域的大冒险！" loading="lazy" width="739" height="1606" /><figcaption>穿越3个区域的大冒险</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="下载 Munyu">
      <img class="download-icon" src="../image/icon/munyu.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>你的 Munyu，<wbr />会进化成什么样子？</h2><p>只需滑动就能玩的毛毛虫进化动作游戏。</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id1461761608" target="_blank" rel="noopener">在 App Store 查看</a>
    </section>

    <section class="support" id="support" aria-label="支持信息">
      <article class="support-card">
        <h2>联系我们</h2>
        <p>欢迎提出意见、建议或反馈问题。</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">通过 Twitter 私信联系</a>
      </article>
      <article class="support-card">
        <h2>隐私</h2>
        <p>最佳分数保存在设备中。为了排行榜功能，分数会发送到 Game Center。此外，本应用使用 Google AdMob 显示广告。详情请参阅隐私政策。</p>
        <a class="text-link" href="../privacy.html">阅读隐私政策</a>
      </article>
      <article class="support-card">
        <h2>致谢</h2>
        <p>音效使用了免费音乐素材网站“魔王魂”的素材。</p>
        <a class="text-link" href="https://maou.audio/" target="_blank" rel="noopener">魔王魂</a>
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
