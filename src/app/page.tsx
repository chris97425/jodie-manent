import { AudienceProfiles } from "@/components/home/audience-profiles";
import { ConvictionBand } from "@/components/home/conviction-band";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedOfferBand } from "@/components/home/featured-offer-band";
import { FinalCta } from "@/components/home/final-cta";
import { HeroSection } from "@/components/home/hero-section";
import { KeywordMarquee } from "@/components/home/keyword-marquee";
import { OffersPreview } from "@/components/home/offers-preview";
import { QuizSection } from "@/components/home/quiz-section";
import { SocialProof } from "@/components/home/social-proof";
import { TrustBand } from "@/components/home/trust-band";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBand />
      <KeywordMarquee />
      <AudienceProfiles />
      <OffersPreview />
      <SocialProof />
      <FeaturedOfferBand />
      <ConvictionBand />
      <QuizSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
