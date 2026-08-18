import { Quote } from "lucide-react";
import { cx } from "@/lib/cx";
import type { Testimonial } from "@/lib/content/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  featured?: boolean;
};

export function TestimonialCard({
  testimonial,
  featured = false,
}: TestimonialCardProps) {
  return (
    <figure
      className={cx(
        "flex h-full flex-col rounded-3xl px-6 py-8 sm:px-8",
        featured
          ? "bg-night text-cream-50"
          : "border border-cream-200 bg-white",
      )}
    >
      <Quote
        aria-hidden="true"
        className={cx(
          "mb-4 h-6 w-6",
          featured ? "text-coral-400" : "text-coral-500",
        )}
      />
      <blockquote
        className={cx(
          "flex-1 text-base leading-relaxed sm:text-lg",
          featured ? "text-cream-50" : "text-ink-700",
        )}
      >
        « {testimonial.quote} »
      </blockquote>
      <figcaption
        className={cx(
          "mt-6 text-xs font-semibold uppercase tracking-[0.14em]",
          featured ? "text-coral-300" : "text-ink-500",
        )}
      >
        {testimonial.attribution}
      </figcaption>
    </figure>
  );
}
