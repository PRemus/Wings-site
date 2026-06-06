"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  LoaderCircle,
  LogOut,
  Users,
} from "lucide-react";
import { ManageSubscriptionButton } from "@/components/BillingActions";
import { getWingsSupabase } from "@/lib/supabase-wings";
import {
  NOT_TRAINER_MESSAGE,
  getAuthenticatedTrainer,
} from "@/lib/trainer-auth";

type SubscriptionRow = {
  plan_key: "starter" | "pro" | null;
  status: string | null;
  trial_end: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
};

type BillingState = {
  subscription: SubscriptionRow | null;
  activeClientCount: number;
  hasBillingProfile: boolean;
};

const PLAN_LIMITS = {
  starter: 5,
  pro: 30,
} as const;

function formatDate(value: string | null) {
  if (!value) return "Not available";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function formatStatus(value: string | null) {
  if (!value) return "No subscription";
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function planName(value: SubscriptionRow["plan_key"]) {
  if (!value) return "No plan";
  return value === "starter" ? "Wings Starter" : "Wings Pro";
}

export default function TrainerBillingPage() {
  const router = useRouter();
  const [state, setState] = useState<BillingState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadBilling = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const trainer = await getAuthenticatedTrainer();
      if (!trainer) {
        router.replace("/login?redirect=/trainer/billing");
        return;
      }

      const supabase = getWingsSupabase();
      const [subscriptionResult, billingProfileResult, clientCountResult] =
        await Promise.all([
          supabase
            .from("trainer_subscriptions")
            .select(
              "plan_key,status,trial_end,current_period_end,cancel_at_period_end"
            )
            .eq("trainer_id", trainer.user.id)
            .order("updated_at", { ascending: false })
            .limit(1)
            .maybeSingle(),
          supabase
            .from("trainer_billing_profiles")
            .select("stripe_customer_id")
            .eq("trainer_id", trainer.user.id)
            .maybeSingle(),
          supabase
            .from("clients")
            .select("id", { count: "exact", head: true })
            .eq("trainer_id", trainer.user.id)
            .eq("status", "active"),
        ]);

      if (subscriptionResult.error) throw subscriptionResult.error;
      if (billingProfileResult.error) throw billingProfileResult.error;
      if (clientCountResult.error) throw clientCountResult.error;

      setState({
        subscription: subscriptionResult.data as SubscriptionRow | null,
        activeClientCount: clientCountResult.count ?? 0,
        hasBillingProfile: Boolean(
          billingProfileResult.data?.stripe_customer_id
        ),
      });
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Unable to load billing."
      );
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void loadBilling();
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [loadBilling]);

  async function signOut() {
    await getWingsSupabase().auth.signOut();
    router.replace("/login?redirect=/trainer/billing");
    router.refresh();
  }

  const subscription = state?.subscription ?? null;
  const clientLimit = subscription?.plan_key
    ? PLAN_LIMITS[subscription.plan_key]
    : 0;
  const status = subscription?.status ?? null;
  const healthyStatus = status === "active" || status === "trialing";
  const warningStatus = status === "past_due";

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/4 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-12"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[460px] w-[460px] translate-x-1/2 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #10B981 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/wings-logo.png"
              alt="Wings"
              width={48}
              height={34}
              className="object-contain"
              priority
            />
            <span className="font-semibold text-white">Wings</span>
          </Link>
          <button
            type="button"
            onClick={signOut}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Sign out
          </button>
        </header>

        <div className="pb-10 pt-16">
          <p className="text-sm font-semibold uppercase text-emerald-300">
            Trainer account
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white">
            Billing and subscription
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Review your Wings plan, trial and billing period, then manage the
            subscription securely through Stripe.
          </p>
        </div>

        {loading && (
          <div className="flex min-h-72 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025]">
            <LoaderCircle
              className="h-7 w-7 animate-spin text-emerald-300"
              aria-hidden="true"
            />
            <span className="ml-3 text-sm text-slate-400">
              Loading billing details...
            </span>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-lg border border-red-400/20 bg-red-400/10 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle
                className="mt-0.5 h-5 w-5 shrink-0 text-red-300"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold text-white">
                  Billing details unavailable
                </h2>
                <p className="mt-1 text-sm leading-6 text-red-200">
                  {error === NOT_TRAINER_MESSAGE
                    ? NOT_TRAINER_MESSAGE
                    : error}
                </p>
                <button
                  type="button"
                  onClick={() => void loadBilling()}
                  className="mt-4 text-sm font-semibold text-white underline underline-offset-4"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && state && (
          <>
            <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Current plan
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-white">
                    {planName(subscription?.plan_key ?? null)}
                  </h2>
                </div>
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    healthyStatus
                      ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                      : warningStatus
                        ? "border-amber-400/25 bg-amber-400/10 text-amber-300"
                        : "border-slate-400/20 bg-white/[0.04] text-slate-300"
                  }`}
                >
                  {healthyStatus ? (
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {formatStatus(status)}
                </span>
              </div>

              {subscription?.cancel_at_period_end && (
                <p className="mt-6 rounded-lg border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                  This subscription is set to cancel at the end of the current
                  billing period.
                </p>
              )}

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <BillingMetric
                  icon={<CalendarDays className="h-5 w-5" />}
                  label="Trial ends"
                  value={formatDate(subscription?.trial_end ?? null)}
                />
                <BillingMetric
                  icon={<CreditCard className="h-5 w-5" />}
                  label="Current period ends"
                  value={formatDate(subscription?.current_period_end ?? null)}
                />
                <BillingMetric
                  icon={<Users className="h-5 w-5" />}
                  label="Active clients"
                  value={`${state.activeClientCount} / ${clientLimit}`}
                />
                <BillingMetric
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  label="Plan limit"
                  value={
                    clientLimit > 0
                      ? `${clientLimit} active clients`
                      : "Choose a plan"
                  }
                />
              </div>
            </section>

            {!state.hasBillingProfile && (
              <p className="mt-5 rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-3 text-sm text-blue-200">
                No subscription yet. Choose a plan to start your 14-day free
                trial.
              </p>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                {subscription?.plan_key === "starter"
                  ? "Change plan"
                  : "View pricing"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {state.hasBillingProfile && <ManageSubscriptionButton />}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function BillingMetric({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-24 items-center gap-4 rounded-lg border border-white/8 bg-slate-950/30 p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase text-slate-500">{label}</p>
        <p className="mt-1 font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
