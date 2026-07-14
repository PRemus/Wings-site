import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getWingsSupabaseConfig() {
  const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!rawSupabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required."
    );
  }

  const supabaseUrl = rawSupabaseUrl
    .replace(/\/rest\/v1\/?$/, "")
    .replace(/\/+$/, "");

  return { supabaseUrl, supabaseAnonKey };
}

export function getWingsSupabase(): SupabaseClient {
  if (!_client) {
    const { supabaseUrl, supabaseAnonKey } = getWingsSupabaseConfig();
    _client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });
  }
  return _client;
}
