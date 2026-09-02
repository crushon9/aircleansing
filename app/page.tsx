import {
  ClosingSection,
  FeaturesSection,
  HowToSection,
  IngredientsSection,
  SiteFooter,
  TechnologySection,
  UsageSection,
} from "./_components/home/detail-sections";
import {
  HeroSection,
  ProductSection,
  StorySection,
  VisualStorySection,
} from "./_components/home/intro-sections";
import InteractiveEffects from "./interactive-effects";

export default function Home() {
  return (
    <main>
      <InteractiveEffects />
      <HeroSection />
      <StorySection />
      <VisualStorySection />
      <ProductSection />
      <FeaturesSection />
      <IngredientsSection />
      <TechnologySection />
      <UsageSection />
      <HowToSection />
      <ClosingSection />
      <SiteFooter />
    </main>
  );
}
