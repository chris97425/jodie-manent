"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PortraitCard } from "@/components/ui/portrait-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { IMAGES } from "@/lib/assets";
import { HOME_QUOTE } from "@/lib/content/home";
import { SITE_DESCRIPTION, SITE_HERO, SITE_ROLE } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const scope = rootRef.current;
    if (!scope || reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero='eyebrow']",
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
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-cream-50 pt-20"
    >
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p
            data-hero="eyebrow"
            className="text-xs font-bold uppercase tracking-[0.2em] text-coral-600"
          >
            {SITE_ROLE}
          </p>
          <h1
            data-hero="headline"
            className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-700 sm:text-5xl lg:text-6xl"
          >
            {SITE_HERO}
          </h1>
          <p
            data-hero="support"
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl"
          >
            {SITE_DESCRIPTION}
          </p>
          <div data-hero="cta" className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">
              Échangeons sur votre besoin
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="/approche/" variant="secondary" size="lg">
              Découvrir l&apos;approche IM/NM
            </Button>
          </div>
        </div>

        <div data-hero="visual" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <PortraitCard
            src={IMAGES.hero}
            alt="Jodie Manent, coach professionnelle, assise sur un banc corail entourée de végétation tropicale"
            width={1280}
            height={1920}
            priority
            className="aspect-[4/5]"
            imageClassName="object-[center_20%]"
          />
          <div className="absolute -bottom-6 -left-2 hidden max-w-xs rounded-2xl bg-white p-6 shadow-lg md:block lg:-left-6">
            <p className="font-display text-lg italic leading-snug text-ink-700">
              « {HOME_QUOTE} »
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
