import { NextRequest, NextResponse } from "next/server";
import {
  getAuthenticatedTrainer,
  invokeBillingFunction,
} from "@/lib/billing-edge";

function getAccessToken(request: NextRequest) {
  const header = request.headers.get("authorization") ?? "";
  return header.startsWith("Bearer ") ? header.slice(7) : "";
}

export async function POST(request: NextRequest) {
  try {
    const accessToken = getAccessToken(request);
    if (!accessToken) {
      return NextResponse.json(
        { error: "Please sign in to manage your subscription." },
        { status: 401 }
      );
    }

    const trainer = await getAuthenticatedTrainer(accessToken);
    const data = await invokeBillingFunction(
      "create-customer-portal-session",
      accessToken,
      { trainer_id: trainer.id }
    );

    const url =
      typeof data.url === "string"
        ? data.url
        : typeof data.portal_url === "string"
          ? data.portal_url
          : null;

    if (!url) {
      throw new Error("Stripe Customer Portal did not return a redirect URL.");
    }

    return NextResponse.json({ url });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to open subscription management.";
    const status = message.includes("session has expired")
      ? 401
      : message.includes("trainers only")
        ? 403
        : 502;
    return NextResponse.json({ error: message }, { status });
  }
}
