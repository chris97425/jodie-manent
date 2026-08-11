"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { LegalSectionNav } from "@/lib/legal/site-legal-info";

type LegalTocProps = {
  sections: LegalSectionNav[];
  label?: string;
};

const HEADER_OFFSET = 96;

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function LegalToc({
  sections,
  label = "Sommaire",
}: LegalTocProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0),
          );
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const top =
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      aria-label={label}
      className="rounded-2xl border border-cream-200 bg-cream-50 p-5 sm:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-800">
        {label}
      </p>
      <ol className="mt-4 space-y-1">
        {sections.map((section, index) => {
          const active = activeId === section.id;
          const number = String(index + 1).padStart(2, "0");
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(event) => handleClick(event, section.id)}
                aria-current={active ? "true" : undefined}
                className={cx(
                  "flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:scale-[0.99]",
                  active
                    ? "bg-white font-semibold text-coral-800 shadow-sm"
                    : "text-ink-600 hover:bg-white/70 hover:text-ink-700",
                )}
              >
                <span
                  className={cx(
                    "tabular-nums text-xs font-semibold tracking-wide",
                    active ? "text-coral-500" : "text-ink-400",
                  )}
                >
                  {number}
                </span>
                <span>{section.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
