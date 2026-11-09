window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["ebiFly"] = window.SITE_I18N["ebiFly"] || {})["ko"] = {
  title: "에비후라이 - 날아라! 새우튀김",
  description: "에비후라이는 새우튀김을 하늘 저편까지 날려 보내는 액션 게임입니다. 튀김옷을 입히고, 튀기고, 소스를 뿌리면 발사! 새와 비행기, 운석을 피하며 얼마나 높이 날 수 있는지 겨뤄 보세요.",
  html: `
  <header class="hero">
    <img class="cloud c1" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c2" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c3" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="cloud c4" src="../image/EbiFly/art/cloud.png" alt="" aria-hidden="true" />
    <img class="flyer f1" src="../image/EbiFly/art/shrimp-normal.png" alt="" aria-hidden="true" />
    <img class="flyer f2" src="../image/EbiFly/art/shrimp-heart.png" alt="" aria-hidden="true" />
    <img class="flyer f3" src="../image/EbiFly/art/shrimp-crown.png" alt="" aria-hidden="true" />

    <nav class="topbar wrap" aria-label="페이지 내비게이션">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 앱 목록</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#flow">플레이 방법</a>
        <a href="#sky">하늘 구역</a>
        <a href="#features">특징</a>
        <a href="#screenshots">화면</a>
        <a href="#support">지원</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/ebiFly.png" alt="에비후라이 앱 아이콘" width="84" height="84" />
          <div><strong>에비후라이</strong><span>iPhone·iPad 지원 / 무료</span></div>
        </div>
        <p class="kicker">날아라!</p>
        <h1>에비후라이</h1>
        <p class="lead">오늘은 어떤 새우튀김을 만들어 볼까…?? <wbr />튀김옷을 입히고, <wbr />바삭하게 튀기고, <wbr />소스를 뿌리면 <wbr />하늘 저편으로 발사! <wbr />새와 비행기, <wbr />운석을 피하면서 <wbr />얼마나 높이 날 수 있을까?</p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id1461666071" target="_blank" rel="noopener">App Store에서 보기</a>
          <a class="button secondary" href="#flow">플레이 방법 보기</a>
        </div>
        <ul class="hero-note" aria-label="지원 정보">
          <li>iPhone·iPad 지원</li>
          <li>흔들기·기울이기 조작</li>
          <li>Game Center 랭킹</li>
        </ul>
      </div>
      <div class="hero-visual">
        <img class="hero-shot left" src="../image/EbiFly/screen_batter.jpg" alt="떨어지는 빵가루를 받는 튀김옷 화면" width="739" height="1606" />
        <img class="hero-shot right" src="../image/EbiFly/screen_fly.jpg" alt="장애물을 피하며 하늘을 나는 화면" width="739" height="1606" />
        <img class="hero-shot main" src="../image/EbiFly/screen_title.jpg" alt="새우튀김이 하늘을 날아다니는 타이틀 화면" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="앱 특징">
    <div class="stat"><strong>5단계</strong><span>만들기·튀김옷·튀기기·소스·날리기</span></div>
    <div class="stat"><strong>우주까지</strong><span>장애물을 피해 끝없이 위로</span></div>
    <div class="stat"><strong>랭킹</strong><span>Game Center에서 비행 거리 대결</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>만들고, <wbr />튀기고, <wbr />날린다.</h2>
        <p>준비를 얼마나 잘했는지가 그대로 비행에 반영됩니다. 한 판은 1분 정도라 몇 번이든 도전할 수 있어요.</p>
      </div>
      <ol class="steps">
        <li class="step">
          <div class="step-media" style="--step-bg: #fff1c9"><img src="../image/EbiFly/screen_make.jpg" alt="꼬리와 몸 길이를 고르는 화면" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>만들기</h3><p>꼬리 모양과 몸 길이를 골라 나만의 새우를 만들어요.</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #f6dc95"><img src="../image/EbiFly/screen_batter.jpg" alt="빵가루를 받는 화면" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>튀김옷</h3><p>떨어지는 빵가루를 받으세요. 금색 빵가루는 3개 분량! 물방울은 조심하세요.</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #3c4a52"><img src="../image/EbiFly/screen_fry.jpg" alt="튀김 정도 게이지를 멈추는 화면" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>튀기기</h3><p>타이밍 좋게 게이지를 멈춰 황금빛을 노려 보세요.</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #ffe0d2"><img src="../image/EbiFly/screen_shake.jpg" alt="iPhone을 흔들어 소스를 뿌리는 화면" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>소스</h3><p>iPhone을 흔들어 소스를 뿌려요. 많이 흔들수록 빠르게 상승!</p></div>
        </li>
        <li class="step">
          <div class="step-media" style="--step-bg: #7fd3ff"><img src="../image/EbiFly/screen_fly.jpg" alt="장애물을 피하며 나는 화면" loading="lazy" width="739" height="1606" /></div>
          <div class="step-body"><h3>날리기</h3><p>기울여서 장애물을 피하세요. 소스 병을 먹으면 연료가 보충돼요.</p></div>
        </li>
      </ol>
    </section>

    <section class="sky-panel" id="sky" aria-labelledby="sky-heading">
      <div>
        <div class="section-heading">
          <p class="section-label">SKY ZONES</p>
          <h2 id="sky-heading">높이 날수록 <wbr />하늘이 달라진다.</h2>
          <p>고도가 올라가면 나타나는 장애물도 바뀝니다. 부딪히면 거기서 끝. 연료가 다 떨어질 때까지 어디까지 갈 수 있을까요?</p>
        </div>
        <ul class="zones">
          <li><img src="../image/EbiFly/art/bird.png" alt="" /><div><strong>새 구역</strong><span>먼저 구름 사이를 나는 새를 피하세요</span></div></li>
          <li><img src="../image/EbiFly/art/plane.png" alt="" /><div><strong>비행기 구역　1,500m~</strong><span>긴 비행기가 빠르게 가로질러 갑니다</span></div></li>
          <li><img src="../image/EbiFly/art/meteor.png" alt="" /><div><strong>운석 구역　3,400m~</strong><span>위에서 쏟아지는 운석을 조심하세요</span></div></li>
          <li><img src="../image/EbiFly/art/fuel.png" alt="" /><div><strong>연료 보충</strong><span>소스 병을 먹으면 연료가 회복돼요!</span></div></li>
        </ul>
      </div>
      <img class="sky-shot" src="../image/EbiFly/screen_fly.jpg" alt="연료 게이지와 상승 속도가 표시된 비행 화면" loading="lazy" width="739" height="1606" />
    </section>

    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>진정한 에비 플라이어를 <wbr />목표로!</h2>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/crumb.png" alt="" style="height:42px" /><img src="../image/EbiFly/art/fuel.png" alt="" /><img src="../image/EbiFly/art/water-drop.png" alt="" style="height:50px" /></div>
          <h3>준비가 비행을 바꾼다</h3>
          <p>빵가루와 튀김 정도로 연료가, 소스로 상승 속도가 정해집니다. 어디서 차이를 낼지는 당신에게 달렸어요.</p>
        </article>
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/shrimp-crown.png" alt="" /><img src="../image/EbiFly/art/shrimp-heart.png" alt="" /><img src="../image/EbiFly/art/shrimp-normal.png" alt="" /></div>
          <h3>칭호와 꼬리 컬렉션</h3>
          <p>기록을 늘리면 칭호가 올라가고, 3,000m를 넘기면 특별한 '왕관 꼬리'를 쓸 수 있어요.</p>
          <ul class="ranks" aria-label="칭호 예시"><li>생새우</li><li>견습 튀김</li><li>황금빛 튀김</li><li>우주 새우튀김</li></ul>
        </article>
        <article class="feature">
          <div class="feature-art" aria-hidden="true"><img src="../image/EbiFly/art/star.png" alt="" style="height:44px" /><img src="../image/EbiFly/art/star.png" alt="" /><img src="../image/EbiFly/art/star.png" alt="" style="height:44px" /></div>
          <h3>랭킹으로 승부</h3>
          <p>비행 거리는 Game Center 랭킹에 기록됩니다. 친구들, 그리고 모두와 누가 더 멀리 나는지 겨뤄 보세요.</p>
        </article>
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENS</p>
        <h2>에비후라이 화면</h2>
      </div>
      <div class="shots">
        <figure><img src="../image/EbiFly/screen_title.jpg" alt="타이틀 화면" loading="lazy" width="739" height="1606" /><figcaption>하늘을 탭하면 장애물이!</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_make.jpg" alt="새우 만들기 화면" loading="lazy" width="739" height="1606" /><figcaption>새우 만들기</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_batter.jpg" alt="튀김옷 화면" loading="lazy" width="739" height="1606" /><figcaption>빵가루 받기</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_fry.jpg" alt="튀기기 화면" loading="lazy" width="739" height="1606" /><figcaption>황금빛을 노려라</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_shake.jpg" alt="소스 화면" loading="lazy" width="739" height="1606" /><figcaption>흔들어서 소스</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_fly.jpg" alt="날리기 화면" loading="lazy" width="739" height="1606" /><figcaption>피하면서 위로</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_result.jpg" alt="결과 화면" loading="lazy" width="739" height="1606" /><figcaption>도시락에 쏙, 결과 발표</figcaption></figure>
        <figure><img src="../image/EbiFly/screen_records.jpg" alt="기록 화면" loading="lazy" width="739" height="1606" /><figcaption>기록과 컬렉션</figcaption></figure>
      </div>
    </section>

    <section class="download-cta" aria-label="에비후라이 다운로드">
      <img class="download-icon" src="../image/icon/ebiFly.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>진정한 에비 플라이어는 <wbr />누구!?</h2><p>튀김옷을 입히고, 튀겨서, 하늘 저편으로. 무료로 즐길 수 있어요.</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id1461666071" target="_blank" rel="noopener">App Store에서 보기</a>
    </section>

    <section class="support" id="support" aria-label="지원 정보">
      <article class="support-card">
        <h2>문의하기</h2>
        <p>의견, 요청, 버그 제보를 받고 있습니다.</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">Twitter DM으로 문의하기</a>
      </article>
      <article class="support-card">
        <h2>개인정보 보호</h2>
        <p>이 앱은 광고 표시에 Google AdMob을, 랭킹에 Apple의 Game Center를 사용합니다. iPhone을 흔들고 기울이는 움직임은 조작을 위해서만 기기 안에서 사용되며, 외부로 전송되지 않습니다. 자세한 내용은 개인정보 처리방침을 확인해 주세요.</p>
        <a class="text-link" href="../privacy.html">개인정보 처리방침 읽기</a>
      </article>
      <article class="support-card">
        <h2>잘 안 될 때는</h2>
        <ul>
          <li>흔들어도 반응이 없을 때는 화면을 탭해도 소스를 뿌릴 수 있습니다</li>
          <li>기울이기 어려울 때는 화면을 좌우로 드래그해도 피할 수 있습니다</li>
          <li>랭킹이 보이지 않을 때는 기기의 '설정'에서 Game Center에 로그인해 주세요</li>
        </ul>
      </article>
    </section>
  </main>

  <footer>
    <div class="footer-row wrap">
      <span>© 2026 Harumi Sagawa — Apps</span>
      <a href="../index.html">앱 목록으로 돌아가기</a>
    </div>
  </footer>
`
};
