import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { TestimonialStack } from "@/components/testimonials/testimonial-stack";
import { HOME_TESTIMONIALS } from "@/lib/content/testimonials";

export function SocialProof() {
  return (
    <Section
      className="border-y border-ink-700/5 bg-cream-50"
      eyebrow="Témoignages"
      title="Ce que disent les personnes accompagnées."
      description="Découvrez les retours de celles et ceux que j'ai eu le plaisir d'accompagner."
    >
      <RevealOnScroll>
        <TestimonialStack items={HOME_TESTIMONIALS} />
      </RevealOnScroll>
    </Section>
  );
}
