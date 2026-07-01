import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import RevealSection from "@/components/marketing/RevealSection";
import { SectionHeading } from "@/components/marketing/MarketingUI";
import { trainerPlans } from "@/lib/plans";

export default function PricingSection() {
  return (
    <RevealSection
      id="pricing"
      className="border-y border-white/5 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Simple trainer pricing"
          title="Choose the capacity that fits your coaching business"
          description="Clients never pay. Every new trainer subscription starts with a 14-day free trial and secure Stripe checkout."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {trainerPlans.map((plan, index) => (
            <article
              key={plan.key}
              className={`reveal flex min-h-[500px] flex-col rounded-lg border p-7 sm:p-9 ${
                plan.featured
                  ? "border-emerald-400/35 bg-emerald-400/[0.055]"
                  : "border-white/10 bg-[#0a1222]"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>
                </div>
                {plan.featured && (
                  <span className="text-xs font-semibold text-emerald-300">
                    Best for growth
                  </span>
                )}
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-black text-white">
                  &euro;{plan.price}
                </span>
                <span className="mb-1.5 text-sm text-slate-400">/ month</span>
              </div>

              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                14-day free trial
              </p>

              <p className="mt-6 border-y border-white/10 py-4 text-sm font-semibold text-slate-200">
                {plan.limit}
              </p>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className={`mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition-colors ${
                  plan.featured
                    ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                    : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                }`}
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Already subscribed? The pricing page recognizes your current plan and
          protects against duplicate subscriptions.
        </p>
      </div>
    </RevealSection>
  );
}
