import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { FinalCta } from "@/components/home/final-cta";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { withBasePath } from "@/lib/assets";
import {
  ATELIER_EXAMPLES,
  ENTREPRISES_COACHING,
  ENTREPRISES_CONFERENCES,
  ENTREPRISES_INTRO,
  ENTREPRISES_OFFERS,
  ENTREPRISES_PROBLEMS,
} from "@/lib/content/entreprises";

export const metadata: Metadata = {
  title: "Entreprises & équipes",
  description:
    "Formations posture managériale, cohésion d'équipe, ateliers d'intelligence collective, coaching individuel et conférences Intelligences et Natures Multiples à La Réunion.",
};

export default function EntreprisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Entreprises & équipes"
        title="Faire évoluer les pratiques managériales et renforcer les collectifs."
        description={ENTREPRISES_INTRO}
      />

      <Section
        className="bg-white"
        eyebrow="Formations & interventions collectives"
        title="Des formats construits avec vous"
      >
        <div className="space-y-6">
          {ENTREPRISES_OFFERS.map((offer, index) => (
            <RevealOnScroll key={offer.id} delay={index * 0.05}>
              <article
                id={offer.id}
                className="scroll-mt-28 rounded-3xl border border-cream-200 bg-cream-50 p-6 sm:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral-600">
                  {offer.kind}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-700">
                  {offer.title}
                </h3>
                <p className="mt-2 text-base text-ink-500">{offer.subtitle}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Objectifs
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {offer.objectives.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink-600"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-coral-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.12}>
          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-ink-700">
              Exemples d&apos;ateliers
            </h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-3">
              {ATELIER_EXAMPLES.map((example, index) => (
                <li
                  key={example}
                  className="rounded-2xl border border-cream-200 bg-white p-5"
                >
                  <span className="font-mono text-xs text-ink-300">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {example}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </RevealOnScroll>
      </Section>

      <Section
        className="bg-cream-50"
        eyebrow="Individuel"
        title={ENTREPRISES_COACHING.title}
        description={ENTREPRISES_COACHING.text}
      >
        <Button href="/contact/">Échangeons sur votre besoin</Button>
      </Section>

      <Section
        id="conferences"
        className="bg-white"
        eyebrow="Sensibilisation"
        title={ENTREPRISES_CONFERENCES.title}
        description={ENTREPRISES_CONFERENCES.text}
      >
        <Button href="/contact/" variant="secondary">
          Envisager une conférence
        </Button>
      </Section>

      <Section
        className="bg-cream-100"
        title="Les situations auxquelles je réponds"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {ENTREPRISES_PROBLEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-cream-200 bg-white px-5 py-4 text-ink-600"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500"
              />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={withBasePath("/images/atelier-cooperation.jpg")}
                  alt="Atelier collaboratif vu de dessus : cartes, carnets et échanges autour d'une table en bois clair"
                  width={1024}
                  height={1280}
                  className="h-auto w-full object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral-600">
                Offre phare — Formation 3 jours
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl">
                Développer sa posture managériale grâce aux Intelligences et
                Natures Multiples
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Cette formation aide les managers à mieux comprendre leur
                fonctionnement, leurs zones de confort, leurs ressources
                naturelles et celles de leurs collaborateurs, afin d&apos;adapter
                leur communication et leur management.
              </p>
              <div className="mt-8">
                <Button href="/contact/" size="lg">
                  Construire une intervention sur mesure
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
