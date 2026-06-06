import Stripe from "npm:stripe";
import { createClient } from "npm:@supabase/supabase-js@2";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

export function getStripe() {
  const secretKey = Deno.env.get("STRIPE_SECRET_KEY");
  if (!secretKey) throw new Error("STRIPE_SECRET_KEY is not configured.");

  return new Stripe(secretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });
}

export async function getAuthenticatedUser(request: Request) {
  const authorization = request.headers.get("Authorization");
  if (!authorization) throw new Error("Missing authorization header.");

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment is not configured.");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: authorization } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) throw new Error("Invalid or expired user session.");

  const { data: trainer, error: trainerError } = await supabase
    .from("trainers")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (trainerError || !trainer) {
    throw new Error("Wings subscriptions are available to trainers only.");
  }

  return user;
}

export async function getOrCreateCustomer(
  stripe: Stripe,
  trainerId: string,
  email: string
) {
  const customers = await stripe.customers.list({ email, limit: 10 });
  const activeCustomers = customers.data;
  const customer =
    activeCustomers.find(
      (candidate) => candidate.metadata?.trainer_id === trainerId
    ) ?? activeCustomers[0];

  if (customer) {
    if (customer.metadata?.trainer_id !== trainerId) {
      return stripe.customers.update(customer.id, {
        metadata: { ...customer.metadata, trainer_id: trainerId },
      });
    }
    return customer;
  }

  return stripe.customers.create({
    email,
    metadata: { trainer_id: trainerId },
  });
}

export async function findCustomer(
  stripe: Stripe,
  trainerId: string,
  email: string
) {
  const customers = await stripe.customers.list({ email, limit: 10 });
  const activeCustomers = customers.data;

  return (
    activeCustomers.find(
      (candidate) => candidate.metadata?.trainer_id === trainerId
    ) ?? activeCustomers[0] ?? null
  );
}
