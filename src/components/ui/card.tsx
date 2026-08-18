import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = "article",
  interactive = false,
}: CardProps) {
  return (
    <Tag
      className={cx(
        "rounded-2xl border border-cream-200 bg-white p-6 shadow-sm sm:p-7",
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-coral-300 hover:shadow-md focus-within:border-coral-400",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
