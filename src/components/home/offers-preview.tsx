import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MENTORAT_NOTE, OFFERS } from "@/lib/offers";

const OFFER_IMAGES: Record<string, { src: string; alt: string }> = {
  bilans: {
    src: "/images/bilan.png",
    alt: "Visuel abstrait — boussole pour le bilan de compétences",
  },
  coaching: {
    src: "/images/coaching.png",
    alt: "Visuel abstrait — formes en dialogue pour le coaching",
  },
  formations: {
    src: "/images/formation.png",
    alt: "Visuel abstrait — spirale ascendante pour la formation",
  },
};

/** Ordre d'affichage demandé : Bilan / Coaching / Formations */
const HOME_OFFER_ORDER = ["bilans", "coaching", "formations"] as const;

export function OffersPreview() {
  const ordered = HOME_OFFER_ORDER.map(
    (id) => OFFERS.find((offer) => offer.id === id)!,
  );

  return (
    <Section
      className="bg-cream-100"
      eyebrow="Accompagnements"
      title="Trois chemins pour clarifier votre projet"
      description="Bilan, coaching et formation — des formats adaptés à votre rythme, sur devis."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {ordered.map((offer, index) => {
          const image = OFFER_IMAGES[offer.id];
          return (
            <RevealOnScroll key={offer.id} delay={index * 0.08}>
              <Card
                interactive
                className="group flex h-full flex-col overflow-hidden p-0"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream-50">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
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
                    href={`/offres/#${offer.id}`}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-coral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:text-coral-900"
                  >
                    En savoir plus
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </Card>
            </RevealOnScroll>
          );
        })}
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
