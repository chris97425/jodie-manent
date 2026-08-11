/**
 * Client navigateur Supabase (préparé, non branché).
 * Retombe en mode démo si les variables d'environnement sont absentes.
 */
export type SupabaseBrowserClient = {
  ready: boolean;
  from: (table: string) => {
    insert: (payload: Record<string, unknown>) => Promise<{
      data: null;
      error: { message: string } | null;
    }>;
  };
};

export function createBrowserClient(): SupabaseBrowserClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return {
      ready: false,
      from: () => ({
        insert: async () => ({
          data: null,
          error: {
            message:
              "Supabase non configuré — mode démo (aucune donnée envoyée).",
          },
        }),
      }),
    };
  }

  // Branchement réel à activer ultérieurement avec @supabase/supabase-js.
  return {
    ready: true,
    from: () => ({
      insert: async () => ({
        data: null,
        error: {
          message:
            "Client Supabase préparé mais non connecté dans cette démo.",
        },
      }),
    }),
  };
}
