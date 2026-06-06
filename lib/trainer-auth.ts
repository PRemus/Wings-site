import type { Session, User } from "@supabase/supabase-js";
import { getWingsSupabase } from "@/lib/supabase-wings";

export const NOT_TRAINER_MESSAGE = "This account is not a trainer account.";
export const SIGN_IN_REQUIRED_MESSAGE =
  "Please sign in to your trainer account.";

export type AuthenticatedTrainer = {
  session: Session;
  user: User;
};

export async function getAuthenticatedTrainer(): Promise<AuthenticatedTrainer | null> {
  const supabase = getWingsSupabase();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) return null;

  const { data: trainer, error: trainerError } = await supabase
    .from("trainers")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (trainerError) throw trainerError;
  if (!trainer) throw new Error(NOT_TRAINER_MESSAGE);

  return { session, user };
}

export function safeInternalRedirect(value: string | null, fallback = "/pricing") {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }
  return value;
}
