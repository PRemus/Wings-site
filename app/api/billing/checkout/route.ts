import { NextRequest, NextResponse } from "next/server";
import {
  getAuthenticatedTrainer,
  invokeBillingFunction,
} from "@/lib/billing-edge";

const VALID_PLANS = new Set(["starter", "pro"]);

function getAccessToken(request: NextRequest) {
  const header = request.headers.get("authorization") ?? "";
  return header.startsWith("Bearer ") ? header.slice(7) : "";
}

export async function POST(request: NextRequest) {
  try {
    const accessToken = getAccessToken(request);
    if (!accessToken) {
      return NextResponse.json(
        { error: "Please sign in to start a subscription." },
        { status: 401 }
      );
    }

    const body = (await request.json()) as { plan_key?: unknown };
    if (typeof body.plan_key !== "string" || !VALID_PLANS.has(body.plan_key)) {
      return NextResponse.json(
        { error: "Please select a valid Wings plan." },
        { status: 400 }
      );
    }

    const trainer = await getAuthenticatedTrainer(accessToken);
    const data = await invokeBillingFunction(
      "create-checkout-session",
      accessToken,
      {
        plan_key: body.plan_key,
        trainer_id: trainer.id,
      }
    );

    const url =
      typeof data.url === "string"
        ? data.url
        : typeof data.checkout_url === "string"
          ? data.checkout_url
          : null;

    if (!url) {
      throw new Error("Stripe Checkout did not return a redirect URL.");
    }

    return NextResponse.json({ url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to start checkout.";
    const status = message.includes("session has expired")
      ? 401
      : message.includes("trainers only")
        ? 403
        : 502;
    return NextResponse.json({ error: message }, { status });
  }
}
