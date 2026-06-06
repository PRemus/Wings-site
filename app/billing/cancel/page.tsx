import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Checkout canceled | Wings",
};

export default function BillingCancelPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(59,130,246,0.13), transparent 40%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <Link href="/">
          <Image
            src="/wings-logo.png"
            alt="Wings"
            width={78}
            height={54}
            className="object-contain"
            priority
          />
        </Link>

        <h1 className="mt-10 text-3xl font-bold text-white">
          Checkout canceled
        </h1>
        <p className="mt-3 leading-7 text-slate-400">
          Nothing was charged. Your plan is still available whenever you are
          ready.
        </p>

        <Link
          href="/pricing"
          className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return to pricing
        </Link>
      </div>
    </main>
  );
}
