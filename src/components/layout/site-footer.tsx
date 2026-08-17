import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
} from "@/components/ui/social-icons";
import { LEGAL_NAV_LINKS } from "@/lib/legal/site-legal-info";
import {
  CONTACT,
  FOOTER_DISCOVER,
  FOOTER_NAV,
  PLACEHOLDER,
  SITE_COVERAGE,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/site";

const iconMap = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  malt: MaltIcon,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-700/5 bg-cream-50 text-ink-700">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
              aria-label={`${SITE_NAME} — Accueil`}
            >
              <BrandLogo size={96} alt="" className="h-20 w-20" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              Coach professionnelle certifiée, formatrice et consultante.
              Accompagnement des personnes, managers et équipes pour révéler
              les potentiels et renforcer la coopération.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink-600">
              <li className="flex items-center gap-3">
                <MapPin
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-coral-500"
                />
                {SITE_COVERAGE}
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-coral-500"
                />
                {CONTACT.email === PLACEHOLDER ? (
                  <span>Email : {PLACEHOLDER}</span>
                ) : (
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-coral-600"
                  >
                    {CONTACT.email}
                  </a>
                )}
              </li>
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.id as keyof typeof iconMap];
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-cream-100 hover:text-coral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
              Navigation
            </p>
            <ul className="mt-4 space-y-1">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink-600 transition-colors hover:text-coral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
              Découvrir
            </p>
            <ul className="mt-4 space-y-1">
              {FOOTER_DISCOVER.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink-600 transition-colors hover:text-coral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-700/5 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME} — La Réunion
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {LEGAL_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center transition-colors hover:text-coral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
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
