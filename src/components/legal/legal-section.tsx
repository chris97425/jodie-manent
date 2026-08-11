import type { ReactNode } from "react";

type LegalSectionProps = {
  id: string;
  title: string;
  index: number;
  children: ReactNode;
};

export function LegalSection({
  id,
  title,
  index,
  children,
}: LegalSectionProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-cream-200 pb-10 last:border-b-0 last:pb-0"
    >
      <header className="mb-4 flex items-baseline gap-3">
        <span className="text-sm font-semibold tabular-nums text-coral-500">
          {number}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-ink-700">
          {title}
        </h2>
      </header>
      <div className="space-y-4 text-base leading-relaxed text-ink-600">
        {children}
      </div>
    </section>
  );
}

type LegalInfoRowProps = {
  label: string;
  value: ReactNode;
};

export function LegalInfoRow({ label, value }: LegalInfoRowProps) {
  return (
    <div className="grid gap-1 border-b border-cream-200 py-3 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:gap-6">
      <dt className="text-sm font-semibold text-ink-700">{label}</dt>
      <dd className="text-base text-ink-600">{value}</dd>
    </div>
  );
}

type LegalBulletListProps = {
  items: ReactNode[];
};

export function LegalBulletList({ items }: LegalBulletListProps) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-coral-500">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
