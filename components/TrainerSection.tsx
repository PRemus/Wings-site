"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const before = [
  "Sending workouts via WhatsApp messages",
  "Tracking client progress in Excel sheets",
  "Photos scattered across different apps",
  "Forgetting which client is on which program",
  "Looking unprofessional with no dedicated system",
  "Spending hours on admin instead of coaching",
];

const after = [
  "Assign workouts in the app in seconds",
  "Automatic progress tracking with visual charts",
  "Organized photo gallery per client",
  "Full client dashboard with history",
  "Premium branded coaching experience",
  "Spend 5+ hours less per week on admin",
];

export default function TrainerSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="trainers"
      ref={sectionRef}
      className="relative px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-300">
            Built for trainers
          </div>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Stop the chaos.{" "}
            <span className="gradient-text">Start coaching.</span>
          </h2>
          <p className="text-lg text-slate-400">
            You became a trainer to change lives — not to manage spreadsheets.
            Wings handles the admin so you can focus on what matters.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <div className="reveal gradient-border-card p-8" style={{ transitionDelay: "100ms" }}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <svg
                  className="h-5 w-5 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white">Before Wings</h3>
                <p className="text-xs text-slate-500">The messy reality</p>
              </div>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <svg
                      className="h-3 w-3 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="reveal relative overflow-hidden rounded-2xl p-8"
            style={{ transitionDelay: "200ms" }}
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(16,185,129,0.12) 50%, rgba(234,179,8,0.12) 100%)",
                border: "1px solid rgba(16,185,129,0.3)",
              }}
            />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">With Wings</h3>
                  <p className="text-xs text-green-400">The premium way</p>
                </div>
              </div>
              <ul className="space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                      <svg
                        className="h-3 w-3 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { value: "5+", label: "Hours saved per week" },
            { value: "3×", label: "Better client retention" },
            { value: "100%", label: "Communication in one place" },
            { value: "∞", label: "Clients you can manage" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="gradient-border-card p-5 text-center"
            >
              <p className="mb-1 text-3xl font-extrabold gradient-text">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
