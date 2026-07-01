import { Check, Smartphone, UserRoundCog } from "lucide-react";
import RevealSection from "@/components/marketing/RevealSection";
import { SectionHeading } from "@/components/marketing/MarketingUI";

const trainerExperience = [
  "Build plans",
  "Assign sessions",
  "Track progress",
  "Manage nutrition",
  "Message clients",
  "Review client activity",
];

const clientExperience = [
  "Follow workouts",
  "Log meals",
  "View schedule",
  "Track body progress",
  "Upload progress photos",
  "Chat with trainer",
];

export default function ExperienceSection() {
  return (
    <RevealSection
      id="experience"
      className="border-y border-white/5 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Two connected experiences"
          title="Built for the trainer. Clear for the client."
          description="Trainers get the control they need to run a professional service. Clients get one simple place to follow the plan and stay accountable."
        />

        <div className="mt-16 grid border-y border-white/10 lg:grid-cols-2">
          <ExperienceColumn
            icon={UserRoundCog}
            eyebrow="Trainer workspace"
            title="Run every client relationship with clarity"
            items={trainerExperience}
          />
          <ExperienceColumn
            icon={Smartphone}
            eyebrow="Client app"
            title="Make the next action obvious"
            items={clientExperience}
            client
          />
        </div>
      </div>
    </RevealSection>
  );
}

function ExperienceColumn({
  icon: Icon,
  eyebrow,
  title,
  items,
  client = false,
}: {
  icon: typeof UserRoundCog;
  eyebrow: string;
  title: string;
  items: string[];
  client?: boolean;
}) {
  return (
    <article
      className={`reveal py-10 ${
        client ? "lg:border-l lg:border-white/10 lg:pl-12" : "lg:pr-12"
      }`}
    >
      <Icon
        className={`h-8 w-8 ${
          client ? "text-blue-300" : "text-emerald-300"
        }`}
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <p
        className={`mt-5 text-sm font-semibold ${
          client ? "text-blue-300" : "text-emerald-300"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="mt-3 max-w-md text-2xl font-bold text-white">{title}</h3>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
            <Check
              className={`h-4 w-4 shrink-0 ${
                client ? "text-blue-400" : "text-emerald-400"
              }`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
