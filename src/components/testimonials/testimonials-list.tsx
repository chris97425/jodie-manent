import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TestimonialsBlock } from "@/components/testimonials/testimonials-block";
import { ALL_TESTIMONIALS } from "@/lib/content/testimonials";

export function TestimonialsList() {
  return (
    <>
      <TestimonialsBlock
        items={ALL_TESTIMONIALS}
        className="bg-cream-100"
        eyebrow="Voix réelles"
        title="Ce que disent les personnes accompagnées"
        description="Des retours anonymes, tels qu'ils ont été partagés — sans prénom ni nom."
      />
      <Section className="bg-cream-50" align="center">
        <RevealOnScroll>
          <p className="text-base text-ink-500">
            Vous avez été accompagné·e et souhaitez partager un retour ?
          </p>
          <div className="mt-4">
            <Button href="/contact/" variant="secondary">
              Écrire un message
            </Button>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}
