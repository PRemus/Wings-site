import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      {/* Background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="animate-orb-1 absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="animate-orb-2 absolute right-1/4 bottom-1/3 h-[500px] w-[500px] translate-x-1/2 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #10B981 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #EAB308 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-24">
        {/* Left — copy */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            Coming soon — join the waitlist
          </div>

          {/* Logo */}
          <div className="mb-6 animate-float">
            <Image
              src="/wings-logo.svg"
              alt="Wings"
              width={120}
              height={80}
              className="object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Train smarter.
            <br />
            <span className="gradient-text">Coach better.</span>
            <br />
            Fly higher.
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            Wings is the premium platform that connects personal trainers with
            their clients — replacing WhatsApp chaos, scattered spreadsheets,
            and random apps with{" "}
            <span className="font-semibold text-slate-200">
              one clean, powerful coaching system.
            </span>
          </p>

          {/* Waitlist form */}
          <div id="waitlist" className="w-full">
            <WaitlistForm variant="hero" />
            <p className="mt-3 text-xs text-slate-500">
              Free early access · No credit card required · Cancel anytime
            </p>
          </div>

          {/* Social numbers */}
          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#3B82F6", "#10B981", "#EAB308", "#EC4899"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-[#060B18]"
                      style={{ background: color }}
                    />
                  )
                )}
              </div>
              <span>
                <strong className="text-white">500+</strong> trainers waiting
              </span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3.5 w-3.5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span>5.0 anticipated</span>
            </div>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="relative flex shrink-0 items-center justify-center lg:flex-1">
          <PhoneMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-slate-600">scroll</span>
          <svg
            className="h-4 w-4 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-[40px] opacity-40 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, #3B82F6, #10B981, #EAB308)",
        }}
      />

      {/* Phone shell */}
      <div className="relative animate-float h-[520px] w-[260px] rounded-[40px] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-black/60">
        {/* Screen bezel */}
        <div className="absolute inset-[6px] overflow-hidden rounded-[34px] bg-[#060B18]">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-10 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

          {/* App UI */}
          <div className="flex h-full flex-col">
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-8 pb-2">
              <span className="text-[10px] font-semibold text-slate-400">9:41</span>
              <div className="flex gap-1">
                <div className="h-2 w-3 rounded-sm bg-green-400" />
                <div className="h-2 w-1 rounded-sm bg-green-400" />
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 pb-4">
              <div>
                <p className="text-[10px] text-slate-500">Good morning,</p>
                <p className="text-sm font-bold text-white">Alex 👋</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-green-400" />
            </div>

            {/* Today's workout */}
            <div className="mx-3 mb-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-green-600/20 border border-blue-500/20 p-3">
              <p className="text-[9px] text-blue-400 font-medium mb-1">TODAY&apos;S WORKOUT</p>
              <p className="text-xs font-bold text-white">Upper Body Strength</p>
              <p className="text-[9px] text-slate-400 mt-0.5">6 exercises · 45 min</p>
              <div className="mt-2 flex gap-1">
                <div className="h-1 flex-1 rounded-full bg-blue-500" />
                <div className="h-1 flex-1 rounded-full bg-green-500" />
                <div className="h-1 flex-1 rounded-full bg-white/10" />
                <div className="h-1 flex-1 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Exercise list */}
            <div className="mx-3 space-y-1.5 flex-1">
              {[
                { name: "Bench Press", sets: "4×8", done: true },
                { name: "Pull-Ups", sets: "3×10", done: true },
                { name: "Shoulder Press", sets: "3×12", done: false },
                { name: "Bicep Curls", sets: "3×15", done: false },
              ].map((ex) => (
                <div
                  key={ex.name}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 ${
                    ex.done ? "bg-green-500/10 border border-green-500/20" : "bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        ex.done ? "bg-green-400" : "border border-white/20"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-medium ${
                        ex.done ? "text-green-300" : "text-slate-300"
                      }`}
                    >
                      {ex.name}
                    </span>
                  </div>
                  <span className="text-[8px] text-slate-500">{ex.sets}</span>
                </div>
              ))}
            </div>

            {/* Chat preview */}
            <div className="mx-3 mb-3 mt-2 rounded-2xl bg-white/5 p-2.5">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500" />
                <span className="text-[9px] font-semibold text-slate-300">Coach Maria</span>
              </div>
              <p className="text-[8px] text-slate-400">Great session today! Keep it up 💪</p>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/20" />
      </div>

      {/* Floating stat cards */}
      <div className="absolute -right-16 top-16 animate-float" style={{ animationDelay: "1s" }}>
        <div className="glass rounded-2xl px-3 py-2 shadow-xl">
          <p className="text-[9px] text-slate-400">Progress</p>
          <p className="text-sm font-bold text-white">+12%</p>
          <div className="mt-1 flex gap-0.5">
            {[40, 55, 45, 70, 60, 85, 80].map((h, i) => (
              <div
                key={i}
                className="w-1.5 rounded-sm"
                style={{
                  height: `${h * 0.3}px`,
                  background: `linear-gradient(180deg, #10B981, #3B82F6)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -left-14 bottom-24 animate-float" style={{ animationDelay: "2s" }}>
        <div className="glass rounded-2xl px-3 py-2 shadow-xl">
          <p className="text-[9px] text-slate-400">Streak</p>
          <p className="text-sm font-bold gradient-text">14 days 🔥</p>
        </div>
      </div>
    </div>
  );
}
