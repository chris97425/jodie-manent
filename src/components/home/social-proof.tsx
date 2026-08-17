import { Quote } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";

const SLOTS = [1, 2, 3] as const;

export function SocialProof() {
  return (
    <Section
      className="border-y border-ink-700/5 bg-white/60"
      eyebrow="Témoignages"
      title="Ce que disent les personnes accompagnées."
      description="Les retours de mes clients — managers, équipes et personnes en transition — seront publiés ici prochainement."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {SLOTS.map((slot, index) => (
          <RevealOnScroll key={slot} delay={index * 0.06}>
            <figure className="rounded-3xl border border-dashed border-ink-700/15 bg-cream-50 p-8">
              <Quote
                aria-hidden="true"
                className="mb-5 h-5 w-5 text-coral-500"
              />
              <blockquote className="text-sm italic leading-relaxed text-ink-400">
                Emplacement réservé à un témoignage client.
              </blockquote>
              <div className="mt-6 h-px w-10 bg-ink-700/15" />
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-ink-400">
                Prénom — Fonction
              </figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
