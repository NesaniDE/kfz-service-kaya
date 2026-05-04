"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-brand-line shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#start" className="flex items-center gap-3" aria-label="Startseite">
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

        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-line bg-white text-brand-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-line bg-white">
          <div className="container-x flex flex-col gap-1 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-brand-ink hover:bg-brand-paper hover:text-brand-green"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+491796641413"
              className="btn-primary mt-3"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="h-4 w-4" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      )}
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
