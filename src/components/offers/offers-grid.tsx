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

      <div className="mt-12 rounded-2xl bg-coral-500 px-6 py-10 text-center text-white sm:px-10">
        <p className="text-2xl font-bold tracking-tight sm:text-3xl">
          Envie d&apos;en parler ?
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/90">
          Décrivez votre besoin — je vous répondrai pour construire une
          proposition sur devis.
        </p>
        <div className="mt-6">
          <Button href="/contact/" variant="cream">
            Je prends RDV
          </Button>
        </div>
      </div>
    </Section>
  );
}
