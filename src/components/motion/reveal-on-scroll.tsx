"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapContext } from "@/hooks/use-gsap-context";

gsap.registerPlugin(ScrollTrigger);

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 16,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(ref, () => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        delay,
        ease: "power3.out",
        duration: 0.4,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      },
    );
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
