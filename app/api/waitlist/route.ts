import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const trimmed = email.trim().toLowerCase();

    if (!isValidEmail(trimmed)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (isSupabaseConfigured && supabase) {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email: trimmed, created_at: new Date().toISOString() }]);

      if (error) {
        if (error.code === "23505") {
          return NextResponse.json(
            { error: "You're already on the waitlist!" },
            { status: 409 }
          );
        }
        console.error("Supabase error:", error);
        return NextResponse.json(
          { error: "Something went wrong. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: "You're on the list! We'll be in touch soon." },
        { status: 200 }
      );
    }

    // Dev fallback: log and return success when Supabase is not configured
    console.log(`[WAITLIST] New signup: ${trimmed}`);
    return NextResponse.json(
      { message: "You're on the list! We'll be in touch soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
