import { AudienceProfiles } from "@/components/home/audience-profiles";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedOfferBand } from "@/components/home/featured-offer-band";
import { FinalCta } from "@/components/home/final-cta";
import { HeroSection } from "@/components/home/hero-section";
import { OffersPreview } from "@/components/home/offers-preview";
import { SocialProof } from "@/components/home/social-proof";
import { TrustBand } from "@/components/home/trust-band";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBand />
      <AudienceProfiles />
      <OffersPreview />
      <SocialProof />
      <FeaturedOfferBand />
      <FaqSection />
      <FinalCta />
    </>
  );
}
