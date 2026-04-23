import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(16,185,129,0.06) 50%, rgba(234,179,8,0.08) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-none"
        style={{
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/wings-logo.png"
            alt="Wings"
            width={80}
            height={54}
            className="object-contain opacity-90 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          />
        </div>

        <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Ready to{" "}
          <span className="gradient-text">fly?</span>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
          Join the waitlist today. Be among the first to experience the future
          of personal training — for trainers who want to coach, not manage
          chaos.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 rounded-xl px-10 py-4 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #0891b2, #10B981)" }}
          >
            Join the waitlist
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          Free early access · No credit card · Cancel anytime
        </p>

        {/* Features recap */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "Workout delivery",
            "Progress tracking",
            "Client chat",
            "Photo check-ins",
            "Client dashboard",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400"
            >
              <svg
                className="h-3.5 w-3.5 text-green-400"
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
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
