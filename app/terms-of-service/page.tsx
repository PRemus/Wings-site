import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";

const title = "Terms of Service | Wings";
const description =
  "Read the terms that govern access to and use of the Wings fitness coaching app, website, trainer subscriptions, and related services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.wingsapp.fit/terms-of-service",
  },
  openGraph: {
    type: "website",
    url: "https://www.wingsapp.fit/terms-of-service",
    title,
    description,
    siteName: "Wings",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wings Terms of Service",
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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <main className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden"
        >
          <div
            className="absolute right-1/3 top-1/4 h-[600px] w-[600px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #10B981 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 h-[460px] w-[460px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <header className="mb-12 flex flex-col items-center gap-4 text-center">
            <Link href="/" aria-label="Wings home">
              <Image
                src="/wings-logo.png"
                alt="Wings"
                width={64}
                height={43}
                className="object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.4)]"
                priority
              />
            </Link>
            <div>
              <h1 className="text-4xl font-extrabold text-white">
                Terms of Service
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Last updated: June 2026
              </p>
            </div>
          </header>

          <article className="prose-legal">
            <Section title="Acceptance of Terms">
              <p>
                By downloading, accessing, or using the Wings mobile
                application (&ldquo;Wings&rdquo;) or visiting{" "}
                <ExternalLink href="https://www.wingsapp.fit">
                  https://www.wingsapp.fit
                </ExternalLink>
                , you agree to be bound by these Terms of Service and our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Privacy Policy
                </Link>
                . If you do not agree to these Terms, you must not use the
                Services.
              </p>
            </Section>

            <Section title="Who Can Use Wings">
              <p>
                You must be at least 16 years old to create a Wings account.
                During registration, users are required to confirm that they
                are at least 16 years old. Wings does not collect or store
                users&rsquo; dates of birth as part of the registration
                process.
              </p>
              <p>
                Wings is intended for personal trainers and their clients for
                legitimate fitness coaching purposes.
              </p>
            </Section>

            <Section title="Account Responsibilities">
              <List
                items={[
                  "You are responsible for maintaining the confidentiality of your login credentials.",
                  "You are responsible for all activity that occurs under your account.",
                  "You must provide accurate information.",
                  "You must not share your account with another person.",
                  "Trainers must only invite clients they are actively coaching.",
                  <>
                    You must notify us immediately at{" "}
                    <EmailLink> wings.app@yahoo.com</EmailLink> if you suspect
                    unauthorized access.
                  </>,
                ]}
              />
            </Section>

            <Section title="Acceptable Use">
              <p>You agree not to:</p>
              <List
                items={[
                  "Use Wings for any unlawful or fraudulent purpose.",
                  "Upload illegal, harmful, abusive, defamatory, or infringing content.",
                  "Attempt to gain unauthorized access to another user's account or data.",
                  "Reverse engineer, decompile, or tamper with Wings.",
                  "Harass, threaten, or abuse other users.",
                  "Upload explicit, pornographic, or violent content.",
                  "Impersonate another person or organization.",
                  "Use bots, scripts, crawlers, automated systems, or other automated means to access or extract data from Wings without our prior written permission.",
                ]}
              />
            </Section>

            <Section title="Trainer Responsibilities">
              <p>Trainers are solely responsible for:</p>
              <List
                items={[
                  "Workout plans.",
                  "Nutrition plans.",
                  "Coaching advice.",
                  "Client recommendations.",
                  "Ensuring they hold any qualifications required by applicable law.",
                ]}
              />
              <p>
                Wings is a software platform only. Wings does not supervise,
                verify, endorse, or guarantee the advice provided by trainers.
              </p>
            </Section>

            <Section title="Health & Medical Disclaimer">
              <p>Wings provides fitness tracking and coaching tools only.</p>
              <p>Wings does not provide medical advice, diagnosis, or treatment.</p>
              <p>
                Always consult a qualified healthcare professional before
                beginning any exercise or nutrition program.
              </p>
              <p>
                Use of Wings and any plans created through the platform is
                entirely at your own risk.
              </p>
            </Section>

            <Section title="Results Disclaimer">
              <p>
                Wings does not guarantee any specific health, fitness,
                weight-loss, muscle-gain, athletic, or nutritional results.
              </p>
            </Section>

            <Section title="Wearable & Health Data">
              <p>Apple Health and other wearable integrations are optional.</p>
              <p>
                Data imported from third-party wearable platforms may be
                incomplete or inaccurate.
              </p>
              <p>
                Wings does not guarantee the accuracy, completeness, or
                availability of wearable data.
              </p>
            </Section>

            <Section title="Artificial Intelligence">
              <p>
                Some current or future Wings features may use artificial
                intelligence to assist users.
              </p>
              <p>
                AI-generated content, recommendations, food recognition, or
                estimates are provided for informational purposes only and
                should always be reviewed before being relied upon.
              </p>
            </Section>

            <Section title="User Content">
              <p>You retain ownership of all content you upload, including:</p>
              <List
                items={[
                  "Profile photos",
                  "Progress photos",
                  "Chat messages",
                  "Voice messages",
                  "Videos",
                  "Workout logs",
                  "Nutrition logs",
                ]}
              />
              <p>
                You grant POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ a limited,
                non-exclusive license to store, process, transmit, and display
                such content solely for operating the Wings platform.
              </p>
              <p>
                This license ends when the relevant content or account is
                deleted, except where retention is required by law.
              </p>
            </Section>

            <Section title="Intellectual Property">
              <p>
                All intellectual property rights relating to Wings, including
                its software, branding, logo, website, design, graphics,
                exercise library, and original content remain the exclusive
                property of POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ.
              </p>
            </Section>

            <Section title="Payments & Subscriptions">
              <p>
                Some Wings features require an active paid trainer
                subscription.
              </p>
              <p>
                Subscriptions are purchased and managed exclusively through the
                official Wings website (
                <ExternalLink href="https://www.wingsapp.fit">
                  https://www.wingsapp.fit
                </ExternalLink>
                ) using Stripe.
              </p>
              <p>
                The Wings mobile application does not process payment card
                information or provide in-app purchases.
              </p>
              <p>
                Subscription pricing, renewal, cancellation, trials, and
                billing are governed by the subscription terms displayed
                during checkout.
              </p>
            </Section>

            <Section title="Service Availability">
              <p>
                We strive to keep Wings available but do not guarantee
                uninterrupted availability.
              </p>
              <p>
                Maintenance, updates, infrastructure failures, third-party
                outages, or other technical events may temporarily affect the
                Services.
              </p>
            </Section>

            <Section title="Force Majeure">
              <p>
                We are not responsible for delays or failures caused by
                circumstances beyond our reasonable control, including natural
                disasters, internet outages, cloud provider failures,
                governmental actions, cyberattacks, or other force majeure
                events.
              </p>
            </Section>

            <Section title="Account Termination">
              <p>Users may delete their accounts through the application settings.</p>
              <p>
                We may suspend or terminate accounts that violate these Terms
                or applicable law.
              </p>
              <p>Certain information may be retained where legally required.</p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable Romanian and
                European Union law, POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ
                shall not be liable for indirect, incidental, special,
                consequential, or punitive damages arising from the use of
                Wings.
              </p>
              <p>
                Nothing in these Terms excludes liability where such exclusion
                is prohibited by applicable law.
              </p>
            </Section>

            <Section title="Data Backup">
              <p>
                Although we implement reasonable security measures, users are
                responsible for maintaining copies of any information they
                consider important.
              </p>
            </Section>

            <Section title="Indemnification">
              <p>
                You agree to indemnify and hold harmless POENAR REMUS PERSOANĂ
                FIZICĂ AUTORIZATĂ from claims arising from your misuse of Wings
                or violation of these Terms.
              </p>
            </Section>

            <Section title="Governing Law">
              <p>These Terms are governed by Romanian law.</p>
              <p>
                If you are an EU consumer, mandatory consumer protection laws
                applicable in your country of residence continue to apply
                where required by law.
              </p>
            </Section>

            <Section title="Changes">
              <p>We may update these Terms from time to time.</p>
              <p>
                Material changes may be communicated through the app, by email,
                or on our website before taking effect.
              </p>
            </Section>

            <Section title="Contact">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-5">
                <address className="not-italic">
                  <p className="font-semibold text-slate-300">
                    POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ
                  </p>
                  <p>
                    B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1,
                    București, România
                  </p>
                  <p>
                    Email: <EmailLink>wings.app@yahoo.com</EmailLink>
                  </p>
                  <p>
                    Website:{" "}
                    <ExternalLink href="https://www.wingsapp.fit">
                      https://www.wingsapp.fit
                    </ExternalLink>
                  </p>
                </address>
              </div>
            </Section>
          </article>

          <div className="mt-8 border-t border-white/5 pt-8 text-center">
            <Link
              href="/"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              &larr; Back to wingsapp.fit
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 border-l-2 border-cyan-500 pl-4 text-lg font-bold text-white">
        {title}
      </h2>
      <div className="space-y-3 pl-4 text-sm leading-relaxed text-slate-400">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="break-words text-cyan-400 transition-colors hover:text-cyan-300"
    >
      {children}
    </a>
  );
}

function EmailLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="mailto:wings.app@yahoo.com"
      className="break-words text-cyan-400 transition-colors hover:text-cyan-300"
    >
      {children}
    </a>
  );
}
