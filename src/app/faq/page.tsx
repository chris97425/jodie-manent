import { FinalCta } from "@/components/home/final-cta";
import { Accordion } from "@/components/ui/accordion";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { FAQ_ITEMS } from "@/lib/content/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Bilan de compétences, financement OPCO et CPF, coaching, formation et interventions à distance à La Réunion — réponses aux questions fréquentes.",
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Des réponses claires pour préparer un premier échange — sans engagement."
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
