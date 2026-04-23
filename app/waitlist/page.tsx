"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WaitlistProgress from "@/components/WaitlistProgress";

const REFERRAL_OPTIONS = [
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "google", label: "Google Search" },
  { value: "friend", label: "Friend or colleague" },
  { value: "facebook", label: "Facebook" },
  { value: "reddit", label: "Reddit" },
  { value: "other", label: "Other" },
];

interface FormData {
  full_name: string;
  email: string;
  role: "trainer" | "client" | "";
  country: string;
  city: string;
  referral_source: string;
  referral_other: string;
  message: string;
  marketing_consent: boolean;
  beta_tester: boolean;
}

interface FieldErrors {
  full_name?: string;
  email?: string;
  role?: string;
  country?: string;
  referral_source?: string;
  marketing_consent?: string;
}

export default function WaitlistPage() {
  const [form, setForm] = useState<FormData>({
    full_name: "",
    email: "",
    role: "",
    country: "",
    city: "",
    referral_source: "",
    referral_other: "",
    message: "",
    marketing_consent: false,
    beta_tester: false,
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [freshCount, setFreshCount] = useState<number | undefined>(undefined);

  // After successful signup, fetch the updated count
  useEffect(() => {
    if (!submitted) return;
    fetch("/api/waitlist-count")
      .then((r) => r.json())
      .then((d) => setFreshCount(d.count ?? undefined))
      .catch(() => {});
  }, [submitted]);

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (!form.full_name.trim()) e.full_name = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email address is required.";
    if (!form.role) e.role = "Please select your role.";
    if (!form.country.trim()) e.country = "Country is required.";
    if (!form.referral_source) e.referral_source = "Please select an option.";
    if (!form.marketing_consent) e.marketing_consent = "You must agree to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const firstName = form.full_name.trim().split(" ")[0];

  return (
    <div className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      {/* Background orbs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-xl">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <Link href="/">
            <Image
              src="/wings-logo.svg"
              alt="Wings"
              width={72}
              height={48}
              className="animate-float object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            />
          </Link>
          {!submitted && (
            <>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Join the <span className="gradient-text">waitlist</span>
              </h1>
              <p className="text-sm text-slate-400 max-w-sm">
                Be among the first to experience Wings. Takes less than a minute.
              </p>
            </>
          )}
        </div>

        {/* ── SUCCESS ── */}
        {submitted ? (
          <div className="flex flex-col items-center gap-6 text-center py-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <svg className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-white">
                {firstName ? `You're on the list, ${firstName}!` : "You're on the list!"}
              </h2>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
                We&apos;ll be in touch soon with updates and early access news.
              </p>
            </div>

            {/* Live progress after joining */}
            <div className="w-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Waitlist progress
              </p>
              <WaitlistProgress initialCount={freshCount} />
            </div>

            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              ← Back to homepage
            </Link>
          </div>
        ) : (
          /* ── FORM ── */
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            {/* Full name */}
            <Field label="Full name" required error={errors.full_name}>
              <input
                type="text"
                value={form.full_name}
                onChange={(e) => set("full_name", e.target.value)}
                placeholder="Jane Smith"
                className={inputClass(!!errors.full_name)}
              />
            </Field>

            {/* Email */}
            <Field label="Email address" required error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="jane@example.com"
                className={inputClass(!!errors.email)}
              />
            </Field>

            {/* Role toggle */}
            <Field label="I am a…" required error={errors.role}>
              <div className="grid grid-cols-2 gap-3">
                {(["trainer", "client"] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => set("role", r)}
                    className={`rounded-xl border px-4 py-3.5 text-sm font-medium transition-all text-left flex items-center gap-3 ${
                      form.role === r
                        ? "border-cyan-500/60 bg-cyan-500/10 text-white"
                        : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-300"
                    }`}
                  >
                    <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      form.role === r ? "border-cyan-400 bg-cyan-400" : "border-slate-600"
                    }`}>
                      {form.role === r && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#060B18]" />
                      )}
                    </span>
                    {r === "trainer" ? "Personal Trainer" : "Client / Athlete"}
                  </button>
                ))}
              </div>
            </Field>

            {/* Country + City */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Country" required error={errors.country}>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => set("country", e.target.value)}
                  placeholder="Romania"
                  className={inputClass(!!errors.country)}
                />
              </Field>
              <Field label="City" error={undefined}>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => set("city", e.target.value)}
                  placeholder="Bucharest (optional)"
                  className={inputClass(false)}
                />
              </Field>
            </div>

            {/* How did you hear */}
            <Field label="How did you hear about Wings?" required error={errors.referral_source}>
              <select
                value={form.referral_source}
                onChange={(e) => set("referral_source", e.target.value)}
                className={selectClass(!!errors.referral_source)}
              >
                <option value="">Select an option…</option>
                {REFERRAL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </Field>

            {/* Other specify */}
            {form.referral_source === "other" && (
              <Field label="Please specify" error={undefined}>
                <input
                  type="text"
                  value={form.referral_other}
                  onChange={(e) => set("referral_other", e.target.value)}
                  placeholder="Tell us where you found us"
                  className={inputClass(false)}
                />
              </Field>
            )}

            {/* Message */}
            <Field label="Anything you'd like to tell us?" error={undefined}>
              <textarea
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Share your expectations, questions, or just say hi… (optional)"
                rows={3}
                className={`${inputClass(false)} resize-none`}
              />
            </Field>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Marketing consent — required */}
            <CheckboxField
              id="marketing"
              checked={form.marketing_consent}
              onChange={(v) => set("marketing_consent", v)}
              error={errors.marketing_consent}
            >
              I agree to receive launch updates and news from Wings. You can unsubscribe at any time.{" "}
              <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                Privacy policy
              </Link>
              <span className="ml-1 text-red-400">*</span>
            </CheckboxField>

            {/* Beta tester — optional */}
            <CheckboxField
              id="beta"
              checked={form.beta_tester}
              onChange={(v) => set("beta_tester", v)}
            >
              I&apos;m interested in being an early beta tester and giving feedback
            </CheckboxField>

            {/* Server error */}
            {serverError && (
              <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                {serverError}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 w-full rounded-xl py-4 text-sm font-bold text-white shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #0891b2, #10B981)" }}
            >
              {submitting ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Joining…
                </>
              ) : (
                "Join the waitlist"
              )}
            </button>

            <p className="text-center text-xs text-slate-600">
              Free early access · No credit card required
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-slate-600 bg-white/5 outline-none transition
    focus:ring-1 focus:ring-cyan-500/30
    ${hasError
      ? "border-red-500/50 focus:border-red-500/50"
      : "border-white/10 focus:border-cyan-500/50"
    }`;
}

function selectClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-3 text-sm text-white bg-[#0d1424] outline-none transition
    focus:ring-1 focus:ring-cyan-500/30
    ${hasError
      ? "border-red-500/50 focus:border-red-500/50"
      : "border-white/10 focus:border-cyan-500/50"
    }`;
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}{required && <span className="ml-1 text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

function CheckboxField({
  id,
  checked,
  onChange,
  error,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <button
          id={id}
          type="button"
          role="checkbox"
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
            checked
              ? "border-cyan-500 bg-cyan-500"
              : error
              ? "border-red-500/60 bg-white/5"
              : "border-white/20 bg-white/5"
          }`}
        >
          {checked && (
            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        <span className="text-sm leading-relaxed text-slate-400">{children}</span>
      </label>
      {error && <p className="ml-8 text-xs text-red-400">{error}</p>}
    </div>
  );
}
