import { NextRequest, NextResponse } from "next/server";
import { getWingsSupabase } from "@/lib/supabase-wings";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      full_name,
      email,
      role,
      country,
      city,
      referral_source,
      referral_other,
      message,
      marketing_consent,
      beta_tester,
    } = body;

    // Validate required fields
    if (!full_name?.trim()) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!email?.trim() || !isValidEmail(email.trim())) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!role || !["trainer", "client"].includes(role)) {
      return NextResponse.json({ error: "Please select your role." }, { status: 400 });
    }
    if (!country?.trim()) {
      return NextResponse.json({ error: "Country is required." }, { status: 400 });
    }
    if (!referral_source?.trim()) {
      return NextResponse.json({ error: "Please tell us how you heard about Wings." }, { status: 400 });
    }
    if (!marketing_consent) {
      return NextResponse.json({ error: "You must agree to receive launch updates." }, { status: 400 });
    }

    const { error } = await getWingsSupabase()
      .from("waitlist_signups")
      .insert([{
        full_name: full_name.trim(),
        email: email.trim().toLowerCase(),
        role,
        country: country.trim(),
        city: city?.trim() || null,
        referral_source,
        referral_other: referral_source === "other" ? (referral_other?.trim() || null) : null,
        message: message?.trim() || null,
        marketing_consent: Boolean(marketing_consent),
        beta_tester: Boolean(beta_tester),
      }]);

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
      { message: "You're on the list!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
