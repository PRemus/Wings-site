import { createClient } from "@supabase/supabase-js";

// Strip /rest/v1/ suffix if present — the JS client needs the base URL only
const rawUrl = process.env.NEXT_PUBLIC_WINGS_SUPABASE_URL ?? "";
const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/, "");
const supabaseKey = process.env.NEXT_PUBLIC_WINGS_SUPABASE_ANON_KEY ?? "";

export const wingsSupabase = createClient(supabaseUrl, supabaseKey);
