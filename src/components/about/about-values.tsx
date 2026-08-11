import { HeartHandshake, Compass, SunMedium } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";

const values = [
  {
    icon: Compass,
    title: "Clarté",
    text: "Mettre des mots justes sur ce qui compte, pour décider avec plus de sérénité.",
  },
  {
    icon: SunMedium,
    title: "Talents",
    text: "Révéler ce qui vous est naturel grâce aux Intelligences et Natures Multiples.",
  },
  {
    icon: HeartHandshake,
    title: "Alliance",
    text: "Un accompagnement chaleureux, exigeant et respectueux de votre rythme.",
  },
];

export function AboutValues() {
  return (
    <Section
      className="bg-warm-50"
      eyebrow="Valeurs"
      title="Ce qui guide l'accompagnement"
      description="Trois intentions simples pour un travail utile, humain et ancré."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <RevealOnScroll key={value.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl bg-white p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-600">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-3xl text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  {value.text}
                </p>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
