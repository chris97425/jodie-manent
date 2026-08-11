import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/site";

export function SloganSection() {
  return (
    <Section className="bg-white" align="center">
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-800">
            Intention
          </p>
          <p className="mt-4 text-2xl font-bold tracking-tight text-ink-700 sm:text-3xl">
            {SITE_TAGLINE}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-coral-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
            {SITE_DESCRIPTION} Basée à Sainte-Marie, j&apos;interviens à La
            Réunion et en métropole, en présentiel comme à distance.
          </p>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
