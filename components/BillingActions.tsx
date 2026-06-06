"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LoaderCircle, Settings2 } from "lucide-react";
import {
  createCheckoutSession,
  createCustomerPortalSession,
} from "@/lib/billing-functions";
import {
  NOT_TRAINER_MESSAGE,
  SIGN_IN_REQUIRED_MESSAGE,
} from "@/lib/trainer-auth";

type PlanKey = "starter" | "pro";

function billingErrorMessage(caught: unknown, fallback: string) {
  if (caught instanceof Error) {
    const error = caught as Error & { status?: number };
    if (error.status === 404) {
      return "No subscription yet. Choose a plan to start your 14-day free trial.";
    }
    return error.message;
  }
  return fallback;
}

export function CheckoutButton({
  planKey,
  featured = false,
}: {
  planKey: PlanKey;
  featured?: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setLoading(true);
    setError("");

    try {
      window.location.assign(await createCheckoutSession(planKey));
    } catch (caught) {
      const message = billingErrorMessage(
        caught,
        "Unable to start checkout."
      );

      if (message === SIGN_IN_REQUIRED_MESSAGE) {
        router.push("/login?redirect=/pricing");
        return;
      }

      setError(
        message === NOT_TRAINER_MESSAGE ? NOT_TRAINER_MESSAGE : message
      );
      setLoading(false);
    }
  }

  return (
    <div className="mt-auto">
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className={`flex h-12 w-full items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
          featured
            ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
            : "border border-white/15 bg-white/[0.06] text-white hover:border-emerald-400/50 hover:bg-white/[0.1]"
        }`}
      >
        {loading ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        )}
        {loading ? "Opening checkout..." : "Start free trial"}
      </button>
      {error && (
        <p className="mt-3 text-sm leading-5 text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ManageSubscriptionButton({
  compact = false,
}: {
  compact?: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function openPortal() {
    setLoading(true);
    setError("");

    try {
      window.location.assign(await createCustomerPortalSession());
    } catch (caught) {
      const message = billingErrorMessage(
        caught,
        "Unable to open subscription management."
      );

      if (message === SIGN_IN_REQUIRED_MESSAGE) {
        router.push("/login?redirect=/trainer/billing");
        return;
      }

      setError(message);
      setLoading(false);
    }
  }

  return (
    <div className={compact ? "" : "flex flex-col items-center"}>
      <button
        type="button"
        onClick={openPortal}
        disabled={loading}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Settings2 className="h-4 w-4" aria-hidden="true" />
        )}
        {loading ? "Opening portal..." : "Manage subscription"}
      </button>
      {error && (
        <p className="mt-3 max-w-sm text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
