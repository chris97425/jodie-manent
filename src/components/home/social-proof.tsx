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
      description="Une citation réelle — sans inventer d'autres retours."
      align="center"
    >
      <RevealOnScroll>
        <figure className="mx-auto max-w-3xl rounded-2xl border border-cream-200 bg-cream-50 px-6 py-10 sm:px-12">
          <Quote
            aria-hidden="true"
            className="mx-auto mb-4 h-7 w-7 text-coral-500"
          />
          <blockquote className="text-center text-2xl font-semibold leading-snug tracking-tight text-ink-700 sm:text-3xl">
            « {TESTIMONIAL.quote} »
          </blockquote>
          <figcaption className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
            {TESTIMONIAL.attribution}
          </figcaption>
        </figure>
      </RevealOnScroll>
    </Section>
  );
}
