import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Accordion } from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { FAQ_ITEMS } from "@/lib/content/faq";

export function FaqSection() {
  return (
    <Section
      className="relative overflow-hidden bg-pattern-soft"
      containerClassName="relative"
      eyebrow="FAQ"
      title="Questions fréquentes"
      description="Des réponses prudentes et honnêtes — les détails manquants restent à compléter."
    >
      <RevealOnScroll>
        <Accordion
          items={FAQ_ITEMS.map((item) => ({
            id: item.id,
            title: item.question,
            content: item.answer,
          }))}
        />
      </RevealOnScroll>
    </Section>
  );
}
