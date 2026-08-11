/**
 * Client serveur Supabase (préparé pour un usage futur).
 * Non utilisé dans l'export statique GitHub Pages.
 */
export type SupabaseServerClient = {
  ready: boolean;
};

export function createServerClient(): SupabaseServerClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return {
    ready: Boolean(url && key),
  };
}
