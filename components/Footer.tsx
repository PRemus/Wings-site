import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/wings-logo.png"
                alt="Wings"
                width={32}
                height={22}
                className="object-contain"
              />
              <span className="text-lg font-bold text-white">Wings</span>
            </a>
            <p className="max-w-xs text-center text-sm text-slate-500 lg:text-left">
              The premium fitness coaching platform for trainers and their
              clients.
            </p>
            <p className="text-xs text-slate-600 italic">
              &ldquo;Fly to your goals.&rdquo;
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm lg:justify-end">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                Product
              </p>
              <a href="#features" className="text-slate-400 transition-colors hover:text-white">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-400 transition-colors hover:text-white">
                How it works
              </a>
              <a href="#trainers" className="text-slate-400 transition-colors hover:text-white">
                For Trainers
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                Company
              </p>
              <a href="#" className="text-slate-400 transition-colors hover:text-white">
                About
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-white">
                Blog
              </a>
              <a href="mailto:hello@wingsapp.fit" className="text-slate-400 transition-colors hover:text-white">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                Legal
              </p>
              <Link href="/privacy-policy" className="text-slate-400 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-400 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/5 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-600">
            © 2026 POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ ·{" "}
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms</Link>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-slate-600 transition-colors hover:text-slate-300"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter/X"
              className="text-slate-600 transition-colors hover:text-slate-300"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-slate-600 transition-colors hover:text-slate-300"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
