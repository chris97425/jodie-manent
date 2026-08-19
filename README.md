# Jodie Manent — Site vitrine

Site vitrine pour **Jodie Manent**, coach professionnelle certifiée (RNCP), formatrice et consultante — **Intelligences et Natures Multiples (IM/NM)** — La Réunion.

Canonical / domaine cible : [https://jodiemanent.fr](https://jodiemanent.fr)

## Direction artistique (charte officielle)

- **Corail** `#ff6861` — CTA, accents, liens
- **Blanc cassé** `#fff9ef` — fond principal
- **Bleu nuit** `#02142f` — textes et accents sombres
- Typo : **Instrument Serif** (titres) · **Open Sans** (corps) · **Parisienne** (script logo)
- Photo hero : `public/images/jodie-photo-hero.jpg` (banc orange, végétation tropicale)
- Logos : `public/logos/` et `src/assets/logos/` (saumon sur fond transparent, blanc sur saumon)

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger)
- Zod (validation du formulaire de contact)
- Lucide · Google Fonts

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000/jodie-manent/](http://localhost:3000/jodie-manent/) (`basePath` actif pour GitHub Pages).

```bash
npm run build
npx tsc --noEmit
npm run lint
```

## Déploiement

- `output: 'export'`, `basePath: '/jodie-manent'`, `assetPrefix: '/jodie-manent/'`
- Workflow : `.github/workflows/deploy.yml`
- Prévisualisation GitHub Pages : https://chris97425.github.io/jodie-manent/
- Production visée : **https://jodiemanent.fr** (canonical, Open Graph, sitemap, robots)

## Préparation du formulaire de contact

Le formulaire est le **seul canal d’écriture** : l’adresse e-mail de destination n’apparaît nulle part sur le site (ni texte, ni `mailto`, ni métadonnées).

1. Créer un endpoint chez un prestataire (Formspree, Web3Forms, Resend, etc.).
2. Configurer la destination **côté prestataire uniquement** : `jodiemanent@gmail.com`.
3. Renseigner `.env.local` à partir de `.env.example` :

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=[À CONFIGURER]
NEXT_PUBLIC_CONTACT_ACCESS_KEY=
```

- `NEXT_PUBLIC_CONTACT_ENDPOINT` : URL d’envoi (ex. `https://formspree.io/f/xxxx` ou `https://api.web3forms.com/submit`).
- `NEXT_PUBLIC_CONTACT_ACCESS_KEY` : clé d’accès si le service l’exige (Web3Forms). Laisser vide sinon.

Si l’endpoint n’est pas configuré, l’envoi reste gracieux : message « Merci, votre demande a bien été enregistrée. » et journalisation locale **sans** recopier le message ni l’e-mail du visiteur.

## Préparation Supabase (non branché)

Voir `.env.example` et `src/lib/supabase/`.
