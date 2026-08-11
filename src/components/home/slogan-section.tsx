import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/site";

export function SloganSection() {
  return (
    <Section className="bg-white" align="center">
      <RevealOnScroll>
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-display text-4xl leading-snug text-coral-600 sm:text-5xl">
            {SITE_TAGLINE}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            {SITE_DESCRIPTION} Basée à Sainte-Marie, j&apos;interviens à La
            Réunion et en métropole, en présentiel comme à distance.
          </p>
        </blockquote>
      </RevealOnScroll>
    </Section>
  );
}
