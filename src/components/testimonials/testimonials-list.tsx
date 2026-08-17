import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PlaceholderSlot } from "@/components/testimonials/placeholder-slot";

export function TestimonialsList() {
  return (
    <Section
      className="bg-cream-100"
      eyebrow="Voix réelles"
      title="Ce que diront les personnes accompagnées"
      description="Les retours de mes clients — managers, équipes et personnes en transition — seront publiés ici. Aucune citation n'est inventée."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {[1, 2, 3, 4].map((slot, index) => (
          <RevealOnScroll key={slot} delay={index * 0.06}>
            <PlaceholderSlot label="Témoignage à venir" />
          </RevealOnScroll>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-base text-ink-500">
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
