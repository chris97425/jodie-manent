import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  attribution: string;
  featured?: boolean;
};

export function TestimonialCard({
  quote,
  attribution,
  featured = false,
}: TestimonialCardProps) {
  return (
    <figure
      className={
        featured
          ? "rounded-2xl bg-coral-500 px-6 py-10 text-white sm:px-10"
          : "rounded-2xl border border-cream-200 bg-white px-6 py-8 sm:px-8"
      }
    >
      <Quote
        aria-hidden="true"
        className={
          featured
            ? "mb-4 h-7 w-7 text-white/70"
            : "mb-4 h-7 w-7 text-coral-500"
        }
      />
      <blockquote
        className={
          featured
            ? "text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"
            : "text-xl font-semibold leading-snug tracking-tight text-ink-700 sm:text-2xl"
        }
      >
        « {quote} »
      </blockquote>
      <figcaption
        className={
          featured
            ? "mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/80"
            : "mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400"
        }
      >
        {attribution}
      </figcaption>
    </figure>
  );
}
