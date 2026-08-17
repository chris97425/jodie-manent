"use client";

import { useEffect, useState } from "react";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Testimonial } from "@/lib/content/testimonials";

type TestimonialRotatorProps = {
  items: Testimonial[];
};

export function TestimonialRotator({ items }: TestimonialRotatorProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || items.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [items.length, reducedMotion]);

  if (items.length === 0) return null;

  if (reducedMotion) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}
      </div>
    );
  }

  const current = items[index];
  if (!current) return null;

  return (
    <div>
      <div aria-live="polite">
        <TestimonialCard testimonial={current} featured />
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Afficher le témoignage ${itemIndex + 1}`}
            aria-current={itemIndex === index}
            onClick={() => setIndex(itemIndex)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
          >
            <span
              className={
                itemIndex === index
                  ? "h-2.5 w-8 rounded-full bg-coral-500"
                  : "h-2.5 w-2.5 rounded-full bg-ink-300 hover:bg-coral-300"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
