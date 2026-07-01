import {
  CalendarDays,
  Dumbbell,
  LayoutDashboard,
  LineChart,
  MessageCircle,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import RevealSection from "@/components/marketing/RevealSection";
import { SectionHeading } from "@/components/marketing/MarketingUI";

const previews = [
  { label: "Dashboard", icon: LayoutDashboard, accent: "bg-cyan-400" },
  { label: "Workout plan", icon: Dumbbell, accent: "bg-emerald-400" },
  { label: "Nutrition plan", icon: Utensils, accent: "bg-amber-400" },
  { label: "Chat", icon: MessageCircle, accent: "bg-blue-400" },
  { label: "Progress tracking", icon: LineChart, accent: "bg-lime-400" },
];

export default function AppPreviewSection() {
  return (
    <RevealSection
      id="app-preview"
      className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Inside the app"
          title="One consistent experience across every coaching task"
          description="These preview slots are ready for the final Wings screenshots when the production captures are available."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {previews.map((preview, index) => (
            <PhonePreview
              key={preview.label}
              {...preview}
              index={index}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function PhonePreview({
  label,
  icon: Icon,
  accent,
  index,
}: {
  label: string;
  icon: LucideIcon;
  accent: string;
  index: number;
}) {
  return (
    <figure
      className="reveal min-w-0"
      style={{ transitionDelay: `${(index % 5) * 60}ms` }}
    >
      <div className="relative mx-auto aspect-[9/18.5] w-full max-w-[220px] overflow-hidden rounded-[28px] border border-white/15 bg-[#070d18] p-2 shadow-xl shadow-black/30">
        <div className="relative h-full overflow-hidden rounded-[21px] border border-white/5 bg-[#0c1526] px-3 pb-4 pt-7">
          <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/10" />
          <div className="flex items-center justify-between">
            <div className={`h-2 w-12 ${accent} opacity-70`} />
            <CalendarDays className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
          </div>

          <div className="mt-6 flex h-20 items-center justify-center border border-white/5 bg-white/[0.025]">
            <Icon className="h-7 w-7 text-slate-300" strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-2 w-2/3 bg-white/10" />
            <div className="h-12 border border-white/5 bg-white/[0.025]" />
            <div className="h-12 border border-white/5 bg-white/[0.025]" />
            <div className="h-8 border border-white/5 bg-white/[0.025]" />
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm font-semibold text-slate-300">
        {label}
      </figcaption>
    </figure>
  );
}
