"use client";

import { useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

function ResetPasswordContent() {
  const searchParams = useSearchParams();

  const buildDeepLink = useCallback(() => {
    const tokenHash = searchParams.get("token_hash");
    const type = searchParams.get("type");
    const params = new URLSearchParams();
    if (tokenHash) params.set("token_hash", tokenHash);
    if (type) params.set("type", type);
    return `wings://reset-password?${params.toString()}`;
  }, [searchParams]);

  const attemptRedirect = useCallback(() => {
    window.location.href = buildDeepLink();
  }, [buildDeepLink]);

  useEffect(() => {
    attemptRedirect();
  }, [attemptRedirect]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
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

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-sm">
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
            style={{ background: "conic-gradient(from 0deg, #3B82F6, #10B981, #EAB308, #3B82F6)", mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0)", WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0)" }}
          />
          <svg className="h-7 w-7 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3M6.75 20.25h.008v.008H6.75v-.008z" />
          </svg>
        </div>

        {/* Message */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold text-white">Opening Wings app<span className="animate-pulse">…</span></h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            You should be redirected automatically.<br />
            If nothing happens, tap the button below.
          </p>
        </div>

        {/* Try again */}
        <button
          onClick={attemptRedirect}
          className="btn-gradient rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
        >
          Open in Wings
        </button>

        <p className="text-xs text-slate-600">
          Make sure the Wings app is installed on your device.
        </p>
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
