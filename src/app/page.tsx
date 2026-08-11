import { FinalCta } from "@/components/home/final-cta";
import { HeroSection } from "@/components/home/hero-section";
import { OffersPreview } from "@/components/home/offers-preview";
import { SloganSection } from "@/components/home/slogan-section";
import { SocialProof } from "@/components/home/social-proof";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SloganSection />
      <OffersPreview />
      <SocialProof />
      <FinalCta />
    </>
  );
}
