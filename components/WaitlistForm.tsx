"use client";

import { useState, useRef } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setMessage("Please enter your email address.");
      inputRef.current?.focus();
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center gap-3 ${
          variant === "cta" ? "text-center" : ""
        }`}
      >
        <div className="flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-4">
          <svg
            className="h-6 w-6 shrink-0 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-semibold text-green-300">You&apos;re in! 🎉</p>
            <p className="text-sm text-green-400/80">{message}</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          Share Wings with a friend who needs it.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-3 sm:flex-row ${
        variant === "cta" ? "max-w-lg mx-auto" : "max-w-md"
      }`}
      noValidate
    >
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder="Enter your email"
          autoComplete="email"
          disabled={status === "loading"}
          aria-label="Email address"
          className={`w-full rounded-xl border px-4 py-3.5 text-sm text-white placeholder-slate-400 outline-none transition-all focus:ring-2 disabled:opacity-60 ${
            status === "error"
              ? "border-red-500/60 bg-red-500/5 focus:ring-red-500/30"
              : "border-white/10 bg-white/5 focus:border-blue-500/60 focus:ring-blue-500/20 hover:border-white/20"
          }`}
        />
        {status === "error" && message && (
          <p className="absolute -bottom-5 left-0 text-xs text-red-400">
            {message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={`btn-gradient shrink-0 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-70 ${
          status === "loading" ? "shimmer-btn" : ""
        }`}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Joining...
          </span>
        ) : (
          "Join Waitlist"
        )}
      </button>
    </form>
  );
}
