export const SITE_NAME = "Jodie Manent";
export const SITE_TAGLINE = "Faire grandir les personnes et les collectifs.";
export const SITE_HERO = "Faire grandir les personnes et les collectifs.";
export const SITE_HEADLINE =
  "Faire grandir les personnes et les collectifs.";
export const SITE_DESCRIPTION =
  "Coaching, formations et accompagnements sur mesure pour mieux se connaître, développer sa posture professionnelle et renforcer la coopération.";
export const SITE_LOCATION = "La Réunion";
export const SITE_COVERAGE = "La Réunion, océan Indien et à distance";
export const SITE_ROLE = "Coach • Formatrice • Consultante";

/** URL publique GitHub Pages */
export const SITE_URL = "https://chris97425.github.io/jodie-manent";

export const PLACEHOLDER = "[À COMPLÉTER]";

export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/entreprises-equipes/", label: "Entreprises & équipes" },
  { href: "/bilan-de-competences/", label: "Bilan de compétences" },
  { href: "/approche/", label: "Approche IM/NM" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/faq/", label: "FAQ" },
];

export const FOOTER_NAV: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/entreprises-equipes/", label: "Entreprises & équipes" },
  { href: "/bilan-de-competences/", label: "Bilan de compétences" },
  { href: "/approche/", label: "Approche IM/NM" },
];

export const FOOTER_DISCOVER: NavItem[] = [
  { href: "/a-propos/", label: "À propos" },
  { href: "/faq/", label: "FAQ" },
  { href: "/temoignages/", label: "Témoignages" },
  { href: "/contact/", label: "Contact" },
];

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  external: boolean;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://re.linkedin.com/in/jodie-manent-8b727717",
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook — Révélatrice de vos talents",
    href: "https://www.facebook.com/jodiemanent",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/jodiemanent/",
    external: true,
  },
  {
    id: "malt",
    label: "Malt — Coach RNCP · Bilans de compétences",
    href: "https://www.malt.fr/profile/jodiemanent",
    external: true,
  },
];

export const CONTACT = {
  email: PLACEHOLDER,
  phone: PLACEHOLDER,
  address: PLACEHOLDER,
  location: SITE_LOCATION,
};
