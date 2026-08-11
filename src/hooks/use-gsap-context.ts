"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Enregistre un contexte GSAP lié à un conteneur, avec cleanup obligatoire
 * et respect de prefers-reduced-motion.
 */
export function useGsapContext(
  scopeRef: RefObject<HTMLElement | null>,
  setup: () => void,
  deps: unknown[] = [],
) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      setup();
    }, scope);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deps fournies par l'appelant
  }, [scopeRef, reducedMotion, ...deps]);
}
