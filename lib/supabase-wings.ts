import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getWingsSupabase(): SupabaseClient {
  if (!_client) {
    const rawUrl = process.env.NEXT_PUBLIC_WINGS_SUPABASE_URL ?? "";
    const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/, "");
    const supabaseKey = process.env.NEXT_PUBLIC_WINGS_SUPABASE_ANON_KEY ?? "";
    _client = createClient(supabaseUrl, supabaseKey);
  }
  return _client;
}
