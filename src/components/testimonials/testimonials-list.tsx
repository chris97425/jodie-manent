import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { PlaceholderSlot } from "@/components/testimonials/placeholder-slot";
import { TESTIMONIAL } from "@/lib/offers";

export function TestimonialsList() {
  return (
    <Section
      className="bg-warm-50"
      eyebrow="Voix réelles"
      title="Ce qui a été dit — et ce qui viendra"
      description="Un seul témoignage vérifié pour l'instant. Les espaces ci-dessous accueilleront de futurs retours, sans inventer de citations."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <RevealOnScroll>
          <TestimonialCard
            quote={TESTIMONIAL.quote}
            attribution={TESTIMONIAL.attribution}
            featured
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <PlaceholderSlot label="Témoignage à venir" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.12}>
          <PlaceholderSlot label="Témoignage à venir" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.16}>
          <PlaceholderSlot label="Témoignage à venir" />
        </RevealOnScroll>
      </div>
      <div className="mt-12 text-center">
        <p className="text-base text-ink-600">
          Vous avez été accompagné·e et souhaitez partager un retour ?
        </p>
        <div className="mt-4">
          <Button href="/contact/" variant="secondary">
            Écrire un message
          </Button>
        </div>
      </div>
    </Section>
  );
}
