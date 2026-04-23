import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Wings",
  description: "How Wings collects, uses and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      {/* Background orb */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute left-1/3 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Logo */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <Link href="/">
            <Image
              src="/wings-logo.png"
              alt="Wings"
              width={64}
              height={43}
              className="object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.4)]"
            />
          </Link>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">Privacy Policy</h1>
            <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>
          </div>
        </div>

        <div className="prose-legal">
          <Section title="Who We Are">
            <p>Wings is a fitness coaching mobile application connecting personal trainers with their clients. It is operated by POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ, registered in Romania. As an EU-based operator we are subject to the General Data Protection Regulation (GDPR).</p>
          </Section>

          <Section title="What Data We Collect">
            <List items={[
              <><strong className="text-slate-300">Account data:</strong> full name, email address, password (stored encrypted)</>,
              <><strong className="text-slate-300">Profile data:</strong> profile photo, fitness goals</>,
              <><strong className="text-slate-300">Body data:</strong> weight, body measurements, measurement history</>,
              <><strong className="text-slate-300">Workout data:</strong> workout plans, exercise logs, sets, reps, weights, personal records</>,
              <><strong className="text-slate-300">Nutrition data:</strong> meal plans, meal logs, food photos, meal ratings and notes</>,
              <><strong className="text-slate-300">Progress data:</strong> progress photos (front, side, back), body measurement history</>,
              <><strong className="text-slate-300">Communication data:</strong> chat messages between trainer and client including text, images, videos and files</>,
              <><strong className="text-slate-300">Device data:</strong> device type and operating system, used only for app functionality</>,
              <><strong className="text-slate-300">Waitlist data:</strong> email address and signup details collected on wingsapp.fit for users who joined the waiting list</>,
            ]} />
          </Section>

          <Section title="How We Use Your Data">
            <List items={[
              "To provide the Wings coaching platform and all its features",
              "To allow trainers to create and manage workout and nutrition plans for clients",
              "To enable real-time communication between trainers and clients",
              "To track fitness progress over time",
              "To send transactional emails such as account confirmation and password reset",
              "To send launch updates and news to waitlist members who have explicitly consented",
              "We do not sell your personal data to any third party",
              "We do not use your data for advertising purposes",
            ]} />
          </Section>

          <Section title="Who We Share Data With">
            <p>We use the following third party services to operate Wings. Each processes data only to the extent necessary to provide their service:</p>
            <List items={[
              <><strong className="text-slate-300">Supabase</strong> (supabase.com) — database, authentication and file storage. Data is stored on servers located within the EU</>,
              <><strong className="text-slate-300">Resend</strong> (resend.com) — transactional email delivery</>,
              <><strong className="text-slate-300">Vercel</strong> (vercel.com) — website hosting for wingsapp.fit</>,
            ]} />
            <p>We do not share your personal data with any other third parties.</p>
          </Section>

          <Section title="Data Retention">
            <List items={[
              "All personal data, workout data, nutrition data, progress photos, chat messages and media are retained for as long as your account is active",
              "If you delete your account, all your personal data is permanently and immediately deleted from our systems with no recovery possible",
              "Waitlist emails are retained until you unsubscribe or request deletion",
            ]} />
          </Section>

          <Section title="Your GDPR Rights">
            <p>As a user based in the EU you have the following rights regarding your personal data:</p>
            <List items={[
              <><strong className="text-slate-300">Right of access</strong> — you can request a copy of the data we hold about you</>,
              <><strong className="text-slate-300">Right to rectification</strong> — you can correct inaccurate data</>,
              <><strong className="text-slate-300">Right to erasure</strong> — you can permanently delete all your data at any time directly in the app via Settings → Account &amp; Data → Delete my Account</>,
              <><strong className="text-slate-300">Right to restriction</strong> — you can request we limit how we process your data</>,
              <><strong className="text-slate-300">Right to object</strong> — you can object to certain types of processing</>,
              <><strong className="text-slate-300">Right to data portability</strong> — you can request your data in a portable format</>,
              <><strong className="text-slate-300">Right to withdraw consent</strong> — you can withdraw consent at any time without affecting the lawfulness of prior processing</>,
            ]} />
            <p>To exercise any of these rights please contact us at <a href="mailto:wings.app@yahoo.com" className="text-cyan-400 hover:text-cyan-300">wings.app@yahoo.com</a>. We will respond within 30 days.</p>
          </Section>

          <Section title="Cookies">
            <p>The Wings mobile app does not use cookies. The wingsapp.fit website uses only strictly necessary cookies required for the site to function. No tracking or advertising cookies are used.</p>
          </Section>

          <Section title="Age Requirement">
            <p>Wings is intended for users aged 16 and over. By creating an account you confirm that you are at least 16 years old by ticking the age confirmation checkbox during registration. We do not knowingly collect data from anyone under 16. If you believe a user under 16 has created an account please contact us at <a href="mailto:wings.app@yahoo.com" className="text-cyan-400 hover:text-cyan-300">wings.app@yahoo.com</a> and we will delete the account promptly.</p>
          </Section>

          <Section title="Data Security">
            <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss or destruction. All data is transmitted over encrypted connections (HTTPS). Passwords are stored using industry-standard encryption. However no method of transmission over the internet is 100% secure.</p>
          </Section>

          <Section title="Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. If we make significant changes that affect your rights or how we use your data, we will notify you by email before the changes take effect. Minor clarifications or corrections may be made without notification. The latest version will always be available at wingsapp.fit/privacy-policy.</p>
          </Section>

          <Section title="Contact and Complaints">
            <p>For any privacy-related questions or GDPR requests contact us at <a href="mailto:wings.app@yahoo.com" className="text-cyan-400 hover:text-cyan-300">wings.app@yahoo.com</a>. If you are not satisfied with our response you have the right to lodge a complaint with the Romanian data protection authority ANSPDCP at <a href="https://www.anspdcp.ro" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">anspdcp.ro</a>.</p>
          </Section>
        </div>

        {/* Legal entity — bottom */}
        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-400">
          <p className="font-semibold text-slate-300 mb-1">Legal entity</p>
          <p>POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ</p>
          <p>B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1, București, România</p>
          <p className="mt-1">
            <a href="mailto:wings.app@yahoo.com" className="text-cyan-400 hover:text-cyan-300">wings.app@yahoo.com</a>
            {" · "}
            <a href="https://wingsapp.fit" className="text-cyan-400 hover:text-cyan-300">wingsapp.fit</a>
          </p>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
            ← Back to wingsapp.fit
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-lg font-bold text-white border-l-2 border-cyan-500 pl-4">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-400 pl-4">{children}</div>
    </div>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
