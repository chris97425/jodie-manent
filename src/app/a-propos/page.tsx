import type { Metadata } from "next";
import { AboutBio } from "@/components/about/about-bio";
import { AboutValues } from "@/components/about/about-values";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "15 ans d'expérience en médias, digital, communication et management. Coach professionnelle certifiée RNCP, formatrice, consultante et praticienne Intelligences et Natures Multiples, basée à La Réunion.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Un parcours au service des personnes et des collectifs."
        description="Mon parcours, ma conviction et ma manière d'accompagner les personnes et les collectifs."
      />
      <AboutBio />
      <AboutValues />
      <FinalCta />
    </>
  );
}
