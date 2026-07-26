import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Apple,
  BadgeEuro,
  Camera,
  CreditCard,
  Dumbbell,
  Mail,
  MessageCircleQuestion,
  ShieldCheck,
  Utensils,
  Watch,
} from "lucide-react";
import Footer from "@/components/Footer";

const title = "Wings Support";
const description =
  "Get help with Wings accounts, subscriptions, payments, workouts, nutrition, progress tracking and technical issues.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.wingsapp.fit/support",
  },
  openGraph: {
    type: "website",
    url: "https://www.wingsapp.fit/support",
    title,
    description,
    siteName: "Wings",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wings Support",
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

const commonTopics = [
  { label: "Account registration and sign-in", icon: ShieldCheck },
  { label: "Trainer and client accounts", icon: MessageCircleQuestion },
  { label: "Workout plans and exercise tracking", icon: Dumbbell },
  { label: "Nutrition and meal plans", icon: Utensils },
  { label: "Progress photos, measurements and check-ins", icon: Camera },
  { label: "Trainer subscriptions", icon: BadgeEuro },
  { label: "Client packages and payments", icon: CreditCard },
  { label: "Stripe Connect setup", icon: CreditCard },
  { label: "Apple Watch support", icon: Watch },
  { label: "Technical issues and bug reports", icon: Apple },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <main className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden"
        >
          <div
            className="absolute left-1/3 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 h-[460px] w-[460px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #10B981 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <header className="mb-12 flex flex-col items-center gap-5 text-center">
            <Link href="/" aria-label="Wings home">
              <Image
                src="/wings-logo.png"
                alt="Wings"
                width={68}
                height={45}
                className="h-auto object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.4)]"
                priority
              />
            </Link>
            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Wings Support
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Need help with Wings? We&apos;re here to help personal trainers
                and clients with account access, subscriptions, payments,
                workouts, nutrition plans, progress tracking and other
                app-related questions.
              </p>
            </div>
          </header>

          <div className="space-y-6">
            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Contact Support
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    For support requests, contact us by email and include the
                    email address associated with your Wings account, a short
                    description of the issue and screenshots when relevant.
                  </p>
                  <a
                    href="mailto:wings.app@yahoo.com"
                    className="mt-5 inline-flex rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                  >
                    wings.app@yahoo.com
                  </a>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">Common Topics</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {commonTopics.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-emerald-300"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <InfoPanel title="Response Time">
                We aim to respond to support requests within 2 business days.
              </InfoPanel>

              <InfoPanel title="Privacy and Legal">
                Read the{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-emerald-300 transition hover:text-emerald-200"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-of-service"
                  className="font-medium text-emerald-300 transition hover:text-emerald-200"
                >
                  Terms of Service
                </Link>
                .
              </InfoPanel>
            </section>

            <section className="rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">
                Account Deletion
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Users can request account deletion from within the Wings app. If
                they cannot access their account, they may contact support using
                the email address above.
              </p>
            </section>
          </div>

          <p className="mt-10 text-center text-xs text-slate-600">
            Wings is operated by Poenar Remus PFA.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-400">{children}</p>
    </section>
  );
}
