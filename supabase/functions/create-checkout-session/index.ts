import {
  corsHeaders,
  getAuthenticatedUser,
  getOrCreateCustomer,
  getStripe,
  json,
} from "../_shared/billing.ts";

type PlanKey = "starter" | "pro";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  try {
    const user = await getAuthenticatedUser(request);
    const body = (await request.json()) as {
      plan_key?: PlanKey;
      trainer_id?: string;
    };

    if (!body.plan_key || !["starter", "pro"].includes(body.plan_key)) {
      return json({ error: "A valid plan_key is required." }, 400);
    }

    if (!body.trainer_id || body.trainer_id !== user.id) {
      return json({ error: "Trainer identity does not match the session." }, 403);
    }

    if (!user.email) {
      return json({ error: "The trainer account has no email address." }, 400);
    }

    const priceIds: Record<PlanKey, string | undefined> = {
      starter: Deno.env.get("STARTER_PRICE_ID"),
      pro: Deno.env.get("PRO_PRICE_ID"),
    };
    const priceId = priceIds[body.plan_key];

    if (!priceId || !priceId.startsWith("price_")) {
      throw new Error(
        `${body.plan_key.toUpperCase()}_PRICE_ID must be a Stripe Price ID.`
      );
    }

    const siteUrl = (
      Deno.env.get("SITE_URL") ?? "https://wingsapp.fit"
    ).replace(/\/+$/, "");
    const stripe = getStripe();
    const customer = await getOrCreateCustomer(
      stripe,
      user.id,
      user.email
    );

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customer.id,
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      client_reference_id: user.id,
      metadata: {
        trainer_id: user.id,
        plan_key: body.plan_key,
      },
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          trainer_id: user.id,
          plan_key: body.plan_key,
        },
      },
      success_url: `${siteUrl}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/billing/cancel`,
    });

    if (!session.url) {
      throw new Error("Stripe Checkout did not return a URL.");
    }

    return json({ url: session.url });
  } catch (error) {
    console.error("create-checkout-session:", error);
    return json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create Checkout Session.",
      },
      500
    );
  }
});
