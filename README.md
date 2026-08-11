# Jodie Manent — Site vitrine

Site vitrine démonstrateur pour **Jodie Manent**, coach professionnelle certifiée (RNCP), spécialiste des **Intelligences et Natures Multiples (INM)** — Sainte-Marie, La Réunion.

## Stack

- Next.js (dernière version stable, App Router) — export statique pour GitHub Pages
- TypeScript · Tailwind CSS · GSAP (ScrollTrigger)
- Design system maison (tokens, grille 8 px, composant-first)

## Développement

```bash
npm install
npm run dev
```

## Déploiement (GitHub Pages)

Le site est exporté en statique (`output: 'export'`, `basePath: '/jodie-manent'`) et publié via GitHub Actions sur la branche `gh-pages` → https://chris97425.github.io/jodie-manent/

## Préparation Supabase (non branché pour l'instant)

Le projet est prêt à recevoir un formulaire de contact Supabase sans modification structurelle :

1. Créer un projet Supabase dédié (une instance par projet).
2. Copier `.env.example` vers `.env.local` et renseigner les clés.
3. Schéma futur (commenté, à activer le moment venu) :

```sql
-- create table contact_messages (
--   id uuid primary key default gen_random_uuid(),
--   name text not null,
--   email text not null,
--   message text not null,
--   created_at timestamptz default now()
-- );
```

Les clients `lib/supabase/client.ts` (navigateur) et `lib/supabase/server.ts` (serveur) lisent `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` et retombent gracieusement en mode démo si absentes.
