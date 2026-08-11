export const SITE_NAME = "Jodie Manent";
export const SITE_TAGLINE = "Révélons VOS talents ensemble !";
export const SITE_HEADLINE =
  "J'aide à clarifier et structurer les transitions professionnelles";
export const SITE_DESCRIPTION =
  "Je suis Jodie, coach professionnelle certifiée, spécialiste des Intelligences et Natures Multiples.";
export const SITE_LOCATION = "Sainte-Marie, La Réunion";
export const SITE_COVERAGE = "La Réunion et métropole";

/** URL publique GitHub Pages */
export const SITE_URL = "https://chris97425.github.io/jodie-manent";

export const PLACEHOLDER = "[À COMPLÉTER]";

export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/offres/", label: "Offres" },
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
    label: "LinkedIn — profil",
    href: "https://www.linkedin.com/in/jodie-manent-8b727717",
    external: true,
  },
  {
    id: "linkedin-company",
    label: "LinkedIn — Jodie Manent",
    href: "https://www.linkedin.com/company/jodie-manent",
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
