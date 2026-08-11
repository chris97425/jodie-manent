"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGsapContext } from "@/hooks/use-gsap-context";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const WORDS =
  "Talents · Intelligences multiples · Transitions · Bilans · Formations · Coaching · ";

export function KeywordMarquee() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGsapContext(rootRef, () => {
    const track = rootRef.current?.querySelector<HTMLElement>("[data-track]");
    if (!track) return;

    gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const content = (
    <span className="inline-block whitespace-nowrap px-2 text-sm font-semibold uppercase tracking-[0.22em] text-ink-500 sm:text-base">
      {WORDS}
      {WORDS}
    </span>
  );

  return (
    <section
      aria-label="Mots-clés"
      className="overflow-hidden border-y border-cream-200 bg-cream-50 py-4"
    >
      <div ref={rootRef} className="relative">
        {reduced ? (
          <p className="px-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
            Talents · Intelligences multiples · Transitions · Bilans ·
            Formations · Coaching
          </p>
        ) : (
          <div data-track className="flex w-max">
            {content}
          </div>
        )}
      </div>
    </section>
  );
}
