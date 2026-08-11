export type MethodStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const METHOD_STEPS: MethodStep[] = [
  {
    id: "decouvrir",
    number: "01",
    title: "Découvrir",
    description:
      "Faire le point sur votre situation et clarifier la demande — sans jugement.",
  },
  {
    id: "explorer",
    number: "02",
    title: "Explorer",
    description:
      "Intelligences et Natures Multiples, forces, valeurs et aspirations.",
  },
  {
    id: "construire",
    number: "03",
    title: "Construire",
    description:
      "Un projet professionnel à votre image, avec des options réalistes.",
  },
  {
    id: "agir",
    number: "04",
    title: "Agir",
    description: "Un plan d'action concret et un suivi pour avancer sereinement.",
  },
];
