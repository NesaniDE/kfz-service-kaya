"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  alt: string;
};

// Platzhalter — vom Inhaber später durch echte Kundenstimmen + Fotos ersetzen.
const PLACEHOLDER_IMAGE = "/images/testimonial-placeholder.png";
const PLACEHOLDER_ALT = "Platzhalter-Porträt für eine Kundenreferenz";

const testimonials: Testimonial[] = [
  {
    name: "Thomas M.",
    role: "Stammkunde aus Schwäbisch Gmünd",
    quote:
      "Schnelle Terminvergabe, ehrliche Diagnose und ein fairer Preis. Genau so wünscht man sich eine Werkstatt um die Ecke.",
    rating: 5,
    image: PLACEHOLDER_IMAGE,
    alt: PLACEHOLDER_ALT,
  },
  {
    name: "Sandra K.",
    role: "Kundin aus Mutlangen",
    quote:
      "Mustafa hat sich Zeit genommen, mein Auto in Ruhe erklärt und die Bremsen am selben Tag gemacht. Sehr persönlicher Service.",
    rating: 5,
    image: PLACEHOLDER_IMAGE,
    alt: PLACEHOLDER_ALT,
  },
  {
    name: "Lukas B.",
    role: "Kunde aus Heubach",
    quote:
      "TÜV-Vorbereitung, Bremsen und Reifenwechsel — alles in einem Termin und ohne Aufpreis-Falle. Klare Empfehlung.",
    rating: 5,
    image: PLACEHOLDER_IMAGE,
    alt: PLACEHOLDER_ALT,
  },
  {
    name: "Petra H.",
    role: "Kundin aus Lorch",
    quote:
      "Nach dem Unfall hat das Team mein Auto wieder wie neu hingestellt. Sauber, freundlich und unkompliziert.",
    rating: 5,
    image: PLACEHOLDER_IMAGE,
    alt: PLACEHOLDER_ALT,
  },
  {
    name: "Markus R.",
    role: "Kunde aus Schwäbisch Gmünd",
    quote:
      "Endlich eine Werkstatt, bei der man nicht das Gefühl hat, abgezockt zu werden. Top Beratung, top Preis.",
    rating: 5,
    image: PLACEHOLDER_IMAGE,
    alt: PLACEHOLDER_ALT,
  },
];

const AUTO_ROTATE_MS = 6000;

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const current = testimonials[active];

  const goTo = (i: number) => setActive(((i % testimonials.length) + testimonials.length) % testimonials.length);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  // Auto-rotate, paused on hover / focus / when offscreen
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => goTo(active + 1), AUTO_ROTATE_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  // Pause when section leaves the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setPaused((p) => (entry.isIntersecting ? false : true)),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="galerie"
      ref={sectionRef}
      className="bg-white py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand-green">
              Einblicke & Referenzen
            </h2>
            <p className="mt-4 max-w-2xl text-brand-gray leading-relaxed">
              Was unsere Kunden über uns sagen — ehrliche Stimmen aus
              Schwäbisch Gmünd und Umgebung.
            </p>
          </div>
          <div className="text-sm font-semibold text-brand-ink">
            <span className="tabular-nums">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="mx-1 text-brand-gray">/</span>
            <span className="tabular-nums text-brand-gray">
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left — thumbs + controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {testimonials.map((t, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={t.name}
                    onClick={() => goTo(i)}
                    aria-label={`Referenz von ${t.name} anzeigen`}
                    aria-pressed={isActive}
                    className={`group relative aspect-[3/4] overflow-hidden rounded-xl transition-all duration-300 ${
                      isActive
                        ? "ring-2 ring-brand-green shadow-card -translate-y-0.5"
                        : "ring-1 ring-brand-line opacity-70 hover:opacity-100 hover:-translate-y-0.5"
                    }`}
                  >
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        isActive ? "scale-100" : "scale-105 group-hover:scale-100"
                      }`}
                      sizes="(min-width: 1024px) 12vw, 25vw"
                    />
                    <div
                      aria-hidden
                      className={`absolute inset-0 transition-opacity ${
                        isActive
                          ? "bg-gradient-to-t from-brand-ink/65 via-brand-ink/15 to-transparent"
                          : "bg-brand-ink/35 group-hover:bg-gradient-to-t group-hover:from-brand-ink/55 group-hover:via-brand-ink/10 group-hover:to-transparent"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-2 text-left">
                      <p className="text-[10px] sm:text-xs font-bold text-white truncate drop-shadow">
                        {t.name}
                      </p>
                    </div>
                    {isActive && (
                      <span className="absolute top-2 right-2 inline-flex h-2 w-2 rounded-full bg-brand-green shadow-[0_0_0_3px_rgba(255,255,255,0.85)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Controls + progress */}
            <div className="space-y-3">
              <div
                aria-hidden
                className="h-[3px] w-full overflow-hidden rounded-full bg-brand-line"
              >
                <div
                  key={`progress-${active}-${paused ? "p" : "r"}`}
                  className="h-full origin-left bg-brand-green animate-progress"
                  style={{
                    ["--progress-duration" as string]: `${AUTO_ROTATE_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wider text-brand-gray font-semibold">
                  {paused ? "Pausiert" : "Automatisch"}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Vorherige Referenz"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-white text-brand-ink transition hover:border-brand-green hover:text-brand-green active:scale-95"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Nächste Referenz"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white shadow-sm transition hover:bg-brand-greenDark active:scale-95"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right — featured testimonial */}
          <div className="lg:col-span-6">
            <article className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-md">
              {/* Portrait image */}
              <div
                key={`img-${active}`}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-brand-line shadow-card animate-image-in"
              >
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 28rem, 90vw"
                  priority={active === 0}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/15 to-transparent"
                />
                {/* Floating quote mark */}
                <span
                  aria-hidden
                  className="absolute top-6 right-6 font-heading text-7xl sm:text-8xl font-black text-brand-green opacity-90 leading-none select-none"
                >
                  &ldquo;
                </span>
                {/* Bottom name strip */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-white">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-1.5 w-10 rounded-full bg-brand-green" />
                    <p className="font-heading text-base sm:text-lg font-extrabold">
                      {current.name}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-white/80">{current.role}</p>
                </div>
              </div>

              {/* Quote card overlapping below the image */}
              <div
                key={`quote-${active}`}
                className="relative mx-3 -mt-8 sm:mx-6 sm:-mt-10 rounded-2xl bg-white p-5 sm:p-6 shadow-card ring-1 ring-brand-line animate-quote-in"
              >
                {/* Star rating */}
                <div className="flex items-center gap-1 text-brand-green">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 font-heading text-base sm:text-lg leading-snug text-brand-ink">
                  &bdquo;{current.quote}&ldquo;
                </blockquote>
                <p className="mt-3 text-xs text-brand-gray">
                  Referenz {String(active + 1).padStart(2, "0")} von{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
