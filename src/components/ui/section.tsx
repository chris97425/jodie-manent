import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx("py-16 sm:py-20 lg:py-24", className)}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <header
            className={cx(
              "mb-10 max-w-2xl sm:mb-12",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow ? (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-coral-600">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
