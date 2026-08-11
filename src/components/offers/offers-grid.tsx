import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { OfferCard } from "@/components/offers/offer-card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { OFFERS } from "@/lib/offers";

export function OffersGrid() {
  return (
    <Section
      className="bg-warm-50"
      eyebrow="Sur devis"
      title="Des formats adaptés à votre situation"
      description="Aucune grille tarifaire inventée : chaque accompagnement est proposé sur devis, après un premier échange."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {OFFERS.map((offer, index) => (
          <RevealOnScroll key={offer.id} delay={index * 0.06}>
            <OfferCard offer={offer} />
          </RevealOnScroll>
        ))}
      </div>
      <div className="mt-12 rounded-3xl bg-coral-500 px-6 py-10 text-center text-white sm:px-10">
        <p className="font-display text-3xl sm:text-4xl">
          Envie d&apos;en parler ?
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/90">
          Décrivez votre besoin — je vous répondrai pour construire une
          proposition sur devis.
        </p>
        <div className="mt-6">
          <Button
            href="/contact/"
            className="bg-white text-coral-700 hover:bg-warm-50"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </Section>
  );
}
