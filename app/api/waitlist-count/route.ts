import { NextResponse } from "next/server";
import { getWingsSupabase } from "@/lib/supabase-wings";

const BASE_COUNT = 324;

export async function GET() {
  try {
    const { data, error } = await getWingsSupabase().rpc("get_waitlist_count");
    if (error) throw error;
    return NextResponse.json(
      { count: BASE_COUNT + Number(data ?? 0) },
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } }
    );
  } catch {
    return NextResponse.json({ count: BASE_COUNT });
  }
}
