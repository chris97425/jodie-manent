import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { OfferCard } from "@/components/offers/offer-card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MENTORAT_NOTE, OFFERS } from "@/lib/offers";

export function OffersGrid() {
  return (
    <Section
      className="bg-cream-100"
      eyebrow="Sur devis"
      title="Des formats adaptés à votre situation"
      description="Aucune grille tarifaire inventée : chaque accompagnement est proposé sur devis, après un premier échange."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {OFFERS.map((offer, index) => (
          <RevealOnScroll key={offer.id} delay={index * 0.06}>
            <OfferCard offer={offer} />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.15}>
        <aside className="mt-8 rounded-2xl border border-dashed border-cream-200 bg-white px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-400">
            Mention
          </p>
          <p className="mt-2 text-base text-ink-600">
            <span className="font-semibold text-ink-700">
              {MENTORAT_NOTE.title}
            </span>
            {" — "}
            {MENTORAT_NOTE.text}
          </p>
        </aside>
      </RevealOnScroll>

      <div className="mt-12 rounded-3xl bg-coral-500 px-6 py-10 text-center text-night sm:px-10">
        <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Échangeons sur votre besoin
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base text-night/80">
          Décrivez votre contexte — je vous répondrai pour construire une
          proposition sur devis.
        </p>
        <div className="mt-6">
          <Button href="/contact/" variant="cream">
            Envoyer ma demande
          </Button>
        </div>
      </div>
    </Section>
  );
}
