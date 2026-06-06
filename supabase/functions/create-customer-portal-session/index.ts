import {
  corsHeaders,
  findCustomer,
  getAuthenticatedUser,
  getStripe,
  json,
} from "../_shared/billing.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  try {
    const user = await getAuthenticatedUser(request);
    const body = (await request.json()) as { trainer_id?: string };

    if (!body.trainer_id || body.trainer_id !== user.id) {
      return json({ error: "Trainer identity does not match the session." }, 403);
    }

    if (!user.email) {
      return json({ error: "The trainer account has no email address." }, 400);
    }

    const stripe = getStripe();
    const customer = await findCustomer(stripe, user.id, user.email);

    if (!customer) {
      return json(
        { error: "No Stripe subscription was found for this trainer." },
        404
      );
    }

    const siteUrl = (
      Deno.env.get("SITE_URL") ?? "https://wingsapp.fit"
    ).replace(/\/+$/, "");
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${siteUrl}/pricing`,
    });

    return json({ url: session.url });
  } catch (error) {
    console.error("create-customer-portal-session:", error);
    return json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create Customer Portal Session.",
      },
      500
    );
  }
});
