import Image from "next/image";
import { features, howToSteps, ingredients, technologySteps, useCases } from "./content";

export function FeaturesSection() {
  return (
    <section className="features-section section" id="features" aria-labelledby="features-title">
      <div className="section-heading centered-heading" data-reveal>
        <p className="section-kicker">FORMULATED WITH INTENTION</p>
        <h2 id="features-title">매일의 사용을 생각한 <em>세 가지 설계 기준</em></h2>
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
  );
}

export function IngredientsSection() {
  return (
    <section className="ingredients-section section" id="ingredients" aria-labelledby="ingredients-title">
      <div className="ingredients-intro" data-reveal>
        <p className="section-kicker">INGREDIENT STORY</p>
        <h2 id="ingredients-title">숲의 결을 이루는<br /><em>다섯 가지 원료.</em></h2>
        <p>워터 베이스부터 우디·그린·시트러스 향조와 배합을 이루는 보조 성분까지 살펴보세요.</p>
        <figure className="ingredients-visual" data-reveal>
          <Image
            src="/images/ingredients-botanical.webp"
            alt="편백 잎과 나무, 해안송, 베르가못, 오일과 워터를 함께 구성한 원료 이미지"
            fill
            sizes="(max-width: 900px) calc(100vw - 32px), 38vw"
          />
          <figcaption>
            <span>THE BOTANICAL BASE</span>
            <strong>편백 · <span className="ingredient-caption-keep">해안송</span> · 베르가못</strong>
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
  );
}

export function TechnologySection() {
  return (
    <section className="technology-section section" id="technology" aria-labelledby="technology-title">
      <div className="technology-copy" data-reveal>
        <p className="section-kicker light">C3 COLLOID DISPERSION</p>
        <h2 id="technology-title">계면활성제 대신<br /><em>분산을 택했습니다.</em></h2>
        <p>오일과 워터를 한 용기에 담기 위해 원심력 분산, 미세화, 콜로이드 시스템의 세 단계를 적용했습니다.</p>
        <figure className="technology-visual" data-reveal data-parallax>
          <Image
            src="/images/technology-dispersion.webp"
            alt="맑은 물속에서 투명한 오일 미세 입자가 고르게 퍼지는 모습을 표현한 이미지"
            fill
            sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
          />
          <figcaption>
            <span>OIL × WATER</span>
            <strong>오일·워터 균일 분산</strong>
          </figcaption>
        </figure>
      </div>
      <div className="technology-process">
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
      </div>
    </section>
  );
}

export function UsageSection() {
  return (
    <section className="usage-section section" id="usage" aria-labelledby="usage-title">
      <div className="section-heading usage-heading" data-reveal>
        <p className="section-kicker">WHERE TO USE</p>
        <h2 id="usage-title">편백 향을 더하는 <em>공간별 가이드</em></h2>
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
  );
}

export function HowToSection() {
  return (
    <section className="howto-section section" id="howto" aria-labelledby="howto-title">
      <div className="section-heading centered-heading" data-reveal>
        <p className="section-kicker">HOW TO USE</p>
        <h2 id="howto-title">흔들고, 가볍게 분사하고, <em>충분히 환기하세요.</em></h2>
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
        <p>제품 표시사항을 먼저 확인하세요. 눈·입에 직접 분사하지 말고, 변색이 우려되는 소재는 눈에 띄지 않는 곳에 시험한 뒤 사용하세요.</p>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="closing-section" id="contact" aria-labelledby="closing-title">
      <div className="closing-copy" data-reveal>
        <p className="section-kicker light">BRING THE FOREST HOME</p>
        <h2 id="closing-title">당신이 숨 쉬는 공간을<br /><em>클렌징하세요.</em></h2>
        <p>판매처와 고객 문의 정보는 준비되는 대로 안내하겠습니다.</p>
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
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#top" aria-label="페이지 위로 이동">
        <span><strong>AIR CLEANSING</strong><small>PHYTONCIDE SPACE CARE</small></span>
      </a>
      <p>사업자 정보와 고객 문의 채널은 판매 준비 후 업데이트됩니다.</p>
      <small>© AIR CLEANSING. ALL RIGHTS RESERVED.</small>
    </footer>
  );
}
