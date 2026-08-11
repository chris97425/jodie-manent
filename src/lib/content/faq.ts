export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "bilan",
    question: "Qu'est-ce qu'un bilan de compétences ?",
    answer:
      "Un bilan de compétences vous aide à faire le point sur votre parcours, identifier vos talents et construire un projet professionnel à votre image. Chez Jodie Manent, il s'appuie sur l'approche des Intelligences et Natures Multiples.",
  },
  {
    id: "deroulement",
    question: "Comment se déroule l'accompagnement ?",
    answer:
      "Après un premier échange pour clarifier votre besoin, nous définissons ensemble le format adapté (bilan, coaching ou formation). Les modalités précises sont précisées sur devis, avant tout engagement.",
  },
  {
    id: "modalite",
    question: "En présentiel ou à distance ?",
    answer:
      "Les accompagnements sont proposés en présentiel ou à distance, à La Réunion et en métropole, selon vos besoins et les créneaux convenus.",
  },
  {
    id: "duree",
    question: "Combien de temps dure un accompagnement ?",
    answer:
      "La durée dépend de votre situation et du format choisi. Les durées précises seront communiquées sur devis : [À COMPLÉTER].",
  },
  {
    id: "financement",
    question: "Le bilan est-il finançable ?",
    answer:
      "Des dispositifs de financement peuvent exister selon votre situation. Les modalités exactes restent à confirmer : [À COMPLÉTER]. Aucune affirmation CPF n'est faite ici sans vérification.",
  },
  {
    id: "rdv",
    question: "Comment prendre rendez-vous ?",
    answer:
      "Utilisez le formulaire de contact du site pour décrire votre besoin. Jodie vous répondra pour convenir d'un échange et, le cas échéant, d'un devis.",
  },
];
