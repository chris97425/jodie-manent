"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { cx } from "@/lib/cx";
import type { Testimonial } from "@/lib/content/testimonials";

type TestimonialStackProps = {
  items: Testimonial[];
  /** Nombre de blocs affichés à la verticale (défaut : 3). */
  pageSize?: number;
};

export function TestimonialStack({
  items,
  pageSize = 3,
}: TestimonialStackProps) {
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  if (items.length === 0) return null;

  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(page, pageCount - 1);
  const visible = items.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize,
  );

  const toggle = (id: string) =>
    setExpanded((current) => ({ ...current, [id]: !current[id] }));

  return (
    <div>
      <div className="flex flex-col gap-5">
        {visible.map((item) => {
          const isExpanded = Boolean(expanded[item.id]);
          const canExpand = item.quote.length > 160;
          return (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-3xl border border-ink-700/5 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                {item.summary ? (
                  <p className="font-display text-lg font-normal italic text-coral-500">
                    {item.summary}
                  </p>
                ) : null}
                {item.author ? (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                    {item.author}
                  </p>
                ) : null}
              </div>
              <blockquote
                className={cx(
                  "mt-4 text-base leading-relaxed text-ink-700",
                  !isExpanded && "line-clamp-4",
                )}
              >
                « {item.quote} »
              </blockquote>
              {canExpand ? (
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isExpanded}
                  className="mt-3 inline-flex min-h-11 w-fit items-center gap-1.5 self-start rounded-full text-sm font-semibold text-coral-500 transition-colors hover:text-coral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
                >
                  {isExpanded ? "Lire moins" : "Lire plus"}
                  {isExpanded ? (
                    <ChevronUp aria-hidden="true" className="h-4 w-4" />
                  ) : (
                    <ChevronDown aria-hidden="true" className="h-4 w-4" />
                  )}
                </button>
              ) : null}
              <figcaption className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                {item.attribution}
              </figcaption>
            </article>
          );
        })}
      </div>

      {pageCount > 1 ? (
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            aria-label="Témoignages précédents"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ink-700/10 bg-white text-ink-700 transition-colors hover:border-coral-500 hover:text-coral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <p className="text-sm font-medium text-ink-500">
            {currentPage + 1} / {pageCount}
          </p>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={currentPage === pageCount - 1}
            aria-label="Témoignages suivants"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ink-700/10 bg-white text-ink-700 transition-colors hover:border-coral-500 hover:text-coral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
