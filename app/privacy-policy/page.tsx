import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";

const title = "Privacy Policy | Wings";
const description =
  "Read the Wings Privacy Policy to learn how Wings collects, uses, shares, stores, and protects personal information.";

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
  "What Legal Bases Do We Rely On to Process Your Personal Information?",
  "When and With Whom Do We Share Your Personal Information?",
  "Do We Use Cookies and Other Tracking Technologies?",
  "Is Your Information Transferred Internationally?",
  "How Long Do We Keep Your Information?",
  "How Do We Keep Your Information Safe?",
  "Do We Collect Information From Minors?",
  "What Are Your Privacy Rights?",
  "Controls for Do-Not-Track Features",
  "Do United States Residents Have Specific Privacy Rights?",
  "Do We Make Updates to This Notice?",
  "How Can You Contact Us About This Notice?",
  "How Can You Review, Update, or Delete the Data We Collect From You?",
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
                Last updated: August 11, 2026
              </p>
            </div>
          </header>

          <div className="prose-legal">
            <section className="mb-10 space-y-4 text-sm leading-7 text-slate-400">
              <p>
                This Privacy Notice for POENAR REMUS PERSOANA FIZICA
                AUTORIZATA, doing business as Wings (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), describes how and why we
                might access, collect, store, use, and/or share
                (&quot;process&quot;) your personal information when you use our
                services (&quot;Services&quot;), including when you:
              </p>
              <BulletList
                items={[
                  "download and use our mobile application, Wings - Fly To Your Goals, or any other application of ours that links to this Privacy Notice;",
                  "use Wings, a fitness coaching platform that connects personal trainers with their clients; or",
                  "engage with us in other related ways, including any marketing or events.",
                ]}
              />
              <p>
                Wings allows trainers to create and manage personalized workout
                programs, nutrition plans, schedules, client progress, and paid
                coaching packages. Clients can follow their plans, log meals and
                workouts, communicate with their coach through in-app messaging,
                upload progress photos, track their fitness journey, and
                securely purchase coaching packages through the app. Wings also
                offers subscription-based premium features for trainers, secure
                in-app payment processing, and optional integrations with health
                and fitness services.
              </p>
              <p>
                Questions or concerns? Reading this Privacy Notice will help
                you understand your privacy rights and choices. We are
                responsible for making decisions about how your personal
                information is processed. If you do not agree with our policies
                and practices, please do not use our Services. If you still have
                any questions or concerns, please contact us at{" "}
                <EmailLink email="wings.app@yahoo.com" />.
              </p>
            </section>

            <PolicySection id="summary" title="Summary of Key Points">
              <KeyPoint question="What personal information do we process?">
                When you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with us and
                the Services, the choices you make, and the products and
                features you use.
              </KeyPoint>
              <KeyPoint question="Do we process any sensitive personal information?">
                Some of the information may be considered &quot;special&quot;
                or &quot;sensitive&quot; in certain jurisdictions, for example
                your racial or ethnic origins, sexual orientation, and religious
                beliefs. We may process sensitive personal information when
                necessary with your consent or as otherwise permitted by
                applicable law.
              </KeyPoint>
              <KeyPoint question="Do we collect any information from third parties?">
                We collect personal information directly from users when they
                create an account or use our Services. We may also receive
                purchase or subscription status information from payment and
                entitlement providers such as Apple, RevenueCat, and Stripe
                where necessary to provide subscription or payment-related
                features.
              </KeyPoint>
              <KeyPoint question="How do we process your information?">
                We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so.
              </KeyPoint>
              <KeyPoint question="In what situations and with which parties do we share personal information?">
                We may share information in specific situations and with
                specific third parties.
              </KeyPoint>
              <KeyPoint question="How do we keep your information safe?">
                We have adequate organizational and technical processes and
                procedures in place to protect your personal information.
                However, no electronic transmission over the internet or
                information storage technology can be guaranteed to be 100%
                secure.
              </KeyPoint>
              <KeyPoint question="What are your rights?">
                Depending on where you are located geographically, the
                applicable privacy law may mean you have certain rights
                regarding your personal information.
              </KeyPoint>
              <KeyPoint question="How do you exercise your rights?">
                The easiest way to exercise your rights is by submitting a data
                subject access request, or by contacting us. We will consider
                and act upon any request in accordance with applicable data
                protection laws.
              </KeyPoint>
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
              <Subheading>Personal information you disclose to us</Subheading>
              <p>
                <strong className="text-slate-300">In Short:</strong> We
                collect personal information that you provide to us.
              </p>
              <p>
                We collect personal information that you voluntarily provide to
                us when you register on the Services, express an interest in
                obtaining information about us or our products and Services,
                when you participate in activities on the Services, or otherwise
                when you contact us.
              </p>
              <p>
                The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal
                information we collect may include:
              </p>
              <BulletList
                items={[
                  "names",
                  "phone numbers",
                  "email addresses",
                  "usernames",
                  "passwords",
                  "contact or authentication data",
                  "profile photos",
                  "progress photos",
                  "body measurements, including height, weight, and body measurements",
                  "workout and nutrition data",
                  "messages and files shared through in-app chat",
                  "health and fitness information",
                  "age",
                  "payment transaction information",
                  "purchase, subscription, and package history",
                  "product or subscription identifiers",
                ]}
              />

              <Subheading>Sensitive information</Subheading>
              <p>
                When necessary, with your consent or as otherwise permitted by
                applicable law, we process health data.
              </p>

              <Subheading>Payment data</Subheading>
              <p>
                iOS In-App Purchase payments for Wings trainer subscriptions
                are processed by Apple. Wings does not collect or store
                users&apos; full payment card details for Apple In-App
                Purchases. Apple may provide subscription or purchase status
                information necessary for entitlement management.
              </p>
              <p>
                RevenueCat is used to manage and verify subscription
                entitlements and subscription status. RevenueCat may process
                subscription or purchase-related information necessary to
                determine access, including the Wings user identifier used to
                associate a subscription with the authenticated account.
                RevenueCat does not process users&apos; full card details and is
                not the merchant or payment processor.
              </p>
              <p>
                Stripe and Stripe Connect continue to process applicable
                Android or web trainer subscription payments and
                client-to-trainer coaching package payments where used. See{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Stripe&apos;s Privacy Policy
                </a>
                . Wings stores only payment or purchase information necessary
                to provide the Services, such as transaction status, purchased
                package, product or subscription identifier, subscription
                status, and payment identifiers.
              </p>

              <Subheading>Application data</Subheading>
              <p>
                If you use our application, we also may collect the following
                information if you choose to provide us with access or
                permission:
              </p>
              <BulletList
                items={[
                  "Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.",
                  "Mobile Device Data. We automatically collect device information such as your mobile device ID, model, manufacturer, operating system, version information, system configuration information, device and application identification numbers, browser type and version, hardware model, internet service provider and/or mobile carrier, and IP address or proxy server.",
                  "Push Notifications. We may request to send you push notifications regarding your account or certain features of the application. If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.",
                ]}
              />
              <p>
                This information is primarily needed to maintain the security
                and operation of our applications, for troubleshooting, and for
                our internal analytics and reporting purposes. All personal
                information that you provide to us must be true, complete, and
                accurate, and you must notify us of any changes to such personal
                information.
              </p>

              <Subheading>Information automatically collected</Subheading>
              <p>
                <strong className="text-slate-300">In Short:</strong> Some
                information, such as your Internet Protocol (IP) address and/or
                browser and device characteristics, is collected automatically
                when you visit our Services.
              </p>
              <p>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity, like your name or contact information,
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </p>
              <p>
                Like many businesses, we also collect information through
                cookies and similar technologies. You can find out more in our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Cookie Notice
                </Link>
                .
              </p>
              <p>The information we collect includes:</p>
              <BulletList
                items={[
                  "Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files.",
                  "Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services.",
                  "Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services.",
                ]}
              />

              <Subheading>Information collected from other sources</Subheading>
              <p>
                <strong className="text-slate-300">In Short:</strong> We may
                collect limited data from public databases, marketing partners,
                and other outside sources.
              </p>
              <p>
                In order to enhance our ability to provide relevant marketing,
                offers, and services to you and update our records, we may
                obtain information about you from other sources, such as public
                databases, joint marketing partners, affiliate programs, data
                providers, and other third parties. This information includes
                mailing addresses, job titles, email addresses, phone numbers,
                intent data or user behavior data, Internet Protocol (IP)
                addresses, social media profiles, social media URLs, and custom
                profiles, for purposes of targeted advertising and event
                promotion.
              </p>
            </PolicySection>

            <PolicySection
              id="section-2"
              number="2"
              title="How Do We Process Your Information?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We
                process your information to provide, improve, and administer our
                Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent.
              </p>
              <p>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>
              <BulletList
                items={[
                  "to facilitate account creation and authentication and otherwise manage user accounts;",
                  "to deliver and facilitate delivery of services to the user;",
                  "to respond to user inquiries and offer support to users;",
                  "to send administrative information to you;",
                  "to fulfill and manage your orders, payments, returns, and exchanges made through the Services;",
                  "to enable user-to-user communications;",
                  "to request feedback;",
                  "to protect our Services, including fraud monitoring and prevention;",
                  "to identify usage trends;",
                  "to save or protect an individual's vital interest;",
                  "to create and manage personalized workout plans;",
                  "to create and manage personalized nutrition plans;",
                  "to track fitness progress, including body measurements, workout history, progress photos, and achievements;",
                  "to sync health data from Apple Health when the user has granted permission;",
                  "to manage trainer-client relationships;",
                  "to process applicable payments and manage coaching package purchases;",
                  "to manage and verify trainer subscription entitlements and subscription status;",
                  "to manage connected payment accounts, including Stripe accounts, payouts, and payment-related features.",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="section-3"
              number="3"
              title="What Legal Bases Do We Rely On to Process Your Information?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We only
                process your personal information when we believe it is
                necessary and we have a valid legal reason to do so under
                applicable law, like with your consent, to comply with laws, to
                provide you with services to enter into or fulfill our
                contractual obligations, to protect your rights, or to fulfill
                our legitimate business interests.
              </p>
              <p>
                If you are located in the EU or UK, this section applies to
                you. The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on. As such,
                we may rely on:
              </p>
              <BulletList
                items={[
                  "Consent",
                  "Performance of a Contract",
                  "Legitimate Interests, such as analyzing usage, diagnosing problems, preventing fraud, and understanding user experience",
                  "Legal Obligations",
                  "Vital Interests",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="section-4"
              number="4"
              title="When and With Whom Do We Share Your Personal Information?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We may
                share information in specific situations described in this
                section and/or with the following third parties.
              </p>
              <ProviderList />
              <p>We also may need to share your personal information in these situations:</p>
              <BulletList
                items={[
                  "Business Transfers, such as mergers, sale of company assets, financing, or acquisition;",
                  "Other Users, including public areas of the Services.",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="section-5"
              number="5"
              title="Do We Use Cookies and Other Tracking Technologies?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We may
                use cookies and other tracking technologies to collect and store
                your information.
              </p>
              <p>
                We may use cookies and similar tracking technologies, like web
                beacons and pixels. We also permit third parties and service
                providers to use online tracking technologies for analytics and
                advertising. To the extent these are deemed a
                &quot;sale&quot; or &quot;sharing&quot; under applicable US
                state laws, you can opt out as described in section 12. See our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Cookie Notice
                </Link>
                .
              </p>
              <p>
                Google Analytics: We may share your information with Google
                Analytics. To opt out, visit{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection
              id="section-6"
              number="6"
              title="Is Your Information Transferred Internationally?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We may
                transfer, store, and process your information in countries other
                than your own.
              </p>
              <p>
                Our servers are located in Germany. Your information may be
                transferred to and processed in facilities of third parties,
                including facilities in the United States and other countries.
                We have implemented measures such as the European
                Commission&apos;s Standard Contractual Clauses to protect your
                personal information for international transfers.
              </p>
            </PolicySection>

            <PolicySection
              id="section-7"
              number="7"
              title="How Long Do We Keep Your Information?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We keep
                your information for as long as necessary to fulfill the
                purposes outlined in this Privacy Notice unless otherwise
                required by law.
              </p>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will delete or anonymize it, or
                securely store and isolate it until deletion is possible.
              </p>
            </PolicySection>

            <PolicySection
              id="section-8"
              number="8"
              title="How Do We Keep Your Information Safe?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We aim to
                protect your personal information through a system of
                organizational and technical security measures.
              </p>
              <p>
                Despite our safeguards, no electronic transmission or storage
                technology can be guaranteed 100% secure. Transmission of
                personal information is at your own risk.
              </p>
            </PolicySection>

            <PolicySection
              id="section-9"
              number="9"
              title="Do We Collect Information From Minors?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> We do not
                knowingly collect data from or market to children under 16 years
                of age.
              </p>
              <p>
                By using the Services, you represent that you are at least 16
                or are the parent or guardian of such a minor. If we learn
                personal information from users under 16 has been collected, we
                will deactivate the account and delete such data. Contact{" "}
                <EmailLink email="wings.app@yahoo.com" />.
              </p>
            </PolicySection>

            <PolicySection
              id="section-10"
              number="10"
              title="What Are Your Privacy Rights?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> Depending
                on your state of residence in the US or region, including the
                EEA, UK, and Switzerland, you have rights over your personal
                information. You may review, change, or terminate your account
                at any time.
              </p>
              <p>
                Rights in the EEA, UK, and Switzerland may include access or
                copy, rectification or erasure, restriction of processing, data
                portability, and objection to automated decision-making. Contact{" "}
                <EmailLink email="wings.app@yahoo.com" />.
              </p>
              <p>
                Complaints in the UK are acknowledged within 30 days,
                investigated without delay, and you will be kept informed of
                progress. If you are unhappy with our final response, you may
                refer the matter to the Information Commissioner&apos;s Office
                at{" "}
                <a
                  href="https://ico.org.uk/make-a-complaint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  ico.org.uk/make-a-complaint
                </a>
                , Helpline 0303 123 1113, Wycliffe House, Water Lane, Wilmslow,
                Cheshire, SK9 5AF.
              </p>
              <p>
                You can withdraw consent at any time by contacting us. This does
                not affect prior lawful processing.
              </p>
              <p>
                You can log in to account settings to update information, or
                contact us. Upon termination request, we deactivate or delete
                your account, but may retain some information for fraud
                prevention, troubleshooting, investigations, or legal
                compliance.
              </p>
              <p>
                Most browsers accept cookies by default. You can set your
                browser to remove or reject cookies, which may affect certain
                features. See our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Cookie Notice
                </Link>
                .
              </p>
            </PolicySection>

            <PolicySection
              id="section-11"
              number="11"
              title="Controls for Do-Not-Track Features"
            >
              <p>
                We do not currently respond to DNT browser signals, as there is
                no uniform technology standard for recognizing them yet.
              </p>
            </PolicySection>

            <PolicySection
              id="section-12"
              number="12"
              title="Do United States Residents Have Specific Privacy Rights?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> If you
                are a resident of California, Colorado, Connecticut, Delaware,
                Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana,
                Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island,
                Tennessee, Texas, Utah, or Virginia, you may have the right to
                request access to and receive details about the personal
                information we maintain about you and how we have processed it,
                correct inaccuracies, get a copy of, or delete your personal
                information.
              </p>
              <Subheading>
                Categories of Personal Information Collected in the Past 12
                Months
              </Subheading>
              <DataCategoryTable />
              <p>
                Categories A, B, C, D, F, G, H, and L are retained as long as
                the user has an account with us.
              </p>
              <p>
                We may disclose personal information to service providers under
                written contract. We have not sold or shared personal
                information for a business or commercial purpose in the
                preceding 12 months, but have disclosed categories A, B, C, D,
                F, G, H, and L to third parties for business or commercial
                purposes.
              </p>
              <p>
                Your rights under US state laws may include the right to know,
                access, correct, delete, obtain a copy, non-discrimination, opt
                out of targeted advertising, sale, or profiling, and depending
                on your state, access categories of data processed, obtain lists
                of third-party categories or specific third parties data was
                disclosed or sold to, review or correct profiling, limit use of
                sensitive data, and opt out of biometric or facial recognition
                data collection.
              </p>
              <p>
                To exercise your rights, contact{" "}
                <EmailLink email="wings.app@yahoo.com" />, use in-app support
                or bug reporting, or submit a data subject access request.
                Authorized agents may submit requests with proof of
                authorization. Identity verification will be required. Appeals
                for denied requests can be sent to{" "}
                <EmailLink email="wings.app@yahoo.com" />. If denied, you may
                complain to your state attorney general.
              </p>
              <p>
                California residents may request, once a year and free of
                charge, information about categories of personal information
                disclosed to third parties for direct marketing purposes.
              </p>
            </PolicySection>

            <PolicySection
              id="section-13"
              number="13"
              title="Do We Make Updates to This Notice?"
            >
              <p>
                <strong className="text-slate-300">In Short:</strong> Yes, we
                will update this notice as necessary to stay compliant with
                relevant laws. The updated version will be indicated by the
                revised date. Material changes will be notified via prominent
                notice or direct notification.
              </p>
            </PolicySection>

            <PolicySection
              id="section-14"
              number="14"
              title="How Can You Contact Us About This Notice?"
            >
              <p>
                Email: <EmailLink email="wings.app@yahoo.com" />
              </p>
              <p>Post:</p>
              <address className="not-italic text-slate-300">
                POENAR REMUS PERSOANA FIZICA AUTORIZATA
                <br />
                B-dul Bucurestii Noi, 136, et. Parter, ap. 5, Sector 1
                <br />
                Bucuresti, Bucuresti 012366
                <br />
                Romania
              </address>
            </PolicySection>

            <PolicySection
              id="section-15"
              number="15"
              title="How Can You Review, Update, or Delete the Data We Collect From You?"
            >
              <p>
                You may have the right to request access to the personal
                information we collect, details on processing, correct
                inaccuracies, or delete personal information, and withdraw
                consent. To request review, update, or deletion, please fill out
                and submit a data subject access request or contact{" "}
                <EmailLink email="wings.app@yahoo.com" />.
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
  children: ReactNode;
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

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-2 text-sm font-semibold uppercase text-slate-300">
      {children}
    </h3>
  );
}

function KeyPoint({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <p>
      <strong className="text-slate-300">{question}</strong> {children}
    </p>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
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

function ProviderList() {
  const providers = [
    ["iOS In-App Purchase payment processing", "Apple App Store"],
    ["Subscription entitlement and status management", "RevenueCat"],
    ["Android and web trainer subscription payment processing", "Stripe"],
    ["Client-to-trainer coaching package payments", "Stripe Connect"],
    ["Web and Mobile Analytics", "Google Analytics for Firebase"],
    ["Website Performance Monitoring", "Firebase Crash Reporting"],
    ["Backend, database, authentication and file storage", "Supabase"],
    ["Push notifications", "Expo Push Notifications"],
    ["Push notification delivery", "Firebase Cloud Messaging"],
    ["Push notification delivery", "Apple Push Notification service (APNs)"],
    ["Food database", "USDA FoodData Central"],
    ["Food database", "Open Food Facts"],
    ["Support email delivery", "Resend"],
    ["Website hosting and content delivery", "Vercel"],
    ["Translation services", "DeepL"],
    ["Health data synchronization", "Apple HealthKit"],
  ] as const;

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025]">
      {providers.map(([purpose, provider], index) => (
        <div
          key={`${purpose}-${provider}-${index}`}
          className="grid gap-1 border-b border-white/[0.06] px-4 py-4 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:gap-5"
        >
          <p className="font-semibold text-slate-300">{purpose}</p>
          <p className="leading-6 text-slate-400">{provider}</p>
        </div>
      ))}
    </div>
  );
}

function DataCategoryTable() {
  const categories = [
    ["A. Identifiers", "YES"],
    ["B. Personal information under California Customer Records statute", "YES"],
    ["C. Protected classification characteristics", "YES"],
    ["D. Commercial information", "YES"],
    ["E. Biometric information", "NO"],
    ["F. Internet or similar network activity", "YES"],
    ["G. Geolocation data", "YES"],
    ["H. Audio, electronic, sensory, or similar information", "YES"],
    ["I. Professional or employment-related information", "NO"],
    ["J. Education Information", "NO"],
    ["K. Inferences drawn from collected personal information", "NO"],
    [
      "L. Sensitive personal Information, including account login, message contents, and health data",
      "YES",
    ],
  ] as const;

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025]">
      {categories.map(([category, collected]) => (
        <div
          key={category}
          className="grid gap-2 border-b border-white/[0.06] px-4 py-4 last:border-b-0 sm:grid-cols-[1fr_5rem] sm:gap-4"
        >
          <p className="font-semibold text-slate-300">{category}</p>
          <p
            className={
              collected === "NO" ? "text-slate-500" : "text-emerald-300"
            }
          >
            {collected}
          </p>
        </div>
      ))}
    </div>
  );
}
