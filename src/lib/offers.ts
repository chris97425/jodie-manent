export type Offer = {
  id: string;
  title: string;
  summary: string;
  description: string;
  modalities: string;
  pricing: string;
};

export const OFFERS: Offer[] = [
  {
    id: "coaching",
    title: "Coaching professionnel",
    summary:
      "Un accompagnement sur mesure pour clarifier vos transitions et avancer avec confiance.",
    description:
      "Des séances de coaching professionnel pour vous aider à clarifier votre situation, structurer vos choix et traverser vos transitions professionnelles avec plus de sens et de sérénité.",
    modalities:
      "Présentiel ou distanciel — à La Réunion et en métropole.",
    pricing: "Sur devis",
  },
  {
    id: "bilans",
    title: "Bilans de compétences",
    summary:
      "Construire un projet professionnel à votre image, grâce aux Intelligences et Natures Multiples.",
    description:
      "Basés sur l'approche des Intelligences et Natures Multiples, mes bilans de compétences vous aident à construire un projet professionnel à votre image.",
    modalities:
      "Présentiel ou distanciel — à La Réunion et en métropole.",
    pricing: "Sur devis",
  },
  {
    id: "formations",
    title: "Formations",
    summary:
      "Des formations chaleureuses autour des intelligences multiples, des talents et des transitions.",
    description:
      "Des formations sur des thèmes liés aux intelligences multiples, aux talents et aux transitions professionnelles — pour mieux se connaître et mobiliser ses forces.",
    modalities:
      "Présentiel ou distanciel — à La Réunion et en métropole.",
    pricing: "Sur devis",
  },
  {
    id: "mentorat",
    title: "Mentorat",
    summary:
      "Accompagnement de jeunes au sein du collectif POWAO, en distanciel et à La Réunion.",
    description:
      "Un mentorat au sein du collectif POWAO pour accompagner les jeunes dans leur parcours — en distanciel et à La Réunion.",
    modalities:
      "Distanciel et interventions à La Réunion.",
    pricing: "Sur devis",
  },
];

export const SOCIAL_PROOF = [
  {
    id: "hackathon",
    title: "Hackathon IA de La Réunion #IAVANCE",
    description: "Coach au 1er Hackathon IA de La Réunion.",
  },
  {
    id: "fanm",
    title: "Fanm Nou Lé Kapab",
    description:
      "Atelier « Fanm Nou Lé Kapab » — Mission Locale Nord Réunion.",
  },
] as const;

export const TESTIMONIAL = {
  quote: "un pas vers plus de clarté, de confiance, de sens",
  attribution: "Cliente accompagnée",
} as const;
