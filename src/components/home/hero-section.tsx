"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useGsapContext } from "@/hooks/use-gsap-context";
import {
  SITE_HEADLINE,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGsapContext(rootRef, () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      "[data-hero='brand']",
      { autoAlpha: 0, y: 24, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
    )
      .fromTo(
        "[data-hero='headline']",
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.35",
      )
      .fromTo(
        "[data-hero='support']",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.7 },
        "-=0.4",
      )
      .fromTo(
        "[data-hero='cta']",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.65 },
        "-=0.35",
      )
      .fromTo(
        "[data-hero='shape']",
        { autoAlpha: 0, scale: 0.9 },
        { autoAlpha: 1, scale: 1, duration: 1.1 },
        0.15,
      );
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden bg-warm-50 pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,_#fff7f5_0%,_#ffe8e6_42%,_#ffd4d1_100%)]"
      />
      <div
        data-hero="shape"
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-[28rem] w-[28rem] rounded-full bg-coral-500/20 blur-3xl sm:h-[36rem] sm:w-[36rem]"
      />
      <div
        data-hero="shape"
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-coral-400/15 blur-3xl"
      />
      <svg
        data-hero="shape"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[18%] h-[70%] w-[70%] text-coral-500/25"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M420 80C520 140 560 250 520 360C480 470 360 540 240 520C120 500 60 380 80 260C100 140 260 40 420 80Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M360 140C430 185 455 265 430 340C405 415 325 460 245 445C165 430 125 350 145 270C165 190 270 110 360 140Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16 sm:py-20">
        <div className="max-w-3xl">
          <div data-hero="brand" className="flex items-center gap-4">
            <Image
              src="/logo_jodie.png"
              alt="Logo Jodie M."
              width={88}
              height={88}
              priority
              className="h-20 w-20 rounded-2xl shadow-md sm:h-[88px] sm:w-[88px]"
            />
            <div>
              <p className="font-display text-5xl leading-none text-coral-600 sm:text-6xl">
                {SITE_NAME}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-ink-500">
                Coach professionnelle · La Réunion
              </p>
            </div>
          </div>

          <h1
            data-hero="headline"
            className="mt-8 max-w-2xl font-sans text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
          >
            {SITE_HEADLINE}
          </h1>

          <p
            data-hero="support"
            className="mt-5 max-w-xl font-display text-3xl text-coral-700 sm:text-4xl"
          >
            {SITE_TAGLINE}
          </p>

          <div data-hero="cta" className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact/" size="lg">
              Échanger ensemble
            </Button>
            <Button href="/offres/" variant="secondary" size="lg">
              Découvrir les offres
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
