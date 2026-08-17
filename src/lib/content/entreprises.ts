export type ObjectiveList = {
  title: string;
  items: string[];
};

export type CollectiveOffer = {
  id: string;
  kind: "Formation" | "Collectif" | "Individuel" | "Sensibilisation";
  title: string;
  subtitle: string;
  objectives: string[];
};

export const ENTREPRISES_INTRO =
  "Pour les services RH, DRH et RRH, les managers, les équipes, les organismes de formation, écoles, CFA et associations — des interventions construites avec vous, ancrées dans vos enjeux réels.";

export const ENTREPRISES_OFFERS: CollectiveOffer[] = [
  {
    id: "management",
    kind: "Formation",
    title:
      "Les Intelligences et Natures Multiples au service du management",
    subtitle: "Développer sa posture managériale — offre prioritaire, 3 jours",
    objectives: [
      "Mieux se connaître en tant que manager",
      "Identifier ses réflexes et préférences managériales",
      "Comprendre les profils, talents et motivations de ses collaborateurs",
      "Adapter sa communication et sa posture",
      "Renforcer l'engagement, l'autonomie et la coopération",
    ],
  },
  {
    id: "collectifs",
    kind: "Formation",
    title: "Les Intelligences et Natures Multiples au service des collectifs",
    subtitle: "Mieux se connaître pour mieux travailler ensemble",
    objectives: [
      "Prendre conscience de ses talents et de ses forces",
      "Mieux comprendre les différences de fonctionnement",
      "Valoriser les complémentarités au sein de l'équipe",
      "Améliorer la communication et la coopération",
      "Renforcer la cohésion collective",
    ],
  },
  {
    id: "cohesion",
    kind: "Collectif",
    title: "Journée de cohésion & ateliers d'intelligence collective",
    subtitle: "Créer un temps fort fédérateur",
    objectives: [
      "Renforcer la cohésion et la coopération",
      "Fluidifier la communication et améliorer le climat de travail",
      "Créer un temps fort fédérateur",
      "Valoriser les talents et les complémentarités",
      "Stimuler la créativité et l'intelligence collective",
    ],
  },
];

export const ATELIER_EXAMPLES = [
  "Révéler les talents et les complémentarités de l'équipe",
  "Imaginer ensemble des actions autour du bien-être au travail",
  "Co-construire une vision, une charte ou un plan d'action collectif",
] as const;

export const ENTREPRISES_COACHING = {
  title: "Coaching professionnel des managers et collaborateurs",
  text: "Un accompagnement individuel pour faire évoluer une situation professionnelle et atteindre un objectif concret. J'accompagne managers et collaborateurs sur plusieurs séances afin de prendre du recul, mieux comprendre leur fonctionnement, identifier leurs leviers d'action et mettre en œuvre des changements adaptés à leur réalité professionnelle.",
} as const;

export const ENTREPRISES_CONFERENCES = {
  title: "Conférences sur les Intelligences et Natures Multiples",
  text: "Un format court et fédérateur pour faire découvrir l'approche à un large public : comprendre ce qui met chacun en mouvement, révéler les talents présents dans l'organisation et ouvrir un dialogue nouveau sur la coopération.",
} as const;

export const ENTREPRISES_PROBLEMS = [
  "Des managers qui doutent de leur posture",
  "Des difficultés de communication au quotidien",
  "Des équipes qui travaillent côte à côte sans réellement coopérer",
  "Des tensions, incompréhensions ou pertes de sens",
  "Un besoin de renforcer la confiance et l'engagement",
  "Une envie de faire évoluer les pratiques managériales",
] as const;
