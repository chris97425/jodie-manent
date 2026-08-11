"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { withBasePath } from "@/lib/assets";
import { SITE_DESCRIPTION, SITE_HERO } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

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
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const scope = rootRef.current;
    if (!scope || reducedMotion) return;

    const ctx = gsap.context(() => {
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
    }, scope);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to(scope.querySelector("[data-hero='headline']"), {
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(scope.querySelector("[data-parallax='back']"), {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(scope.querySelector("[data-parallax='front']"), {
        y: -24,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden bg-cream-50 pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50"
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                Coach professionnelle certifiée RNCP
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Spécialiste INM · Réunion & métropole
              </p>
            </div>
          </div>

          <HeroHeadline />

          <p
            data-hero="support"
            className="mt-5 max-w-lg text-lg leading-relaxed text-ink-500"
          >
            {SITE_DESCRIPTION}
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

        <div data-hero="visual" className="relative lg:justify-self-end">
          <div
            data-parallax="back"
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] border border-coral-500/25 sm:-inset-6"
          />
          <div
            data-parallax="front"
            className="relative overflow-hidden rounded-2xl border border-cream-200 bg-cream-100 shadow-lg"
          >
            <Image
              src={withBasePath("/images/hero.png")}
              alt="Composition abstraite d'arcs concentriques corail et crème"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-800/55 to-transparent px-5 py-5">
              <p className="font-script text-4xl text-cream-50">Jodie</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/90">
                Sortir du flou · Vers la clarté
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
