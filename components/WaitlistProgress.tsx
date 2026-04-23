"use client";

import { useEffect, useState } from "react";

const GOAL = 1000;

function useCountUp(target: number | null, duration = 1400) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (target === null) return;
    const to = target;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
  return display;
}

interface WaitlistProgressProps {
  /** Pass a fresh count directly (e.g. after a signup) instead of fetching */
  initialCount?: number;
  className?: string;
}

export default function WaitlistProgress({ initialCount, className = "" }: WaitlistProgressProps) {
  const [count, setCount] = useState<number | null>(initialCount ?? null);

  useEffect(() => {
    if (initialCount !== undefined) {
      setCount(initialCount);
      return;
    }
    fetch("/api/waitlist-count")
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? null))
      .catch(() => {});
  }, [initialCount]);

  const displayed = useCountUp(count);
  const pct = count !== null ? Math.min((count / GOAL) * 100, 100) : 0;

  return (
    <div className={`w-full ${className}`}>
      {/* Count row */}
      <div className="mb-3 flex items-end justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-black tabular-nums gradient-text">
            {count === null ? "—" : `${displayed.toLocaleString()}+`}
          </span>
          <span className="text-sm text-slate-400">people on the waitlist</span>
        </div>
        <span className="text-xs text-slate-500">goal: {GOAL.toLocaleString()}</span>
      </div>

      {/* Bar */}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #0891b2, #10B981, #EAB308)",
          }}
        />
      </div>

      {/* Labels */}
      <div className="mt-1.5 flex justify-between text-xs text-slate-600">
        <span>0</span>
        <span>{GOAL.toLocaleString()}</span>
      </div>
    </div>
  );
}
