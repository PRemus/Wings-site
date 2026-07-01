import {
  Check,
  FileSpreadsheet,
  Files,
  MessageCircle,
  NotebookPen,
  X,
} from "lucide-react";
import RevealSection from "@/components/marketing/RevealSection";
import { SectionHeading } from "@/components/marketing/MarketingUI";

const scatteredTools = [
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Notes", icon: NotebookPen },
  { name: "PDFs", icon: Files },
  { name: "Google Drive", icon: Files },
];

const unifiedWorkflow = [
  "Every client profile and plan stays organized",
  "Workouts, nutrition, scheduling, and chat stay connected",
  "Progress is visible without chasing updates",
  "Clients get one consistent coaching experience",
];

export default function ProblemSolution() {
  return (
    <RevealSection
      id="problem"
      className="border-b border-white/5 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="One coaching workspace"
          title="Stop managing your clients across five different tools"
          description="A fragmented setup creates more admin for you and a confusing experience for every client. Wings brings the entire coaching relationship into one place."
        />

        <div className="mt-16 grid border-y border-white/10 lg:grid-cols-2">
          <div className="reveal py-10 lg:border-r lg:border-white/10 lg:pr-12">
            <p className="text-sm font-semibold text-rose-300">
              The scattered setup
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Context switching steals coaching time
            </h3>
            <div className="mt-8 space-y-4">
              {scatteredTools.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center justify-between border-b border-white/5 pb-4"
                >
                  <span className="flex items-center gap-3 text-slate-300">
                    <Icon className="h-5 w-5 text-slate-500" aria-hidden="true" />
                    {name}
                  </span>
                  <X className="h-4 w-4 text-rose-400" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="reveal py-10 lg:pl-12">
            <p className="text-sm font-semibold text-emerald-300">With Wings</p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              One source of truth for your coaching business
            </h3>
            <div className="mt-8 space-y-5">
              {unifiedWorkflow.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
