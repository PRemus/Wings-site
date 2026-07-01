"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#060b18]/90 shadow-xl shadow-black/20 backdrop-blur-xl"
          : "bg-[#060b18]/60 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Wings home">
          <Image
            src="/wings-logo.png"
            alt=""
            width={42}
            height={28}
            className="h-auto object-contain"
            priority
          />
          <span className="text-lg font-bold text-white">Wings</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-white">
            How it works
          </a>
          <a href="#demo" className="transition-colors hover:text-white">
            Demo
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <Link
            href="/login?redirect=/trainer/billing"
            className="transition-colors hover:text-white"
          >
            Trainer login
          </Link>
        </div>

        <Link
          href="/pricing"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-300"
        >
          <span className="hidden sm:inline">Start Free Trial</span>
          <span className="sm:hidden">Start trial</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
