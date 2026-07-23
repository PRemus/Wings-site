import type { Metadata } from "next";
import { StripeConnectRedirectCard } from "@/components/StripeConnectRedirectCard";

export const metadata: Metadata = {
  title: "Stripe onboarding complete | Wings",
  description:
    "Stripe onboarding has finished. Return to the Wings app to continue setting up trainer payments.",
};

export default function StripeConnectReturnPage() {
  return <StripeConnectRedirectCard variant="return" />;
}
