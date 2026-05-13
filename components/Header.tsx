"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const navItems = [
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/#galerie", label: "Einblicke" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-md border-b border-brand-line shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="Startseite">
          <Logo className="h-10 sm:h-11 w-auto" variant="dark" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-semibold text-brand-ink transition hover:text-brand-green"
            >
              {item.label}
            </a>
          ))}
          <a href="tel:+491796641413" className="btn-primary text-sm py-3 px-5">
            <PhoneIcon className="h-4 w-4" />
            Jetzt anrufen
          </a>
        </nav>

        {/* Burger button (mobile) — animated morph to X */}
        <button
          type="button"
          className="lg:hidden relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-line bg-white text-brand-ink transition hover:border-brand-green hover:text-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Menü</span>
          <span className="relative block h-4 w-6">
            <span
              aria-hidden
              className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden
              className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              aria-hidden
              className={`absolute left-0 top-[14px] h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Backdrop */}
      <button
        type="button"
        aria-label="Menü schließen"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-brand-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`lg:hidden absolute inset-x-0 top-20 z-50 origin-top border-t border-brand-line bg-white shadow-2xl transition-all duration-300 ease-out ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-x py-5 flex flex-col gap-1.5">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`group flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold text-brand-ink hover:bg-brand-paper hover:text-brand-green transition-all ease-out ${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-3 opacity-0"
              }`}
              style={{
                transitionDuration: "400ms",
                transitionDelay: open ? `${80 + i * 55}ms` : "0ms",
              }}
            >
              <span>{item.label}</span>
              <ArrowIcon className="h-4 w-4 text-brand-gray transition group-hover:translate-x-0.5 group-hover:text-brand-green" />
            </a>
          ))}

          <a
            href="tel:+491796641413"
            onClick={() => setOpen(false)}
            className={`btn-primary mt-3 transition-all ease-out ${
              open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
            style={{
              transitionDuration: "400ms",
              transitionDelay: open
                ? `${80 + navItems.length * 55}ms`
                : "0ms",
            }}
          >
            <PhoneIcon className="h-4 w-4" />
            Jetzt anrufen
          </a>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
