import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-coral-100 bg-warm-50 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,107,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(255,107,107,0.1),_transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-coral-500/10 blur-3xl"
      />
      <Container className="relative">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-coral-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-5xl leading-tight text-ink-900 sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
