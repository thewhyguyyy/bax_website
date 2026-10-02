"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { nav } from "@/content/site";

const PILL_BASE =
  "rounded-full px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5";
const PILL_VARIANT = {
  primary: `${PILL_BASE} bg-coral-500 text-white hover:shadow-[0_6px_20px_rgba(255,107,122,0.45)]`,
  gold: `${PILL_BASE} bg-gold-500 text-indigo-900 hover:shadow-[0_6px_20px_rgba(217,165,38,0.45)]`,
};

function DesktopLink({ link, isDark }) {
  if (link.primary || link.gold) {
    const className = PILL_VARIANT[link.gold ? "gold" : "primary"];
    return link.external ? (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    ) : (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      className={`group relative font-body text-sm font-medium transition-colors ${
        isDark ? "text-white/80 hover:text-white" : "text-indigo-900/70 hover:text-indigo-900"
      }`}
    >
      {link.label}
      <span
        aria-hidden="true"
        className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
          isDark ? "bg-white" : "bg-coral-500"
        }`}
      />
    </Link>
  );
}

function MobileLink({ link, onClick }) {
  const pillClass = link.primary
    ? "bg-coral-500 text-white text-center"
    : link.gold
      ? "bg-gold-500 text-indigo-900 text-center"
      : "text-white/90";
  const className = `rounded-xl px-4 py-4 font-display text-lg font-bold uppercase tracking-wide ${pillClass}`;

  return link.external ? (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href} onClick={onClick} className={className}>
      {link.label}
    </Link>
  );
}

export default function Nav({ variant = "light" }) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <>
    <header
      className={`sticky top-0 z-50 w-full ${
        isDark ? "bg-indigo-900" : "bg-white/95 backdrop-blur"
      } ${!isDark ? "border-b border-indigo-900/10" : ""}`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          aria-label="Beyond Ability X — Home"
        >
          <Image
            src={isDark ? "/images/logo/logo-white.png" : "/images/logo/logo-purple.png"}
            alt="Beyond Ability X"
            width={160}
            height={44}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <DesktopLink link={link} isDark={isDark} />
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`md:hidden ${isDark ? "text-white" : "text-indigo-900"}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>

    {/* Mobile full-screen menu — rendered outside <header> so its backdrop-blur
        doesn't become the containing block for this fixed-position panel. */}
    {open && (
      <div
        id="mobile-menu"
        className="fixed inset-x-0 bottom-0 top-[60px] z-40 flex flex-col gap-2 overflow-y-auto bg-indigo-900 p-6 md:hidden"
      >
        {nav.links.map((link) => (
          <MobileLink key={link.href} link={link} onClick={() => setOpen(false)} />
        ))}
      </div>
    )}
    </>
  );
}
