import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MENTORAT_NOTE, OFFERS } from "@/lib/offers";

export function OffersPreview() {
  return (
    <Section
      className="bg-cream-100"
      eyebrow="Accompagnements"
      title="Trois chemins pour clarifier votre projet"
      description="Bilan, formation et coaching — des formats adaptés à votre rythme, sur devis."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {OFFERS.map((offer, index) => (
          <RevealOnScroll key={offer.id} delay={index * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-6 shadow-[0_8px_24px_rgba(59,42,36,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-coral-300 hover:shadow-[0_12px_28px_rgba(59,42,36,0.07)] focus-within:border-coral-400 sm:p-7">
              <h3 className="text-xl font-bold tracking-tight text-ink-700">
                {offer.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-ink-500">
                {offer.summary}
              </p>
              <p className="mt-4 text-sm font-semibold text-coral-800">
                {offer.pricing}
              </p>
              <Link
                href="/offres/"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-coral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:text-coral-900"
              >
                En savoir plus
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2}>
        <p className="mt-8 border-t border-cream-200 pt-6 text-sm text-ink-500">
          <span className="font-semibold text-ink-700">
            {MENTORAT_NOTE.title}
          </span>
          {" — "}
          {MENTORAT_NOTE.text}
        </p>
      </RevealOnScroll>

      <div className="mt-8">
        <Button href="/offres/" variant="secondary">
          Voir le détail des offres
        </Button>
      </div>
    </Section>
  );
}
