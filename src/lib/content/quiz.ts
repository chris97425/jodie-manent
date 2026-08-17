export type QuizOfferId = "bilans" | "coaching" | "formations";

export type QuizOption = {
  id: string;
  label: string;
  scores: Partial<Record<QuizOfferId, number>>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "situation",
    prompt: "Où en êtes-vous professionnellement ?",
    options: [
      {
        id: "transition",
        label: "En pleine transition",
        scores: { coaching: 2, bilans: 1 },
      },
      {
        id: "stagnation",
        label: "Je stagne et cherche un cap",
        scores: { bilans: 2, coaching: 1 },
      },
      {
        id: "doute",
        label: "Je doute de mon projet actuel",
        scores: { bilans: 2, formations: 1 },
      },
      {
        id: "talents",
        label: "Je veux mieux connaître mes talents",
        scores: { formations: 2, bilans: 1 },
      },
    ],
  },
  {
    id: "ressenti",
    prompt: "Quel ressenti domine aujourd'hui ?",
    options: [
      {
        id: "flou",
        label: "Un sentiment de flou",
        scores: { bilans: 2, coaching: 1 },
      },
      {
        id: "confiance",
        label: "Un besoin de confiance",
        scores: { coaching: 2, formations: 1 },
      },
      {
        id: "structure",
        label: "Un besoin de structure",
        scores: { bilans: 2, coaching: 1 },
      },
      {
        id: "apprendre",
        label: "L'envie d'apprendre et d'explorer",
        scores: { formations: 2, bilans: 1 },
      },
    ],
  },
  {
    id: "objectif",
    prompt: "Quel est votre objectif principal ?",
    options: [
      {
        id: "projet",
        label: "Clarifier un projet professionnel",
        scores: { bilans: 3 },
      },
      {
        id: "transition-obj",
        label: "Traverser une transition sereinement",
        scores: { coaching: 3 },
      },
      {
        id: "competences",
        label: "Développer des compétences / talents",
        scores: { formations: 3 },
      },
      {
        id: "connaitre",
        label: "Mieux me connaître",
        scores: { bilans: 2, formations: 2 },
      },
    ],
  },
  {
    id: "modalite",
    prompt: "Quelle modalité vous convient le mieux ?",
    options: [
      {
        id: "presentiel",
        label: "Présentiel",
        scores: { coaching: 1, bilans: 1, formations: 1 },
      },
      {
        id: "distanciel",
        label: "Distanciel",
        scores: { coaching: 1, bilans: 1, formations: 1 },
      },
      {
        id: "mixte",
        label: "Indifférent / mixte",
        scores: { bilans: 1, coaching: 1, formations: 1 },
      },
    ],
  },
];

export const QUIZ_RESULTS: Record<
  QuizOfferId,
  { title: string; summary: string; href: string }
> = {
  bilans: {
    title: "Bilan de compétences",
    summary:
      "Un bilan basé sur les Intelligences et Natures Multiples pour construire un projet à votre image.",
    href: "/bilan-de-competences/",
  },
  coaching: {
    title: "Coaching professionnel",
    summary:
      "Un accompagnement séance après séance pour clarifier et structurer votre transition.",
    href: "/bilan-de-competences/",
  },
  formations: {
    title: "Formation",
    summary:
      "Des formats pour explorer les intelligences multiples, vos talents et vos transitions.",
    href: "/entreprises-equipes/",
  },
};

export function computeQuizResult(
  selectedOptionIds: string[],
): QuizOfferId {
  const totals: Record<QuizOfferId, number> = {
    bilans: 0,
    coaching: 0,
    formations: 0,
  };

  QUIZ_QUESTIONS.forEach((question, index) => {
    const optionId = selectedOptionIds[index];
    const option = question.options.find((item) => item.id === optionId);
    if (!option) return;
    (Object.keys(option.scores) as QuizOfferId[]).forEach((key) => {
      totals[key] += option.scores[key] ?? 0;
    });
  });

  return (Object.keys(totals) as QuizOfferId[]).reduce((best, key) =>
    totals[key] > totals[best] ? key : best,
  );
}
