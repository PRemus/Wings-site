"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    gradient: "from-blue-500 to-cyan-500",
    title: "Join the Waitlist",
    description:
      "Sign up with your email. Be among the first trainers and fitness enthusiasts to get early access when Wings launches.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    number: "02",
    gradient: "from-green-500 to-emerald-500",
    title: "Get Early Access",
    description:
      "We'll email you the moment Wings is ready. Early members get priority access, exclusive perks, and founder pricing.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    gradient: "from-yellow-500 to-amber-500",
    title: "Start Flying",
    description:
      "Set up your profile, invite your clients, assign workouts, and start coaching at a completely new level. It's that simple.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            Simple by design
          </div>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Up and running in{" "}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="text-lg text-slate-400">
            No complex setup. No learning curve. Just a clean onboarding that
            gets you coaching faster.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-12 left-[calc(50%+48px)] hidden h-0.5 w-[calc(100%-96px)] lg:block"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(16,185,129,0.5))",
                  }}
                />
              )}

              {/* Icon circle */}
              <div
                className={`relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} shadow-lg`}
              >
                <div className="text-white">{step.icon}</div>
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-30 blur-xl`}
                />
                {/* Step number badge */}
                <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#060B18] bg-slate-800 text-xs font-bold text-white">
                  {i + 1}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA after steps */}
        <div className="reveal mt-16 text-center">
          <a
            href="#waitlist"
            className="btn-gradient inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-xl"
          >
            Start your journey
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
