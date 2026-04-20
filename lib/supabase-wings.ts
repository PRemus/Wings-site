import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getWingsSupabase(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      "https://btvjimmubdgjxbfxeyxg.supabase.co",
      "sb_publishable_rvNhpqIiWEHHMAAm3nkdYg_ISkRKZkZ"
    );
  }
  return _client;
}
