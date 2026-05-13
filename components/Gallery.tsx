"use client";

import { useState } from "react";

type Tile = {
  title: string;
  subtitle: string;
  accent: string;
};

const tiles: Tile[] = [
  {
    title: "Werkstatt",
    subtitle: "Hebebühne & Arbeitsplätze",
    accent: "from-zinc-200 to-zinc-50",
  },
  {
    title: "Diagnose",
    subtitle: "Fehlerspeicher & Software",
    accent: "from-zinc-300 to-zinc-100",
  },
  {
    title: "Reifenservice",
    subtitle: "Montage & Räderwechsel",
    accent: "from-zinc-200 to-zinc-100",
  },
  {
    title: "Außenansicht",
    subtitle: "Standort Schwäbisch Gmünd",
    accent: "from-zinc-300 to-zinc-50",
  },
  {
    title: "Fahrzeugpflege",
    subtitle: "Aufbereitung & Optik",
    accent: "from-zinc-200 to-zinc-100",
  },
];

export default function Gallery() {
  const [featured, setFeatured] = useState(0);
  const active = tiles[featured];
  const thumbs = tiles.filter((_, i) => i !== featured).slice(0, 3);

  const prev = () =>
    setFeatured((f) => (f - 1 + tiles.length) % tiles.length);
  const next = () => setFeatured((f) => (f + 1) % tiles.length);

  return (
    <section id="galerie" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand-green">
          Einblicke & Referenzen
        </h2>
        <p className="mt-4 max-w-2xl text-brand-gray leading-relaxed">
          Weil uns Transparenz wichtig ist, geben wir Ihnen Einblicke in unsere
          Werkstatt, unsere Arbeiten und unseren Standort in Schwäbisch Gmünd.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — 3 small thumbs in a row */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {thumbs.map((tile, idx) => (
                <button
                  key={tile.title + idx}
                  onClick={() => {
                    const realIdx = tiles.findIndex((t) => t.title === tile.title);
                    if (realIdx >= 0) setFeatured(realIdx);
                  }}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-brand-line bg-gradient-to-br ${tile.accent} transition hover:ring-brand-green`}
                  aria-label={`Bild ansehen: ${tile.title}`}
                >
                  <CertificateLikeArt />
                  <div className="absolute inset-x-0 bottom-0 px-2 py-2 bg-white/90 backdrop-blur-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand-ink truncate">
                      {tile.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Carousel arrows */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={prev}
                aria-label="Vorheriges Bild"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-line bg-white text-brand-gray transition hover:border-brand-green hover:text-brand-green"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Nächstes Bild"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white shadow-sm transition hover:bg-brand-greenDark"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — featured large tile */}
          <div>
            <div
              className={`relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-brand-line bg-gradient-to-br ${active.accent}`}
            >
              <CertificateLikeArt large />
            </div>
            <p className="mt-5 text-sm font-medium text-brand-ink">
              {active.title} — {active.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Placeholder artwork that loosely mimics a document/photo tile */
function CertificateLikeArt({ large = false }: { large?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.1) 1px, transparent 1px)",
          backgroundSize: large ? "40px 40px" : "20px 20px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-4 -right-4 h-20 w-12 diag-stripes opacity-40 rotate-12"
      />
      <div
        aria-hidden
        className="absolute inset-x-6 top-6 h-2 rounded bg-brand-ink/15"
      />
      <div
        aria-hidden
        className="absolute inset-x-6 top-12 h-2 rounded bg-brand-ink/10"
      />
      <div
        aria-hidden
        className={`absolute ${large ? "left-6 right-6 top-24 bottom-20" : "left-4 right-4 top-16 bottom-12"} rounded-md bg-white/40 ring-1 ring-brand-ink/10`}
      />
    </>
  );
}
