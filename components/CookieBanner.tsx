"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kfz-kaya-consent";
const CONSENT_EVENT = "kfz-kaya-consent-changed";

export type ConsentValue = "all" | "essential";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "all" || v === "essential" ? v : null;
}

export function setConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function onConsentChange(handler: (v: ConsentValue) => void) {
  if (typeof window === "undefined") return () => {};
  const wrapped = (e: Event) => handler((e as CustomEvent<ConsentValue>).detail);
  window.addEventListener(CONSENT_EVENT, wrapped);
  return () => window.removeEventListener(CONSENT_EVENT, wrapped);
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setOpen(true);
  }, []);

  if (!open) return null;

  const decide = (value: ConsentValue) => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:left-5 lg:left-auto lg:max-w-md z-[60]"
    >
      <div className="rounded-2xl border border-brand-line bg-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark">
            <CookieIcon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-heading text-base font-extrabold text-brand-ink">
              Cookies & Karte
            </p>
            <p className="mt-1 text-sm text-brand-dark/75 leading-relaxed">
              Wir verwenden notwendige Cookies, damit unsere Website
              funktioniert. Wenn Sie zustimmen, laden wir zusätzlich Google Maps
              direkt — dabei werden Daten an Google übertragen. Mehr in der{" "}
              <a
                href="/datenschutz"
                className="underline underline-offset-2 hover:text-brand-green"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="inline-flex items-center justify-center rounded-lg border-2 border-brand-line bg-white px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-green hover:text-brand-green"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="inline-flex items-center justify-center rounded-lg bg-brand-green px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-greenDark"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.4a9 9 0 1 1-9.4-9.4 5 5 0 0 0 4.9 4.9 5 5 0 0 0 4.5 4.5z" />
      <circle cx="9" cy="11" r="0.8" fill="currentColor" />
      <circle cx="13" cy="15" r="0.8" fill="currentColor" />
      <circle cx="15" cy="9" r="0.8" fill="currentColor" />
      <circle cx="8" cy="15" r="0.8" fill="currentColor" />
    </svg>
  );
}
