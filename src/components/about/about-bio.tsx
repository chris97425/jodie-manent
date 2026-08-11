import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { AbstractPortrait } from "@/components/about/abstract-portrait";
import { Container } from "@/components/ui/container";
import { SITE_DESCRIPTION, SITE_HEADLINE } from "@/lib/site";

const milestones = [
  {
    title: "Formation",
    text: "Groupe ESC Rouen Mont Saint-Aignan (2010).",
  },
  {
    title: "Certification",
    text: "Coach professionnelle certifiée (RNCP).",
  },
  {
    title: "Spécialisation",
    text: "Intelligences et Natures Multiples (INM).",
  },
  {
    title: "Ancrage",
    text: "Sainte-Marie, La Réunion — interventions à La Réunion et en métropole.",
  },
];

export function AboutBio() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <RevealOnScroll>
            <AbstractPortrait />
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-800">
                Parcours
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-700 sm:text-4xl">
                Une coach, une approche, votre rythme
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                {SITE_DESCRIPTION}
              </p>
              <p className="mt-4 text-lg font-semibold leading-relaxed text-ink-700">
                {SITE_HEADLINE}
              </p>
            </RevealOnScroll>

            <ul className="mt-8 space-y-3">
              {milestones.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.05}>
                  <li className="rounded-xl border border-cream-200 bg-cream-50 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coral-800">
                      {item.title}
                    </p>
                    <p className="mt-1 text-base text-ink-600">{item.text}</p>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
