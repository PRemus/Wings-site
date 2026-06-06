import "server-only";

const EDGE_TIMEOUT_MS = 15000;

type EdgeFunctionName =
  | "create-checkout-session"
  | "create-customer-portal-session";

type JsonRecord = Record<string, unknown>;

function getBillingConfig() {
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/+$/, "");
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Billing is not configured. SUPABASE_URL and SUPABASE_ANON_KEY are required."
    );
  }

  return { supabaseUrl, supabaseAnonKey };
}

async function readJson(response: Response): Promise<JsonRecord> {
  try {
    return (await response.json()) as JsonRecord;
  } catch {
    return {};
  }
}

export async function getAuthenticatedTrainer(accessToken: string) {
  const { supabaseUrl, supabaseAnonKey } = getBillingConfig();
  const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  const data = await readJson(response);

  if (!response.ok || typeof data.id !== "string") {
    throw new Error("Your session has expired. Please sign in again.");
  }

  const metadata =
    data.user_metadata && typeof data.user_metadata === "object"
      ? (data.user_metadata as JsonRecord)
      : {};
  if (metadata.role !== "trainer") {
    throw new Error("Wings subscriptions are available to trainers only.");
  }

  return { id: data.id };
}

export async function invokeBillingFunction(
  functionName: EdgeFunctionName,
  accessToken: string,
  body: JsonRecord
) {
  const { supabaseUrl, supabaseAnonKey } = getBillingConfig();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), EDGE_TIMEOUT_MS);

  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/${functionName}`,
      {
        method: "POST",
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
        signal: controller.signal,
      }
    );

    const data = await readJson(response);

    if (!response.ok) {
      const message =
        typeof data.error === "string"
          ? data.error
          : typeof data.message === "string"
            ? data.message
            : "The billing service could not complete this request.";
      throw new Error(message);
    }

    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("The billing service timed out. Please try again.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
