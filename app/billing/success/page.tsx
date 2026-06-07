import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { ManageSubscriptionButton } from "@/components/BillingActions";

export const metadata: Metadata = {
  title: "Subscription updated | Wings",
};

export default async function BillingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ upgraded?: string }>;
}) {
  const { upgraded } = await searchParams;
  const isUpgrade = upgraded === "pro";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(16,185,129,0.14), transparent 38%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <Link href="/">
          <Image
            src="/wings-logo.png"
            alt="Wings"
            width={78}
            height={54}
            className="object-contain drop-shadow-[0_0_26px_rgba(16,185,129,0.25)]"
            priority
          />
        </Link>

        <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
          <Check className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1 className="mt-7 text-3xl font-bold text-white">
          {isUpgrade ? "Upgrade complete" : "Your free trial has started"}
        </h1>
        <p className="mt-3 leading-7 text-slate-400">
          {isUpgrade
            ? "Wings Pro is active. Your plan now supports up to 30 active clients."
            : "Your trainer subscription is ready. Open Wings to start managing your clients."}
        </p>

        <a
          href="wings://login"
          className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Open Wings app
        </a>

        <div className="mt-4">
          <ManageSubscriptionButton />
        </div>
      </div>
    </main>
  );
}
