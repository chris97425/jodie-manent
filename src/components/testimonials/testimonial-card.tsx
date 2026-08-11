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
          ? "rounded-3xl bg-coral-500 px-6 py-10 text-white sm:px-10"
          : "rounded-3xl border border-coral-100 bg-white px-6 py-8 sm:px-8"
      }
    >
      <Quote
        aria-hidden="true"
        className={
          featured
            ? "mb-4 h-7 w-7 text-white/70"
            : "mb-4 h-7 w-7 text-coral-400"
        }
      />
      <blockquote
        className={
          featured
            ? "font-display text-3xl leading-snug sm:text-4xl"
            : "font-display text-2xl leading-snug text-ink-900 sm:text-3xl"
        }
      >
        « {quote} »
      </blockquote>
      <figcaption
        className={
          featured
            ? "mt-6 text-sm uppercase tracking-[0.14em] text-white/80"
            : "mt-6 text-sm uppercase tracking-[0.14em] text-ink-500"
        }
      >
        {attribution}
      </figcaption>
    </figure>
  );
}
