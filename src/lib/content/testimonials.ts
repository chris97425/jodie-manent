export type TestimonialId = "t1" | "t2" | "t3" | "t4" | "t5" | "t6";

export type Testimonial = {
  id: TestimonialId;
  /** 1-2 mots qui résument le témoignage (affiché en tête de bloc). */
  summary: string;
  /** Prénom + 1ère lettre du nom — [À COMPLÉTER] par la cliente. */
  author: string;
  quote: string;
  attribution: string;
};

export const TESTIMONIALS: Record<TestimonialId, Testimonial> = {
  t1: {
    id: "t1",
    summary: "Écoute & bienveillance",
    author: "[À COMPLÉTER]",
    quote:
      "J'ai réalisé un bilan de compétences avec Jodie sur plusieurs mois et je ne peux que la recommander. Grâce à son écoute, sa bienveillance et son professionnalisme, elle m'a permis de mieux comprendre mon fonctionnement, mes besoins, mes valeurs et mes aspirations professionnelles. Ce travail m'a aidée à prendre du recul sur mon parcours, à reprendre confiance en mes compétences et à identifier des pistes professionnelles cohérentes avec qui je suis aujourd'hui. Jodie sait poser les bonnes questions, faire réfléchir sans jamais juger, tout en laissant le temps nécessaire pour avancer à son rythme. Son accompagnement a été à la fois structurant, rassurant et profondément humain.",
    attribution: "Témoignage · Bilan de compétences",
  },
  t2: {
    id: "t2",
    summary: "Révélation",
    author: "[À COMPLÉTER]",
    quote:
      "On se pose toujours la question de l'échec scolaire de nos jeunes. Les Natures et Intelligences Multiples ont été une découverte pour moi ! Et je n'ai pas été déçu ! Ces tests devraient être généralisés à tout le monde afin que chacun puisse savoir ce qui l'anime au quotidien et savoir vers quel domaine ou métier s'orienter.",
    attribution: "Témoignage · Découverte IM/NM",
  },
  t3: {
    id: "t3",
    summary: "Introspection",
    author: "[À COMPLÉTER]",
    quote:
      "Réaliser ce bilan de compétences a été plus qu'un simple état des lieux de ce que j'ai pu faire ! Cela m'a permis de prendre le temps de faire une introspection, de comprendre les choix réalisés, de me conforter dans ce que j'ai fait pour me tourner plus sereinement vers la suite. Jodie aime ce qu'elle fait, cela se voit, cela se ressent ! Elle a réussi sa reconversion professionnelle et avec son empathie est la mieux placée pour nous accompagner dans notre réflexion ! Cela a été un excellent investissement ce bilan de compétences et suite à notre premier échange, le réaliser avec Jodie une évidence ! Merci pour tout !",
    attribution: "Témoignage · Bilan de compétences",
  },
  t4: {
    id: "t4",
    summary: "Boussole",
    author: "[À COMPLÉTER]",
    quote:
      "Réaliser ce bilan de compétences avec Jodie a été pour moi le meilleur investissement à ce jour que j'ai pu faire dans ma vie. Pour moi, ce n'était pas un simple bilan de compétences où on fait un listing de ses compétences, mais un réel travail en profondeur de connaissance de soi sur des aspects dont je n'avais pas connaissance (Le MN Test). L'accompagnement personnel par Jodie apporte toute la différence car elle sait poser les bonnes questions et nous accompagner dans les auto-évaluations de manière à tomber sur des résultats le plus proche de la réalité possible. Ce bilan me servira tout au long de ma vie. Même si à l'issue, on détermine des projets adaptés au moment même du bilan, d'avoir ces éléments en tête sert vraiment de boussole. Si l'on se sent un peu perdu, faire ce bilan avec Jodie au moins une fois dans sa vie est réellement pertinent, en plus j'ai pu le faire avec mon compte CPF. Cela demande tout de même un bon état d'esprit, un réel engagement, et une envie de trouver des réponses. Je ne peux que vous y encourager à le faire si vous vous sentez prêt à donner un nouveau souffle, un nouvel élan à votre carrière.",
    attribution: "Témoignage · Bilan de compétences (financé CPF)",
  },
  t5: {
    id: "t5",
    summary: "Pédagogie",
    author: "[À COMPLÉTER]",
    quote:
      "Jodie est sans nul doute à sa place ! Pédagogue, à l'écoute, souriante… merci infiniment de transmettre et partager comme cela. Soit, si tous les formateurs étaient aussi pros et empathiques que Jodie, le monde tournerait plus rond ! Au plaisir d'assister à une prochaine formation.",
    attribution: "Témoignage · Formation",
  },
  t6: {
    id: "t6",
    summary: "Confiance",
    author: "[À COMPLÉTER]",
    quote:
      "J'ai été accompagnée en coaching par Jodie, c'était ma première expérience. J'ai aimé sa simplicité, elle m'a tout de suite mise en confiance. Cela m'a beaucoup aidé à prendre conscience sur beaucoup de choses, à mettre des mots sur mes douleurs. J'avais toujours hâte d'aller à mes rendez-vous, je passais par plusieurs émotions, rire, fou rire et pleurs surtout. Mais ça me faisait tellement de bien. Depuis mes séances avec Jodie, j'ai appris beaucoup de choses sur moi-même, elle m'a beaucoup aidée. C'est une personne extraordinaire. Je la remercie pour tout ce qu'elle m'a apporté et je recommande ses services en tant que coach.",
    attribution: "Témoignage · Coaching individuel",
  },
};

export const HOME_TESTIMONIALS: Testimonial[] = [
  TESTIMONIALS.t1,
  TESTIMONIALS.t2,
  TESTIMONIALS.t3,
  TESTIMONIALS.t4,
  TESTIMONIALS.t5,
  TESTIMONIALS.t6,
];

export const BILAN_TESTIMONIALS: Testimonial[] = [
  TESTIMONIALS.t1,
  TESTIMONIALS.t3,
  TESTIMONIALS.t4,
];

export const APPROCHE_TESTIMONIALS: Testimonial[] = [TESTIMONIALS.t2];

export const ENTREPRISES_TESTIMONIALS: Testimonial[] = [TESTIMONIALS.t5];

export const ALL_TESTIMONIALS: Testimonial[] = [
  TESTIMONIALS.t1,
  TESTIMONIALS.t2,
  TESTIMONIALS.t3,
  TESTIMONIALS.t4,
  TESTIMONIALS.t5,
  TESTIMONIALS.t6,
];
