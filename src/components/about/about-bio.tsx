import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { AbstractPortrait } from "@/components/about/abstract-portrait";
import { Container } from "@/components/ui/container";
import { SITE_DESCRIPTION } from "@/lib/site";

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
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral-600">
                Parcours
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink-900 sm:text-5xl">
                Une coach, une approche, votre rythme
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                {SITE_DESCRIPTION}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                J&apos;aide à clarifier et structurer les transitions
                professionnelles — avec un cadre bienveillant, structurant, et
                une lecture fine de vos talents.
              </p>
            </RevealOnScroll>

            <ul className="mt-8 space-y-4">
              {milestones.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.05}>
                  <li className="rounded-2xl bg-warm-50 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-coral-600">
                      {item.title}
                    </p>
                    <p className="mt-1 text-base text-ink-700">{item.text}</p>
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
