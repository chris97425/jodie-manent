import { AudienceProfiles } from "@/components/home/audience-profiles";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";
import { HeroSection } from "@/components/home/hero-section";
import { InterventionsBand } from "@/components/home/interventions-band";
import { KeywordMarquee } from "@/components/home/keyword-marquee";
import { MethodPath } from "@/components/home/method-path";
import { OffersPreview } from "@/components/home/offers-preview";
import { QuizSection } from "@/components/home/quiz-section";
import { SocialProof } from "@/components/home/social-proof";
import { TrustBand } from "@/components/home/trust-band";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBand />
      <OffersPreview />
      <KeywordMarquee />
      <MethodPath />
      <AudienceProfiles />
      <QuizSection />
      <InterventionsBand />
      <SocialProof />
      <FaqSection />
      <FinalCta />
    </>
  );
}
