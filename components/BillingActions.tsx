"use client";

import { useState } from "react";
import { ArrowRight, LoaderCircle, Settings2 } from "lucide-react";
import { getWingsSupabase } from "@/lib/supabase-wings";

type PlanKey = "starter" | "pro";

async function getAccessToken() {
  const {
    data: { session },
  } = await getWingsSupabase().auth.getSession();

  if (!session?.access_token) {
    throw new Error(
      "Sign in to your trainer account in Wings before choosing a plan."
    );
  }

  return session.access_token;
}

async function readResponse(response: Response) {
  const data = (await response.json().catch(() => ({}))) as {
    error?: string;
    url?: string;
  };

  if (!response.ok || !data.url) {
    throw new Error(data.error || "The billing service is unavailable.");
  }

  return data.url;
}

export function CheckoutButton({
  planKey,
  featured = false,
}: {
  planKey: PlanKey;
  featured?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setLoading(true);
    setError("");

    try {
      const accessToken = await getAccessToken();
      const response = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan_key: planKey }),
      });

      window.location.assign(await readResponse(response));
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Unable to start checkout."
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function openPortal() {
    setLoading(true);
    setError("");

    try {
      const accessToken = await getAccessToken();
      const response = await fetch("/api/billing/portal", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      window.location.assign(await readResponse(response));
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Unable to open subscription management."
      );
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
