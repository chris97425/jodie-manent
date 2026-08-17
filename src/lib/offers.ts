export type Offer = {
  id: string;
  title: string;
  summary: string;
  description: string;
  modalities: string;
  pricing: string;
  href: string;
  featured?: boolean;
};

export const OFFERS: Offer[] = [
  {
    id: "formations",
    title: "Formation",
    summary:
      "Posture managériale, coopération et connaissance de soi — des formats construits avec vous.",
    description:
      "Des formations sur les Intelligences et Natures Multiples, au service du management (offre prioritaire, 3 jours) et des collectifs. Présentiel ou distanciel, à La Réunion, dans l'océan Indien et à distance.",
    modalities:
      "Présentiel ou distanciel — La Réunion, océan Indien et à distance.",
    pricing: "Sur devis",
    href: "/entreprises-equipes/",
    featured: true,
  },
  {
    id: "bilans",
    title: "Bilans de compétences et coaching professionnel",
    summary:
      "Faire le point, clarifier une direction, valider un projet et passer à l'action.",
    description:
      "Trois formats de bilan — Essentiel 13 h, Medium 16 h, Approfondi 20 h — et un coaching professionnel individuel, orienté action.",
    modalities:
      "Présentiel ou distanciel — La Réunion, océan Indien et à distance.",
    pricing: "Sur devis",
    href: "/bilan-de-competences/",
  },
  {
    id: "conferences",
    title: "Conférences et ateliers de sensibilisation",
    summary:
      "Faire découvrir les potentiels et la coopération à un large public.",
    description:
      "Un format court et fédérateur pour ouvrir un dialogue sur les talents, la motivation et la coopération.",
    modalities:
      "Présentiel ou distanciel — La Réunion, océan Indien et à distance.",
    pricing: "Sur devis",
    href: "/entreprises-equipes/#conferences",
  },
];

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
