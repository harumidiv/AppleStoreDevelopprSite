window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["kodo"] = window.SITE_I18N["kodo"] || {})["en"] = {
  title: "Kodo -Heart Museum- - Feel Every Creature's Heartbeat in Your Hand",
  description: "Kodo -Heart Museum- lets you feel the heartbeats of all kinds of creatures through the screen and your iPhone's vibration. From the sparrow at 800 bpm to the elephant at 20 bpm, compare the pace of life of 9 creatures right in your hand.",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="Page navigation">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> All Apps</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">Features</a>
        <a href="#specimens">Specimens</a>
        <a href="#flow">How to Use</a>
        <a href="#monitor">ECG</a>
        <a href="#screenshots">Screens</a>
        <a href="#support">Support</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/kodo.png" alt="Kodo -Heart Museum- app icon" width="84" height="84" />
          <div><strong>Kodo -Heart Museum-</strong><span>KODO SPECIMENS</span></div>
        </div>
        <h1>The <em>pace</em> of life <wbr />is different for <wbr />every creature.</h1>
        <p class="lead">A sparrow's heart beats 800 times a minute; <wbr />an elephant's, just 20. <wbr />"Kodo -Heart Museum-" is a collection of <wbr />heartbeat specimens that lets you feel <wbr />the pulse of all kinds of creatures <wbr />through the screen and your iPhone's vibration. <wbr />Place a hand on your own chest <wbr />and see how different they are.</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/6444230294" target="_blank" rel="noopener">View on the App Store</a>
          <a class="button secondary" href="#features">See Features</a>
        </div>
        <ul class="hero-note" aria-label="Highlights">
          <li>For iPhone</li>
          <li>Feel heartbeats through vibration</li>
          <li>Available in 10 languages</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="pulse one" viewBox="0 0 140 44" aria-hidden="true"><path d="M2 26 H46 L54 34 L66 6 L76 40 L84 22 H138" fill="none" stroke="#ff5a52" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg class="pulse two" viewBox="0 0 140 44" aria-hidden="true"><path d="M2 26 H46 L54 34 L66 6 L76 40 L84 22 H138" fill="none" stroke="#ece8e3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/Kodo/03_monitor_list.jpg" alt="List screen showing each creature's heartbeat as an ECG" width="739" height="1606" />
        <img class="hero-shot right" src="../image/Kodo/02_detail_horse.jpg" alt="A horse's heartbeat shown in Full gallop mode" width="739" height="1606" />
        <img class="hero-shot main" src="../image/Kodo/01_list.jpg" alt="List screen with creatures' heartbeats arranged like a specimen box" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="App highlights">
    <div class="stat"><strong>9 creatures</strong><span>Heartbeat specimens from humans to mice</span></div>
    <div class="stat"><strong>20–800 bpm</strong><span>How different the pace of life can be</span></div>
    <div class="stat"><strong>Feel the vibration</strong><span>The rhythm of a heartbeat in your palm</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>See it with your eyes, <wbr />feel it <wbr />in your hand.</h2>
        <p>Laid out like a specimen box, each creature's heart beats at its own pace.</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🫀</div>
          <h3>9 heartbeat specimens</h3>
          <p>Human, sparrow, elephant, octopus, chicken, cat, dog, horse and mouse. Each heart beats at that creature's own pace, shown alongside its heart rate (bpm).</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📳</div>
          <h3>Feel heartbeats through vibration</h3>
          <p>Choose a creature and your iPhone vibrates to the "thump, thump" of its heartbeat. Place a hand on your chest to compare the difference in pace.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🏃</div>
          <h3>Heart rates that change with activity</h3>
          <p>Switch states, such as Rest, Exercise and Sleep for humans, Flying for the sparrow or Full gallop for the horse, and the heartbeat changes speed too.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📈</div>
          <h3>ECG monitor view</h3>
          <p>Tap the "Text" button at the top right to show heartbeats as ECG waveforms instead of pictures. With numbers and waves, the differences in pace are clear at a glance.</p>
        </article>
      </div>
    </section>

    <section class="section" id="specimens">
      <div class="section-heading">
        <p class="section-label">SPECIMENS</p>
        <h2>The 9 heartbeats <wbr />in the collection</h2>
        <p>Resting heart rates. Each red dot pulses to that creature's heartbeat, too.</p>
      </div>
      <ul class="specimens" aria-label="Heart rate by creature">
        <li><span class="no">No.01</span><span class="name"><span class="dot" style="--beat: .85s" aria-hidden="true"></span>Human</span><span class="bpm">71<small>bpm</small></span></li>
        <li><span class="no">No.02</span><span class="name"><span class="dot" style="--beat: .075s" aria-hidden="true"></span>Sparrow</span><span class="bpm">800<small>bpm</small></span></li>
        <li><span class="no">No.03</span><span class="name"><span class="dot" style="--beat: 3s" aria-hidden="true"></span>Elephant</span><span class="bpm">20<small>bpm</small></span></li>
        <li><span class="no">No.04</span><span class="name"><span class="dot" style="--beat: 1.7s" aria-hidden="true"></span>Octopus</span><span class="bpm">35<small>bpm</small></span></li>
        <li><span class="no">No.05</span><span class="name"><span class="dot" style="--beat: .3s" aria-hidden="true"></span>Chicken</span><span class="bpm">200<small>bpm</small></span></li>
        <li><span class="no">No.06</span><span class="name"><span class="dot" style="--beat: .5s" aria-hidden="true"></span>Cat</span><span class="bpm">120<small>bpm</small></span></li>
        <li><span class="no">No.07</span><span class="name"><span class="dot" style="--beat: .7s" aria-hidden="true"></span>Dog</span><span class="bpm">86<small>bpm</small></span></li>
        <li><span class="no">No.08</span><span class="name"><span class="dot" style="--beat: 1.5s" aria-hidden="true"></span>Horse</span><span class="bpm">40<small>bpm</small></span></li>
        <li><span class="no">No.09</span><span class="name"><span class="dot" style="--beat: .11s" aria-hidden="true"></span>Mouse</span><span class="bpm">545<small>bpm</small></span></li>
      </ul>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO USE</p>
        <h2>Choose, <wbr />feel, <wbr />compare.</h2>
        <p>Just pick a creature from the list and feel its heartbeat right away.</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media"><img src="../image/Kodo/01_list.jpg" alt="Heartbeat specimen list screen" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 1</small><h3>Choose a creature</h3><p>Tap any creature that catches your eye in the specimen-box list.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #2a0504"><img src="../image/Kodo/05_detail_human.jpg" alt="A human's heartbeat shown in Exercise mode" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 2</small><h3>Feel the vibration</h3><p>Hold your iPhone and feel it vibrate to the rhythm of the heartbeat.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #3d0b08"><img src="../image/Kodo/02_detail_horse.jpg" alt="A horse's heartbeat shown in Full gallop mode" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 3</small><h3>Switch states</h3><p>Choose Rest, Full gallop and more to change the heartbeat's pace.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: #1d1b19"><img src="../image/Kodo/04_monitor_detail_horse.jpg" alt="A horse's heartbeat on the ECG monitor" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 4</small><h3>Compare with the next creature</h3><p>Use the left and right arrows or swipe to switch to another creature's heartbeat.</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" id="monitor" aria-labelledby="monitor-heading">
      <div class="rank-copy">
        <p class="section-label">MONITOR</p>
        <h2 id="monitor-heading">Seen as waves, <wbr /><br />the difference in pace <wbr />is crystal clear.</h2>
        <p>Switch between "Images" and "Text" at the top right of the list. In "Text" view, every creature's heartbeat lines up as an ECG waveform, so you can compare the rapid ripples of the sparrow and mouse with the elephant's slow, gentle waves. The detail screen shows a large ECG monitor with the heart rate and the interval between beats.</p>
        <ul class="modes" aria-label="List views">
          <li>Images: the creature and its beating heart</li><li>Text: ECG waveforms and heart rates</li>
        </ul>
      </div>
      <div class="rank-shots">
        <img src="../image/Kodo/03_monitor_list.jpg" alt="List screen with heartbeats shown as ECG waveforms" loading="lazy" width="739" height="1606" />
        <img src="../image/Kodo/04_monitor_detail_horse.jpg" alt="ECG monitor screen for the horse" loading="lazy" width="739" height="1606" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>Kodo -Heart Museum- Screenshots</h2>
        <p>Scroll sideways to see every screen.</p>
      </div>
      <div class="gallery" aria-label="Kodo -Heart Museum- screenshots">
        <figure><img src="../image/Kodo/01_list.jpg" alt="Heartbeat specimen list screen" loading="lazy" width="739" height="1606" /><figcaption>The heartbeat specimen list</figcaption></figure>
        <figure><img src="../image/Kodo/02_detail_horse.jpg" alt="Detail screen of a horse's heartbeat" loading="lazy" width="739" height="1606" /><figcaption>Heart rates that change with activity</figcaption></figure>
        <figure><img src="../image/Kodo/03_monitor_list.jpg" alt="List screen with heartbeats shown as ECG waveforms" loading="lazy" width="739" height="1606" /><figcaption>Line them up as ECGs</figcaption></figure>
        <figure><img src="../image/Kodo/04_monitor_detail_horse.jpg" alt="ECG monitor screen for the horse" loading="lazy" width="739" height="1606" /><figcaption>ECG monitor</figcaption></figure>
        <figure><img src="../image/Kodo/05_detail_human.jpg" alt="Detail screen of a human's heartbeat" loading="lazy" width="739" height="1606" /><figcaption>Compare with your own heartbeat</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="Download Kodo -Heart Museum-">
      <img class="download-icon" src="../image/icon/kodo.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>Every heartbeat, <wbr />in the palm of your hand.</h2><p>A heartbeat specimen app that lets you feel each creature's unique pace of life through vibration.</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/6444230294" target="_blank" rel="noopener">View on the App Store</a>
    </section>

    <section class="support" id="support" aria-label="Support">
      <article class="support-card">
        <h2>Contact</h2>
        <p>We welcome your feedback, feature requests and bug reports.</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">Contact us via Twitter DM</a>
      </article>
      <article class="support-card">
        <h2>Privacy</h2>
        <p>This app never collects personally identifiable information such as your name. It uses Google AdMob to display ads. For details, please see our Privacy Policy.</p>
        <a class="text-link" href="../privacy.html">Read the Privacy Policy</a>
      </article>
      <article class="support-card">
        <h2>Can't feel the vibration?</h2>
        <ul>
          <li>Vibration only plays while a creature's detail screen is open</li>
          <li>Check that "System Haptics" is turned on in Settings &gt; Sounds &amp; Haptics</li>
          <li>Hold your iPhone firmly in your palm</li>
        </ul>
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
