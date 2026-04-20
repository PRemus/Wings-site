"use client";

export const dynamic = "force-dynamic";

import { useRef, useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import { getWingsSupabase } from "@/lib/supabase-wings";

type PageState = "form" | "submitting" | "invalid" | "success";

const SUPABASE_URL = "https://btvjimmubdgjxbfxeyxg.supabase.co";
const SUPABASE_KEY = "sb_publishable_rvNhpqIiWEHHMAAm3nkdYg_ISkRKZkZ";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<PageState>("form");
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [formError, setFormError] = useState("");

  // Read token once from URL — never consume it until submit
  const tokenHash = useRef<string>(
    (() => {
      if (typeof window === "undefined") return "";
      const hash = window.location.hash.length > 1
        ? new URLSearchParams(window.location.hash.slice(1))
        : new URLSearchParams();
      return (
        searchParams.get("token_hash") ??
        hash.get("token_hash") ??
        ""
      );
    })()
  );

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (password.length < 8) {
      setFormError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setFormError("Passwords do not match.");
      return;
    }

    const token = tokenHash.current;
    if (!token) {
      setErrorMsg("This link is invalid. Please request a new password reset from the Wings app.");
      setState("invalid");
      return;
    }

    setState("submitting");

    // Step 1: verify token via direct fetch (never called on page load)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token_hash: token, type: "recovery" }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        setErrorMsg("This link has expired. Please request a new password reset from the Wings app.");
        setState("invalid");
        return;
      }

      const data = await res.json();
      const { access_token, refresh_token } = data;

      if (!access_token || !refresh_token) {
        setErrorMsg("This link has expired. Please request a new password reset from the Wings app.");
        setState("invalid");
        return;
      }

      // Step 2: establish session
      await getWingsSupabase().auth.setSession({ access_token, refresh_token });

      // Step 3: update password
      const { error: updateError } = await getWingsSupabase().auth.updateUser({ password });

      if (updateError) {
        setFormError(updateError.message || "Something went wrong. Please try again.");
        setState("form");
        return;
      }

      setState("success");
    } catch {
      clearTimeout(timeout);
      setErrorMsg("This link has expired. Please request a new password reset from the Wings app.");
      setState("invalid");
    }
  }, [password, confirm]);

  const openApp = useCallback(() => {
    const a = document.createElement("a");
    a.href = "wings://login";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

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

        {/* ── FORM / SUBMITTING ── */}
        {(state === "form" || state === "submitting") && (
          <>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-white">Set new password</h1>
              <p className="text-sm text-slate-400">Choose a strong password for your Wings account.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">New password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  required
                  disabled={state === "submitting"}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Confirm password</label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Repeat your password"
                  required
                  disabled={state === "submitting"}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50 transition"
                />
              </div>

              {formError && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400 text-left">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="btn-gradient mt-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {state === "submitting" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Updating…
                  </>
                ) : (
                  "Update password"
                )}
              </button>
            </form>
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
              <h1 className="text-2xl font-bold text-white">Link expired</h1>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">{errorMsg}</p>
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
              <h1 className="text-2xl font-bold text-white">Password updated!</h1>
              <p className="text-sm text-slate-400 leading-relaxed">
                You can now sign in with your new password.
              </p>
            </div>
            <button
              onClick={openApp}
              className="rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #0891b2, #10B981)" }}
            >
              Open Wings app
            </button>
            <p className="text-xs text-slate-600">Make sure the Wings app is installed on your device.</p>
          </>
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
