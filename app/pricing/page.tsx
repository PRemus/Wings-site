import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import {
  CheckoutButton,
  ManageSubscriptionButton,
} from "@/components/BillingActions";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing | Wings",
  description:
    "Simple monthly plans for personal trainers. Start with a 14-day free trial.",
};

const plans = [
  {
    key: "starter" as const,
    name: "Wings Starter",
    price: 10,
    limit: "Up to 5 active clients",
    description:
      "A focused workspace for independent trainers building their client base.",
    features: [
      "Workout and nutrition planning",
      "Progress tracking and check-ins",
      "Trainer-client messaging",
      "Client photos and measurements",
    ],
    featured: false,
  },
  {
    key: "pro" as const,
    name: "Wings Pro",
    price: 20,
    limit: "Up to 30 active clients",
    description:
      "More capacity for established trainers running a growing coaching business.",
    features: [
      "Everything in Starter",
      "Manage up to 30 active clients",
      "Organized coaching workflow",
      "Built for higher client volume",
    ],
    featured: true,
  },
];

export default function PricingPage() {
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
                className="object-contain"
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
              Clients never pay. Choose the trainer plan that fits your
              business and try every feature free for 14 days.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.key}
                className={`relative flex min-h-[520px] flex-col overflow-hidden rounded-lg border p-7 sm:p-9 ${
                  plan.featured
                    ? "border-emerald-400/35 bg-emerald-400/[0.06]"
                    : "border-white/10 bg-white/[0.025]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-0 top-0 rounded-bl-lg bg-emerald-400 px-4 py-2 text-xs font-bold uppercase text-slate-950">
                    Best for growth
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-black text-white">
                    €{plan.price}
                  </span>
                  <span className="mb-1.5 text-sm text-slate-400">/ month</span>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  14-day free trial
                </div>

                <div className="mt-7 border-y border-white/10 py-4 text-sm font-semibold text-slate-200">
                  {plan.limit}
                </div>

                <ul className="mb-9 mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <CheckoutButton
                  planKey={plan.key}
                  featured={plan.featured}
                />
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-slate-400">
              Have a promo code? Enter it securely in Stripe Checkout.
            </p>
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
