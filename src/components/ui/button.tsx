import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "cream";
type ButtonSize = "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-center text-sm font-semibold tracking-tight transition-[transform,background-color,color,box-shadow,border-color,opacity,filter] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-coral-700 text-white shadow-sm hover:bg-coral-800 hover:shadow-md active:bg-coral-900",
  secondary:
    "border border-ink-700/20 bg-transparent text-ink-700 hover:border-coral-700 hover:bg-white active:bg-cream-100",
  cream:
    "bg-cream-50 text-ink-900 hover:bg-white active:bg-cream-100",
  ghost:
    "bg-transparent text-ink-700 hover:bg-cream-100 hover:text-ink-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-6 py-2.5",
  lg: "min-h-12 px-8 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
  } = props;
  const classes = cx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
