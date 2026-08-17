import { MapPin, Monitor } from "lucide-react";
import type { Offer } from "@/lib/offers";
import { Button } from "@/components/ui/button";

type OfferCardProps = {
  offer: Offer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article
      id={offer.id}
      className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-cream-200 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-coral-300 hover:shadow-md focus-within:border-coral-400 sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-700">
        {offer.title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-ink-500">
        {offer.description}
      </p>
      <div className="mt-6 space-y-3 border-t border-cream-200 pt-5">
        <p className="flex items-start gap-2 text-sm text-ink-600">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-coral-600"
          />
          <span>{offer.modalities}</span>
        </p>
        <p className="flex items-start gap-2 text-sm text-ink-600">
          <Monitor
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-coral-600"
          />
          <span>Présentiel / distanciel selon les besoins.</span>
        </p>
        <p className="text-base font-semibold text-coral-800">{offer.pricing}</p>
      </div>
      <div className="mt-6">
        <Button href={offer.href} variant="secondary">
          En savoir plus
        </Button>
      </div>
    </article>
  );
}
