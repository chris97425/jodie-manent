import { FinalCta } from "@/components/home/final-cta";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { TestimonialsBlock } from "@/components/testimonials/testimonials-block";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import {
  APPROCHE_AUDIENCES,
  APPROCHE_CLOSING,
  APPROCHE_ENTREPRISE,
  APPROCHE_INTRO,
  APPROCHE_NOT_A_LABEL,
  APPROCHE_ORIGIN,
  APPROCHE_PILLARS,
  APPROCHE_QUALITIES,
  APPROCHE_ZONE_DE_GENIE,
} from "@/lib/content/approche";
import { APPROCHE_TESTIMONIALS } from "@/lib/content/testimonials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "L'approche Intelligences et Natures Multiples",
  description:
    "10 Intelligences Multiples et 9 Natures Multiples : une grille de lecture claire et positive, issue des travaux de Howard Gardner et enrichie par Steven Rudolph, pour mieux se connaître et mieux coopérer.",
  path: "/approche/",
});

export default function ApprochePage() {
  return (
    <>
      <PageHero
        eyebrow="L'approche"
        title="Les Intelligences et Natures Multiples."
        description={APPROCHE_INTRO}
      />

      <Section className="bg-white">
        <RevealOnScroll>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-600">
            {APPROCHE_ORIGIN}
          </p>
        </RevealOnScroll>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {APPROCHE_PILLARS.map((pillar, index) => (
            <RevealOnScroll key={pillar.id} delay={index * 0.06}>
              <article className="rounded-3xl border border-cream-200 bg-cream-50 p-8">
                <p className="font-display text-5xl font-semibold text-coral-600">
                  {pillar.count}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink-700">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-500">
                  {pillar.text}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={0.1}>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink-700">
            {APPROCHE_ZONE_DE_GENIE}
          </p>
          <aside className="mt-8 max-w-3xl rounded-3xl border border-coral-200 bg-coral-50 px-6 py-6 sm:px-8">
            <p className="text-base leading-relaxed text-ink-700">
              {APPROCHE_NOT_A_LABEL}
            </p>
          </aside>
        </RevealOnScroll>
      </Section>

      <Section className="bg-cream-50" title="Bénéfices">
        <div className="grid gap-5 sm:grid-cols-2">
          {APPROCHE_AUDIENCES.map((audience, index) => (
            <RevealOnScroll key={audience.id} delay={index * 0.05}>
              <article className="h-full rounded-3xl border border-cream-200 bg-white p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-ink-700">
                  {audience.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-500">
                  {audience.text}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section className="bg-white" title="Une approche universelle">
        <div className="grid gap-6 md:grid-cols-3">
          {APPROCHE_QUALITIES.map((quality, index) => (
            <RevealOnScroll key={quality.id} delay={index * 0.06}>
              <article className="h-full rounded-3xl border border-cream-200 bg-cream-50 p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-ink-700">
                  {quality.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-500">
                  {quality.text}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section
        className="bg-cream-100"
        title="En entreprise : un outil de gestion des talents"
      >
        <ul className="space-y-3">
          {APPROCHE_ENTREPRISE.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-cream-200 bg-white px-5 py-4 text-ink-600"
            >
              {item}
            </li>
          ))}
        </ul>
        <aside className="mt-12 rounded-[2rem] bg-night px-8 py-10 text-center text-cream sm:px-12">
          <p className="font-display text-2xl italic leading-snug sm:text-3xl">
            « {APPROCHE_CLOSING} »
          </p>
          <div className="mt-8">
            <Button href="/contact/" size="lg">
              Explorer cette approche avec moi
            </Button>
          </div>
        </aside>
      </Section>

      <TestimonialsBlock
        items={APPROCHE_TESTIMONIALS}
        eyebrow="Témoignage"
        title="Retour sur une découverte IM/NM"
        className="bg-white"
      />

      <FinalCta />
    </>
  );
}
