import { MapPin, Monitor } from "lucide-react";
import type { Offer } from "@/lib/offers";

type OfferCardProps = {
  offer: Offer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-coral-100 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-coral-200 hover:shadow-md focus-within:border-coral-300 sm:p-8">
      <h3 className="font-display text-3xl text-ink-900 sm:text-4xl">
        {offer.title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-ink-600">
        {offer.description}
      </p>
      <div className="mt-6 space-y-3 border-t border-coral-50 pt-5">
        <p className="flex items-start gap-2 text-sm text-ink-700">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-coral-600"
          />
          <span>{offer.modalities}</span>
        </p>
        <p className="flex items-start gap-2 text-sm text-ink-700">
          <Monitor
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-coral-600"
          />
          <span>Présentiel / distanciel selon les besoins.</span>
        </p>
        <p className="text-base font-semibold text-coral-700">{offer.pricing}</p>
      </div>
    </article>
  );
}
