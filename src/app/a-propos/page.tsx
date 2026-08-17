import { AboutBio } from "@/components/about/about-bio";
import { AboutValues } from "@/components/about/about-values";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCta } from "@/components/home/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "À propos",
  description:
    "15 ans d'expérience en médias, digital, communication et management. Coach professionnelle certifiée RNCP, formatrice et praticienne IM/NM, basée à La Réunion.",
  path: "/a-propos/",
});

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
