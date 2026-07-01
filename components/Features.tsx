import {
  CalendarDays,
  Camera,
  Copy,
  Dumbbell,
  HeartPulse,
  LineChart,
  MessageCircle,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import RevealSection from "@/components/marketing/RevealSection";
import { SectionHeading } from "@/components/marketing/MarketingUI";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "cyan" | "emerald" | "blue" | "amber";
};

const features: Feature[] = [
  {
    title: "Client Management",
    description:
      "See every client, their assigned plans, recent activity, and next action from one organized workspace.",
    icon: Users,
    accent: "cyan",
  },
  {
    title: "Workout Builder",
    description:
      "Build structured programs with exercises, sets, reps, rest, and coaching notes that clients can follow.",
    icon: Dumbbell,
    accent: "emerald",
  },
  {
    title: "Nutrition Planning",
    description:
      "Create clear nutrition programs and review meal activity without juggling PDFs, photos, and separate apps.",
    icon: Utensils,
    accent: "amber",
  },
  {
    title: "Schedule & Calendar",
    description:
      "Plan coaching sessions and keep upcoming appointments visible to both trainer and client.",
    icon: CalendarDays,
    accent: "blue",
  },
  {
    title: "In-app Chat",
    description:
      "Keep coaching conversations beside the client data they relate to, instead of buried in personal messaging.",
    icon: MessageCircle,
    accent: "cyan",
  },
  {
    title: "Progress Tracking",
    description:
      "Review logged workouts, body measurements, and performance trends so program changes are based on evidence.",
    icon: LineChart,
    accent: "emerald",
  },
  {
    title: "Progress Photos",
    description:
      "Give clients a private, organized place for visual check-ins that trainers can review over time.",
    icon: Camera,
    accent: "blue",
  },
  {
    title: "Templates",
    description:
      "Reuse proven workout and nutrition structures to program faster while keeping each client plan personal.",
    icon: Copy,
    accent: "amber",
  },
  {
    title: "Apple Health & Wearables",
    description:
      "Bring supported health and wearable data into the coaching context for a more complete view of client activity.",
    icon: HeartPulse,
    accent: "emerald",
  },
];

const accentClasses = {
  cyan: {
    icon: "text-cyan-300",
    line: "bg-cyan-400/35",
    wash: "bg-cyan-400/[0.06]",
  },
  emerald: {
    icon: "text-emerald-300",
    line: "bg-emerald-400/35",
    wash: "bg-emerald-400/[0.06]",
  },
  blue: {
    icon: "text-blue-300",
    line: "bg-blue-400/35",
    wash: "bg-blue-400/[0.06]",
  },
  amber: {
    icon: "text-amber-300",
    line: "bg-amber-400/35",
    wash: "bg-amber-400/[0.06]",
  },
};

export default function Features() {
  return (
    <RevealSection
      id="features"
      className="border-y border-white/5 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Core platform"
          title="Everything your coaching workflow needs"
          description="Each feature is connected to the same client record, giving you less admin and a clearer picture of every coaching relationship."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const accent = accentClasses[feature.accent];
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="reveal overflow-hidden rounded-lg border border-white/10 bg-[#0a1222] transition-colors hover:border-white/20"
                style={{ transitionDelay: `${(index % 3) * 70}ms` }}
              >
                <div
                  className={`relative flex aspect-[16/7] items-center justify-center border-b border-white/5 ${accent.wash}`}
                  aria-label={`${feature.title} media placeholder`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <Icon
                    className={`relative h-10 w-10 ${accent.icon}`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-5 right-5 flex gap-2">
                    <span className={`h-1 flex-1 ${accent.line}`} />
                    <span className="h-1 w-1/4 bg-white/10" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
