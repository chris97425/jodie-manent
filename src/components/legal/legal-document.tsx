import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type LegalDocumentProps = {
  title: string;
  children: ReactNode;
};

export function LegalDocument({ title, children }: LegalDocumentProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-ink-700 sm:text-5xl">
          {title}
        </h1>
        <div className="prose-legal mt-8 space-y-6 text-base leading-relaxed text-ink-600">
          {children}
        </div>
      </Container>
    </section>
  );
}

type LegalBlockProps = {
  title: string;
  children: ReactNode;
};

export function LegalBlock({ title, children }: LegalBlockProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink-700">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
