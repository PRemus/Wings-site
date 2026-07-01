import { ClipboardCheck, UserPlus, Users } from "lucide-react";
import RevealSection from "@/components/marketing/RevealSection";
import { SectionHeading } from "@/components/marketing/MarketingUI";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Create your trainer account",
    description:
      "Choose your plan, set up your coaching profile, and bring your workflow into Wings.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Invite your clients",
    description:
      "Connect each client to your workspace so their plans, messages, and progress stay together.",
  },
  {
    number: "03",
    icon: Users,
    title: "Start coaching",
    description:
      "Deliver workouts and nutrition, chat, schedule sessions, and review progress from one app.",
  },
];

export default function HowItWorks() {
  return (
    <RevealSection
      id="how-it-works"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="From account to active coaching in three steps"
          description="Wings is structured to help trainers get organized quickly without rebuilding the way they coach."
        />

        <ol className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <li
              key={number}
              className={`reveal relative px-0 lg:px-8 ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-cyan-300" aria-hidden="true" />
                <span className="text-4xl font-black text-white/[0.08]">
                  {number}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
