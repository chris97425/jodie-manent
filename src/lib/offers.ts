export type Offer = {
  id: string;
  title: string;
  summary: string;
  description: string;
  modalities: string;
  pricing: string;
  featured?: boolean;
};

/** Trois offres principales (cartes) — ordre demandé */
export const OFFERS: Offer[] = [
  {
    id: "bilans",
    title: "Bilan de compétences",
    summary:
      "Approche des Intelligences et Natures Multiples pour construire un projet professionnel à votre image.",
    description:
      "Basés sur l'approche des Intelligences et Natures Multiples, mes bilans de compétences vous aident à construire un projet professionnel à votre image.",
    modalities:
      "Présentiel ou distanciel — à La Réunion et en métropole.",
    pricing: "Sur devis",
    featured: true,
  },
  {
    id: "formations",
    title: "Formation",
    summary:
      "Intelligences multiples, talents et transitions — des formats pour mieux se connaître et avancer.",
    description:
      "Des formations sur des thèmes liés aux intelligences multiples, aux talents et aux transitions professionnelles.",
    modalities:
      "Présentiel ou distanciel — à La Réunion et en métropole.",
    pricing: "Sur devis",
  },
  {
    id: "coaching",
    title: "Coaching professionnel",
    summary:
      "Accompagnement des transitions professionnelles, séance après séance.",
    description:
      "Un coaching professionnel pour clarifier et structurer vos transitions professionnelles, avec un cadre bienveillant et exigeant.",
    modalities:
      "Présentiel ou distanciel — à La Réunion et en métropole.",
    pricing: "Sur devis",
  },
];

/** Mention discrète — pas une 4ᵉ carte principale */
export const MENTORAT_NOTE = {
  id: "mentorat",
  title: "Mentorat collectif POWAO",
  text: "Accompagnement de jeunes — distanciel et à La Réunion. Sur devis.",
} as const;

export const SOCIAL_PROOF = [
  {
    id: "hackathon",
    title: "#IAVANCE",
    description: "Coach au 1er Hackathon IA de La Réunion",
  },
  {
    id: "fanm",
    title: "Fanm Nou Lé Kapab",
    description: "Atelier — Mission Locale Nord Réunion",
  },
] as const;

export const TESTIMONIAL = {
  quote: "un pas vers plus de clarté, de confiance, de sens",
  attribution: "Cliente — bilan de compétences",
} as const;
