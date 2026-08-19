export type EntryDoor = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const HOME_ENTRY_DOORS: EntryDoor[] = [
  {
    id: "entreprises",
    title: "Pour les entreprises et les équipes",
    description:
      "Développer l'intelligence collective, la coopération et la posture managériale au sein de vos services RH et de vos équipes.",
    href: "/entreprises-equipes/",
  },
  {
    id: "managers",
    title: "Pour les managers",
    description:
      "Affirmer votre posture et adapter votre management grâce aux Intelligences et Natures Multiples.",
    href: "/entreprises-equipes/",
  },
  {
    id: "transition",
    title: "Pour les personnes en transition professionnelle",
    description:
      "Prendre du recul, clarifier votre projet et avancer vers des choix professionnels alignés.",
    href: "/bilan-de-competences/",
  },
];

export type HomeAccompaniment = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const HOME_ACCOMPANIMENTS: HomeAccompaniment[] = [
  {
    id: "formation",
    title: "Formation",
    description:
      "Posture managériale, coopération, connaissance de soi : des formations construites avec vous.",
    href: "/entreprises-equipes/",
  },
  {
    id: "cohesion",
    title: "Journées de cohésion & intelligence collective",
    description:
      "Des temps forts fédérateurs pour mieux coopérer.",
    href: "/entreprises-equipes/#cohesion",
  },
  {
    id: "bilan-coaching",
    title: "Bilans de compétences et coaching professionnel",
    description:
      "Accompagnement individuel des transitions et des objectifs concrets.",
    href: "/bilan-de-competences/",
  },
  {
    id: "conferences",
    title: "Conférences et ateliers de sensibilisation",
    description:
      "Faire découvrir les potentiels et la coopération à un large public.",
    href: "/entreprises-equipes/#conferences",
  },
];

export const HOME_PEDAGOGY =
  "Se connaître, évoluer, coopérer : des accompagnements conçus pour faire grandir les personnes et les collectifs.";

export const HOME_QUOTE =
  "Je suis convaincue du potentiel de chacun. Apprendre à mieux se connaître, c'est apprendre à faire des choix plus justes pour soi, à trouver sa place et à mieux travailler avec les autres.";

export const HOME_CONVICTION =
  "Je crois que les personnes progressent davantage lorsqu'elles comprennent leurs ressources, se sentent légitimes et trouvent un environnement qui leur permet d'exprimer leur potentiel.";

export const FEATURED_OFFER = {
  eyebrow: "Offre prioritaire — Formation 3 jours",
  title:
    "Développer sa posture managériale grâce aux Intelligences et Natures Multiples.",
  description:
    "Une formation pour aider les managers à mieux comprendre leur fonctionnement, leurs zones de confort et leurs ressources naturelles — ainsi que celles de leurs collaborateurs — afin d'adapter leur communication et leur management.",
  href: "/entreprises-equipes/",
} as const;
