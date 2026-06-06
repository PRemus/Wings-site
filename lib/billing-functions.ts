import { getWingsSupabase } from "@/lib/supabase-wings";
import {
  SIGN_IN_REQUIRED_MESSAGE,
  getAuthenticatedTrainer,
} from "@/lib/trainer-auth";

type PlanKey = "starter" | "pro";
type FunctionName =
  | "create-checkout-session"
  | "create-customer-portal-session";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "");
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function callBillingFunction(
  functionName: FunctionName,
  body: Record<string, unknown>
) {
  const trainer = await getAuthenticatedTrainer();
  if (!trainer) throw new Error(SIGN_IN_REQUIRED_MESSAGE);

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Website billing is not configured.");
  }

  const response = await fetch(
    `${supabaseUrl}/functions/v1/${functionName}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${trainer.session.access_token}`,
        apikey: supabaseAnonKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        trainer_id: trainer.user.id,
      }),
    }
  );

  const data = (await response.json().catch(() => ({}))) as {
    error?: string;
    message?: string;
    url?: string;
    portalUrl?: string;
  };

  if (!response.ok) {
    const error = new Error(
      data.error || data.message || "The billing service is unavailable."
    ) as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  const url = data.url ?? data.portalUrl;
  if (!url) throw new Error("The billing service did not return a URL.");
  return url;
}

export function createCheckoutSession(planKey: PlanKey) {
  return callBillingFunction("create-checkout-session", {
    plan_key: planKey,
  });
}

export function createCustomerPortalSession() {
  return callBillingFunction("create-customer-portal-session", {});
}

export async function signOutWebsite() {
  await getWingsSupabase().auth.signOut();
}
