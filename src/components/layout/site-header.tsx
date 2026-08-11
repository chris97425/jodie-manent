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

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-cream-200/90 bg-cream-50/95 backdrop-blur-md">
        <Container className="flex min-h-16 items-center justify-between gap-4 py-2">
          <Link
            href="/"
            className="group flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
            aria-label={`${SITE_NAME} — Accueil`}
          >
            <BrandLogo
              size={40}
              priority
              className="h-10 w-10 rounded-md shadow-sm transition-transform duration-200 group-hover:scale-[1.03] group-active:scale-100"
            />
            <span className="hidden items-baseline gap-1.5 sm:flex">
              <span className="font-script text-3xl leading-none text-coral-500">
                Jodie
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink-700">
                Manent
              </span>
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
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
                        "inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:scale-[0.98]",
                        active
                          ? "bg-cream-100 text-coral-800"
                          : "text-ink-600 hover:bg-cream-100 hover:text-ink-700",
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

          <div className="flex items-center gap-2">
            <Button href="/contact/" className="hidden sm:inline-flex">
              Je prends RDV
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:scale-95 lg:hidden"
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
