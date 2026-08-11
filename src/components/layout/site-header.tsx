"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAV_ITEMS, SITE_NAME } from "@/lib/site";
import { Button } from "@/components/ui/button";
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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-coral-100/80 bg-warm-50/90 backdrop-blur-md">
        <Container className="flex min-h-16 items-center justify-between gap-4 py-2">
          <Link
            href="/"
            className="group flex min-h-11 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 focus-visible:ring-offset-2"
            aria-label={`${SITE_NAME} — Accueil`}
          >
            <Image
              src="/logo_jodie.png"
              alt="Logo Jodie M."
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-[1.03] group-active:scale-100"
              priority
            />
            <span className="hidden font-display text-2xl text-ink-900 sm:inline">
              Jodie Manent
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/" || pathname === ""
                    : pathname.startsWith(item.href.replace(/\/$/, ""));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cx(
                        "inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:scale-[0.98]",
                        active
                          ? "bg-coral-50 text-coral-700"
                          : "text-ink-700 hover:bg-coral-50 hover:text-coral-700",
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
              Me contacter
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-ink-800 transition-colors hover:bg-coral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:scale-95 lg:hidden"
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
