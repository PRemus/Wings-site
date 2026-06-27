import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Wings",
  description:
    "How wingsapp.fit uses cookies and browser storage based on the website's current implementation.",
};

const SUPABASE_STORAGE_KEY = "sb-btvjimmubdgjxbfxeyxg-auth-token";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <main className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
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

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <Link href="/">
              <Image
                src="/wings-logo.png"
                alt="Wings"
                width={64}
                height={43}
                className="h-auto object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.4)]"
                priority
              />
            </Link>
            <div>
              <h1 className="text-4xl font-extrabold text-white">
                Cookie Policy
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Last updated: 27 June 2026
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] p-5 sm:p-6">
            <p className="text-sm font-semibold text-emerald-300">
              Current website storage summary
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Wings does not set first-party cookies during ordinary browsing.
              The website uses one localStorage record when a trainer signs in
              or when a successful password reset establishes a session. No
              advertising, analytics, or social-media tracking storage is
              active.
            </p>
          </div>

          <div className="prose-legal">
            <Section title="About This Policy">
              <p>
                This policy describes the cookies and similar browser-storage
                technologies actually used by{" "}
                <a
                  href="https://wingsapp.fit"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  wingsapp.fit
                </a>
                . It is based on the website implementation reviewed in June
                2026. It does not describe technologies that merely could be
                added in the future.
              </p>
              <p>
                Cookies are small text records sent by a website and returned
                by the browser with later requests. localStorage is a separate
                browser feature that lets a website retain data on a device
                without sending that data automatically with every request.
              </p>
            </Section>

            <Section title="First-Party Cookies">
              <p>
                Wings does not deliberately set a first-party cookie on
                wingsapp.fit. The audited production pages return no
                <code className="mx-1 text-slate-300">Set-Cookie</code> header,
                and the application contains no cookie-setting code.
              </p>
              <p>
                Authentication is not implemented with a Wings session cookie.
                It uses Supabase Auth and localStorage as described below.
              </p>
            </Section>

            <Section title="Supabase Authentication Storage">
              <StorageRecord
                name={SUPABASE_STORAGE_KEY}
                technology="Browser localStorage"
                provider="Wings and Supabase"
                purpose="Keeps a trainer signed in on the website and authorises access to trainer pricing, billing information, Stripe Checkout creation, and the Stripe Customer Portal. The same record can be created after a successful password reset when the reset flow establishes a Supabase session."
                contents="Supabase session information, including an access token, refresh token, token expiry information, and associated user/session metadata."
                retention="The localStorage record has no independent browser expiry date. Supabase refreshes it while the session remains valid. It is removed when the user signs out, and it can stop working when Supabase invalidates the session, after a password or security change, or when the user clears site data."
              />
              <p>
                This storage is required only for authenticated trainer
                features. Public pages and the waitlist can be viewed and used
                without signing in. Blocking or deleting this record signs the
                browser out and prevents authenticated billing features from
                working until the trainer signs in again.
              </p>
              <p>
                Supabase API requests use the stored access token in an{" "}
                <code className="text-slate-300">Authorization</code> header.
                Wings does not convert that token into a cookie.
              </p>
            </Section>

            <Section title="Stripe Hosted Checkout and Billing">
              <p>
                Wings does not embed Stripe.js, Stripe Elements, or a card form
                on wingsapp.fit. When a trainer starts a new subscription, the
                website redirects the browser to Stripe-hosted Checkout. When a
                trainer manages an existing subscription, the website redirects
                to Stripe&apos;s hosted Customer Portal.
              </p>
              <p>
                On Stripe&apos;s domains, such as{" "}
                <code className="text-slate-300">checkout.stripe.com</code> and{" "}
                <code className="text-slate-300">billing.stripe.com</code>,
                Stripe may use temporary and longer-lived cookies, local
                storage, device characteristics, and activity signals. Stripe
                uses these technologies to operate its pages, maintain secure
                sessions, remember relevant preferences, process payments, and
                detect or prevent fraud. Stripe&apos;s policy also describes
                functional and, where permitted and selected through
                Stripe&apos;s controls, advertising cookies across
                Stripe&apos;s services.
              </p>
              <p>
                Stripe controls that storage on its own domains. Wings does not
                set, read, or choose the names and expiry periods of Stripe
                cookies. Current details and controls are available in the{" "}
                <a
                  href="https://stripe.com/legal/cookies-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Stripe Cookies Policy
                </a>
                .
              </p>
            </Section>

            <Section title="Vercel Hosting">
              <p>
                Vercel hosts and delivers wingsapp.fit. The current website does
                not include the Vercel Web Analytics package, Vercel Speed
                Insights, or a Vercel tracking script. Normal audited production
                responses did not set a Vercel cookie in the visitor&apos;s
                browser.
              </p>
              <p>
                Vercel still processes ordinary server and network information
                needed to deliver and protect the website, such as request
                addresses, timestamps, user-agent information, and operational
                logs. That server-side processing is not a cookie or browser
                storage technology controlled by the Wings page.
              </p>
            </Section>

            <Section title="Forms and Temporary Page State">
              <p>
                Waitlist form entries, password fields, validation messages,
                loading states, and waitlist progress values are held only in
                page memory while the relevant page is open. Wings does not save
                those values to cookies, localStorage, sessionStorage, or
                IndexedDB.
              </p>
              <p>
                When a waitlist form is submitted, its contents are sent to the
                Wings server and stored in Supabase. That database storage is
                covered by the{" "}
                <Link
                  href="/privacy-policy"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Privacy Policy
                </Link>
                ; it is not browser storage.
              </p>
            </Section>

            <Section title="Your Choices">
              <p>
                You can remove the Wings Supabase session by using{" "}
                <strong className="text-slate-300">Sign out</strong> on the
                trainer billing page. You can also clear cookies and site data
                for wingsapp.fit in your browser settings. Clearing localStorage
                signs you out of the website but does not delete your Wings
                account.
              </p>
              <p>
                Browser controls for blocking all site storage may prevent
                trainer login and billing features from working. Stripe
                provides its own cookie controls on Stripe-hosted pages where
                required.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                If Wings adds analytics, advertising, embedded payment scripts,
                or another browser-storage technology, this policy will be
                updated before or when that technology is enabled. Where the law
                requires consent for a future non-essential technology, Wings
                will request that consent before using it.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                For questions about this policy or the use of browser storage,
                contact{" "}
                <a
                  href="mailto:wings.app@yahoo.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  wings.app@yahoo.com
                </a>
                .
              </p>
            </Section>
          </div>

          <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-slate-400">
            <p className="mb-1 font-semibold text-slate-300">Legal entity</p>
            <p>POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ</p>
            <p>
              B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1,
              București, România
            </p>
            <p className="mt-1">
              <a
                href="mailto:wings.app@yahoo.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                wings.app@yahoo.com
              </a>
              {" · "}
              <a
                href="https://wingsapp.fit"
                className="text-cyan-400 hover:text-cyan-300"
              >
                wingsapp.fit
              </a>
            </p>
          </div>

          <div className="mt-8 border-t border-white/5 pt-8 text-center">
            <Link
              href="/"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Back to wingsapp.fit
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
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 border-l-2 border-cyan-500 pl-4 text-lg font-bold text-white">
        {title}
      </h2>
      <div className="space-y-3 pl-4 text-sm leading-7 text-slate-400">
        {children}
      </div>
    </section>
  );
}

function StorageRecord({
  name,
  technology,
  provider,
  purpose,
  contents,
  retention,
}: {
  name: string;
  technology: string;
  provider: string;
  purpose: string;
  contents: string;
  retention: string;
}) {
  const fields = [
    ["Technology", technology],
    ["Provider", provider],
    ["Purpose", purpose],
    ["Contents", contents],
    ["Retention", retention],
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="break-all font-mono text-xs text-cyan-300">{name}</p>
      </div>
      <dl>
        {fields.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 border-b border-white/[0.06] px-4 py-3 last:border-b-0 sm:grid-cols-[7rem_1fr] sm:gap-4"
          >
            <dt className="text-xs font-semibold uppercase text-slate-500">
              {label}
            </dt>
            <dd className="text-sm leading-6 text-slate-300">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
