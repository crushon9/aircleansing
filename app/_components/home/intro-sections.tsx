import Image from "next/image";
import { visualStories } from "./content";
import HomeNavigation from "./navigation";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HomeNavigation />
      <div className="hero-grid" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">FOREST-INSPIRED DAILY CARE</p>
          <h1 id="hero-title">
            <span className="headline-line"><span>향으로 덮기보다,</span></span>
            <span className="headline-line"><em>공기를 클렌징하다.</em></span>
          </h1>
          <div className="hero-actions">
            <a className="button button-primary" href="#product" data-magnetic>제품 정보 보기</a>
            <a className="text-link" href="#usage">사용 공간 보기</a>
          </div>
          <dl className="hero-notes" aria-label="제품 특징 요약">
            <div>
              <dt>AROMA</dt>
              <dd><strong>우디 · 그린 · 시트러스</strong><span>편백과 베르가못의 향조</span></dd>
            </div>
            <div>
              <dt>USE</dt>
              <dd><strong>패브릭 · 생활 공간</strong><span>침구·의류·신발장·욕실</span></dd>
            </div>
            <div>
              <dt>FORMULA</dt>
              <dd><strong>가벼운 워터 제형</strong><span>흔든 뒤 분사하고 환기</span></dd>
            </div>
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
        </div>
      </div>
      <div className="statement-band" aria-label="브랜드 핵심 가치">
        <div className="statement-track">
          {[0, 1].map((group) => (
            <div className="statement-group" key={group} aria-hidden={group === 1 ? "true" : undefined}>
              <span>HINOKI WOODY AROMA</span><i aria-hidden="true" />
              <span>BERGAMOT CITRUS NOTE</span><i aria-hidden="true" />
              <span>LIGHTWEIGHT WATER FORMULA</span><i aria-hidden="true" />
              <span>DAILY FABRIC &amp; SPACE CARE</span><i aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="story section" id="story" aria-labelledby="story-title">
      <div className="story-grid">
        <div className="story-intro" data-reveal>
          <div className="section-heading story-heading">
            <p className="section-kicker">OUR POINT OF VIEW</p>
            <h2 id="story-title">
              매일 뿌리는 탈취제,
              <br />
              <em>향만 남아도 괜찮을까요?</em>
            </h2>
          </div>
          <p className="story-lead">
            매일 손이 닿는 침구와 옷에 자연스럽게 사용할 수 있도록
            편백의 우디 향을 중심으로 원료 구성과 향의 농도, 분사 후 남는 인상을 함께 살폈습니다.
          </p>
          <figure className="story-visual" data-reveal data-parallax>
            <Image
              src="/images/brand-story-fresh-air.webp"
              alt="따뜻한 아침 햇살과 바람이 드는 침실에 편백과 소나무 가지가 놓인 모습"
              fill
              sizes="(max-width: 900px) calc(100vw - 56px), 52vw"
            />
          </figure>
        </div>
        <div className="question-list" data-reveal>
          <article><span>Q1</span><p>생활 냄새는 왜 다시 머물까요?</p></article>
          <article><span>Q2</span><p>패브릭에 쓰는 배합은 무엇이 다를까요?</p></article>
          <article><span>Q3</span><p>매일 이어가기 쉬운 방법은 무엇일까요?</p></article>
        </div>
      </div>
    </section>
  );
}

export function VisualStorySection() {
  return (
    <section className="visual-story-section section" id="gallery" aria-labelledby="visual-story-title">
      <div className="visual-story-heading" data-reveal>
        <div>
          <p className="section-kicker">PRODUCT AT A GLANCE</p>
          <h2 id="visual-story-title">공간에 스미는 숲의 결.</h2>
        </div>
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
  );
}

export function ProductSection() {
  return (
    <section className="product-section section" id="product" aria-labelledby="product-title">
      <div className="product-photo-wrap" data-reveal>
        <Image
          className="product-photo"
          src="/images/air-cleansing-botanical-label-restored.webp"
          alt="편백과 베르가못을 배경으로 놓인 AIR CLEANSING 500밀리리터 스프레이 제품"
          width={1024}
          height={1024}
          sizes="(max-width: 900px) 100vw, 53vw"
        />
      </div>
      <div className="product-copy" data-reveal>
        <p className="section-kicker">PRODUCT INTRODUCTION</p>
        <h2 id="product-title">편백의 차분함과<br /><em>베르가못의 맑은 인상.</em></h2>
        <p>우디·그린·시트러스 세 향조가 차례로 이어지는 공간·패브릭 스프레이입니다.</p>
        <div className="aroma-profile" aria-label="우디, 그린, 시트러스가 어우러진 향의 인상">
          <div className="aroma-profile-heading"><span>AROMA PROFILE</span></div>
          <ol>
            <li className="aroma-woody"><span>WOODY</span><i aria-hidden="true" /></li>
            <li className="aroma-green"><span>GREEN</span><i aria-hidden="true" /></li>
            <li className="aroma-citrus"><span>CITRUS</span><i aria-hidden="true" /></li>
          </ol>
        </div>
        <dl className="product-specs">
          <div><dt>제품 유형</dt><dd>피톤치드 스페이스 케어 스프레이</dd></div>
          <div><dt>용량</dt><dd>500 ml</dd></div>
          <div><dt>제조</dt><dd>Made in Korea</dd></div>
        </dl>
      </div>
    </section>
  );
}
