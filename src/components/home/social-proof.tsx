import { Quote } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { TESTIMONIAL } from "@/lib/offers";

export function SocialProof() {
  return (
    <Section
      className="bg-white"
      eyebrow="Témoignage"
      title="Ce qui a été dit"
      description="Une citation réelle — et des emplacements prêts pour de futurs retours, sans invention."
      align="center"
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <RevealOnScroll>
          <figure className="flex h-full flex-col justify-center rounded-2xl bg-coral-500 px-6 py-10 text-white sm:px-10">
            <Quote
              aria-hidden="true"
              className="mb-4 h-7 w-7 text-white/70"
            />
            <blockquote className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              « {TESTIMONIAL.quote} »
            </blockquote>
            <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              {TESTIMONIAL.attribution}
            </figcaption>
          </figure>
        </RevealOnScroll>

        <div className="grid gap-4">
          {[1, 2].map((slot) => (
            <RevealOnScroll key={slot} delay={slot * 0.08}>
              <div className="flex min-h-[8.5rem] flex-col justify-between rounded-2xl border border-dashed border-cream-300 bg-cream-50 px-5 py-5 text-left">
                <p className="text-base font-semibold text-ink-400">
                  Témoignage à venir
                </p>
                <p className="text-sm text-ink-500">
                  Emplacement réservé — sans citation inventée.
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
