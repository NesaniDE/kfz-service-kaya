"use client";

import { useEffect, useState } from "react";
import { getConsent, onConsentChange } from "./CookieBanner";

const mapsEmbed =
  "https://www.google.com/maps?q=Neppersbergstra%C3%9Fe+10%2C+73525+Schw%C3%A4bisch+Gm%C3%BCnd&output=embed";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Neppersbergstra%C3%9Fe+10%2C+73525+Schw%C3%A4bisch+Gm%C3%BCnd";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (getConsent() === "all") setLoaded(true);
    const off = onConsentChange((v) => {
      if (v === "all") setLoaded(true);
    });
    return off;
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-brand-line bg-brand-paper min-h-[420px]">
      {loaded ? (
        <iframe
          title="Standort KFZ-Service Kaya auf Google Maps"
          src={mapsEmbed}
          className="h-full w-full min-h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center p-6 sm:p-10 text-center">
          {/* Decorative grid background */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-6 -right-6 h-32 w-20 diag-stripes opacity-50 rotate-12"
          />

          <div className="relative">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green text-white shadow-lg">
              <PinIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-extrabold text-brand-ink">
              Karte anzeigen
            </h3>
            <p className="mt-2 max-w-md text-sm text-brand-dark/70 leading-relaxed">
              Beim Anzeigen der Karte werden Daten an Google übertragen.
              Mehr dazu in unserer{" "}
              <a
                href="/datenschutz"
                className="text-brand-greenDark hover:text-brand-green underline-offset-2 underline"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="btn-primary"
              >
                Karte laden
              </button>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                In Google Maps öffnen
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
