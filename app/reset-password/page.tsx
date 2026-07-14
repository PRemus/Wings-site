"use client";

export const dynamic = "force-dynamic";

import { Suspense, useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { PasswordRequirements } from "@/components/PasswordRequirements";
import {
  PASSWORD_POLICY_ERROR,
  validatePasswordPolicy,
} from "@/lib/password-policy";
import {
  getWingsSupabase,
  getWingsSupabaseConfig,
} from "@/lib/supabase-wings";

type PageState = "form" | "submitting" | "invalid" | "success";

type RecoverySession = {
  access_token: string;
  refresh_token: string;
};

const RECOVERY_LINK_ERROR =
  "This password reset link is invalid or has expired. Request a new one.";
const UPDATE_PASSWORD_ERROR =
  "We could not update your password. Check the requirements and try again.";

function getRecoveryParams(searchParams: ReturnType<typeof useSearchParams>) {
  const hashParams =
    typeof window !== "undefined" && window.location.hash.length > 1
      ? new URLSearchParams(window.location.hash.slice(1))
      : new URLSearchParams();

  return {
    tokenHash:
      searchParams.get("token_hash") ?? hashParams.get("token_hash") ?? "",
    tokenType: searchParams.get("type") ?? hashParams.get("type") ?? "recovery",
  };
}

async function verifyRecoverySession(
  tokenHash: string,
  tokenType: string
): Promise<RecoverySession | null> {
  const { supabaseUrl, supabaseAnonKey } = getWingsSupabaseConfig();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`${supabaseUrl}/auth/v1/verify`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token_hash: tokenHash, type: tokenType }),
      signal: controller.signal,
    });

    if (!response.ok) return null;

    const data = (await response.json().catch(() => null)) as
      | Partial<RecoverySession>
      | null;

    if (
      typeof data?.access_token !== "string" ||
      typeof data.refresh_token !== "string"
    ) {
      return null;
    }

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    };
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
}

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const { tokenHash, tokenType } = useMemo(
    () => getRecoveryParams(searchParams),
    [searchParams]
  );
  const hasRecoveryToken = Boolean(tokenHash);
  const [state, setState] = useState<PageState>("form");
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const submittingRef = useRef(false);

  const passwordStatus = useMemo(
    () => validatePasswordPolicy(password),
    [password]
  );
  const showPasswordInvalid = passwordTouched || submitAttempted;
  const passwordsMatch = password.length > 0 && password === confirm;
  const showConfirmMismatch =
    (confirmTouched || submitAttempted) && confirm.length > 0 && !passwordsMatch;
  const canSubmit =
    state === "form" &&
    hasRecoveryToken &&
    passwordStatus.isValid &&
    passwordsMatch;
  const visibleState =
    !hasRecoveryToken && state !== "success" ? "invalid" : state;

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitAttempted(true);
      setFormError("");

      if (submittingRef.current || state === "submitting") return;

      if (!tokenHash) {
        setErrorMsg(RECOVERY_LINK_ERROR);
        setState("invalid");
        return;
      }

      if (!passwordStatus.isValid) {
        setFormError(PASSWORD_POLICY_ERROR);
        passwordRef.current?.focus();
        return;
      }

      if (!passwordsMatch) {
        setFormError("Passwords do not match.");
        confirmRef.current?.focus();
        return;
      }

      submittingRef.current = true;
      setState("submitting");

      const session = await verifyRecoverySession(tokenHash, tokenType);
      if (!session) {
        submittingRef.current = false;
        setPassword("");
        setConfirm("");
        setErrorMsg(RECOVERY_LINK_ERROR);
        setState("invalid");
        return;
      }

      const supabase = getWingsSupabase();
      const { error: sessionError } = await supabase.auth.setSession(session);

      if (sessionError) {
        submittingRef.current = false;
        setPassword("");
        setConfirm("");
        setErrorMsg(RECOVERY_LINK_ERROR);
        setState("invalid");
        return;
      }

      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      submittingRef.current = false;

      if (updateError) {
        const message = updateError.message.toLowerCase();
        if (message.includes("session") || message.includes("token")) {
          setErrorMsg(RECOVERY_LINK_ERROR);
          setState("invalid");
          return;
        }

        setFormError(UPDATE_PASSWORD_ERROR);
        setState("form");
        passwordRef.current?.focus();
        return;
      }

      setPassword("");
      setConfirm("");
      setState("success");
    },
    [
      password,
      passwordStatus.isValid,
      passwordsMatch,
      state,
      tokenHash,
      tokenType,
    ]
  );

  const openApp = useCallback(() => {
    const link = document.createElement("a");
    link.href = "wings://login";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/3 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #10B981 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-8">
        <Image
          src="/wings-logo.png"
          alt="Wings"
          width={80}
          height={54}
          className="animate-float object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          priority
        />

        {(visibleState === "form" || visibleState === "submitting") && (
          <>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-white">
                Set new password
              </h1>
              <p className="text-sm text-slate-400">
                Choose a strong password for your Wings account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="new-password"
                  className="text-xs font-medium uppercase tracking-wider text-slate-400"
                >
                  New password
                </label>
                <div className="relative">
                  <input
                    id="new-password"
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onBlur={() => setPasswordTouched(true)}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setFormError("");
                    }}
                    placeholder="Create a secure password"
                    autoComplete="new-password"
                    required
                    disabled={visibleState === "submitting"}
                    aria-describedby="password-requirements"
                    aria-invalid={showPasswordInvalid && !passwordStatus.isValid}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30 disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 transition hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                    aria-label={
                      showPassword ? "Hide new password" : "Show new password"
                    }
                    disabled={visibleState === "submitting"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <PasswordRequirements
                  id="password-requirements"
                  status={passwordStatus}
                  showInvalid={showPasswordInvalid}
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="confirm-password"
                  className="text-xs font-medium uppercase tracking-wider text-slate-400"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    ref={confirmRef}
                    type={showConfirm ? "text" : "password"}
                    value={confirm}
                    onBlur={() => setConfirmTouched(true)}
                    onChange={(event) => {
                      setConfirm(event.target.value);
                      setFormError("");
                    }}
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                    required
                    disabled={visibleState === "submitting"}
                    aria-describedby={
                      showConfirmMismatch ? "confirm-password-error" : undefined
                    }
                    aria-invalid={showConfirmMismatch}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30 disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 transition hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                    aria-label={
                      showConfirm
                        ? "Hide confirmation password"
                        : "Show confirmation password"
                    }
                    disabled={visibleState === "submitting"}
                  >
                    {showConfirm ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {showConfirmMismatch && (
                  <p
                    id="confirm-password-error"
                    className="text-xs text-red-300"
                    role="alert"
                  >
                    Passwords do not match.
                  </p>
                )}
              </div>

              {formError && (
                <p
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-left text-sm text-red-300"
                  role="alert"
                >
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="btn-gradient mt-2 flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                {visibleState === "submitting" ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Updating...
                  </>
                ) : (
                  "Update password"
                )}
              </button>
            </form>
          </>
        )}

        {visibleState === "invalid" && (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
              <svg
                className="h-8 w-8 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-white">Link expired</h1>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                {errorMsg || RECOVERY_LINK_ERROR}
              </p>
            </div>
          </>
        )}

        {visibleState === "success" && (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <svg
                className="h-8 w-8 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-white">
                Password updated!
              </h1>
              <p className="text-sm leading-relaxed text-slate-400">
                You can now sign in with your new password.
              </p>
            </div>
            <button
              type="button"
              onClick={openApp}
              className="rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #0891b2, #10B981)",
              }}
            >
              Open Wings app
            </button>
            <p className="text-xs text-slate-600">
              Make sure the Wings app is installed on your device.
            </p>
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
