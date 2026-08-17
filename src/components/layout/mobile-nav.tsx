"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/site";
import { Button } from "@/components/ui/button";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink-800/45 transition-opacity"
        aria-label="Fermer le menu"
        onClick={onClose}
      />
      <nav className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] max-w-full flex-col bg-cream-50 shadow-xl">
        <div className="flex items-center justify-between border-b border-cream-200 px-4 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700">
            Menu
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 active:bg-cream-200"
            aria-label="Fermer le menu"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-ink-700 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 active:bg-cream-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-cream-200 p-4" onClick={onClose}>
          <Button href="/contact/" className="w-full">
            Échangeons sur votre besoin
          </Button>
        </div>
      </nav>
    </div>
  );
}
