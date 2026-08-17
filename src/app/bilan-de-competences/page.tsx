import { FinalCta } from "@/components/home/final-cta";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { TestimonialsBlock } from "@/components/testimonials/testimonials-block";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import {
  BILAN_COACHING,
  BILAN_FORMAT_NOTE,
  BILAN_FORMATS,
  BILAN_INTRO,
  BILAN_OBJECTIVES,
} from "@/lib/content/bilan";
import { BILAN_TESTIMONIALS } from "@/lib/content/testimonials";
import { cx } from "@/lib/cx";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bilan de compétences",
  description:
    "Bilan de compétences à La Réunion : 13 h, 16 h ou 20 h. Faire le point, clarifier une direction, valider un projet et passer à l'action — financement CPF possible.",
  path: "/bilan-de-competences/",
});

export default function BilanPage() {
  return (
    <>
      <PageHero
        eyebrow="Bilan de compétences & coaching"
        title="Prendre du recul pour mieux avancer."
        description={BILAN_INTRO}
      />

      <Section className="bg-white" title="Quatre objectifs possibles">
        <div className="grid gap-5 sm:grid-cols-2">
          {BILAN_OBJECTIVES.map((objective, index) => (
            <RevealOnScroll key={objective.id} delay={index * 0.05}>
              <article className="h-full rounded-3xl border border-cream-200 bg-cream-50 p-6 sm:p-8">
                <span className="font-mono text-xs text-ink-300">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-700">
                  {objective.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-500">
                  {objective.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section
        className="bg-cream-50"
        title="Trois formats"
        description={BILAN_FORMAT_NOTE}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {BILAN_FORMATS.map((format, index) => (
            <RevealOnScroll key={format.id} delay={index * 0.06}>
              <Card
                className={cx(
                  "flex h-full flex-col",
                  format.recommended && "border-coral-400 ring-1 ring-coral-200",
                )}
              >
                {format.recommended ? (
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral-600">
                    Recommandé
                  </p>
                ) : null}
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink-700">
                  {format.title}
                </h3>
                <p className="mt-2 text-lg font-semibold text-coral-700">
                  {format.hours}
                </p>
                <p className="mt-3 flex-1 text-base leading-relaxed text-ink-500">
                  {format.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink-600">
                  {format.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contact/" size="lg">
            Prendre rendez-vous pour un premier échange
          </Button>
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Coaching professionnel"
        title={BILAN_COACHING.title}
        description={BILAN_COACHING.text}
      >
        <Button href="/contact/" variant="secondary">
          Échangeons sur votre besoin
        </Button>
      </Section>

      <TestimonialsBlock
        items={BILAN_TESTIMONIALS}
        eyebrow="Témoignages"
        title="Retours sur le bilan de compétences"
        className="bg-cream-50"
      />

      <FinalCta />
    </>
  );
}
