import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
} from "@/components/ui/social-icons";
import { SOCIAL_LINKS } from "@/lib/site";

const iconMap = {
  linkedin: LinkedInIcon,
  "linkedin-company": LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  malt: MaltIcon,
} as const;

export function SocialLinks() {
  return (
    <div className="rounded-3xl border border-coral-100 bg-white p-6 sm:p-8">
      <h2 className="font-display text-3xl text-ink-900">Réseaux</h2>
      <p className="mt-3 text-base text-ink-600">
        Retrouvez Jodie Manent sur LinkedIn, Facebook, Instagram et Malt.
      </p>
      <ul className="mt-5 space-y-2">
        {SOCIAL_LINKS.map((link) => {
          const Icon = iconMap[link.id as keyof typeof iconMap];
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-ink-800 transition-colors hover:bg-coral-50 hover:text-coral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:bg-coral-100"
                aria-label={link.label}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{link.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
