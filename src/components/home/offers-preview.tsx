import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { OFFERS } from "@/lib/offers";

export function OffersPreview() {
  return (
    <Section
      className="bg-warm-50"
      eyebrow="Accompagnements"
      title="Quatre chemins pour révéler vos talents"
      description="Coaching, bilans, formations et mentorat — des formats adaptés à votre rythme, sur devis."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {OFFERS.map((offer, index) => (
          <RevealOnScroll key={offer.id} delay={index * 0.08}>
            <article className="group h-full rounded-2xl border border-transparent bg-white/70 p-6 transition-[border-color,background-color,transform] duration-200 hover:border-coral-200 hover:bg-white focus-within:border-coral-300 sm:p-8">
              <h3 className="font-display text-3xl text-ink-900">
                {offer.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                {offer.summary}
              </p>
              <p className="mt-4 text-sm font-medium text-coral-700">
                {offer.pricing}
              </p>
              <Link
                href="/offres/"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-coral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:text-coral-800"
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
      <div className="mt-10">
        <Button href="/offres/" variant="secondary">
          Voir toutes les offres
        </Button>
      </div>
    </Section>
  );
}
