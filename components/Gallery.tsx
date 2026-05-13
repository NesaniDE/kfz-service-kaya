"use client";

import Image from "next/image";
import { useState } from "react";

type Tile = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

const tiles: Tile[] = [
  {
    title: "Werkstatt",
    subtitle: "Hebebühne & Arbeitsplätze",
    image: "/images/hero-workshop.png",
    alt: "Werkstattinnenraum mit Fahrzeug auf der Hebebühne",
  },
  {
    title: "Diagnose",
    subtitle: "Fehlerspeicher & Software",
    image: "/images/gallery-diagnose.png",
    alt: "Diagnosearbeiten mit Tablet am geöffneten Motorraum",
  },
  {
    title: "Reifenservice",
    subtitle: "Montage & Räderwechsel",
    image: "/images/gallery-tireservice.png",
    alt: "Reifenservice mit montiertem Rad und Werkstattausrüstung",
  },
  {
    title: "Außenansicht",
    subtitle: "Standort Schwäbisch Gmünd",
    image: "/images/about-exterior.png",
    alt: "Außenansicht der Werkstatt",
  },
  {
    title: "Fahrzeugpflege",
    subtitle: "Aufbereitung & Optik",
    image: "/images/gallery-detailing.png",
    alt: "Frisch aufbereitetes Fahrzeug in der Werkstatt",
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
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-brand-line transition hover:ring-brand-green"
                  aria-label={`Bild ansehen: ${tile.title}`}
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 14vw, 28vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-brand-ink/10 to-transparent"
                  />
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
            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-brand-line">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent"
              />
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
