"use client";

import { useEffect, useState } from "react";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cx } from "@/lib/cx";
import type { Testimonial } from "@/lib/content/testimonials";

type TestimonialRotatorProps = {
  items: Testimonial[];
};

export function TestimonialRotator({ items }: TestimonialRotatorProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion || items.length < 2 || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [items.length, paused, reducedMotion]);

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
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div aria-live="polite">
        <div key={current.id} className="animate-fade-slide-in">
          <TestimonialCard testimonial={current} featured />
        </div>
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
              className={cx(
                "rounded-full transition-[width,background-color] duration-300 ease-out",
                itemIndex === index
                  ? "h-2.5 w-8 bg-coral-500"
                  : "h-2.5 w-2.5 bg-ink-300 hover:bg-coral-300",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
