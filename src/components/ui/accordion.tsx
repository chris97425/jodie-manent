"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/cx";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cx("space-y-3", className)}>
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-cream-200 bg-white shadow-sm"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold text-night transition-colors duration-300 ease-out hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 active:bg-cream-100"
              >
                <span>{item.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cx(
                    "h-5 w-5 shrink-0 text-coral-800 transition-transform duration-300 ease-out",
                    open && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
              className={cx(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-5 pb-5 text-base leading-relaxed text-ink-500">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
