import Image from "next/image";
import { Quote } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { withBasePath } from "@/lib/assets";
import { TESTIMONIAL } from "@/lib/offers";

export function SocialProof() {
  return (
    <Section
      className="relative overflow-hidden bg-white"
      eyebrow="Témoignage"
      title="Ce qui a été dit"
      description="Une citation réelle — et des emplacements prêts pour de futurs retours, sans invention."
      align="center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-8 left-0 hidden w-[28%] opacity-[0.14] lg:block"
      >
        <Image
          src={withBasePath("/images/temoignage.png")}
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="relative mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <RevealOnScroll>
          <figure className="flex h-full flex-col justify-center rounded-2xl bg-coral-500 px-6 py-10 text-white sm:px-10">
            <Quote
              aria-hidden="true"
              className="mb-4 h-7 w-7 text-white/70"
            />
            <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              « {TESTIMONIAL.quote} »
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Image
                src={withBasePath("/images/jodie-parc.jpg")}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border-2 border-white/40 object-cover"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                {TESTIMONIAL.attribution}
              </span>
            </figcaption>
          </figure>
        </RevealOnScroll>

        <div className="grid gap-4">
          {[1, 2].map((slot) => (
            <RevealOnScroll key={slot} delay={slot * 0.08}>
              <div className="flex min-h-[8.5rem] flex-col justify-between rounded-2xl border border-dashed border-cream-300 bg-cream-50 px-5 py-5 text-left">
                <p className="font-display text-base font-semibold text-ink-400">
                  Témoignage à venir
                </p>
                <p className="text-sm text-ink-500">
                  Emplacement réservé — sans citation inventée.
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
