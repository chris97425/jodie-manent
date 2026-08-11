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

export const LOGO_PATH = withBasePath("/logo_jodie.png");
