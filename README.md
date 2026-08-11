# Jodie Manent — Site vitrine

Site vitrine démonstrateur pour **Jodie Manent**, coach professionnelle certifiée (RNCP), spécialiste des **Intelligences et Natures Multiples (INM)** — Sainte-Marie, La Réunion.

## Stack

- Next.js 16 (App Router) — export statique pour GitHub Pages
- TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger)
- Lucide · Google Fonts (Great Vibes + Manrope)
- Design system maison (tokens corail, grille 8 px, composant-first)

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000/jodie-manent/](http://localhost:3000/jodie-manent/) (`basePath` actif).

```bash
npm run build   # génère le dossier `out/`
npm run lint
```

## Déploiement (GitHub Pages)

- `next.config.ts` : `output: 'export'`, `basePath: '/jodie-manent'`, `assetPrefix: '/jodie-manent/'`, `images.unoptimized`, `trailingSlash`
- Workflow : `.github/workflows/deploy.yml` (build sur `main` → `upload-pages-artifact` → `deploy-pages`)
- URL : https://chris97425.github.io/jodie-manent/

Activer GitHub Pages sur le dépôt : Source = **GitHub Actions**.

## Pages

Accueil · À propos · Offres · Témoignages · Contact · Mentions légales · Politique de confidentialité

## Préparation Supabase (non branché)

1. Créer un projet Supabase dédié.
2. Copier `.env.example` vers `.env.local`.
3. Schéma futur (commenté) :

```sql
-- create table contact_messages (
--   id uuid primary key default gen_random_uuid(),
--   name text not null,
--   email text not null,
--   message text not null,
--   created_at timestamptz default now()
-- );
```

Les clients `src/lib/supabase/client.ts` et `server.ts` retombent en mode démo si les clés sont absentes. Le build Pages n'utilise aucune variable d'environnement.
