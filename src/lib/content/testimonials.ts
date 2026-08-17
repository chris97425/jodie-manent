export type TestimonialId = "t1" | "t2" | "t3" | "t4" | "t5" | "t6";

export type Testimonial = {
  id: TestimonialId;
  quote: string;
  attribution: string;
};

export const TESTIMONIALS: Record<TestimonialId, Testimonial> = {
  t1: {
    id: "t1",
    quote:
      "Grâce à son écoute, sa bienveillance et son professionnalisme, Jodie m'a permis de mieux comprendre mon fonctionnement, mes besoins, mes valeurs et mes aspirations professionnelles. Elle sait poser les bonnes questions, faire réfléchir sans jamais juger, tout en laissant le temps nécessaire pour avancer à son rythme.",
    attribution: "Témoignage · Bilan de compétences",
  },
  t2: {
    id: "t2",
    quote:
      "Les Natures et Intelligences Multiples ont été une découverte pour moi ! Ces tests devraient être généralisés à tout le monde afin que chacun puisse savoir ce qui l'anime au quotidien et savoir vers quel domaine ou métier s'orienter.",
    attribution: "Témoignage · Découverte IM/NM",
  },
  t3: {
    id: "t3",
    quote:
      "Réaliser ce bilan a été plus qu'un simple état des lieux de ce que j'ai pu faire : cela m'a permis de prendre le temps de faire une introspection, de comprendre les choix réalisés et de me tourner plus sereinement vers la suite. Jodie aime ce qu'elle fait, cela se voit, cela se ressent !",
    attribution: "Témoignage · Bilan de compétences",
  },
  t4: {
    id: "t4",
    quote:
      "Un réel travail en profondeur de connaissance de soi, bien loin d'un simple listing de compétences. Ce bilan me servira tout au long de ma vie : d'avoir ces éléments en tête sert vraiment de boussole. Et j'ai pu le faire avec mon compte CPF. Je ne peux que vous encourager à le faire si vous vous sentez prêt à donner un nouveau souffle à votre carrière.",
    attribution: "Témoignage · Bilan de compétences (financé CPF)",
  },
  t5: {
    id: "t5",
    quote:
      "Jodie est sans nul doute à sa place ! Pédagogue, à l'écoute, souriante… Si tous les formateurs étaient aussi pros et empathiques que Jodie, le monde tournerait plus rond !",
    attribution: "Témoignage · Formation",
  },
  t6: {
    id: "t6",
    quote:
      "Ma première expérience de coaching : sa simplicité m'a tout de suite mise en confiance. J'avais toujours hâte d'aller à mes rendez-vous, je passais par plusieurs émotions, rires et larmes… mais ça me faisait tellement de bien. J'ai appris beaucoup de choses sur moi-même et je recommande ses services en tant que coach.",
    attribution: "Témoignage · Coaching individuel",
  },
};

export const HOME_TESTIMONIALS: Testimonial[] = [
  TESTIMONIALS.t1,
  TESTIMONIALS.t3,
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
