import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
} from "@/components/ui/social-icons";
import { LEGAL_NAV_LINKS } from "@/lib/legal/site-legal-info";
import { SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/site";

const iconMap = {
  linkedin: LinkedInIcon,
  "linkedin-company": LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  malt: MaltIcon,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-cream-100">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo
                size={40}
                alt=""
                className="h-10 w-10 rounded-md"
              />
              <div>
                <p className="font-script text-3xl leading-none text-coral-400">
                  Jodie
                </p>
                <p className="text-sm font-semibold tracking-wide text-cream-100">
                  Manent
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-cream-200">
              {SITE_TAGLINE}
            </p>
            <p className="mt-3 text-sm text-cream-200/80">
              Coach professionnelle certifiée (RNCP) · Sainte-Marie, La Réunion
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-300">
              Navigation
            </p>
            <ul className="mt-4 space-y-1">
              {[
                { href: "/a-propos/", label: "À propos" },
                { href: "/offres/", label: "Offres" },
                { href: "/contact/", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-cream-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:text-coral-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-300">
              Réseaux
            </p>
            <ul className="mt-4 space-y-1">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.id as keyof typeof iconMap];
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-cream-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:text-coral-200"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm sm:text-base">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-cream-200/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. Tous droits réservés.
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
