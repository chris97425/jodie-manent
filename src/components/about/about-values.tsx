import Image from "next/image";
import { HeartHandshake, Compass, SunMedium } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { withBasePath } from "@/lib/assets";

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
      className="relative overflow-hidden bg-cream-100"
      containerClassName="relative"
      eyebrow="Valeurs"
      title="Ce qui guide l'accompagnement"
      description="Trois intentions simples pour un travail utile, humain et ancré."
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-[0.1]"
      >
        <Image
          src={withBasePath("/images/about.png")}
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="relative grid gap-6 md:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <RevealOnScroll key={value.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-cream-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cream-200 bg-cream-50 text-coral-800">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink-700">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-500">
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
