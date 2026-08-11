import type { Metadata } from "next";
import { AboutBio } from "@/components/about/about-bio";
import { AboutValues } from "@/components/about/about-values";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours de Jodie Manent, coach professionnelle certifiée RNCP, spécialiste des Intelligences et Natures Multiples, basée à Sainte-Marie (La Réunion).",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Jodie Manent"
        description="Coach professionnelle certifiée, spécialiste des Intelligences et Natures Multiples — pour clarifier et structurer vos transitions."
      />
      <AboutBio />
      <AboutValues />
      <FinalCta />
    </>
  );
}
