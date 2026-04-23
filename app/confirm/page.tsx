"use client";

export const dynamic = "force-dynamic";

import { useEffect, useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

type PageState = "verifying" | "success" | "invalid";

const SUPABASE_URL = "https://btvjimmubdgjxbfxeyxg.supabase.co";
const SUPABASE_KEY = "sb_publishable_rvNhpqIiWEHHMAAm3nkdYg_ISkRKZkZ";

function openWingsApp() {
  const a = document.createElement("a");
  a.href = "wings://login";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function ConfirmContent() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<PageState>("verifying");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function confirm() {
      const tokenHash = searchParams.get("token_hash") ?? "";
      const type = searchParams.get("type") ?? "signup";

      if (!tokenHash) {
        setErrorMsg("This confirmation link is invalid. Please register again in the Wings app.");
        setState("invalid");
        return;
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      try {
        const res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
          method: "POST",
          headers: {
            "apikey": SUPABASE_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token_hash: tokenHash, type }),
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!res.ok) {
          setErrorMsg("This confirmation link has expired or is invalid. Please register again in the Wings app.");
          setState("invalid");
          return;
        }

        setState("success");
        // Attempt auto-redirect into the app
        openWingsApp();
      } catch {
        clearTimeout(timeout);
        setErrorMsg("This confirmation link has expired or is invalid. Please register again in the Wings app.");
        setState("invalid");
      }
    }

    confirm();
  }, [searchParams]);

  const handleOpenApp = useCallback(() => openWingsApp(), []);

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
          src="/wings-logo.png"
          alt="Wings"
          width={80}
          height={54}
          className="animate-float object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        />

        {/* ── VERIFYING ── */}
        {state === "verifying" && (
          <>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-white">
                Confirming your email<span className="animate-pulse">…</span>
              </h1>
              <p className="text-sm text-slate-400">Just a moment.</p>
            </div>
          </>
        )}

        {/* ── SUCCESS ── */}
        {state === "success" && (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-white">Email confirmed!</h1>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Your Wings account is ready. Open the app to get started.
              </p>
            </div>

            <button
              onClick={handleOpenApp}
              className="rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #0891b2, #10B981)" }}
            >
              Open Wings app
            </button>

            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              If the app doesn&apos;t open automatically, make sure Wings is installed on your device.
            </p>
          </>
        )}

        {/* ── INVALID ── */}
        {state === "invalid" && (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30">
              <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-white">Confirmation failed</h1>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">{errorMsg}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense>
      <ConfirmContent />
    </Suspense>
  );
}
