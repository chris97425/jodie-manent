export const NEED_TYPES = [
  "Coaching individuel",
  "Bilan de compétences",
  "Formation managers (Intelligences et Natures Multiples)",
  "Formation collectifs (mieux travailler ensemble)",
  "Journée de cohésion / intelligence collective",
  "Conférence ou atelier",
  "Autre",
] as const;

export type NeedType = (typeof NEED_TYPES)[number];

export const CONTACT_REASSURANCE =
  "Votre message reste confidentiel. Je vous réponds pour convenir d'un premier échange, sans engagement.";
