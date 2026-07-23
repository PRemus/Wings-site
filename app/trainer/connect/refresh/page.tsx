import type { Metadata } from "next";
import { StripeConnectRedirectCard } from "@/components/StripeConnectRedirectCard";

export const metadata: Metadata = {
  title: "Restart Stripe onboarding | Wings",
  description:
    "The Stripe onboarding link expired or must be restarted from the Wings app.",
};

export default function StripeConnectRefreshPage() {
  return <StripeConnectRedirectCard variant="refresh" />;
}
