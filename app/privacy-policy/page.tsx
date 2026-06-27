import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const title = "Privacy Policy | Wings";
const description =
  "Learn how Wings collects, uses, shares, stores, and protects personal information across the Wings app and wingsapp.fit.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.wingsapp.fit/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://www.wingsapp.fit/privacy-policy",
    title,
    description,
    siteName: "Wings",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wings Privacy Policy",
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

const contents = [
  "What Information Do We Collect?",
  "How Do We Process Your Information?",
  "What Legal Bases Do We Rely On?",
  "When and With Whom Do We Share Personal Information?",
  "Cookies and Similar Technologies",
  "International Data Transfers",
  "How Long Do We Keep Your Information?",
  "How Do We Keep Your Information Safe?",
  "Information From Minors",
  "Your Privacy Rights",
  "Do-Not-Track Controls",
  "United States Privacy Rights",
  "Updates to This Notice",
  "How to Contact Us",
  "How to Review, Update, or Delete Your Data",
];

export default function PrivacyPolicyPage() {
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
          <header className="mb-12 flex flex-col items-center gap-4 text-center">
            <Link href="/" aria-label="Wings home">
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
                Privacy Policy
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Last updated: 27 June 2026
              </p>
            </div>
          </header>

          <div className="prose-legal">
            <section className="mb-10 space-y-4 text-sm leading-7 text-slate-400">
              <p>
                This Privacy Notice for POENAR REMUS PERSOANĂ FIZICĂ
                AUTORIZATĂ, doing business as Wings (&quot;Wings,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), explains
                how and why we access, collect, store, use, and share
                (&quot;process&quot;) personal information when you use our
                services (&quot;Services&quot;), including when you:
              </p>
              <BulletList
                items={[
                  <>
                    download and use the Wings mobile application,{" "}
                    <strong className="text-slate-300">
                      Wings - Fly To Your Goals
                    </strong>
                    ;
                  </>,
                  <>
                    use{" "}
                    <a
                      href="https://www.wingsapp.fit"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      wingsapp.fit
                    </a>
                    , including trainer login, subscriptions, billing, account
                    confirmation, password reset, or the waitlist;
                  </>,
                  <>
                    use Wings coaching features. Wings connects personal
                    trainers and clients so trainers can manage workout plans,
                    nutrition plans, schedules, communication, and progress,
                    while clients can follow plans, log activity and meals,
                    share media, and track their fitness journey; or
                  </>,
                  <>
                    contact support, provide feedback, or opt in to Wings launch
                    news and related communications.
                  </>,
                ]}
              />
              <p>
                Reading this notice will help you understand your privacy
                rights and choices. We are responsible for deciding how your
                personal information is processed. If you do not agree with
                this notice, please do not use the Services. Questions can be
                sent to{" "}
                <EmailLink email="wings.app@yahoo.com" />.
              </p>
            </section>

            <PolicySection id="summary" title="Summary of Key Points">
              <p>
                <strong className="text-slate-300">
                  What information do we process?
                </strong>{" "}
                Depending on the features you use, we process account and
                profile information, age and fitness details supplied during
                client onboarding, workout and nutrition records, progress
                media, messages, subscription information, waitlist details,
                and device or usage information.
              </p>
              <p>
                <strong className="text-slate-300">
                  Do we process sensitive information?
                </strong>{" "}
                Fitness, health, injury, medical-note, body-measurement,
                wearable, and communication data may be sensitive under
                applicable law. We process it only to provide requested
                features, with consent where required, or as otherwise
                permitted by law.
              </p>
              <p>
                <strong className="text-slate-300">
                  Do we receive information from third parties?
                </strong>{" "}
                We may receive limited information from Stripe, device health
                services you connect, Firebase services used for app telemetry,
                push-notification providers, and users connected to you through
                a trainer-client or shared chat relationship. We do not obtain
                profiles from public databases, data brokers, affiliate
                programmes, marketing partners, or social-media platforms.
              </p>
              <p>
                <strong className="text-slate-300">
                  How do we use and share information?
                </strong>{" "}
                We process information to provide and secure Wings, support
                trainer-client coaching, process subscriptions, communicate
                with users, diagnose reliability problems, improve the
                Services, and comply with law. We share information only with
                relevant users, service providers, or authorities in the
                situations described below.
              </p>
              <p>
                <strong className="text-slate-300">
                  What are your rights?
                </strong>{" "}
                Your rights depend on where you live and may include access,
                correction, deletion, restriction, objection, portability, and
                withdrawal of consent. Contact us to exercise them.
              </p>
            </PolicySection>

            <nav
              aria-label="Privacy Policy contents"
              className="mb-12 border-y border-white/10 py-6"
            >
              <p className="mb-4 text-xs font-semibold uppercase text-slate-500">
                Table of contents
              </p>
              <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                {contents.map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#section-${index + 1}`}
                      className="flex gap-2 text-slate-400 transition hover:text-cyan-300"
                    >
                      <span className="w-6 shrink-0 text-slate-600">
                        {index + 1}.
                      </span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <PolicySection
              id="section-1"
              number="1"
              title="What Information Do We Collect?"
            >
              <Subheading>Personal information you provide</Subheading>
              <p>
                We collect personal information that you voluntarily provide
                when you register, complete a profile, connect with a trainer
                or client, use coaching features, join the waitlist, purchase a
                subscription, or contact us. Depending on the feature, this may
                include:
              </p>
              <BulletList
                items={[
                  "name, email address, username, account identifiers, passwords, and authentication information;",
                  "profile photos and profile information;",
                  "age and gender supplied during client onboarding;",
                  "height, weight, body measurements, body-fat information, fitness goals, activity level, training experience, injuries, dietary restrictions, and medical or coaching notes;",
                  "workout plans, exercise logs, sets, repetitions, weights, personal records, schedules, and achievements;",
                  "nutrition plans, meal logs, food entries, meal ratings, notes, and meal photos;",
                  "progress measurements and progress photos;",
                  "direct and group-chat messages, reactions, images, videos, audio, and files;",
                  "wearable connection settings and workout summaries such as duration, calories, and heart-rate statistics when you enable the integration;",
                  "notification preferences and push-notification tokens;",
                  "subscription plan, status, billing period, and Stripe customer or subscription identifiers;",
                  "support requests, bug reports, and feedback; and",
                  "waitlist details, including name, email, trainer/client role, country, optional city, referral source, comments, marketing consent, and beta-testing interest.",
                ]}
              />
              <p>
                Wings does not currently ask users to provide a phone number.
                Registration asks users to confirm they are at least 16 but does
                not ask for an exact date of birth. Client onboarding currently
                asks for age and stores a date value derived from that selected
                age so the app can calculate and display age; it is not an exact
                birth date supplied by the user.
              </p>

              <Subheading>Sensitive information</Subheading>
              <p>
                Health and fitness information, body measurements, injuries,
                medical notes, dietary details, wearable information, and the
                contents of private communications may be considered sensitive
                or special-category information in some jurisdictions. We
                process this information when necessary to provide the features
                you request, with your consent where required, or as otherwise
                permitted by applicable law.
              </p>

              <Subheading>Payment data</Subheading>
              <p>
                Subscription payments are processed through Stripe-hosted
                Checkout. Wings does not collect, receive, or store full payment
                card numbers or card security codes. Stripe processes payment
                details and returns limited subscription and transaction
                information needed to operate your Wings subscription. See the{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Stripe Privacy Policy
                </a>
                .
              </p>

              <Subheading>Application permissions and device data</Subheading>
              <p>
                If you choose to use the relevant features, the mobile app may
                request permission to access:
              </p>
              <BulletList
                items={[
                  "the camera, for photos and barcode scanning;",
                  "photos or media storage, for selecting, uploading, saving, and sharing media;",
                  "the microphone, for audio messages;",
                  "notifications, so Wings can deliver account and coaching updates; and",
                  "Apple Health or compatible health services, for the specific workout, calorie, heart-rate, duration, or sleep information shown in the permission request.",
                ]}
              />
              <p>
                You can change device permissions in your operating-system
                settings. The app and its reliability providers may also
                process device model, operating system and app version,
                installation identifiers, app-instance identifiers, language,
                network information, crash details, performance measurements,
                and feature or screen usage.
              </p>

              <Subheading>Automatically collected information</Subheading>
              <p>
                When you use the Services, our hosting, backend, security, and
                mobile telemetry providers may automatically process IP
                address, timestamps, browser or device characteristics,
                operating system, referring URL, pages or app screens used,
                session statistics, feature events, network-performance data,
                and crash or diagnostic information.
              </p>
              <p>
                Wings does not request precise GPS location permission and does
                not collect precise GPS coordinates. Approximate country or
                region may be derived from IP address or device analytics by
                providers such as Firebase, Vercel, Stripe, or Supabase for
                security, service delivery, diagnostics, and aggregate
                analytics.
              </p>

              <Subheading>Information received from other sources</Subheading>
              <p>
                We may receive personal information from the following sources
                only when relevant to a feature you use:
              </p>
              <BulletList
                items={[
                  "Stripe, including subscription, invoice, customer, payment status, and fraud-prevention information;",
                  "Apple Health or another supported device health source, after you grant access;",
                  "Firebase Analytics, Crashlytics, Performance Monitoring, and Cloud Messaging, including app-instance, usage, diagnostic, performance, and delivery information;",
                  "Expo, Apple Push Notification service, and Firebase Cloud Messaging for push-token registration and notification delivery; and",
                  "trainers, clients, and members of shared chat groups who send invitations, plans, messages, files, or other information through Wings.",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="section-2"
              number="2"
              title="How Do We Process Your Information?"
            >
              <p>We process personal information to:</p>
              <BulletList
                items={[
                  "create, authenticate, secure, maintain, and delete user accounts;",
                  "provide the trainer-client coaching platform and requested app or website features;",
                  "create, assign, manage, and follow workout and nutrition plans;",
                  "record workout, nutrition, body, wearable, and progress information;",
                  "manage trainer-client relationships, schedules, invitations, and shared coaching workflows;",
                  "enable direct messages, group chats, media sharing, and notifications;",
                  "process subscriptions, trials, upgrades, billing status, and customer-portal requests;",
                  "respond to questions, support requests, bug reports, and feedback;",
                  "send account confirmation, password reset, administrative, support, and consented waitlist communications;",
                  "monitor app usage trends through Firebase Analytics (Google) and diagnose crashes and performance through Firebase Crashlytics and Performance Monitoring;",
                  "protect the Services, users, and payments from fraud, abuse, security incidents, and unauthorised access;",
                  "improve usability, reliability, features, and support; and",
                  "comply with legal obligations, resolve disputes, enforce terms, and protect legal or vital interests.",
                ]}
              />
              <p>
                Wings custom Firebase telemetry is designed around limited
                product events and screen names. We do not intentionally send
                names, email addresses, message contents, photos, nutrition
                entries, health or wearable values, or real Wings user IDs as
                custom analytics-event parameters.
              </p>
            </PolicySection>

            <PolicySection
              id="section-3"
              number="3"
              title="What Legal Bases Do We Rely On?"
            >
              <p>
                If you are in the European Economic Area, United Kingdom, or
                another jurisdiction that requires a legal basis, we rely on
                the following as applicable:
              </p>
              <BulletList
                items={[
                  <>
                    <strong className="text-slate-300">
                      Performance of a contract:
                    </strong>{" "}
                    to create your account, provide Wings features, connect
                    trainers and clients, and administer subscriptions.
                  </>,
                  <>
                    <strong className="text-slate-300">Consent:</strong> for
                    optional health integrations, device permissions,
                    progress or media uploads where consent is required,
                    waitlist marketing messages, and other processing based on
                    your choice.
                  </>,
                  <>
                    <strong className="text-slate-300">
                      Legitimate interests:
                    </strong>{" "}
                    to secure and improve the Services, diagnose problems,
                    understand aggregate use, prevent fraud, provide support,
                    and operate an effective coaching platform where those
                    interests are not overridden by your rights.
                  </>,
                  <>
                    <strong className="text-slate-300">
                      Legal obligations:
                    </strong>{" "}
                    to meet tax, accounting, consumer-protection,
                    data-protection, law-enforcement, and other applicable
                    requirements.
                  </>,
                  <>
                    <strong className="text-slate-300">
                      Vital interests:
                    </strong>{" "}
                    where processing is necessary to protect a person from a
                    serious threat and another legal basis is unavailable.
                  </>,
                ]}
              />
              <p>
                You may withdraw consent at any time. Withdrawal does not
                affect processing that was lawful before withdrawal or
                processing based on another lawful ground.
              </p>
            </PolicySection>

            <PolicySection
              id="section-4"
              number="4"
              title="When and With Whom Do We Share Personal Information?"
            >
              <p>
                We disclose information only as necessary for the purposes
                described in this notice. Service providers may process
                different information depending on the feature used:
              </p>
              <VendorList />

              <Subheading>Relevant Wings users</Subheading>
              <p>
                Wings information is not public by default and is not visible
                to all users. Depending on the feature:
              </p>
              <BulletList
                items={[
                  "a client may share profile, coaching, workout, nutrition, progress, health, schedule, and communication information with their linked trainer;",
                  "a trainer may share profile information, plans, schedules, notes intended for the client, and communications with linked clients;",
                  "direct-chat content is visible to the sender and recipient; and",
                  "group-chat content and member profile details are visible only to users authorised to access that group.",
                ]}
              />

              <Subheading>Other permitted disclosures</Subheading>
              <BulletList
                items={[
                  <>
                    <strong className="text-slate-300">
                      Business transfers:
                    </strong>{" "}
                    information may be transferred in connection with a merger,
                    financing, reorganisation, sale of assets, or acquisition,
                    subject to applicable law.
                  </>,
                  <>
                    <strong className="text-slate-300">
                      Legal and safety reasons:
                    </strong>{" "}
                    information may be disclosed when reasonably necessary to
                    comply with law, respond to lawful process, protect rights
                    or safety, investigate misuse, or enforce our agreements.
                  </>,
                ]}
              />
              <p>
                Wings does not sell personal information and does not disclose
                it to data brokers, affiliate programmes, or advertising
                partners.
              </p>
            </PolicySection>

            <PolicySection
              id="section-5"
              number="5"
              title="Cookies and Similar Technologies"
            >
              <p>
                Wings does not deliberately set first-party cookies on
                wingsapp.fit during ordinary browsing. The website uses browser
                localStorage to retain a Supabase Auth session after a trainer
                signs in or a successful password reset establishes a session.
                Public pages and the waitlist do not require a stored login
                session.
              </p>
              <p>
                Wings uses Stripe-hosted Checkout and the Stripe Customer
                Portal rather than embedding card fields on wingsapp.fit.
                Stripe may use cookies and similar technologies on
                Stripe-controlled domains for secure sessions, payment
                processing, preferences, and fraud prevention.
              </p>
              <p>
                Firebase Analytics (Google), Crashlytics, and Performance
                Monitoring operate in the native mobile app using app-instance,
                installation, device, diagnostic, and performance identifiers;
                they are not website cookies and Firebase Analytics is not
                installed on wingsapp.fit. Learn more in the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Google Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Firebase Privacy and Security documentation
                </a>
                .
              </p>
              <p>
                The complete, implementation-specific website storage
                inventory is available in our{" "}
                <a
                  href="https://www.wingsapp.fit/cookie-policy"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection
              id="section-6"
              number="6"
              title="International Data Transfers"
            >
              <p>
                Wings is operated from Romania. The production Supabase project
                is hosted in the United Kingdom. Other providers, including
                Stripe, Firebase/Google, Expo, Apple, Resend, Vercel, USDA
                FoodData Central, and Open Food Facts, may process information
                in the United States, the European Economic Area, the United
                Kingdom, or other locations where they or their subprocessors
                operate.
              </p>
              <p>
                Where personal information is transferred from the EEA, UK, or
                Switzerland to a country without an applicable adequacy
                decision, we rely on appropriate safeguards required by law,
                which may include the European Commission&apos;s Standard
                Contractual Clauses, the UK International Data Transfer
                Addendum, contractual protections with service providers, and
                supplementary security measures.
              </p>
            </PolicySection>

            <PolicySection
              id="section-7"
              number="7"
              title="How Long Do We Keep Your Information?"
            >
              <p>
                We retain personal information only for as long as reasonably
                necessary for the purposes described in this notice, including:
              </p>
              <BulletList
                items={[
                  "account, profile, coaching, workout, nutrition, progress, wearable, media, and communication data while the account or relevant coaching relationship remains active;",
                  "waitlist information until you unsubscribe, ask us to delete it, or it is no longer needed for the launch purpose;",
                  "support and security records for as long as needed to resolve the request, prevent abuse, or establish and defend legal claims;",
                  "subscription, transaction, tax, accounting, and fraud-prevention records for periods required or permitted by law; and",
                  "analytics, crash, performance, notification-delivery, and infrastructure logs according to the applicable provider's retention settings and our operational needs.",
                ]}
              />
              <p>
                When information is no longer needed, we delete or anonymise it.
                If immediate deletion is not technically possible, such as in
                protected backups, we isolate the information from further use
                until deletion occurs through the normal retention cycle.
              </p>
            </PolicySection>

            <PolicySection
              id="section-8"
              number="8"
              title="How Do We Keep Your Information Safe?"
            >
              <p>
                We use reasonable technical and organisational safeguards
                designed to protect personal information, including encrypted
                network connections, managed authentication, role-based and
                row-level access controls, protected storage rules, restricted
                service credentials, and security monitoring.
              </p>
              <p>
                No electronic transmission or storage system is completely
                secure. We cannot guarantee that unauthorised third parties will
                never defeat safeguards. Use a strong, unique password, protect
                your device, sign out of shared browsers, and contact us
                promptly if you suspect unauthorised access.
              </p>
            </PolicySection>

            <PolicySection
              id="section-9"
              number="9"
              title="Information From Minors"
            >
              <p>
                We do not knowingly collect personal information from or market
                to children under 16 years of age. During registration, users
                must actively confirm that they are at least 16.
              </p>
              <p>
                Registration does not request an exact date of birth. The
                client onboarding flow may later request age for coaching and
                age-display purposes and stores a date value derived from the
                selected age rather than an exact birth date provided by the
                user.
              </p>
              <p>
                If we learn that we collected personal information from a child
                under 16, we will take reasonable steps to delete it as soon as
                practicable. If you believe a child under 16 has provided
                information to Wings, contact{" "}
                <EmailLink email="wings.app@yahoo.com" />.
              </p>
            </PolicySection>

            <PolicySection
              id="section-10"
              number="10"
              title="Your Privacy Rights"
            >
              <p>
                Depending on where you live, you may have the right to request:
              </p>
              <BulletList
                items={[
                  "access to and a copy of your personal information;",
                  "correction of inaccurate or incomplete information;",
                  "deletion of your personal information;",
                  "restriction of or objection to certain processing;",
                  "portability of information you provided in a structured, commonly used format;",
                  "withdrawal of consent at any time where processing relies on consent;",
                  "information about recipients or categories of recipients; and",
                  "a complaint to the competent data-protection authority.",
                ]}
              />
              <p>
                Rights are not absolute and may be limited by applicable law.
                We may need to verify your identity before completing a request.
                We will respond within the period required by law.
              </p>

              <Subheading>Account information and deletion</Subheading>
              <p>
                You can update available profile information in the app. You
                can also delete your account through{" "}
                <strong className="text-slate-300">
                  Settings → Account &amp; Data → Delete my Account
                </strong>{" "}
                or contact us for assistance. Some limited records may be
                retained where required for legal, accounting, fraud,
                security, or dispute-resolution purposes.
              </p>

              <Subheading>European complaints</Subheading>
              <p>
                If you are in the EEA or UK and believe we process your
                information unlawfully, you may complain to your local
                supervisory authority. In Romania, you can contact the National
                Supervisory Authority for Personal Data Processing (ANSPDCP) at{" "}
                <a
                  href="https://www.dataprotection.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  dataprotection.ro
                </a>
                . Swiss residents may contact the Federal Data Protection and
                Information Commissioner.
              </p>
              <p>
                For browser-storage controls, see the{" "}
                <Link
                  href="/cookie-policy"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Cookie Policy
                </Link>
                . Clearing wingsapp.fit localStorage signs the browser out but
                does not delete the Wings account.
              </p>
            </PolicySection>

            <PolicySection
              id="section-11"
              number="11"
              title="Do-Not-Track Controls"
            >
              <p>
                Some browsers and mobile systems provide a Do-Not-Track
                (&quot;DNT&quot;) signal. No uniform standard for interpreting
                DNT signals has been adopted, so Wings does not currently
                respond to them. Wings does not use advertising or
                social-media tracking scripts on wingsapp.fit. If a binding DNT
                standard becomes applicable, we will update this notice and our
                practices.
              </p>
            </PolicySection>

            <PolicySection
              id="section-12"
              number="12"
              title="United States Privacy Rights"
            >
              <p>
                Residents of US states with comprehensive privacy laws may have
                rights to know whether we process personal information, access
                it, correct inaccuracies, request deletion, obtain a portable
                copy, and appeal certain decisions. Available rights and
                exceptions vary by state.
              </p>

              <Subheading>Categories of personal information</Subheading>
              <DataCategoryTable />
              <p>
                We retain these categories as described in section 7. We do not
                sell personal information and have not sold personal
                information in the preceding twelve months. We disclose
                information to service providers and relevant Wings users for
                the operational purposes described in section 4.
              </p>

              <Subheading>Exercising US privacy rights</Subheading>
              <p>
                Submit a request by emailing{" "}
                <EmailLink email="wings.app@yahoo.com" /> or by using the
                in-app support feature. You may use an authorised agent where
                state law permits. We may ask for information reasonably needed
                to verify your identity and, for an agent, proof of authority.
                Verification information will be used only for the request,
                security, and fraud-prevention purposes.
              </p>
              <p>
                If we decline a request and your state grants an appeal right,
                you may appeal by emailing the same address. We will explain
                our decision and provide information about further complaint
                options required by your state.
              </p>

              <Subheading>California Shine the Light</Subheading>
              <p>
                California Civil Code section 1798.83 allows certain California
                residents to request information about disclosures to third
                parties for their direct-marketing purposes. Wings does not
                disclose personal information to third parties for their own
                direct marketing. Eligible residents may still submit a written
                request using the contact information below.
              </p>
            </PolicySection>

            <PolicySection
              id="section-13"
              number="13"
              title="Updates to This Notice"
            >
              <p>
                We may update this notice to reflect changes to the Services,
                providers, technology, or law. The revised version will show a
                new &quot;Last updated&quot; date. If a change is material, we
                may provide additional notice through the app, website, or
                email as appropriate.
              </p>
            </PolicySection>

            <PolicySection
              id="section-14"
              number="14"
              title="How to Contact Us"
            >
              <p>
                For questions, comments, or privacy requests, email{" "}
                <EmailLink email="wings.app@yahoo.com" /> or write to:
              </p>
              <address className="not-italic text-slate-300">
                POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ
                <br />
                B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1
                <br />
                București 012366
                <br />
                România
              </address>
            </PolicySection>

            <PolicySection
              id="section-15"
              number="15"
              title="How to Review, Update, or Delete Your Data"
            >
              <p>
                Depending on applicable law, you may request access to the
                personal information we hold, details about how it has been
                processed, correction, deletion, portability, restriction, or
                withdrawal of consent. You may update available information or
                delete your account in the Wings app, use in-app support, or
                email <EmailLink email="wings.app@yahoo.com" />. Please describe
                the request and the account email involved so we can verify and
                respond securely.
              </p>
            </PolicySection>
          </div>

          <div className="mb-8 border-t border-white/5 pt-8 text-center">
            <Link
              href="/"
              className="text-sm text-slate-500 transition hover:text-slate-300"
            >
              Back to wingsapp.fit
            </Link>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-slate-400">
            <p className="mb-1 font-semibold text-slate-300">Legal entity</p>
            <p>POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ</p>
            <p>
              B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1,
              București, România
            </p>
            <p className="mt-1">
              <EmailLink email="wings.app@yahoo.com" />
              {" · "}
              <a
                href="https://www.wingsapp.fit"
                className="text-cyan-400 hover:text-cyan-300"
              >
                wingsapp.fit
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-8">
      <h2 className="mb-4 border-l-2 border-cyan-500 pl-4 text-lg font-bold text-white">
        {number ? `${number}. ${title}` : title}
      </h2>
      <div className="space-y-4 pl-4 text-sm leading-7 text-slate-400">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-2 text-sm font-semibold uppercase text-slate-300">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EmailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-cyan-400 hover:text-cyan-300"
    >
      {email}
    </a>
  );
}

function VendorList() {
  const vendors = [
    [
      "Supabase",
      "Backend database, authentication, Edge Functions, and file storage.",
      "https://supabase.com/privacy",
    ],
    [
      "Stripe",
      "Trainer subscription Checkout, billing, invoices, customer portal, and payment fraud prevention.",
      "https://stripe.com/privacy",
    ],
    [
      "Firebase Analytics (Google)",
      "Native mobile-app usage events, app-instance identifiers, session statistics, device information, and approximate geolocation.",
      "https://policies.google.com/privacy",
    ],
    [
      "Firebase Crashlytics and Performance Monitoring",
      "Crash, device, app-version, installation, network, and performance diagnostics for the native mobile app.",
      "https://firebase.google.com/support/privacy",
    ],
    [
      "Expo Push Notifications, Firebase Cloud Messaging, and Apple Push Notification service",
      "Push-token registration, notification routing, delivery, and delivery diagnostics.",
      "https://expo.dev/privacy",
    ],
    [
      "Apple Health and device health services",
      "Optional health and workout data access initiated by the user through device permission controls.",
      "https://www.apple.com/legal/privacy/",
    ],
    [
      "USDA FoodData Central and Open Food Facts",
      "Ingredient, barcode, and nutrition-information lookup. Search terms or barcodes are sent through Wings server functions.",
      "https://fdc.nal.usda.gov/",
    ],
    [
      "Resend",
      "Delivery of support and transactional email.",
      "https://resend.com/legal/privacy-policy",
    ],
    [
      "Vercel",
      "Hosting, content delivery, server functions, security, and operational logs for wingsapp.fit.",
      "https://vercel.com/legal/privacy-policy",
    ],
  ] as const;

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025]">
      {vendors.map(([name, purpose, href]) => (
        <div
          key={name}
          className="grid gap-1 border-b border-white/[0.06] px-4 py-4 last:border-b-0 sm:grid-cols-[13rem_1fr] sm:gap-5"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-300 hover:text-cyan-200"
          >
            {name}
          </a>
          <p className="leading-6 text-slate-400">{purpose}</p>
        </div>
      ))}
    </div>
  );
}

function DataCategoryTable() {
  const categories = [
    [
      "Identifiers",
      "Yes",
      "Name, email, account and online identifiers, IP address, and push token. Wings does not currently ask for a phone number or postal address as account fields.",
    ],
    [
      "Customer-record information",
      "Yes",
      "Account, profile, coaching, fitness, health, subscription, and support information.",
    ],
    [
      "Protected characteristics",
      "Limited",
      "Age and gender when supplied during client onboarding. Wings does not request race, ethnicity, religion, marital status, or national origin.",
    ],
    [
      "Commercial information",
      "Yes",
      "Subscription plan, status, invoice, and transaction metadata. Full card details remain with Stripe.",
    ],
    ["Biometric information", "No", "Wings does not collect biometric templates."],
    [
      "Internet or network activity",
      "Yes",
      "App and website usage, screen and product events, diagnostics, and interactions with Wings.",
    ],
    [
      "Geolocation",
      "Limited",
      "Approximate country or region derived from IP or device analytics. Wings does not request precise GPS location.",
    ],
    [
      "Audio, visual, or similar information",
      "Yes",
      "Photos, videos, audio messages, and files users choose to upload or send.",
    ],
    [
      "Professional or employment information",
      "No",
      "Wings does not request employment history or professional qualifications as account fields.",
    ],
    ["Education information", "No", "Wings does not collect student records."],
    [
      "Inferences",
      "No",
      "Wings does not create sensitive-characteristic profiles or automated legal decisions from user data.",
    ],
    [
      "Sensitive personal information",
      "Yes",
      "Authentication data, private communications, health and fitness data, injuries, medical notes, and wearable information.",
    ],
  ] as const;

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025]">
      {categories.map(([category, collected, details]) => (
        <div
          key={category}
          className="grid gap-2 border-b border-white/[0.06] px-4 py-4 last:border-b-0 sm:grid-cols-[10rem_4rem_1fr] sm:gap-4"
        >
          <p className="font-semibold text-slate-300">{category}</p>
          <p
            className={
              collected === "No" ? "text-slate-500" : "text-emerald-300"
            }
          >
            {collected}
          </p>
          <p className="leading-6 text-slate-400">{details}</p>
        </div>
      ))}
    </div>
  );
}
