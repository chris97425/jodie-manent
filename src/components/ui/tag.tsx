import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-md bg-cream-100 px-2.5 py-1 text-sm font-medium text-ink-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
