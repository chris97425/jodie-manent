export type BilanObjective = {
  id: string;
  title: string;
  description: string;
};

export type BilanFormat = {
  id: string;
  title: string;
  hours: string;
  description: string;
  points: string[];
  recommended?: boolean;
};

export const BILAN_INTRO =
  "Le bilan de compétences est un espace pour prendre du recul, clarifier une situation, identifier ses ressources, retrouver de la confiance et construire un projet professionnel aligné.";

export const BILAN_OBJECTIVES: BilanObjective[] = [
  {
    id: "point",
    title: "Faire le point",
    description: "Compétences, talents, motivations, valeurs, besoins.",
  },
  {
    id: "direction",
    title: "Clarifier une direction",
    description: "Reconversion, évolution, mobilité, nouvelles pistes.",
  },
  {
    id: "valider",
    title: "Valider un projet",
    description:
      "Faisabilité, compétences à développer, environnement, contraintes.",
  },
  {
    id: "action",
    title: "Passer à l'action",
    description:
      "Plan d'action, formation, candidatures, réseau, étapes concrètes.",
  },
];

export const BILAN_FORMATS: BilanFormat[] = [
  {
    id: "essentiel",
    title: "Bilan Essentiel",
    hours: "13 h",
    description:
      "Pour faire le point sur une situation et identifier ses ressources clés.",
    points: [
      "Exploration du parcours et des compétences",
      "Identification des talents et motivations",
      "Premières pistes et plan d'action",
    ],
  },
  {
    id: "medium",
    title: "Bilan Medium",
    hours: "16 h",
    description:
      "Pour approfondir la connaissance de soi et préparer une évolution.",
    points: [
      "Lecture Intelligences et Natures Multiples",
      "Exploration des pistes et du marché",
      "Document de synthèse et plan d'action",
    ],
    recommended: true,
  },
  {
    id: "approfondi",
    title: "Bilan Approfondi",
    hours: "20 h",
    description:
      "Pour une reconversion ou un projet nécessitant exploration et validation.",
    points: [
      "Enquêtes métiers et validation du projet",
      "Stratégie de positionnement",
      "Suivi à l'issue du parcours",
    ],
  },
];

export const BILAN_FORMAT_NOTE =
  "Le format se choisit ensemble, lors d'un premier échange, selon votre situation et le degré d'exploration nécessaire.";

export const BILAN_COACHING = {
  title: "Un accompagnement individuel, orienté action",
  text: "Sur plusieurs séances, le coaching permet de prendre du recul, de mieux comprendre son fonctionnement, d'identifier ses leviers d'action et de mettre en œuvre des changements adaptés à sa réalité professionnelle — avec un objectif concret défini ensemble.",
} as const;
