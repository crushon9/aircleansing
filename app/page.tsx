import Image from "next/image";
import InteractiveEffects from "./interactive-effects";

const ingredients = [
  {
    number: "01",
    name: "편백 플로럴워터",
    english: "HINOKI FLORAL WATER",
    description: "편백을 증류해 얻은 워터 베이스로 포뮬러의 산뜻한 시작을 만듭니다.",
    tone: "water",
    image: "/images/ingredient-hinoki-water-botanical.webp",
    imageAlt: "햇빛을 받은 신선한 편백 잎",
  },
  {
    number: "02",
    name: "편백 오일",
    english: "HINOKI OIL",
    description: "편백 특유의 차분하고 맑은 숲 향을 더하는 핵심 아로마 오일입니다.",
    tone: "forest",
    image: "/images/ingredient-hinoki-oil-botanical.webp",
    imageAlt: "편백 오일의 우디한 인상을 표현한 나무와 편백 잎",
  },
  {
    number: "03",
    name: "프랑스 해안송 오일",
    english: "MARITIME PINE OIL",
    description: "소나무의 선명한 향조가 공간에 깊이감 있는 그린 노트를 더합니다.",
    tone: "pine",
    image: "/images/ingredient-pine-oil-botanical.webp",
    imageAlt: "온전한 형태의 푸른 해안송 가지",
  },
  {
    number: "04",
    name: "베르가못 오일",
    english: "BERGAMOT OIL",
    description: "상쾌한 시트러스 향조로 무겁지 않고 산뜻한 마무리를 돕습니다.",
    tone: "citrus",
    image: "/images/ingredient-bergamot-botanical.webp",
    imageAlt: "잎이 달린 초록 베르가못 열매",
  },
  {
    number: "05",
    name: "비타민 B3 · B5",
    english: "NIACINAMIDE · PANTHENOL",
    description: "패브릭과 생활 공간에 사용하는 제품의 배합 균형을 고려해 더했습니다.",
    tone: "vitamin",
    image: "/images/ingredient-vitamins-botanical.webp",
    imageAlt: "맑은 워터 속 투명한 미세 입자",
  },
];

const useCases = [
  {
    number: "01",
    title: "침구와 패브릭",
    text: "매일 사용하는 이불과 패브릭에 가볍게 분사하세요.",
    image: "/images/use-bedding.webp",
    imageAlt: "햇살이 비치는 깨끗한 아이보리 침구와 패브릭",
  },
  {
    number: "02",
    title: "옷과 안방",
    text: "외출 후 의류와 자주 머무는 공간을 산뜻하게 관리하세요.",
    image: "/images/use-bedroom-wardrobe.webp",
    imageAlt: "차분한 안방과 정돈된 옷장",
  },
  {
    number: "03",
    title: "신발과 신발장",
    text: "공기가 쉽게 답답해지는 수납 공간에 활용하세요.",
    image: "/images/use-shoe-cabinet.webp",
    imageAlt: "밝은 현관에 정돈된 신발과 원목 신발장",
  },
  {
    number: "04",
    title: "소파와 새 가구",
    text: "생활 냄새가 머물기 쉬운 패브릭 가구 주변에 사용하세요.",
    image: "/images/use-sofa-furniture.webp",
    imageAlt: "리넨 소파와 밝은 원목 가구가 놓인 거실",
  },
  {
    number: "05",
    title: "화장실",
    text: "사용 후 환기와 함께 공간 케어 루틴으로 더해보세요.",
    image: "/images/use-bathroom.webp",
    imageAlt: "돌과 나무 소재로 정돈한 깨끗한 욕실",
  },
  {
    number: "06",
    title: "싱크대 주변",
    text: "음식 냄새가 남기 쉬운 주방 주변을 산뜻하게 관리하세요.",
    image: "/images/use-kitchen-sink.webp",
    imageAlt: "밝은 석재 상판과 깨끗한 주방 싱크대",
  },
  {
    number: "07",
    title: "아이 방",
    text: "사용 전 제품 표시사항을 확인하고 공간에 가볍게 사용하세요.",
    image: "/images/use-child-room.webp",
    imageAlt: "밝은 원목 가구와 부드러운 침구로 꾸민 아이 방",
  },
  {
    number: "08",
    title: "차량 실내",
    text: "밀폐된 차량은 환기한 뒤 필요한 곳에 적당량 사용하세요.",
    image: "/images/use-car-interior.webp",
    imageAlt: "자연광이 드는 깨끗하고 차분한 차량 실내",
  },
];

