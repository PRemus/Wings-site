import Image from "next/image";
import Link from "next/link";
import { AtSign, BriefcaseBusiness, Video } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Product demos", href: "/#demo" },
  { label: "Pricing", href: "/pricing" },
  { label: "Trainer billing", href: "/trainer/billing" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socialPlaceholders = [
  { label: "Instagram coming soon", icon: AtSign },
  { label: "YouTube coming soon", icon: Video },
  { label: "LinkedIn coming soon", icon: BriefcaseBusiness },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/wings-logo.png"
                alt=""
                width={42}
                height={28}
                className="h-auto object-contain"
              />
              <span className="text-lg font-bold text-white">Wings</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              The all-in-one coaching platform for personal trainers and their
              clients.
            </p>
            <p className="mt-2 text-xs text-slate-600">Fly to your goals.</p>
          </div>

          <FooterLinks title="Product" links={productLinks} />
          <FooterLinks title="Legal" links={legalLinks} />

          <div>
            <p className="text-sm font-semibold text-slate-300">Support</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                href="/support"
                className="text-slate-500 transition-colors hover:text-white"
              >
                Support
              </Link>
              <a
                href="mailto:wings.app@yahoo.com"
                className="break-words text-slate-500 transition-colors hover:text-white"
              >
                wings.app@yahoo.com
              </a>
              <Link
                href="/login?redirect=/trainer/billing"
                className="text-slate-500 transition-colors hover:text-white"
              >
                Trainer login
              </Link>
            </div>

            <div id="social-links" className="mt-6 flex gap-3">
              {socialPlaceholders.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  title={label}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-600"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-300">{title}</p>
      <div className="mt-4 flex flex-col gap-3 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-slate-500 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
