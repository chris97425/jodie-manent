export type AudienceProfile = {
  id: string;
  title: string;
  text: string;
  offerId: "bilans" | "coaching" | "formations";
  href: string;
};

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    id: "transition",
    title: "Vous traversez une transition",
    text: "Changement de poste, de cap ou de vie professionnelle : clarifiez ce qui compte vraiment.",
    offerId: "coaching",
    href: "/bilan-de-competences/",
  },
  {
    id: "stagnation",
    title: "Vous stagnez et cherchez un cap",
    text: "Le quotidien tourne, mais le sens manque. Construisez une direction à votre image.",
    offerId: "bilans",
    href: "/bilan-de-competences/",
  },
  {
    id: "doute",
    title: "Vous doutez de votre projet actuel",
    text: "Remettez à plat vos options avec un bilan ancré dans vos talents et vos valeurs.",
    offerId: "bilans",
    href: "/bilan-de-competences/",
  },
  {
    id: "talents",
    title: "Vous voulez révéler vos talents",
    text: "Explorez vos intelligences multiples et mobilisez ce qui vous est naturel.",
    offerId: "formations",
    href: "/approche/",
  },
];
