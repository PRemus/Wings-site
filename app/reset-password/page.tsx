"use client";

import { useEffect, useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

interface DebugInfo {
  queryParams: Record<string, string>;
  hashFragment: string;
  hashParams: Record<string, string>;
  deepLink: string;
}

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);
  const [deepLink, setDeepLink] = useState<string>("");

  const triggerRedirect = useCallback((url: string) => {
    // Use an invisible anchor click — more reliable than location.href for
    // custom schemes on Android/iOS
    const a = document.createElement("a");
    a.href = url;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  useEffect(() => {
    // --- Collect query params (?key=value) ---
    const queryParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    // --- Collect hash params (#key=value) ---
    const rawHash = window.location.hash;
    const hashParams: Record<string, string> = {};
    if (rawHash && rawHash.length > 1) {
      const hashSearchParams = new URLSearchParams(rawHash.slice(1));
      hashSearchParams.forEach((value, key) => {
        hashParams[key] = value;
      });
    }

    // --- Merge: hash params win over query params if both present ---
    const merged = new URLSearchParams();
    Object.entries(queryParams).forEach(([k, v]) => merged.set(k, v));
    Object.entries(hashParams).forEach(([k, v]) => merged.set(k, v));

    const url = `wings://reset-password?${merged.toString()}`;

    console.log("[Wings] Full URL:", window.location.href);
    console.log("[Wings] Query params:", queryParams);
    console.log("[Wings] Hash fragment:", rawHash);
    console.log("[Wings] Hash params:", hashParams);
    console.log("[Wings] Merged params:", Object.fromEntries(merged.entries()));
    console.log("[Wings] Deep link:", url);

    setDebugInfo({ queryParams, hashFragment: rawHash, hashParams, deepLink: url });
    setDeepLink(url);
    triggerRedirect(url);
  }, [searchParams, triggerRedirect]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
      {/* Background orbs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute left-1/3 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute right-1/3 bottom-1/3 h-[400px] w-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-sm w-full">
        {/* Logo */}
        <Image
          src="/wings-logo.svg"
          alt="Wings"
          width={80}
          height={54}
          className="animate-float object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        />

        {/* Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, #3B82F6, #10B981, #EAB308, #3B82F6)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0)",
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0)",
            }}
          />
          <svg className="h-7 w-7 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3M6.75 20.25h.008v.008H6.75v-.008z" />
          </svg>
        </div>

        {/* Message */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold text-white">
            Opening Wings app<span className="animate-pulse">…</span>
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            You should be redirected automatically.<br />
            If nothing happens, tap the button below.
          </p>
        </div>

        {/* Try again */}
        <button
          onClick={() => deepLink && triggerRedirect(deepLink)}
          className="btn-gradient rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
        >
          Open in Wings
        </button>

        <p className="text-xs text-slate-600">
          Make sure the Wings app is installed on your device.
        </p>

        {/* Debug panel — visible on page so you can check without devtools */}
        {debugInfo && (
          <div className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-mono text-xs text-slate-400">
            <p className="mb-2 text-slate-300 font-semibold">Debug info</p>

            <p className="text-slate-500 mb-0.5">Query params (?)</p>
            <p className="mb-3 break-all text-slate-300">
              {Object.keys(debugInfo.queryParams).length > 0
                ? JSON.stringify(debugInfo.queryParams, null, 2)
                : "— none —"}
            </p>

            <p className="text-slate-500 mb-0.5">Hash fragment (#)</p>
            <p className="mb-3 break-all text-slate-300">
              {debugInfo.hashFragment || "— none —"}
            </p>

            <p className="text-slate-500 mb-0.5">Deep link built</p>
            <p className="break-all text-green-400">{debugInfo.deepLink}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordContent />
    </Suspense>
  );
}
