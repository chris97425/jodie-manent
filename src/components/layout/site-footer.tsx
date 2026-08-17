import Link from "next/link";
import { MapPin } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { LinkedInIcon } from "@/components/ui/social-icons";
import { LEGAL_NAV_LINKS } from "@/lib/legal/site-legal-info";
import {
  FOOTER_DISCOVER,
  FOOTER_NAV,
  LINKEDIN_URL,
  SITE_COVERAGE,
  SITE_NAME,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-cream-50">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
              aria-label={`${SITE_NAME} — Accueil`}
            >
              <BrandLogo
                variant="onCoral"
                size={72}
                alt=""
                className="h-16 w-16 rounded-xl"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/85">
              Coach professionnelle certifiée, formatrice et consultante.
              Accompagnement des personnes, managers et équipes pour révéler
              les potentiels et renforcer la coopération.
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm text-cream-100/85">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-coral-400"
              />
              {SITE_COVERAGE}
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-cream-50 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
            >
              <LinkedInIcon className="h-4 w-4" />
              Profil LinkedIn
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-300">
              Navigation
            </p>
            <ul className="mt-4 space-y-1">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-cream-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-300">
              Découvrir
            </p>
            <ul className="mt-4 space-y-1">
              {FOOTER_DISCOVER.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-cream-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-cream-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME} — La Réunion
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {LEGAL_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
