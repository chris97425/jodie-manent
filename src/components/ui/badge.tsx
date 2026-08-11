import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "coral" | "cream" | "ink";
};

const tones = {
  coral: "border-coral-200 bg-coral-50 text-coral-800",
  cream: "border-cream-200 bg-cream-50 text-ink-600",
  ink: "border-ink-700/10 bg-white text-ink-700",
} as const;

export function Badge({
  children,
  className,
  tone = "coral",
}: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
