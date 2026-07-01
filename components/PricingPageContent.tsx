"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Check,
  LoaderCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  CheckoutButton,
  ManageSubscriptionButton,
} from "@/components/BillingActions";
import Footer from "@/components/Footer";
import { getWingsSupabase } from "@/lib/supabase-wings";
import {
  NOT_TRAINER_MESSAGE,
  getAuthenticatedTrainer,
} from "@/lib/trainer-auth";
import { trainerPlans as plans, type PlanKey } from "@/lib/plans";

type SubscriptionRow = {
  plan_key: PlanKey | null;
  status: string | null;
};

const TERMINAL_SUBSCRIPTION_STATUSES = new Set([
  "canceled",
  "incomplete_expired",
]);

function PlanButton({
  planKey,
  featured,
  currentPlan,
  loadingPlan,
  blocked,
}: {
  planKey: PlanKey;
  featured: boolean;
  currentPlan: PlanKey | null;
  loadingPlan: boolean;
  blocked: boolean;
}) {
  if (loadingPlan) {
    return (
      <button
        type="button"
        disabled
        className="mt-auto flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-slate-500"
      >
        <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        Checking your plan...
      </button>
    );
  }

  if (blocked) {
    return (
      <button
        type="button"
        disabled
        className="mt-auto flex h-12 w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] px-5 text-sm font-semibold text-slate-600"
      >
        Trainer account required
      </button>
    );
  }

  if (currentPlan === planKey) {
    return (
      <button
        type="button"
        disabled
        className="mt-auto flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-5 text-sm font-semibold text-emerald-300"
      >
        <Check className="h-4 w-4" aria-hidden="true" />
        Current plan
      </button>
    );
  }

  if (currentPlan === "pro" && planKey === "starter") {
    return (
      <button
        type="button"
        disabled
        className="mt-auto flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-5 text-sm font-semibold text-slate-600"
      >
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
        Available through billing portal
      </button>
    );
  }

  return (
    <CheckoutButton
      planKey={planKey}
      featured={featured}
      label={currentPlan === "starter" ? "Upgrade to Pro" : "Start free trial"}
      loadingLabel={
        currentPlan === "starter" ? "Upgrading plan..." : "Opening checkout..."
      }
    />
  );
}

export default function PricingPageContent() {
  const [currentPlan, setCurrentPlan] = useState<PlanKey | null>(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(
    null
  );
  const [loadingPlan, setLoadingPlan] = useState(true);
  const [accountError, setAccountError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadCurrentPlan() {
      try {
        const trainer = await getAuthenticatedTrainer();
        if (!trainer) return;

        const { data, error } = await getWingsSupabase()
          .from("trainer_subscriptions")
          .select("plan_key,status")
          .eq("trainer_id", trainer.user.id)
          .order("updated_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (error) throw error;
        const subscription = data as SubscriptionRow | null;
        const plan =
          subscription?.plan_key &&
          subscription.status &&
          !TERMINAL_SUBSCRIPTION_STATUSES.has(subscription.status)
            ? subscription.plan_key
            : null;

        if (active) {
          setCurrentPlan(plan);
          setSubscriptionStatus(plan ? subscription?.status ?? null : null);
        }
      } catch (caught) {
        if (!active) return;
        setAccountError(
          caught instanceof Error && caught.message === NOT_TRAINER_MESSAGE
            ? NOT_TRAINER_MESSAGE
            : "We could not load your current subscription."
        );
      } finally {
        if (active) setLoadingPlan(false);
      }
    }

    void loadCurrentPlan();
    return () => {
      active = false;
    };
  }, []);

  const hasSubscription = currentPlan !== null;

  return (
    <div className="min-h-screen">
      <main className="relative overflow-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute left-1/4 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 h-[480px] w-[480px] translate-x-1/2 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #10B981 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/wings-logo.png"
                alt="Wings"
                width={46}
                height={32}
                className="h-auto object-contain"
                priority
              />
              <span className="font-semibold text-white">Wings</span>
            </Link>
            <ManageSubscriptionButton compact />
          </div>

          <div className="mx-auto max-w-3xl pb-14 pt-20 text-center sm:pt-24">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Built for personal trainers
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Coaching software that grows with you
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              {hasSubscription
                ? "Compare your current trainer plan and manage your next stage of growth."
                : "Clients never pay. Choose the trainer plan that fits your business and try every feature free for 14 days."}
            </p>
          </div>

          {accountError && (
            <p
              className="mx-auto mb-6 max-w-2xl rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-center text-sm text-red-200"
              role="alert"
            >
              {accountError}
            </p>
          )}

          <div className="grid gap-6 lg:grid-cols-2">
            {plans.map((plan) => {
              const isCurrent = currentPlan === plan.key;
              const isUpgrade =
                currentPlan === "starter" && plan.key === "pro";

              return (
                <article
                  key={plan.key}
                  className={`relative flex min-h-[560px] flex-col overflow-hidden rounded-lg border p-7 sm:p-9 ${
                    isCurrent
                      ? "border-emerald-400/45 bg-emerald-400/[0.08]"
                      : plan.featured
                        ? "border-emerald-400/35 bg-emerald-400/[0.06]"
                        : "border-white/10 bg-white/[0.025]"
                  }`}
                >
                  {isCurrent ? (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-emerald-400 px-4 py-2 text-xs font-bold uppercase text-slate-950">
                      Current plan
                    </div>
                  ) : (
                    plan.featured && (
                      <div className="absolute right-0 top-0 rounded-bl-lg bg-emerald-400 px-4 py-2 text-xs font-bold uppercase text-slate-950">
                        Best for growth
                      </div>
                    )
                  )}

                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {plan.name}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-5xl font-black text-white">
                      &euro;{plan.price}
                    </span>
                    <span className="mb-1.5 text-sm text-slate-400">
                      / month
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    {!hasSubscription
                      ? "14-day free trial"
                      : isCurrent
                        ? "Your current subscription"
                        : isUpgrade
                          ? "Immediate plan upgrade"
                          : "Managed through Stripe"}
                  </div>

                  <div className="mt-7 border-y border-white/10 py-4 text-sm font-semibold text-slate-200">
                    {plan.limit}
                  </div>

                  <ul className="mt-7 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                          <Check
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-7 mt-7 min-h-16">
                    {isUpgrade && (
                      <p className="text-sm leading-6 text-emerald-100/80">
                        {subscriptionStatus === "trialing"
                          ? "Upgrade immediately with no charge today. Your current trial end date stays the same, then Wings Pro renews at \u20ac20/month."
                          : "Upgrade immediately. Stripe will charge only the prorated difference for the remainder of your billing cycle."}
                      </p>
                    )}
                  </div>

                  <PlanButton
                    planKey={plan.key}
                    featured={plan.featured}
                    currentPlan={currentPlan}
                    loadingPlan={loadingPlan}
                    blocked={Boolean(accountError)}
                  />
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            {!hasSubscription && (
              <p className="text-sm text-slate-400">
                Have a promo code? Enter it securely in Stripe Checkout.
              </p>
            )}
            <p className="text-xs text-slate-600">
              Secure billing is handled by Stripe. Wings never receives your
              card details.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