const features = [
  {
    number: "01",
    title: "향을 넘어선\n공간 케어",
    text: "진한 향으로 공간을 채우기보다 편백과 시트러스가 어우러진 산뜻한 사용감을 지향합니다.",
    image: "/images/feature-space-care.webp",
    imageAlt: "숲의 향을 느끼는 편안한 일상의 순간",
  },
  {
    number: "02",
    title: "패브릭 사용을\n고려한 배합",
    text: "침구와 의류 등 일상 패브릭에 사용하는 상황을 고려해 나이아신아마이드와 판테놀을 함께 배합했습니다.",
    image: "/images/feature-fabric.webp",
    imageAlt: "정돈된 옷장과 차분한 패브릭",
  },
  {
    number: "03",
    title: "계면활성제 없이\n완성한 분산",
    text: "오일과 워터가 어우러질 수 있도록 C3 원심력 콜로이드 분산 방식을 적용했습니다.",
    image: "/images/feature-dispersion.webp",
    imageAlt: "오일과 워터의 미세 입자 분산을 표현한 이미지",
  },
];

const technologySteps = [
  {
    number: "01",
    english: "CENTRIFUGAL",
    title: "원심력 분산",
    text: "오일과 워터가 균일하게 어우러질 수 있는 첫 단계를 만듭니다.",
    symbol: "centrifugal",
  },
  {
    number: "02",
    english: "NANO-CRACKING",
    title: "미세화 과정",
    text: "배합 성분을 미세하게 다루어 안정적인 분산을 돕습니다.",
    symbol: "nano",
  },
  {
    number: "03",
    english: "COLLOID SYSTEM",
    title: "콜로이드 시스템",
    text: "사용 전 흔들었을 때 성분이 고르게 섞일 수 있도록 설계합니다.",
    symbol: "colloid",
  },
];

const howToSteps = [
  {
    number: "1",
    title: "사용 전 흔들기",
    text: "오일과 워터가 충분히 섞이도록 용기를 가볍게 흔들어 주세요.",
    image: "/images/howto-shake.webp",
    imageAlt: "사용 전에 흔들어 섞는 AIR CLEANSING 용기",
  },
  {
    number: "2",
    title: "적당한 거리 두기",
    text: "대상에서 거리를 두고 한곳에 과도하게 젖지 않도록 분사하세요.",
    image: "/images/howto-spray.webp",
    imageAlt: "옷장 앞에서 패브릭을 향해 적당한 거리를 두고 분사하는 모습",
  },
  {
    number: "3",
    title: "마르고 난 뒤 사용",
    text: "패브릭은 충분히 마른 것을 확인하고 공간은 환기해 주세요.",
    image: "/images/howto-dry.webp",
    imageAlt: "햇빛과 바람이 드는 깨끗한 침구와 환기된 공간",
  },
];

const visualStories = [
  {
    src: "/images/story-bedroom.jpg",
    alt: "침실에서 생활 냄새를 확인하는 모습",
    label: "LIVING AIR",
    title: "생활 냄새가 신경 쓰이는 순간",
    layout: "visual-card-tall",
    width: 420,
    height: 740,
  },
  {
    src: "/images/story-daily-spray.jpg",
    alt: "침구와 옷장 주변에 스프레이를 사용하는 모습",
    label: "DAILY RITUAL",
    title: "매일 사용하는 패브릭 가까이",
    layout: "",
    width: 225,
    height: 500,
  },
  {
    src: "/images/story-aroma.jpg",
    alt: "숲의 향을 편안하게 느끼는 모습",
    label: "AROMA BALANCE",
    title: "무겁지 않은 숲의 인상",
    layout: "",
    width: 320,
    height: 350,
  },
  {
    src: "/images/story-colloid.jpg",
    alt: "콜로이드 분산을 표현한 투명한 입자 이미지",
    label: "C3 SYSTEM",
    title: "오일과 워터를 잇는 분산 기술",
    layout: "",
    width: 300,
    height: 310,
  },
  {
    src: "/images/story-forest.jpg",
    alt: "초록 이끼가 자라는 숲속 나무 표면",
    label: "FROM FOREST",
    title: "숲에서 가져온 시각적 영감",
    layout: "",
    width: 95,
    height: 240,
  },
  {
    src: "/images/story-ingredients.jpg",
    alt: "편백, 나무, 해안송, 베르가못 등 핵심 원료 이미지 모음",
    label: "INGREDIENTS",
    title: "다섯 가지 핵심 원료",
    layout: "visual-card-tall visual-card-ingredients",
    width: 225,
    height: 1000,
  },
];

