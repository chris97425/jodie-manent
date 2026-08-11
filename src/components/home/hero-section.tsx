"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { HeroVisual } from "@/components/home/hero-visual";
import { useGsapContext } from "@/hooks/use-gsap-context";
import { SITE_HERO, SITE_TAGLINE } from "@/lib/site";

function HeroHeadline() {
  const parts = SITE_HERO.split("VOUS");
  return (
    <h1
      data-hero="headline"
      className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
    >
      {parts[0]}
      <span className="text-coral-500">VOUS</span>
      {parts[1]}
    </h1>
  );
}

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGsapContext(rootRef, () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      "[data-hero='brand']",
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.7 },
    )
      .fromTo(
        "[data-hero='headline']",
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.3",
      )
      .fromTo(
        "[data-hero='support']",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.65 },
        "-=0.4",
      )
      .fromTo(
        "[data-hero='cta']",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.35",
      )
      .fromTo(
        "[data-hero='visual']",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.9 },
        0.2,
      );
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden bg-cream-50 pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_#FFF9F2_0%,_#FFF5E6_55%,_#FFF9F2_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-0 h-px w-1/3 bg-gradient-to-l from-transparent via-coral-500/30 to-transparent"
      />

      <Container className="relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <div data-hero="brand" className="flex items-center gap-4">
            <BrandLogo
              size={64}
              priority
              className="h-14 w-14 rounded-xl shadow-sm sm:h-16 sm:w-16"
            />
            <div>
              <p className="font-script text-4xl leading-none text-coral-500 sm:text-5xl">
                Jodie
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                Coach professionnelle · La Réunion
              </p>
            </div>
          </div>

          <HeroHeadline />

          <p
            data-hero="support"
            className="mt-5 max-w-lg text-lg leading-relaxed text-ink-500"
          >
            {SITE_TAGLINE}
          </p>

          <div data-hero="cta" className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact/" size="lg">
              Je prends RDV
            </Button>
            <Button href="/offres/" variant="secondary" size="lg">
              Découvrir les offres
            </Button>
          </div>
        </div>

        <div data-hero="visual" className="lg:justify-self-end">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
