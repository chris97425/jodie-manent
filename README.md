# Jodie Manent — Site vitrine

Site vitrine pour **Jodie Manent**, coach professionnelle certifiée (RNCP), spécialiste des **Intelligences et Natures Multiples (INM)** — Sainte-Marie, La Réunion.

## Direction artistique

- Palette : corail `#FF6B6B` (accents/CTA) · crème `#FFF9F2` / `#FFF5E6` · brun encre `#3B2A24` · footer anthracite `#2A201C`
- Typo : **Manrope** (titres & corps) · **Parisienne** (accent script rare, écho du logo)
- Export statique GitHub Pages

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger)
- Lucide · Google Fonts

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000/jodie-manent/](http://localhost:3000/jodie-manent/) (`basePath` actif).

```bash
npm run build
npm run lint
```

## Déploiement

- `output: 'export'`, `basePath: '/jodie-manent'`, `assetPrefix: '/jodie-manent/'`
- Workflow : `.github/workflows/deploy.yml`
- URL : https://chris97425.github.io/jodie-manent/

## Préparation Supabase (non branché)

Voir `.env.example` et `src/lib/supabase/`.
