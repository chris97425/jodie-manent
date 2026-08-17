/** basePath GitHub Pages — source unique pour les assets publics */
export const BASE_PATH = "/jodie-manent";

/**
 * Préfixe un chemin public avec le basePath.
 * À utiliser pour <img>, favicon manuels, liens absolus hors next/image.
 * next/image avec `basePath` dans next.config préfixe déjà : préférer
 * `BrandLogo` (import statique) pour le logo.
 */
export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.startsWith(`${BASE_PATH}/`) || normalized === BASE_PATH) {
    return normalized;
  }
  return `${BASE_PATH}${normalized}`;
}

export const LOGO_PATH = withBasePath("/logo-coral-transparent.png");

export const IMAGES = {
  hero: "/images/jodie-photo-hero.jpg",
  portraitParc: "/images/jodie-parc.jpg",
  portraitAbout: "/images/jodie-about.jpg",
  atelier: "/images/atelier-cooperation.jpg",
  paysage: "/images/paysage-reunion.jpg",
  formation: "/images/formation.png",
  bilan: "/images/bilan.png",
  coaching: "/images/coaching.png",
  cta: "/images/cta.png",
} as const;
