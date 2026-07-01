import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-emerald-400/20 bg-[#0a1422] px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative">
          <Image
            src="/wings-logo.png"
            alt="Wings"
            width={72}
            height={48}
            className="mx-auto h-auto object-contain"
          />
          <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-5xl">
            Ready to coach smarter?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Start managing your clients, workouts, nutrition, and progress from
            one place.
          </p>

          <Link
            href="/pricing"
            className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-7 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-300"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            {["14 days free", "Secure Stripe checkout", "Clients join free"].map(
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
      </div>
    </section>
  );
}
