window.SITE_I18N = window.SITE_I18N || {};
(window.SITE_I18N["kuttuke"] = window.SITE_I18N["kuttuke"] || {})["ko"] = {
  title: "KUTTUKE - 사진이 합쳐져 진화하는 낙하 퍼즐",
  description: "KUTTUKE는 내 사진을 오려 내서 즐기는 낙하 퍼즐입니다. 같은 사진끼리 붙으면 다음 사진으로 진화해요. 가족, 반려동물, 최애의 사진으로 나만의 진화 세트를 만들 수 있는 iPhone·iPad 앱입니다.",
  html: `
  <header class="hero">
    <nav class="topbar wrap" aria-label="페이지 내비게이션">
      <a class="back" href="../index.html"><span aria-hidden="true">←</span> 앱 목록</a>
      <div class="nav-links">
        <span data-lang-slot></span>
        <a href="#features">특징</a>
        <a href="#flow">플레이 방법</a>
        <a href="#screenshots">화면</a>
        <a href="#support">지원</a>
      </div>
    </nav>

    <div class="hero-grid wrap">
      <div class="hero-copy">
        <div class="app-brand">
          <img class="app-icon" src="../image/icon/kuttuke.png" alt="KUTTUKE 앱 아이콘" width="84" height="84" />
          <div><strong>KUTTUKE</strong><span>iPhone·iPad 지원</span></div>
        </div>
        <h1>내 <wbr />사진이<br /><em>합쳐져서</em> <wbr />진화!</h1>
        <p class="lead">사진에서 좋아하는 것을 오려 내서 <wbr />작은 순서대로 늘어놓기만 하면 끝. <wbr />같은 사진끼리 붙으면 <wbr />다음 사진으로 진화해 점점 커지는 <wbr />낙하 퍼즐입니다. <wbr /></p>
        <div class="actions">
          <a class="button primary" href="https://apps.apple.com/jp/app/id6820843882" target="_blank" rel="noopener">App Store에서 보기</a>
          <a class="button secondary" href="#features">특징 보기</a>
        </div>
        <ul class="hero-note" aria-label="지원 정보">
          <li>iPhone·iPad 지원</li>
          <li>내 사진으로 플레이</li>
          <li>Game Center 랭킹</li>
        </ul>
      </div>
      <div class="hero-visual">
        <svg class="sparkle one" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffd140" stroke="#1b1f20" stroke-width="7" stroke-linejoin="round"/></svg>
        <svg class="sparkle two" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z" fill="#ffffff" stroke="#1b1f20" stroke-width="7" stroke-linejoin="round"/></svg>
        <img class="hero-shot left" src="../image/Kuttuke/screen_editor.jpg" alt="사진을 작은 순서대로 늘어놓는 진화 세트 편집 화면" width="739" height="1605" />
        <img class="hero-shot right" src="../image/Kuttuke/screen_result.jpg" alt="랭크인을 꽃가루로 축하하는 결과 화면" width="739" height="1605" />
        <img class="hero-shot main" src="../image/Kuttuke/screen_game.jpg" alt="오려 낸 사진이 쌓여 있는 플레이 화면" width="739" height="1605" />
      </div>
    </div>
  </header>

  <div class="statbar wrap" aria-label="앱 특징">
    <div class="stat"><strong>6~11장</strong><span>좋아하는 사진으로 진화 세트</span></div>
    <div class="stat"><strong>개수별</strong><span>Game Center 랭킹</span></div>
    <div class="stat"><strong>코드로 공유</strong><span>친구와 같은 스테이지에서 플레이</span></div>
  </div>

  <main class="wrap">
    <section class="section" id="features">
      <div class="section-heading">
        <p class="section-label">FEATURES</p>
        <h2>내 사진이 <wbr />그대로 게임으로.</h2>
        <p>가족, 반려동물, 최애, 여행의 추억. 아끼는 사진이 합쳐지며 자라나는 퍼즐이 됩니다.</p>
      </div>
      <div class="features">
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">📸</div>
          <h3>사진을 오려 소재로</h3>
          <p>사진 속 사람이나 물건을 길게 누르기만 하면 오려 낼 수 있어요. 한 번 오린 소재는 저장되어 다른 스테이지에서도 몇 번이든 쓸 수 있습니다.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🔗</div>
          <h3>합쳐서 크게 키우기</h3>
          <p>같은 사진끼리 부딪히면 다음 사진으로 진화합니다. 최종 형태끼리 합쳐지면 반짝 사라지며 보너스 점수!</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">🏆</div>
          <h3>개수별 랭킹</h3>
          <p>사용하는 사진 수(6~11개)마다 Game Center 랭킹이 따로 있어요. 랭크인하면 순위와 꽃가루로 축하해 드립니다.</p>
        </article>
        <article class="feature">
          <div class="feature-icon" aria-hidden="true">💌</div>
          <h3>친구에게 스테이지 공유</h3>
          <p>만든 스테이지는 8자리 코드로 친구에게 보낼 수 있어요. 받은 친구도 같은 사진과 진화 소리로 즐길 수 있습니다.</p>
        </article>
      </div>
    </section>

    <section class="section" id="flow">
      <div class="section-heading">
        <p class="section-label">HOW TO PLAY</p>
        <h2>오리고, <wbr />늘어놓고, <wbr />합친다.</h2>
        <p>사진을 고르고 플레이하기까지 4단계면 충분해요.</p>
      </div>
      <div class="steps">
        <article class="step">
          <div class="step-media" style="--step-bg: var(--mint)"><img src="../image/Kuttuke/screen_editor.jpg" alt="진화 세트 편집 화면" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 1</small><h3>사진 오려 내기</h3><p>사진을 고르고, 쓰고 싶은 피사체를 길게 눌러 오려 냅니다.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--orange)"><img src="../image/Kuttuke/screen_home.jpg" alt="만든 스테이지가 늘어선 홈 화면" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 2</small><h3>작은 순서대로 늘어놓기</h3><p>6~11개의 사진을 진화 순서대로 늘어놓으면 스테이지 완성입니다.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--yellow)"><img src="../image/Kuttuke/screen_game.jpg" alt="사진을 떨어뜨리며 플레이하는 화면" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 3</small><h3>떨어뜨려서 합치기</h3><p>손가락을 좌우로 움직이다 떼면 떨어집니다. 같은 사진끼리 진화시켜 보세요.</p>
        </article>
        <article class="step">
          <div class="step-media" style="--step-bg: var(--pink)"><img src="../image/Kuttuke/screen_share.jpg" alt="스테이지 공유 코드를 표시한 화면" loading="lazy" width="739" height="1605" /></div>
          <small>STEP 4</small><h3>친구와 공유</h3><p>점수 이미지를 SNS에 공유하거나, 스테이지를 코드로 보낼 수 있어요.</p>
        </article>
      </div>
    </section>

    <section class="section rank-panel" aria-labelledby="rank-heading">
      <div class="rank-copy">
        <p class="section-label">RANKING</p>
        <h2 id="rank-heading">전 세계 <wbr />라이벌과<br />점수로 승부.</h2>
        <p>사진 수별로 나뉜 Game Center 랭킹에서 전 세계 플레이어와 겨룰 수 있어요. 자기 최고 기록을 경신해 랭크인하면 결과 화면에 순위가 표시됩니다.</p>
        <small>※랭킹에 참여하려면 Game Center에 로그인해야 합니다.</small>
      </div>
      <div class="rank-shots">
        <img src="../image/Kuttuke/screen_game.jpg" alt="사진이 쌓여 있는 플레이 화면" loading="lazy" width="739" height="1605" />
        <img src="../image/Kuttuke/screen_result.jpg" alt="세계 1위로 랭크인한 결과 화면" loading="lazy" width="739" height="1605" />
      </div>
    </section>

    <section class="section" id="screenshots">
      <div class="section-heading">
        <p class="section-label">SCREENSHOTS</p>
        <h2>KUTTUKE 화면</h2>
        <p>옆으로 스크롤하면 모든 화면을 볼 수 있어요.</p>
      </div>
      <div class="gallery" aria-label="KUTTUKE 스크린샷">
        <figure><img src="../image/Kuttuke/01_game.jpg" alt="사진이 합쳐져서 진화!" loading="lazy" width="739" height="1605" /><figcaption>사진이 합쳐져서 진화</figcaption></figure>
        <figure><img src="../image/Kuttuke/02_editor.jpg" alt="좋아하는 사진으로 진화 세트" loading="lazy" width="739" height="1605" /><figcaption>진화 세트 만들기</figcaption></figure>
        <figure><img src="../image/Kuttuke/03_result.jpg" alt="개수별 랭킹으로 승부" loading="lazy" width="739" height="1605" /><figcaption>개수별 랭킹</figcaption></figure>
        <figure><img src="../image/Kuttuke/04_share.jpg" alt="만든 스테이지를 친구에게" loading="lazy" width="739" height="1605" /><figcaption>친구에게 공유</figcaption></figure>
        <figure><img src="../image/Kuttuke/05_home.jpg" alt="몇 개든 만들어서 즐길 수 있어요" loading="lazy" width="739" height="1605" /><figcaption>스테이지 모으기</figcaption></figure>
      </div>
    </section>

    <section class="section sound" aria-labelledby="sound-heading">
      <div class="sound-mark" aria-hidden="true">🎤</div>
      <div>
        <h2 id="sound-heading">진화 소리도 <wbr />내 목소리로.</h2>
        <p>'고급 설정'에서 사진마다 진화할 때 나는 소리를 설정할 수 있어요. 그 자리에서 녹음해도, 오디오 파일을 골라도 OK. 설정하지 않은 사진은 기본 '뿅' 소리가 납니다.</p>
      </div>
    </section>

    <section class="download-cta" aria-label="KUTTUKE 다운로드">
      <img class="download-icon" src="../image/icon/kuttuke.png" alt="" width="92" height="92" />
      <div class="download-copy"><h2>아끼는 사진으로 <wbr />합쳐 보세요.</h2><p>내 사진으로 즐기는 낙하 퍼즐.</p></div>
      <a class="button" href="https://apps.apple.com/jp/app/id6820843882" target="_blank" rel="noopener">App Store에서 보기</a>
    </section>

    <section class="support" id="support" aria-label="지원 정보">
      <article class="support-card">
        <h2>문의하기</h2>
        <p>의견, 요청, 버그 제보를 받고 있습니다.</p>
        <a class="text-link" href="https://twitter.com/u11238123" target="_blank" rel="noopener">Twitter DM으로 문의하기</a>
      </article>
      <article class="support-card">
        <h2>개인정보 보호</h2>
        <p>오려 낸 사진과 스테이지는 기기 안에 저장됩니다. 친구에게 스테이지를 공유할 때만 사진과 음성을 iCloud에 업로드합니다. 자세한 내용은 개인정보 처리방침을 확인해 주세요.</p>
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
