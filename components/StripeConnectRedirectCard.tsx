"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Check, ExternalLink, RefreshCw } from "lucide-react";
import { WINGS_STRIPE_CONNECT_RETURN_DEEP_LINK } from "@/lib/deep-links";

type ConnectRedirectVariant = "return" | "refresh";

const pageCopy = {
  return: {
    title: "Stripe onboarding finished",
    body: "You can now return to Wings. The app will check your Stripe account status and finish setting up payments.",
    note: "If the app does not open automatically, return to the Wings app manually.",
    button: "Open Wings app",
    icon: Check,
    iconClass:
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    glow:
      "radial-gradient(circle at 50% 38%, rgba(16,185,129,0.14), transparent 38%)",
    autoOpen: true,
  },
  refresh: {
    title: "Stripe link expired",
    body: "This onboarding link must be restarted. Open Wings and press Connect Stripe again to generate a new secure Stripe link.",
    note: "No payment settings were changed on this page.",
    button: "Open Wings app",
    icon: RefreshCw,
    iconClass: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    glow:
      "radial-gradient(circle at 50% 38%, rgba(234,179,8,0.13), transparent 38%)",
    autoOpen: false,
  },
} satisfies Record<
  ConnectRedirectVariant,
  {
    title: string;
    body: string;
    note: string;
    button: string;
    icon: typeof AlertTriangle;
    iconClass: string;
    glow: string;
    autoOpen: boolean;
  }
>;

function openWingsApp() {
  const link = document.createElement("a");
  link.href = WINGS_STRIPE_CONNECT_RETURN_DEEP_LINK;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function StripeConnectRedirectCard({
  variant,
}: {
  variant: ConnectRedirectVariant;
}) {
  const content = pageCopy[variant];
  const Icon = content.icon;

  useEffect(() => {
    if (!content.autoOpen) return;
    const timeout = window.setTimeout(() => openWingsApp(), 1200);
    return () => window.clearTimeout(timeout);
  }, [content.autoOpen]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: content.glow }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/3 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-[420px] w-[420px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #10B981 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <section
        aria-labelledby="stripe-connect-title"
        className="relative z-10 flex w-full max-w-md flex-col items-center"
      >
        <Link href="/" aria-label="Wings home">
          <Image
            src="/wings-logo.png"
            alt="Wings"
            width={78}
            height={54}
            className="object-contain drop-shadow-[0_0_26px_rgba(16,185,129,0.25)]"
            priority
          />
        </Link>

        <div
          className={`mt-10 flex h-16 w-16 items-center justify-center rounded-full border ${content.iconClass}`}
        >
          <Icon className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1
          id="stripe-connect-title"
          className="mt-7 text-3xl font-bold text-white"
        >
          {content.title}
        </h1>
        <p className="mt-3 leading-7 text-slate-400">{content.body}</p>

        <a
          href={WINGS_STRIPE_CONNECT_RETURN_DEEP_LINK}
          className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          {content.button}
        </a>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          {content.note}
        </p>
      </section>
    </main>
  );
}
