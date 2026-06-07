import type { Metadata } from "next";
import PricingPageContent from "@/components/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing | Wings",
  description:
    "Simple monthly plans for personal trainers. Start with a 14-day free trial.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
