window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["tangomiru"] = window.SITE_I18N["tangomiru"] || {})["ko"] = {
  title: "탕고미루 - 영문을 붙여넣기만 하면 나만의 단어장",
  description: "탕고미루는 읽고 싶은 영문을 붙여넣기만 하면 모르는 영단어와 숙어를 골라내 나만의 단어장과 4지선다 퀴즈를 만들어 주는 iPhone·iPad 앱입니다.",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="페이지 내 내비게이션">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 앱 목록</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">특징</a>
        <a href="#flow">사용 방법</a>
        <a href="#screenshots">화면</a>
        <a href="#support">지원</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/tangomiru.png" alt="탕고미루 앱 아이콘" width="84" height="84" />
          <div><strong>탕고미루</strong><span>iPhone·iPad 지원</span></div>
        </div>
        <h1>영문을 <wbr />붙여넣기만 하면<br />나만의 <wbr />단어장.</h1>
        <p class="lead">영어 뉴스나 기사 본문을 붙여넣기만 하면 <wbr />모르는 단어와 숙어를 골라내 <wbr />나만을 위한 단어장과 4지선다 퀴즈를 만들어 줍니다. <wbr />외운 단어가 늘어날수록 <wbr />원래 영문이 술술 읽히게 됩니다.<wbr /></p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6818413919" target="_blank" rel="noopener">App Store에서 보기</a>
          <a class="button secondary" href="#features">기능 보기</a>
        </div>
        <ul class="hero-note" aria-label="주요 정보">
          <li>iPhone·iPad 지원</li>
          <li>AI 처리는 기기 내에서</li>
          <li>사전 내장으로 어떤 기기에서도 사용 가능</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffe65a" stroke="#2b2350" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#2b2350" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/Tangomiru/screen_review.jpg" alt="영문에서 골라낸 단어와 뜻 목록" width="739" height="1606" />
        <img class="hero-shot right" src="../image/Tangomiru/screen_reading.jpg" alt="아직 외우지 못한 단어가 색으로 구분된 독해 모드" width="739" height="1606" />
        <img class="hero-shot main" src="../image/Tangomiru/screen_quiz.jpg" alt="영단어의 뜻을 4개 중에서 고르는 퀴즈 화면" width="739" height="1606" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="앱의 특징">
    <div class="stat"><strong>복붙으로 완성</strong><span>영문에서 단어장 자동 생성</span></div>
    <div class="stat"><strong>한 문제 10초</strong><span>경쾌하게 푸는 4지선다 퀴즈</span></div>
    <div class="stat"><strong>5단계</strong><span>단어별 습득도</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>읽고 싶은 영문이 <wbr />그대로 교재로.</h2>
        <p>시판 단어장이 아니라, 지금 읽고 싶은 영문에서 단어를 외웁니다.</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">A</div>
          <h3>붙여넣기만 하면 단어장</h3>
          <p>중학교 수준의 기본 단어는 빼고, 외워야 할 단어와 숙어만 골라냅니다. 뜻은 그 영문 안에서 쓰인 의미로 표시합니다.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">4</div>
          <h3>경쾌한 4지선다 퀴즈</h3>
          <p>영단어를 보고 일본어 뜻을 4개 중에서 고릅니다. 빠르게 맞힌 단어는 더 일찍 '외움'으로, 시간이 걸린 단어는 다시 출제됩니다.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">%</div>
          <h3>습득도를 한눈에</h3>
          <p>단어마다 '외움', '긴가민가', '약함', '매우 약함', '미학습'으로 관리합니다. 영문별 습득률로 얼마나 읽을 수 있게 되었는지 알 수 있습니다.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">読</div>
          <h3>독해 모드로 원문으로</h3>
          <p>아직 외우지 못한 단어만 색으로 구분해 표시합니다. 단어를 탭하면 바로 뜻을 확인할 수 있습니다.</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO USE</p>
        <h2>붙여넣고, <wbr />풀고, <wbr />읽는다.</h2>
        <p>영문을 찾고 나서 읽을 수 있게 되기까지, 4단계입니다.</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--mint)"><img src="../image/Tangomiru/screen_review.jpg" alt="골라낸 단어 목록" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 1</small><h3>영문 붙여넣기</h3><p>기사 본문을 복사해 붙여넣기만 하면 단어와 숙어를 자동으로 골라냅니다.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/Tangomiru/screen_quiz.jpg" alt="4지선다 퀴즈" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 2</small><h3>퀴즈로 외우기</h3><p>외우지 못한 단어부터 우선 출제. 틀린 단어는 그 자리에서 복습할 수 있습니다.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--yellow)"><img src="../image/Tangomiru/screen_detail.jpg" alt="습득률과 내역" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 3</small><h3>성장 확인하기</h3><p>습득률과 내역으로 어떤 단어가 몸에 익었는지 알 수 있습니다.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--pink)"><img src="../image/Tangomiru/screen_reading.jpg" alt="독해 모드" loading="lazy" width="739" height="1606" /></div>
          <small>STEP 4</small><h3>원문 읽기</h3><p>독해 모드에서 외우지 못한 단어만 확인하며 읽어 나갑니다.</p>
        </article>
      </div>
    </section>

    <section class="section ai-panel" aria-labelledby="ai-heading">
      <div class="ai-copy">
        <p class="section-label">APPLE INTELLIGENCE</p>
        <h2 id="ai-heading">지원 기기라면<br />더 <wbr />깊이 읽을 수 있다.</h2>
        <p>한 문장씩 일본어 번역과 해설을 표시해 문장 구조와 문법 포인트를 배울 수 있습니다. 영문 내용을 묻는 '내용 이해 퀴즈'에서는 정답의 근거가 되는 영문도 하이라이트합니다.</p>
        <small>※AI 처리는 모두 기기 내에서 이루어지며, 입력한 영문이 외부로 전송되지 않습니다. 비지원 기기에서도 내장 사전으로 단어장과 퀴즈를 사용할 수 있습니다.</small>
      </div>
      <div class="ai-shots">
        <img src="../image/Tangomiru/screen_study.jpg" alt="한 문장씩 번역과 해설을 표시하는 화면" loading="lazy" width="739" height="1606" />
        <img src="../image/Tangomiru/screen_comprehension.jpg" alt="내용 이해 퀴즈에서 근거 영문을 하이라이트한 화면" loading="lazy" width="739" height="1606" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>탕고미루 화면</h2>
        <p>옆으로 스크롤해 모든 화면을 볼 수 있습니다.</p>
      </div>
      <div class="gallery" aria-label="탕고미루 스크린샷">
        <figure><img src="../image/Tangomiru/01_review.jpg" alt="영문을 붙여넣기만 하면 단어장 완성" loading="lazy" width="739" height="1599" /><figcaption>단어장 자동 생성</figcaption></figure>
        <figure><img src="../image/Tangomiru/02_quiz.jpg" alt="4지선다 퀴즈로 척척 암기" loading="lazy" width="739" height="1599" /><figcaption>4지선다 퀴즈</figcaption></figure>
        <figure><img src="../image/Tangomiru/03_detail.jpg" alt="습득률로 성장이 보인다" loading="lazy" width="739" height="1599" /><figcaption>습득률과 내역</figcaption></figure>
        <figure><img src="../image/Tangomiru/04_reading.jpg" alt="외우지 못한 단어를 색으로 알 수 있다" loading="lazy" width="739" height="1599" /><figcaption>독해 모드</figcaption></figure>
        <figure><img src="../image/Tangomiru/05_study.jpg" alt="한 문장씩 번역과 해설" loading="lazy" width="739" height="1599" /><figcaption>한 문장씩 배우기</figcaption></figure>
        <figure><img src="../image/Tangomiru/06_comprehension.jpg" alt="내용 이해 퀴즈로 제대로 읽었는지 확인" loading="lazy" width="739" height="1599" /><figcaption>내용 이해 퀴즈</figcaption></figure>
        <figure><img src="../image/Tangomiru/07_library.jpg" alt="좋아하는 영문을 마음껏 교재로" loading="lazy" width="739" height="1599" /><figcaption>영문 라이브러리</figcaption></figure>
      </div>
    </section>

    <section class="section plan" aria-labelledby="plan-heading">
      <div class="plan-mark" aria-hidden="true">👑</div>
      <div>
        <h2 id="plan-heading">광고 제거 플랜<wbr />(월간)</h2>
        <p>앱 내 광고가 모두 표시되지 않는 자동 갱신 구독입니다. App Store 계정 설정에서 언제든지 관리하거나 해지할 수 있습니다.</p>
      </div>
    </section>

    <section class="download-cta" aria-label="탕고미루 다운로드">
      <img class="download-icon" src="../image/icon/tangomiru.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>읽고 싶은 영문에서 <wbr />오늘의 단어를.</h2><p>영문을 붙여넣기만 하면 나만의 단어장.</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6818413919" target="_blank" rel="noopener">App Store에서 보기</a>
    </section>

    <section class="support" id="support" aria-label="지원 정보">
      <article class="support-card">
        <h2>문의하기</h2>
        <p>의견, 요청 사항, 버그 제보를 받고 있습니다.</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">Twitter DM으로 문의하기</a>
      </article>
      <article class="support-card">
        <h2>개인정보 보호</h2>
        <p>학습 기록은 기기에만 저장됩니다. 광고 게재와 관련된 정보의 취급에 대해서는 탕고미루의 개인정보 처리방침을 확인해 주세요.</p>
        <a class="text-link" href="../privacy.html">개인정보 처리방침 읽기</a>
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
