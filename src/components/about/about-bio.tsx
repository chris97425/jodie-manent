import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { PortraitCard } from "@/components/ui/portrait-card";
import { Container } from "@/components/ui/container";
import { withBasePath } from "@/lib/assets";
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-[0.12] lg:block"
      >
        <Image
          src={withBasePath("/images/about.png")}
          alt=""
          fill
          className="object-cover object-left"
        />
      </div>

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <RevealOnScroll>
            <PortraitCard
              src="/images/jodie-about.jpg"
              alt="Jodie Manent, coach professionnelle certifiée — Sainte-Marie, La Réunion"
              width={853}
              height={1280}
              className="aspect-[3/4] max-w-md"
              imageClassName="object-[center_15%]"
            />
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-800">
                Parcours
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl">
                Une coach, une approche, votre rythme
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                {SITE_DESCRIPTION}
              </p>
              <p className="mt-4 font-display text-xl font-medium leading-relaxed text-ink-700">
                {SITE_HEADLINE}
              </p>
            </RevealOnScroll>

            <ul className="mt-8 space-y-3">
              {milestones.map((item, index) => (
                <RevealOnScroll key={item.title} delay={index * 0.05}>
                  <li className="rounded-xl border border-cream-200 bg-cream-50/90 px-5 py-4 backdrop-blur-sm">
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
