import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import {
  ABOUT_CONVICTION,
  ABOUT_EINSTEIN_NOTE,
  ABOUT_EINSTEIN_QUOTE,
} from "@/lib/content/about";

export function AboutValues() {
  return (
    <Section
      className="bg-cream-100"
      eyebrow="Ma conviction"
      title="Le potentiel de chacun, la force d'un collectif"
    >
      <RevealOnScroll>
        <blockquote className="max-w-3xl font-display text-2xl leading-snug text-ink-700 sm:text-3xl">
          « {ABOUT_CONVICTION} »
        </blockquote>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <figure className="mt-12 max-w-3xl rounded-3xl border border-cream-200 bg-white p-8">
          <blockquote className="font-display text-xl italic leading-relaxed text-ink-700 sm:text-2xl">
            « {ABOUT_EINSTEIN_QUOTE} »
          </blockquote>
          <figcaption className="mt-4 text-sm uppercase tracking-widest text-ink-400">
            — Albert Einstein
          </figcaption>
          <p className="mt-6 text-base leading-relaxed text-ink-500">
            {ABOUT_EINSTEIN_NOTE}
          </p>
        </figure>
      </RevealOnScroll>
    </Section>
  );
}
