# Jodie Manent — Site vitrine

Site vitrine pour **Jodie Manent**, coach professionnelle certifiée (RNCP), formatrice et consultante — **Intelligences et Natures Multiples (IM/NM)** — La Réunion.

## Direction artistique

- Palette : blanc cassé `#FAF7F2` · sable `#E5D9C5` · corail `#E8765B` (accent `#D95F44`) · brun chaud `#3E342E`
- Typo : **Fraunces** (titres) · **Inter** (corps) · **Parisienne** (écho du logo, usage rare)
- Photo hero : portrait sur banc corail, végétation tropicale
- Logo : script corail sur fond transparent (header / footer)

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger)
- Zod (validation du formulaire de contact)
- Lucide · Google Fonts

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000/jodie-manent/](http://localhost:3000/jodie-manent/) (`basePath` actif).

```bash
npm run build
npx tsc --noEmit
npm run lint
```

## Déploiement

- `output: 'export'`, `basePath: '/jodie-manent'`, `assetPrefix: '/jodie-manent/'`
- Workflow : `.github/workflows/deploy.yml`
- URL : https://chris97425.github.io/jodie-manent/

## Préparation Supabase (non branché)

Voir `.env.example` et `src/lib/supabase/`.
