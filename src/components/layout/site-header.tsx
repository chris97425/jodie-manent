"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAV_ITEMS, SITE_NAME } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cx } from "@/lib/cx";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ink-700/5 bg-cream-50/85 backdrop-blur-md">
        <Container className="flex min-h-20 items-center justify-between gap-2 py-2 sm:gap-4">
          <Link
            href="/"
            className="group flex min-h-11 min-w-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
            aria-label={`${SITE_NAME} — Accueil`}
          >
            <BrandLogo
              variant="onCoral"
              size={88}
              priority
              className="h-12 w-12 shrink-0 sm:h-[4.25rem] sm:w-[4.25rem]"
            />
          </Link>

          <nav aria-label="Navigation principale" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const normalizedPath = pathname.endsWith("/")
                  ? pathname
                  : `${pathname}/`;
                const active =
                  item.href === "/"
                    ? normalizedPath === "/"
                    : normalizedPath.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cx(
                        "inline-flex min-h-11 items-center rounded-full px-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 active:scale-[0.98]",
                        active
                          ? "text-coral-500"
                          : "text-ink-600 hover:text-coral-500",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button href="/contact/" className="hidden sm:inline-flex">
              Prendre un RDV gratuit
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 active:scale-95 xl:hidden"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
