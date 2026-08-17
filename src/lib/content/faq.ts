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
      "Après un premier échange pour clarifier votre situation, nous choisissons ensemble le format le plus juste : Essentiel (13 h), Medium (16 h) ou Approfondi (20 h). Le parcours combine des séances d'accompagnement, un travail de connaissance de soi — notamment via les Intelligences et Natures Multiples — et un plan d'action concret. Les modalités précises se précisent avant tout engagement.",
  },
  {
    id: "financement",
    question: "Les formations et bilans sont-ils finançables (OPCO, CPF) ?",
    answer:
      "Oui, selon votre situation. Un bilan de compétences peut notamment être financé via le CPF. Les formations destinées aux entreprises et aux équipes peuvent s'inscrire dans des dispositifs OPCO. Les conditions exactes se confirment lors du premier échange, en fonction de votre statut et de l'organisme financeur.",
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
    question: "Combien de séances pour un coaching professionnel ?",
    answer:
      "Un coaching se construit sur plusieurs séances, réparties dans le temps, selon l'objectif défini ensemble. Le rythme et le nombre de rendez-vous se précisent lors du premier échange — sans grille unique imposée à l'avance.",
  },
];
