window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["munyu"] = window.SITE_I18N["munyu"] || {})["en"] = {
  title: "Munyu - The Caterpillar Action Game Where You Eat to Evolve",
  description: "Munyu is a one-way action game about a caterpillar that evolves by eating mushrooms. Combine mushroom colors and magic to unlock 12 final forms. With simple swipe-to-move controls, take on 3 areas and 3 bosses.",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="Page navigation">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> All Apps</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">Features</a>
        <a href="#evolution">Evolution</a>
        <a href="#areas">Areas</a>
        <a href="#screenshots">Screens</a>
        <a href="#support">Support</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/munyu.png" alt="Munyu app icon" width="84" height="84" />
          <div><strong>Munyu</strong><span>For iPhone and iPad</span></div>
        </div>
        <h1>Eat, <wbr />evolve, <br /><em>beat the boss!</em></h1>
        <p class="lead">Guide Munyu, a tiny caterpillar, <wbr />down a winding path, <wbr />munching mushrooms as you go. <wbr />Mix mushroom colors <wbr />with magic <wbr />to evolve into all kinds of forms. <wbr />What will your Munyu <wbr />become?</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id1461761608" target="_blank" rel="noopener">View on the App Store</a>
          <a class="button secondary" href="#features">See Features</a>
        </div>
        <ul class="hero-note" aria-label="Highlights">
          <li>Simple swipe controls</li>
          <li>12 final forms</li>
          <li>Game Center leaderboards</li>
        </ul>
      </div>
      <div class="hero-visual">
        <img class="hero-shot left" src="../image/Munyu/screen_title.jpg" alt="Title screen showing many evolved forms" width="739" height="1606" />
        <img class="hero-shot right" src="../image/Munyu/screen_boss.jpg" alt="Boss battle against General Mantis" width="739" height="1606" />
        <img class="hero-shot main" src="../image/Munyu/screen_evo.jpg" alt="Gameplay at the moment of evolving into Magma Munyu" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="App highlights">
    <div class="stat"><strong>12 forms</strong><span>Final forms shaped by mushrooms and magic</span></div>
    <div class="stat"><strong>Up to Lv.10</strong><span>Evolve every time you level up</span></div>
    <div class="stat"><strong>3 bosses</strong><span>Grassland, Cave and Sunset Forest</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>Swipe, advance, <wbr />and keep getting stronger.</h2>
        <p>Just trace your finger to eat mushrooms, defeat bugs and challenge the bosses.</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">👆</div>
          <h3>Simple swipe controls</h3>
          <p>Trace the screen to move Munyu up, down, left and right. As you level up, Munyu fires leaf shots automatically, blasting through the bugs and rocks blocking the way.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🍄</div>
          <h3>Mushroom colors shape your evolution</h3>
          <p>Red mushrooms boost attack, blue ones boost defense, and green ones boost magic. Whichever you eat most decides your evolution line. Your name and look change with every level, until you reach your Legendary form at Lv.10.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🎁</div>
          <h3>Treasure chests and power-ups</h3>
          <p>Smash rocks and open treasure chests to get power-ups like Rapid Fire UP, Shot Count UP, Homing Shots and Piercing Shots. Pick up fire, ice or thunder magic to unlock special attacks.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🕳️</div>
          <h3>Secret caves</h3>
          <p>Along the path hide "Secret Caves" packed with mushrooms and treasure chests. If you find one, step inside. Use them well and you can power up in no time.</p>
        </article>
      </div>
    </section>

    <section class="section evo-panel" id="evolution" aria-labelledby="evo-heading">
      <div class="section-heading">
        <p class="section-label">EVOLUTION</p>
        <h2 id="evo-heading">Mushroom color × magic: <wbr />12 forms in all.</h2>
        <p>At Lv.2, your mushroom color decides your evolution line. At Lv.5, the magic you hold decides your final form.</p>
      </div>
      <div class="lines">
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--red)" aria-hidden="true"></span>Horn Munyu</h3>
          <p>Red mushrooms · Attack specialist</p>
          <ul class="forms">
            <li>Beetle Munyu<small>No magic</small></li>
            <li>Magma Munyu<small>Fire</small></li>
            <li>Icicle Munyu<small>Ice</small></li>
            <li>Thunderbolt Munyu<small>Thunder</small></li>
          </ul>
        </article>
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--blue)" aria-hidden="true"></span>Shell Munyu</h3>
          <p>Blue mushrooms · Defense specialist</p>
          <ul class="forms">
            <li>Armor Munyu<small>No magic</small></li>
            <li>Lava Munyu<small>Fire</small></li>
            <li>Iceberg Munyu<small>Ice</small></li>
            <li>Thunder God Munyu<small>Thunder</small></li>
          </ul>
        </article>
        <article class="line-card">
          <h3><span class="mush" style="--c: var(--leaf)" aria-hidden="true"></span>Leaf Munyu</h3>
          <p>Green mushrooms · Magic specialist</p>
          <ul class="forms">
            <li>Fairy Munyu<small>No magic</small></li>
            <li>Phoenix Munyu<small>Fire</small></li>
            <li>Snow Sprite Munyu<small>Ice</small></li>
            <li>Thunderbird Munyu<small>Thunder</small></li>
          </ul>
        </article>
      </div>
      <p class="evo-note">From there it keeps growing stronger through "Big", "Super", "King" and "God", becoming "Legendary ___ Munyu" at Lv.10. Horns grow longer, armor sprouts more spikes, wings get bigger: your look changes at every level, too.</p>
    </section>

    <section class="section" id="areas">
      <div class="section-heading">
        <p class="section-label">AREAS</p>
        <h2>3 areas, <wbr />3 bosses.</h2>
        <p>A boss lies in wait at the end of each area. Defeat it and a staircase appears, leading you to the next area.</p>
      </div>
      <div class="areas">
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_play.jpg" alt="Fighting with fire breath in the grassland" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 1</small><h3>Grassland &amp; the Crow King</h3><p>The first area, home to ants, bees and ladybugs. The boss is the Crow King, who scatters feathers everywhere.</p>
        </article>
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_cave.jpg" alt="Fighting pill bugs and bats in the cave" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 2</small><h3>Cave &amp; the Mole Chief</h3><p>A dark cave where pill bugs, bats and spiders lurk. Watch out for the Mole Chief popping up from underground.</p>
        </article>
        <article class="area">
          <div class="area-media"><img src="../image/Munyu/screen_boss.jpg" alt="Fighting General Mantis in the sunset forest" loading="lazy" width="739" height="1606" /></div>
          <small>AREA 3</small><h3>Sunset Forest &amp; General Mantis</h3><p>The final forest, where stag beetles, moths and snails block your way. Defeat General Mantis and his slashing whirlwinds and charging attacks.</p>
        </article>
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Munyu Screenshots</h2>
        <p>Scroll sideways to see every screen.</p>
      </div>
      <div class="gallery" aria-label="Munyu screenshots">
        <figure><img src="../image/Munyu/01_title.jpg" alt="Eat, evolve, beat the boss!" loading="lazy" width="739" height="1606" /><figcaption>Eat, evolve, beat the boss</figcaption></figure>
        <figure><img src="../image/Munyu/02_evo.jpg" alt="Mushroom colors change your evolution!" loading="lazy" width="739" height="1606" /><figcaption>Mushroom colors change your evolution</figcaption></figure>
        <figure><img src="../image/Munyu/03_forms.jpg" alt="12 final forms in all!" loading="lazy" width="739" height="1606" /><figcaption>12 final forms in all</figcaption></figure>
        <figure><img src="../image/Munyu/04_play.jpg" alt="Simple swipe controls!" loading="lazy" width="739" height="1606" /><figcaption>Simple swipe controls</figcaption></figure>
        <figure><img src="../image/Munyu/05_boss.jpg" alt="Take on 3 mighty bosses!" loading="lazy" width="739" height="1606" /><figcaption>Take on 3 bosses</figcaption></figure>
        <figure><img src="../image/Munyu/06_cave.jpg" alt="A big adventure across 3 areas!" loading="lazy" width="739" height="1606" /><figcaption>A big adventure across 3 areas</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="Download Munyu">
      <img class="download-icon" src="../image/icon/munyu.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>What will your Munyu <wbr />evolve into?</h2><p>A caterpillar evolution action game you play with just a swipe.</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id1461761608" target="_blank" rel="noopener">View on the App Store</a>
    </section>

    <section class="support" id="support" aria-label="Support">
      <article class="support-card">
        <h2>Contact</h2>
        <p>We welcome your feedback, feature requests and bug reports.</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">Contact us via Twitter DM</a>
      </article>
      <article class="support-card">
        <h2>Privacy</h2>
        <p>Your best score is saved on your device. Scores are sent to Game Center for leaderboards. The app also uses Google AdMob to display ads. For details, please see our Privacy Policy.</p>
        <a class="text-link" href="../privacy.html">Read the Privacy Policy</a>
      </article>
      <article class="support-card">
        <h2>Credits</h2>
        <p>Sound effects are provided by the free music library "Maou Damashii" (魔王魂).</p>
        <a class="text-link" href="https://maou.audio/" target="_blank" rel="noopener">Maou Damashii</a>
      </article>
    </section>
  </main>

  <footer>
    <div class="footer-row wrap">
      <span>© 2026 Harumi Sagawa — Apps</span>
      <a href="../index.html">Back to All Apps</a>
    </div>
  </footer>
`
};
