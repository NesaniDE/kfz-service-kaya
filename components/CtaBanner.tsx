export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      {/* Dark photo-style background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 70% at 20% 50%, rgba(0,182,39,0.18) 0%, rgba(0,182,39,0) 60%),
            radial-gradient(ellipse 60% 70% at 80% 50%, rgba(255,140,0,0.10) 0%, rgba(255,140,0,0) 60%),
            linear-gradient(120deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,170,60,0.55) 1px, transparent 1.5px)",
          backgroundSize: "180px 180px",
          backgroundPosition: "30% 50%",
          maskImage:
            "radial-gradient(ellipse 50% 60% at 25% 50%, #000 0%, transparent 70%)",
        }}
      />

      <div className="container-x py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left — industrial / car part visual */}
          <div className="relative h-48 sm:h-64 hidden lg:block">
            <svg
              viewBox="0 0 400 260"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              {/* Brake disc / flange-like layered circles */}
              <g transform="translate(140 130)">
                <circle r="105" fill="#1f1f1f" stroke="#3a3a3a" strokeWidth="2" />
                <circle r="95" fill="none" stroke="#555" strokeWidth="1" />
                <circle r="55" fill="#0f0f0f" stroke="#444" strokeWidth="2" />
                <circle r="20" fill="#2a2a2a" stroke="#555" strokeWidth="1" />
                {/* Bolt holes */}
                <g fill="#0a0a0a">
                  <circle cx="0" cy="-78" r="6" />
                  <circle cx="74" cy="-26" r="6" />
                  <circle cx="46" cy="64" r="6" />
                  <circle cx="-46" cy="64" r="6" />
                  <circle cx="-74" cy="-26" r="6" />
                </g>
              </g>
              {/* Smaller offset disc */}
              <g transform="translate(255 165)">
                <circle r="58" fill="#181818" stroke="#3a3a3a" strokeWidth="2" />
                <circle r="50" fill="none" stroke="#555" strokeWidth="1" />
                <circle r="28" fill="#0a0a0a" stroke="#444" strokeWidth="1.5" />
                <circle r="10" fill="#2a2a2a" />
              </g>
              {/* Subtle highlight */}
              <ellipse
                cx="130"
                cy="80"
                rx="60"
                ry="14"
                fill="#ffffff"
                opacity="0.05"
              />
            </svg>
          </div>

          {/* Right — text + CTA */}
          <div className="lg:pl-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              Möchten Sie ein{" "}
              <span className="text-brand-green">persönliches Angebot</span> für
              Ihr Fahrzeug?
            </h2>
            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-brand-greenDark hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
