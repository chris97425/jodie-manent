import type { Metadata } from "next";
import { FinalCta } from "@/components/home/final-cta";
import { Accordion } from "@/components/ui/accordion";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { FAQ_ITEMS } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Réponses aux questions fréquentes : déroulement d'un bilan, financement OPCO/CPF, interventions à distance, différence coaching/formation, nombre de séances.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Des réponses claires et prudentes — les détails manquants restent à compléter ensemble."
      />
      <Section className="bg-cream-50">
        <Accordion
          items={FAQ_ITEMS.map((item) => ({
            id: item.id,
            title: item.question,
            content: item.answer,
          }))}
        />
      </Section>
      <FinalCta />
    </>
  );
}
