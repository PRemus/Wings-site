"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { getWingsSupabase } from "@/lib/supabase-wings";
import {
  NOT_TRAINER_MESSAGE,
  getAuthenticatedTrainer,
  safeInternalRedirect,
} from "@/lib/trainer-auth";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = safeInternalRedirect(searchParams.get("redirect"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function checkSession() {
      try {
        const trainer = await getAuthenticatedTrainer();
        if (trainer && active) {
          router.replace(redirectTo);
          return;
        }
      } catch (caught) {
        if (
          active &&
          caught instanceof Error &&
          caught.message === NOT_TRAINER_MESSAGE
        ) {
          setError(NOT_TRAINER_MESSAGE);
        }
      } finally {
        if (active) setCheckingSession(false);
      }
    }

    void checkSession();
    return () => {
      active = false;
    };
  }, [redirectTo, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const supabase = getWingsSupabase();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    try {
      const trainer = await getAuthenticatedTrainer();
      if (!trainer) throw new Error("Unable to establish a website session.");
      router.replace(redirectTo);
      router.refresh();
    } catch (caught) {
      if (
        caught instanceof Error &&
        caught.message === NOT_TRAINER_MESSAGE
      ) {
        await supabase.auth.signOut();
        setError(NOT_TRAINER_MESSAGE);
      } else {
        setError(
          caught instanceof Error ? caught.message : "Unable to sign in."
        );
      }
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/3 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-[420px] w-[420px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #10B981 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Link href="/">
            <Image
              src="/wings-logo.png"
              alt="Wings"
              width={92}
              height={64}
              className="object-contain"
              priority
            />
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-white">
            Trainer sign in
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Use the same email and password as your Wings mobile app account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8"
        >
          <label className="block text-sm font-medium text-slate-300">
            Email address
            <span className="relative mt-2 block">
              <Mail
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                disabled={loading || checkingSession}
                className="h-12 w-full rounded-lg border border-white/10 bg-slate-950/50 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                placeholder="trainer@example.com"
              />
            </span>
          </label>

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Password
            <span className="relative mt-2 block">
              <LockKeyhole
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
                disabled={loading || checkingSession}
                className="h-12 w-full rounded-lg border border-white/10 bg-slate-950/50 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                placeholder="Your Wings password"
              />
            </span>
          </label>

          {error && (
            <p
              className="mt-5 rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || checkingSession}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading || checkingSession ? (
              <LoaderCircle
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            )}
            {checkingSession
              ? "Checking session..."
              : loading
                ? "Signing in..."
                : "Sign in"}
          </button>

          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            No separate website account is created. This signs you into your
            existing Wings account.
          </p>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
