import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Play } from "lucide-react";
import { VideoPlaceholder } from "@/components/marketing/MarketingUI";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5 px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/wings-logo.png"
              alt="Wings"
              width={76}
              height={51}
              className="h-auto object-contain drop-shadow-[0_0_28px_rgba(34,211,238,0.24)]"
              priority
            />
          </div>

          <p className="mb-5 text-sm font-semibold text-emerald-300">
            Coaching software for trainers who want one clear system
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl">
            The all-in-one coaching platform for personal trainers
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
            Create workout plans, build nutrition programs, schedule sessions,
            chat with clients, and track progress from one powerful app.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-300"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#demo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch Demo
            </a>
          </div>

        </div>

        <VideoPlaceholder
          hero
          title="Wings app preview"
          description="A short product film will be added here."
          className="mt-10 aspect-[16/9] min-h-[320px] rounded-lg shadow-2xl shadow-black/40 sm:aspect-[16/7]"
        />

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 sm:text-sm">
          {["14 days free", "Clients use Wings free", "Cancel anytime"].map(
            (item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check
                  className="h-3.5 w-3.5 text-emerald-400"
                  aria-hidden="true"
                />
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
