export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "deroulement-bilan",
    question: "Comment se déroule un bilan de compétences ?",
    answer:
      "Après un premier échange pour clarifier votre situation, nous choisissons ensemble le format (Essentiel 13 h, Medium 16 h ou Approfondi 20 h). Le parcours combine des séances d'accompagnement, un travail de connaissance de soi — notamment via les Intelligences et Natures Multiples — et un plan d'action concret. Les modalités précises se précisent avant tout engagement.",
  },
  {
    id: "financement",
    question: "Le bilan est-il finançable (OPCO / CPF) ?",
    answer:
      "Des dispositifs OPCO et CPF peuvent s'appliquer selon votre situation. Les conditions exactes se confirment lors du premier échange : [À COMPLÉTER].",
  },
  {
    id: "distance",
    question: "Intervenez-vous à distance ?",
    answer:
      "Oui. Je suis basée à La Réunion, j'interviens sur l'île, dans l'océan Indien, et à distance en visioconférence.",
  },
  {
    id: "coaching-vs-formation",
    question: "Quelle est la différence entre coaching et formation ?",
    answer:
      "Le coaching est un accompagnement individuel, sur plusieurs séances, centré sur un objectif concret et votre réalité professionnelle. La formation est un temps collectif (ou un parcours construit avec une organisation) pour transmettre des repères, expérimenter et faire évoluer les pratiques — par exemple la posture managériale ou la coopération d'équipe.",
  },
  {
    id: "nombre-seances",
    question: "Combien de séances faut-il prévoir ?",
    answer:
      "Un coaching se construit généralement sur plusieurs séances réparties dans le temps, selon l'objectif défini ensemble. Le bilan de compétences existe en trois formats : 13 h, 16 h ou 20 h. Le nombre exact de séances se précise lors du premier échange.",
  },
  {
    id: "premier-echange",
    question: "Comment se déroule un premier échange ?",
    answer:
      "C'est un temps sans engagement, pour comprendre votre contexte, vos enjeux et vérifier ensemble que l'accompagnement envisagé est le plus juste. Utilisez le formulaire de contact pour convenir d'un rendez-vous.",
  },
];
