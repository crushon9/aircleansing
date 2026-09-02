export default function HomeNavigation() {
  return (
    <>
      <a className="brand floating-brand" href="#top" aria-label="AIR CLEANSING 홈">
        <span>
          <strong>AIR CLEANSING</strong>
          <small>PHYTONCIDE SPACE CARE</small>
        </span>
      </a>
      <header className="site-header">
        <nav className="desktop-nav" aria-label="주요 메뉴">
          <a href="#top">홈</a>
          <a href="#story">브랜드 이야기</a>
          <a href="#gallery">한눈에 보기</a>
          <a href="#product">제품 소개</a>
          <a href="#features">설계 기준</a>
          <a href="#ingredients">핵심 원료</a>
          <a href="#technology">분산 기술</a>
          <a href="#usage">공간 루틴</a>
          <a href="#howto">사용 방법</a>
          <a href="#contact">구매 안내</a>
        </nav>
      </header>
      <a className="header-action floating-purchase" href="#contact" data-magnetic>구매 안내</a>
      <nav className="mobile-section-nav" aria-label="모바일 주요 메뉴">
        <a href="#top">홈</a>
        <a href="#story">이야기</a>
        <a href="#gallery">한눈에</a>
        <a href="#product">제품</a>
        <a href="#features">설계</a>
        <a href="#ingredients">원료</a>
        <a href="#technology">기술</a>
        <a href="#usage">공간</a>
        <a href="#howto">사용법</a>
        <a href="#contact">구매</a>
      </nav>
    </>
  );
}
