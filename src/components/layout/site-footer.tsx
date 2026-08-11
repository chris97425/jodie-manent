import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
} from "@/components/ui/social-icons";
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
    <footer className="border-t border-coral-100 bg-ink-900 text-warm-100">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo_jodie.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-display text-3xl text-white">{SITE_NAME}</p>
            </div>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-warm-200">
              {SITE_TAGLINE}
            </p>
            <p className="mt-3 text-sm text-warm-300">
              Coach professionnelle certifiée (RNCP) · Sainte-Marie, La Réunion
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-300">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/a-propos/"
                  className="inline-flex min-h-11 items-center text-warm-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:text-coral-200"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/offres/"
                  className="inline-flex min-h-11 items-center text-warm-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:text-coral-200"
                >
                  Offres
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-11 items-center text-warm-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:text-coral-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-300">
              Réseaux
            </p>
            <ul className="mt-4 space-y-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.id as keyof typeof iconMap];
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-warm-100 transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:text-coral-200"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-warm-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/mentions-legales/"
              className="inline-flex min-h-11 items-center transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite/"
              className="inline-flex min-h-11 items-center transition-colors hover:text-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
