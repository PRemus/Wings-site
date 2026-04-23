import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Wings",
  description: "Terms and conditions for using the Wings fitness coaching platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      {/* Background orb */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute right-1/3 top-1/4 h-[600px] w-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)", filter: "blur(80px)" }}
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
            <h1 className="text-4xl font-extrabold tracking-tight text-white">Terms of Service</h1>
            <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>
          </div>
        </div>

        <div className="prose-legal">
          <Section title="Acceptance of Terms">
            <p>By downloading or using the Wings app or visiting wingsapp.fit you agree to be bound by these Terms of Service and our <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>. If you do not agree to these terms do not use Wings.</p>
          </Section>

          <Section title="Who Can Use Wings">
            <p>You must be at least 16 years old to create a Wings account. By ticking the age confirmation checkbox during registration you confirm you meet this requirement. Wings is intended for personal trainers and their clients for legitimate fitness coaching purposes.</p>
          </Section>

          <Section title="Account Responsibilities">
            <List items={[
              "You are responsible for keeping your login credentials secure and confidential",
              "You must provide accurate and truthful information when creating your account",
              "You are responsible for all activity that occurs under your account",
              "You must not share your account credentials with any other person",
              "Trainers must only invite clients they are actively coaching in a legitimate professional capacity",
              <>You must notify us immediately at <a href="mailto:wings.app@yahoo.com" className="text-cyan-400 hover:text-cyan-300">wings.app@yahoo.com</a> if you suspect unauthorised access to your account</>,
            ]} />
          </Section>

          <Section title="Acceptable Use">
            <p>You agree not to use Wings for any of the following:</p>
            <List items={[
              "Any illegal or fraudulent purpose",
              "Uploading content that is offensive, harmful, defamatory or violates the rights of others",
              "Attempting to access, view or modify another user's data",
              "Reverse engineering, decompiling or tampering with the app",
              "Harassing, abusing or threatening other users",
              "Uploading inappropriate content including nudity, graphic violence or explicit material",
              "Impersonating another person or entity",
            ]} />
          </Section>

          <Section title="Trainer Responsibilities">
            <p>Trainers using Wings are solely responsible for:</p>
            <List items={[
              "The quality, safety and appropriateness of the workout plans, meal plans and coaching advice they provide to clients",
              "Ensuring they hold appropriate qualifications for the coaching services they offer",
              "Obtaining any necessary consents from clients related to health data and coaching",
            ]} />
            <p>Wings is a software platform and does not itself provide fitness advice, medical advice or coaching services. We are not responsible for the content of any plans or advice created by trainers within the app.</p>
          </Section>

          <Section title="Health and Fitness Disclaimer">
            <p>Wings provides tools to support fitness tracking and trainer-client communication. Wings does not provide medical advice, diagnosis or treatment. Always consult a qualified healthcare professional before beginning any new fitness or nutrition programme. Users with pre-existing medical conditions should seek professional medical advice before following any plans created through Wings. Use the app and any plans within it at your own risk.</p>
          </Section>

          <Section title="Your Content">
            <List items={[
              "You retain full ownership of all content you upload to Wings including photos, messages, workout data and meal data",
              "By uploading content you grant POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ a limited, non-exclusive licence to store, process and display that content solely for the purpose of providing the Wings service to you",
              "This licence ends immediately when you delete your account or delete the specific content",
              "We do not claim ownership of your data",
            ]} />
          </Section>

          <Section title="Intellectual Property">
            <p>The Wings name, logo, app design, website and all associated original content are owned by POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ. You may not copy, reproduce, modify or distribute any part of Wings without prior written permission.</p>
          </Section>

          <Section title="Payments and Subscriptions">
            <p>Wings is currently available as a free beta. Paid subscription plans will be introduced in a future version of the app. Users will be notified in advance of any pricing changes. Additional payment terms will be provided when paid features are launched. Nothing in the current beta creates any obligation to pay.</p>
          </Section>

          <Section title="Service Availability">
            <p>We aim to keep Wings available at all times but cannot guarantee uninterrupted service. We may carry out maintenance, release updates or experience technical issues that temporarily affect availability. We are not liable for any inconvenience or losses caused by service interruptions.</p>
          </Section>

          <Section title="Account Termination">
            <List items={[
              "You may delete your account at any time via Settings → Account & Data → Delete my Account. All your data will be permanently and immediately deleted.",
              "We reserve the right to suspend or permanently terminate any account that violates these Terms of Service, without prior notice if necessary.",
              "Upon termination all licences granted to you under these terms cease immediately.",
            ]} />
          </Section>

          <Section title="Limitation of Liability">
            <p>To the fullest extent permitted by applicable Romanian and European Union law, POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ shall not be liable for any indirect, incidental, special or consequential damages arising from your use of or inability to use Wings. Our total aggregate liability for any claim arising out of or relating to these terms or your use of Wings shall not exceed the total amount you have paid us in the 12 months preceding the claim, or €0 during any free beta period.</p>
          </Section>

          <Section title="Indemnification">
            <p>You agree to indemnify and hold harmless POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ from any claims, damages, losses or expenses including legal fees arising from your use of Wings, your content, or your violation of these terms.</p>
          </Section>

          <Section title="Governing Law and Disputes">
            <p>These Terms of Service are governed by the laws of Romania. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of București, România. If you are an EU consumer you may also have rights under the laws of your country of residence.</p>
          </Section>

          <Section title="Changes to These Terms">
            <p>We may update these Terms of Service from time to time. If we make significant changes we will notify you by email before the changes take effect and give you the opportunity to review them. Continued use of Wings after being notified of significant changes and given a reasonable period to review them constitutes acceptance of the updated terms.</p>
          </Section>

          <Section title="Contact">
            <p>For any questions about these Terms of Service please contact us at <a href="mailto:wings.app@yahoo.com" className="text-cyan-400 hover:text-cyan-300">wings.app@yahoo.com</a>.</p>
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
