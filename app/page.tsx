import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DemoSection from "@/components/DemoSection";
import ExperienceSection from "@/components/ExperienceSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const title = "Wings | Coaching Platform for Personal Trainers";
const description =
  "Manage clients, create workouts and nutrition plans, schedule sessions, chat, and track progress from one all-in-one coaching app.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.wingsapp.fit/",
  },
  openGraph: {
    type: "website",
    url: "https://www.wingsapp.fit/",
    title,
    description,
    siteName: "Wings",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wings coaching platform for personal trainers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <DemoSection />
        <ExperienceSection />
        <AppPreviewSection />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
