import type { ReactNode } from "react";
import { Play } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`reveal max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="mb-4 text-sm font-semibold text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function VideoPlaceholder({
  title,
  description,
  className = "",
  hero = false,
}: {
  title: string;
  description: string;
  className?: string;
  hero?: boolean;
}) {
  return (
    // Replace this element with a <video> while preserving the outer aspect ratio.
    <div
      data-video-slot={title}
      className={`group relative isolate overflow-hidden border border-white/10 bg-[#08101f] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: hero ? "48px 48px" : "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cyan-500/[0.09] to-transparent"
      />

      {hero && <CinematicAppPreview />}

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-[0_0_40px_rgba(52,211,153,0.25)] transition-transform duration-300 group-hover:scale-105">
          <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
        </span>
        <p className="mt-5 text-sm font-semibold text-white sm:text-base">
          {title}
        </p>
        <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

function CinematicAppPreview() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute -left-8 bottom-[-18%] h-[78%] w-[34%] rotate-[-6deg] border border-white/10 bg-slate-950/80 p-4 opacity-60 sm:left-[4%]">
        <div className="h-2 w-1/2 bg-cyan-400/30" />
        <div className="mt-5 space-y-3">
          <div className="h-10 border border-white/10 bg-white/[0.03]" />
          <div className="h-20 border border-white/10 bg-white/[0.03]" />
          <div className="h-14 border border-white/10 bg-white/[0.03]" />
        </div>
      </div>
      <div className="absolute bottom-[-10%] left-1/2 h-[88%] w-[30%] -translate-x-1/2 border border-emerald-400/20 bg-slate-950/90 p-4 opacity-75">
        <div className="mx-auto h-1.5 w-1/3 bg-white/10" />
        <div className="mt-6 h-3 w-2/3 bg-emerald-400/30" />
        <div className="mt-3 h-16 bg-emerald-400/[0.08]" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-16 bg-white/[0.04]" />
          <div className="h-16 bg-white/[0.04]" />
        </div>
      </div>
      <div className="absolute -right-8 bottom-[-18%] h-[78%] w-[34%] rotate-[6deg] border border-white/10 bg-slate-950/80 p-4 opacity-60 sm:right-[4%]">
        <div className="h-2 w-2/5 bg-blue-400/30" />
        <div className="mt-5 h-28 border border-white/10 bg-blue-400/[0.05]" />
        <div className="mt-3 h-10 border border-white/10 bg-white/[0.03]" />
        <div className="mt-3 h-10 border border-white/10 bg-white/[0.03]" />
      </div>
    </div>
  );
}
