import { PLACEHOLDER, SITE_URL } from "@/lib/site";

export type LegalSectionNav = {
  id: string;
  label: string;
};

export const SITE_LEGAL_INFO = {
  brandName: "Jodie Manent",
  companyLegalName: PLACEHOLDER,
  legalForm: PLACEHOLDER,
  registeredOffice: PLACEHOLDER,
  registeredOfficeHint: PLACEHOLDER,
  rcsNumber: PLACEHOLDER,
  sirenSiret: PLACEHOLDER,
  publicationDirector: "Jodie Manent",
  contactEmail: PLACEHOLDER,
  contactPhone: PLACEHOLDER,
  websiteUrl: SITE_URL,
  websiteDisplay: "jodiemanent.fr",
  lastUpdated: "17 août 2026",
  cnilUrl: "https://www.cnil.fr",
  activity:
    "Coach professionnelle certifiée (RNCP), formatrice et consultante, praticienne des Intelligences et Natures Multiples (IM/NM)",
} as const;

export const LEGAL_HOSTS = {
  name: PLACEHOLDER,
  service: PLACEHOLDER,
  address: PLACEHOLDER,
  url: PLACEHOLDER,
  description: PLACEHOLDER,
} as const;

export const MENTIONS_LEGALES_SECTIONS: LegalSectionNav[] = [
  { id: "editeur", label: "Éditeur du site" },
  { id: "hebergement", label: "Hébergement" },
  { id: "activite", label: "Activité du site" },
  { id: "propriete-intellectuelle", label: "Propriété intellectuelle" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "donnees-personnelles", label: "Données personnelles" },
  { id: "cookies", label: "Cookies" },
  { id: "securite", label: "Sécurité" },
  { id: "modifications", label: "Modifications" },
  { id: "droit-applicable", label: "Droit applicable" },
];

export const CGV_SECTIONS: LegalSectionNav[] = [
  { id: "objet", label: "Objet et champ d'application" },
  { id: "prestations", label: "Prestations" },
  { id: "tarifs", label: "Tarifs" },
  { id: "reservation", label: "Réservation et confirmation" },
  { id: "paiement", label: "Paiement" },
  { id: "annulation", label: "Annulation et report" },
  { id: "retractation", label: "Rétractation" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "reclamations", label: "Réclamations et médiation" },
  { id: "droit-applicable", label: "Droit applicable et litiges" },
];

export const CGU_SECTIONS: LegalSectionNav[] = [
  { id: "objet", label: "Objet" },
  { id: "acces", label: "Accès au site" },
  { id: "contenus", label: "Contenus" },
  { id: "liens", label: "Liens et réseaux sociaux" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "modifications", label: "Modification des CGU" },
  { id: "droit-applicable", label: "Droit applicable" },
];

export const CONFIDENTIALITE_SECTIONS: LegalSectionNav[] = [
  { id: "responsable", label: "Responsable de traitement" },
  { id: "donnees", label: "Données collectées" },
  { id: "finalites", label: "Finalités et base légale" },
  { id: "conservation", label: "Durée de conservation" },
  { id: "destinataires", label: "Destinataires" },
  { id: "droits", label: "Vos droits" },
  { id: "cookies", label: "Cookies" },
  { id: "securite", label: "Sécurité" },
  { id: "modifications", label: "Modifications" },
];

export const LEGAL_NAV_LINKS = [
  { href: "/mentions-legales/", label: "Mentions légales" },
  { href: "/cgv/", label: "CGV" },
  { href: "/cgu/", label: "CGU" },
  {
    href: "/politique-de-confidentialite/",
    label: "Politique de confidentialité",
  },
] as const;