export default function Home() {
  return (
    <main>
      <InteractiveEffects />
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="AIR CLEANSING 홈">
            <span className="brand-mark" aria-hidden="true">AC</span>
            <span>
              <strong>AIR CLEANSING</strong>
              <small>PHYTONCIDE SPACE CARE</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            <a href="#story">브랜드 이야기</a>
            <a href="#ingredients">원료</a>
            <a href="#technology">기술</a>
            <a href="#usage">사용법</a>
          </nav>
          <a className="header-action" href="#contact" data-magnetic>구매 안내</a>
        </header>
        <nav className="mobile-section-nav" aria-label="모바일 주요 메뉴">
          <a href="#story">이야기</a>
          <a href="#gallery">이미지</a>
          <a href="#ingredients">원료</a>
          <a href="#technology">기술</a>
          <a href="#usage">사용법</a>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">FOREST-INSPIRED DAILY CARE</p>
            <h1 id="hero-title">
              <span className="headline-line"><span>향으로 덮기보다,</span></span>
              <span className="headline-line"><em>공기를 클렌징하다.</em></span>
            </h1>
            <p className="hero-description">
              매일 닿는 침구와 옷, 생활 공간을 위해 편백과 베르가못의
              산뜻함을 담은 피톤치드 스페이스 케어입니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#story" data-magnetic>제품 이야기</a>
              <a className="text-link" href="#usage">어디에 사용할까요?</a>
            </div>
            <dl className="hero-notes" aria-label="제품 특징 요약">
              <div><dt>01</dt><dd>편백 기반 포뮬러</dd></div>
              <div><dt>02</dt><dd>일상 공간 케어</dd></div>
              <div><dt>03</dt><dd>500 ml 대용량</dd></div>
            </dl>
          </div>

          <div className="hero-visual" aria-label="AIR CLEANSING 제품 이미지" data-reveal data-parallax>
            <div className="hero-image-frame">
              <Image
                src="/images/air-cleansing-hero.jpg"
                alt="편백과 베르가못 식물 사이에 놓인 AIR CLEANSING 스프레이 제품"
                width={900}
                height={900}
                sizes="(max-width: 900px) calc(100vw - 48px), 52vw"
                loading="eager"
              />
            </div>
            <div className="floating-note" aria-hidden="true">
              <span>DAILY RITUAL</span>
              <strong>나의 공간에<br />숲을 선물하세요.</strong>
            </div>
          </div>
          <a className="hero-scroll-cue" href="#story" aria-label="제품 이야기로 이동">
            <span>SCROLL TO DISCOVER</span>
            <i aria-hidden="true" />
          </a>
        </div>
        <div className="statement-band" aria-label="브랜드 핵심 가치">
          <div className="statement-track">
            {[0, 1].map((group) => (
              <div className="statement-group" key={group} aria-hidden={group === 1 ? "true" : undefined}>
                <span>PHYTONCIDE</span><i aria-hidden="true" />
                <span>FOREST AROMA</span><i aria-hidden="true" />
                <span>DAILY SPACE CARE</span><i aria-hidden="true" />
                <span>AIR CLEANSING</span><i aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story section" id="story" aria-labelledby="story-title">
        <div className="section-heading story-heading" data-reveal>
          <p className="section-kicker">OUR POINT OF VIEW</p>
          <h2 id="story-title">
            매일 뿌리는 탈취제,
            <br />
            <em>향만 남아도 괜찮을까요?</em>
          </h2>
        </div>
        <div className="story-grid" data-reveal>
          <p className="story-lead">
            뿌릴 때는 진한 향이 나지만 시간이 지나면 다시 느껴지는 생활 냄새.
            AIR CLEANSING은 사용감, 원료의 균형과 공간에 남는 향의 인상까지 함께 고민했습니다.
          </p>
          <div className="question-list">
            <article>
              <span>Q1</span>
              <p>시간이 지나면 다시 답답하게 느껴지는 이유는 무엇일까요?</p>
            </article>
            <article>
              <span>Q2</span>
              <p>침구와 옷에 매일 닿는 제품의 배합을 얼마나 살펴보고 있나요?</p>
            </article>
            <article>
              <span>Q3</span>
              <p>향의 강도보다 매일 편안하게 이어지는 루틴이 중요하지 않을까요?</p>
            </article>
          </div>
        </div>
      </section>

      <section className="visual-story-section section" id="gallery" aria-labelledby="visual-story-title">
        <div className="visual-story-heading" data-reveal>
          <div>
            <p className="section-kicker">VISUAL STORY</p>
            <h2 id="visual-story-title">공간에서 시작해<br /><em>숲의 감각으로.</em></h2>
          </div>
          <p>
            생활 냄새가 신경 쓰이는 순간부터 원료와 기술의 이미지까지,
            AIR CLEANSING이 만들어지는 이야기를 한눈에 살펴보세요.
          </p>
        </div>
        <div className="visual-story-grid">
          {visualStories.map((story, index) => (
            <article
              className={`visual-card ${story.layout}`.trim()}
              key={story.src}
              data-reveal
              data-reactive-card
              data-parallax
            >
              <Image
                src={story.src}
                alt={story.alt}
                fill
                sizes="(max-width: 560px) 88vw, (max-width: 900px) 46vw, 25vw"
              />
              <div className="visual-card-caption">
                <span>{story.label}</span>
                <strong>{story.title}</strong>
              </div>
              <span className="visual-card-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section section" id="product" aria-labelledby="product-title">
        <div className="product-photo-wrap" data-reveal>
          <span className="photo-label">MADE IN KOREA · 500 ml</span>
          <Image
            className="product-photo"
            src="/images/air-cleansing-studio.webp"
            alt="아이보리 스튜디오 배경에 놓인 AIR CLEANSING 500밀리리터 스프레이 제품"
            width={1122}
            height={1402}
            sizes="(max-width: 900px) 100vw, 53vw"
          />
        </div>
        <div className="product-copy" data-reveal>
          <p className="section-kicker">AIR CLEANSING</p>
          <h2 id="product-title">매일 닿는 공간을 위한<br /><em>가볍고 산뜻한 선택.</em></h2>
          <p>
            편백의 차분한 숲 향과 베르가못의 맑은 시트러스 향조를 담았습니다.
            침구, 의류, 신발장과 욕실 등 생활 냄새가 신경 쓰이는 순간에 필요한 만큼 사용하세요.
          </p>
          <div className="aroma-profile" aria-label="우디, 그린, 시트러스가 어우러진 향의 인상">
            <div className="aroma-profile-heading">
              <span>AROMA PROFILE</span>
              <small>WOODY · GREEN · CITRUS</small>
            </div>
            <ol>
              <li className="aroma-woody"><span>우디</span><i aria-hidden="true" /></li>
              <li className="aroma-green"><span>그린</span><i aria-hidden="true" /></li>
              <li className="aroma-citrus"><span>시트러스</span><i aria-hidden="true" /></li>
            </ol>
          </div>
          <dl className="product-specs">
            <div><dt>제품 유형</dt><dd>피톤치드 스페이스 케어 스프레이</dd></div>
            <div><dt>용량</dt><dd>500 ml</dd></div>
            <div><dt>사용 전</dt><dd>내용물이 섞이도록 충분히 흔들기</dd></div>
            <div><dt>제조</dt><dd>Made in Korea</dd></div>
          </dl>
        </div>
      </section>

      <section className="features-section section" aria-labelledby="features-title">
        <div className="section-heading centered-heading" data-reveal>
          <p className="section-kicker">FORMULATED WITH INTENTION</p>
          <h2 id="features-title">매일의 사용을 생각한<br /><em>세 가지 설계 기준</em></h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number} data-reveal data-reactive-card>
              <div className="feature-card-media">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  sizes="(max-width: 560px) 82vw, (max-width: 900px) 100vw, 33vw"
                />
                <span className="feature-number">{feature.number}</span>
              </div>
              <div className="feature-card-body">
                <h3>{feature.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ingredients-section section" id="ingredients" aria-labelledby="ingredients-title">
        <div className="ingredients-intro" data-reveal>
          <p className="section-kicker">INGREDIENT STORY</p>
          <h2 id="ingredients-title">숲의 인상과<br /><em>산뜻한 균형을 담다.</em></h2>
          <p>
            공간에 머무는 향의 시작부터 사용 후의 인상까지 고려해 다섯 가지 핵심 원료를 선택했습니다.
          </p>
          <figure className="ingredients-visual" data-reveal>
            <Image
              src="/images/ingredients-botanical.webp"
              alt="편백 잎과 나무, 해안송, 베르가못, 오일과 워터를 함께 구성한 원료 이미지"
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 38vw"
            />
            <figcaption>
              <span>THE BOTANICAL BASE</span>
              <strong>편백 · 해안송 · 베르가못</strong>
            </figcaption>
          </figure>
        </div>
        <ol className="ingredient-list">
          {ingredients.map((ingredient) => (
            <li key={ingredient.number} data-reveal>
              <span className={`ingredient-orb ${ingredient.tone}`}>
                <Image
                  src={ingredient.image}
                  alt={ingredient.imageAlt}
                  fill
                  sizes="(max-width: 680px) 56px, (max-width: 900px) 66px, (max-width: 1100px) 62px, 70px"
                />
              </span>
              <div className="ingredient-title">
                <span>{ingredient.number}</span>
                <h3>{ingredient.name}</h3>
                <small>{ingredient.english}</small>
              </div>
              <p>{ingredient.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="technology-section section" id="technology" aria-labelledby="technology-title">
        <div className="technology-copy" data-reveal>
          <p className="section-kicker light">C3 COLLOID DISPERSION</p>
          <h2 id="technology-title">계면활성제 대신<br /><em>분산 기술을 선택했습니다.</em></h2>
          <p>
            오일과 워터가 한 병 안에서 어우러지도록 원심력, 미세화, 콜로이드 분산의 세 단계를 적용한 제조 방식을 사용합니다.
          </p>
          <figure className="technology-visual" data-reveal data-parallax>
            <Image
              src="/images/technology-dispersion.webp"
              alt="맑은 물속에서 투명한 오일 미세 입자가 고르게 퍼지는 모습을 표현한 이미지"
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
            />
            <figcaption>
              <span>OIL × WATER</span>
              <strong>미세 액적 분산</strong>
            </figcaption>
          </figure>
          <div className="shake-note">
            <span aria-hidden="true">↻</span>
            <strong>사용 전 충분히 흔들어 주세요.</strong>
          </div>
        </div>
        <ol className="technology-steps" data-reveal>
          {technologySteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div><small>{step.english}</small><h3>{step.title}</h3><p>{step.text}</p></div>
              <div className={`technology-symbol ${step.symbol}`} aria-hidden="true">
                {Array.from({ length: 8 }, (_, index) => <i key={index} />)}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="usage-section section" id="usage" aria-labelledby="usage-title">
        <div className="section-heading usage-heading" data-reveal>
          <p className="section-kicker">WHERE TO USE</p>
          <h2 id="usage-title">생활 곳곳에 더하는<br /><em>산뜻한 공간 루틴</em></h2>
          <p>환기와 함께, 생활 냄새가 신경 쓰이는 순간 필요한 곳에 적당량 사용하세요.</p>
        </div>
        <div className="usage-grid">
          {useCases.map((item) => (
            <article className="usage-card" key={item.number} data-reveal data-reactive-card>
              <div className="usage-card-media">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 560px) 82vw, (max-width: 900px) 50vw, 25vw"
                />
                <span className="usage-card-number">{item.number}</span>
              </div>
              <div className="usage-card-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="howto-section section" aria-labelledby="howto-title">
        <div className="section-heading centered-heading" data-reveal>
          <p className="section-kicker">HOW TO USE</p>
          <h2 id="howto-title">흔들고, 가볍게 분사하고,<br /><em>충분히 환기하세요.</em></h2>
        </div>
        <ol className="howto-list" data-reveal>
          {howToSteps.map((step) => (
            <li key={step.number}>
              <div className="howto-media">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <span>{step.number}</span>
              </div>
              <div className="howto-copy">
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="caution-box" data-reveal>
          <strong>사용 전 확인해 주세요</strong>
          <p>
            제품에 표시된 용도와 주의사항을 먼저 확인하세요. 눈이나 입에 직접 분사하지 말고,
            변색이 우려되는 소재는 눈에 띄지 않는 곳에 먼저 시험한 뒤 사용하세요.
          </p>
        </div>
      </section>

      <section className="closing-section" id="contact" aria-labelledby="closing-title">
        <div className="closing-copy" data-reveal>
          <p className="section-kicker light">BRING THE FOREST HOME</p>
          <h2 id="closing-title">당신이 숨 쉬는 공간을<br /><em>클렌징하세요.</em></h2>
          <p>제품 판매와 문의 채널을 준비하고 있습니다.</p>
          <span className="coming-soon">구매 안내 준비 중</span>
        </div>
        <div className="closing-product" aria-hidden="true" data-reveal data-parallax>
          <Image
            src="/images/air-cleansing-hero.jpg"
            alt=""
            fill
            sizes="(max-width: 900px) 90vw, 40vw"
          />
          <div className="closing-product-caption">
            <span>AIR CLEANSING</span>
            <strong>500<small>ml</small></strong>
            <p>PHYTONCIDE SPACE CARE</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="페이지 위로 이동">
          <span className="brand-mark" aria-hidden="true">AC</span>
          <span><strong>AIR CLEANSING</strong><small>PHYTONCIDE SPACE CARE</small></span>
        </a>
        <p>사업자 정보와 고객 문의 채널은 판매 준비 후 업데이트됩니다.</p>
        <small>© AIR CLEANSING. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  );
}
