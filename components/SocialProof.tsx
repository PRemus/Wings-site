"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Maria S.",
    role: "Personal Trainer · Bucharest",
    avatar: "#3B82F6",
    quote:
      "Finally, a platform that understands how trainers actually work. Can't wait to move my entire client base here.",
  },
  {
    name: "Alex R.",
    role: "Fitness Coach · Barcelona",
    avatar: "#10B981",
    quote:
      "I've been looking for something like Wings for years. WhatsApp is a nightmare for coaching. This is the future.",
  },
  {
    name: "Sophie K.",
    role: "Online Coach · London",
    avatar: "#EAB308",
    quote:
      "My clients will love having a proper app instead of getting workouts in a chat message. Game changer.",
  },
];

export default function SocialProof() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Launch badge */}
        <div className="reveal mb-16 flex flex-col items-center gap-4">
          <div className="relative inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-400" />
            </div>
            <span className="text-sm font-semibold text-blue-300">
              Launching soon — join the waitlist before we go live
            </span>
          </div>

          <div className="text-center">
            <h2 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Trainers already{" "}
              <span className="gradient-text">love Wings</span>
            </h2>
            <p className="text-lg text-slate-400">
              Here&apos;s what early members are saying.
            </p>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal gradient-border-card p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <svg
                    key={si}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mb-5 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: t.avatar }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist counter */}
        <div className="reveal mt-16 flex flex-col items-center gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Waitlist Progress
          </p>
          <div className="flex items-end gap-4">
            <span className="text-6xl font-black gradient-text">500+</span>
            <span className="mb-3 text-xl text-slate-400">
              trainers joined
            </span>
          </div>
          <div className="w-full max-w-md">
            <div className="mb-2 flex justify-between text-xs text-slate-500">
              <span>0</span>
              <span className="text-slate-300 font-medium">500 joined</span>
              <span>1,000</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: "50%",
                  background:
                    "linear-gradient(90deg, #3B82F6, #10B981, #EAB308)",
                }}
              />
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Goal: 1,000 waitlist members before launch
          </p>
        </div>
      </div>
    </section>
  );
}
