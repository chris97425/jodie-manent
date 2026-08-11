import { MapPin, Monitor } from "lucide-react";
import type { Offer } from "@/lib/offers";

type OfferCardProps = {
  offer: Offer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-6 shadow-[0_8px_24px_rgba(59,42,36,0.04)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-coral-300 hover:shadow-[0_12px_28px_rgba(59,42,36,0.07)] focus-within:border-coral-400 sm:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-ink-700">
        {offer.title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-ink-500">
        {offer.description}
      </p>
      <div className="mt-6 space-y-3 border-t border-cream-200 pt-5">
        <p className="flex items-start gap-2 text-sm text-ink-600">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-coral-800"
          />
          <span>{offer.modalities}</span>
        </p>
        <p className="flex items-start gap-2 text-sm text-ink-600">
          <Monitor
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-coral-800"
          />
          <span>Présentiel / distanciel selon les besoins.</span>
        </p>
        <p className="text-base font-semibold text-coral-800">{offer.pricing}</p>
      </div>
    </article>
  );
}
