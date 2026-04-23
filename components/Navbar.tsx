"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/wings-logo.png"
            alt="Wings logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            Wings
          </span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 sm:flex">
          <a
            href="#features"
            className="transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-white"
          >
            How it works
          </a>
          <a
            href="#trainers"
            className="transition-colors hover:text-white"
          >
            For Trainers
          </a>
        </div>

        {/* CTA */}
        <a
          href="/waitlist"
          className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #0891b2, #10B981)" }}
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}
