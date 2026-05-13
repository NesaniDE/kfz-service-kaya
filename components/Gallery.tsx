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

const AUTO_ROTATE_MS = 7000;

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const current = testimonials[active];

  const goTo = (i: number) =>
    setActive(((i % testimonials.length) + testimonials.length) % testimonials.length);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => goTo(active + 1), AUTO_ROTATE_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setPaused((p) => (entry.isIntersecting ? p : true)),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="galerie"
      ref={sectionRef}
      className="bg-brand-paper py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand-green">
            Einblicke & Referenzen
          </h2>
          <p className="mt-4 text-brand-gray leading-relaxed">
            Was unsere Kunden über uns sagen — ehrliche Stimmen aus Schwäbisch
            Gmünd und Umgebung.
          </p>
        </div>

        <div className="relative mt-12 mx-auto max-w-4xl">
          {/* Card */}
          <article
            key={`card-${active}`}
            className="relative grid md:grid-cols-12 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brand-line animate-quote-in"
          >
            {/* Portrait */}
            <div className="relative md:col-span-5 aspect-[5/4] sm:aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                priority={active === 0}
                className="object-cover object-top"
                sizes="(min-width: 768px) 36vw, 100vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-ink/15 via-transparent to-transparent"
              />
              {/* Floating quote mark */}
              <span
                aria-hidden
                className="hidden md:block absolute -right-2 top-6 font-heading text-7xl font-black text-brand-green opacity-95 leading-none select-none"
              >
                &ldquo;
              </span>
            </div>

            {/* Quote */}
            <div className="md:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-center">
              <span
                aria-hidden
                className="md:hidden font-heading text-6xl font-black text-brand-green/80 leading-none select-none"
              >
                &ldquo;
              </span>

              <blockquote className="mt-2 md:mt-0 font-heading text-lg sm:text-xl lg:text-2xl leading-snug text-brand-ink">
                {current.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-1 text-brand-green">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-brand-line">
                <p className="font-heading text-base font-extrabold text-brand-ink">
                  {current.name}
                </p>
                <p className="mt-0.5 text-sm text-brand-gray">{current.role}</p>
              </div>
            </div>

            {/* Progress bar at the bottom of the card */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-line md:col-span-12"
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
          </article>

          {/* Arrows on the edges */}
          <button
            onClick={prev}
            aria-label="Vorherige Referenz"
            className="absolute left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-ink shadow-md ring-1 ring-brand-line transition hover:ring-brand-green hover:text-brand-green active:scale-95"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Nächste Referenz"
            className="absolute right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white shadow-md transition hover:bg-brand-greenDark active:scale-95"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Dot pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Referenz ${i + 1} von ${testimonials.length}`}
                aria-current={isActive}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-10 bg-brand-green"
                    : "w-2 bg-brand-line hover:bg-brand-gray"
                }`}
              />
            );
          })}
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
