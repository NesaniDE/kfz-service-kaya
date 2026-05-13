import type { ReactNode } from "react";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
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
          <div className="relative hidden lg:block">
            <div
              aria-hidden
              className="absolute left-8 top-10 h-44 w-44 rounded-full bg-brand-green/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute bottom-2 left-28 h-32 w-32 rounded-full bg-brand-green/10 blur-2xl"
            />

            <div className="relative mx-auto max-w-[470px]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                      Direktkontakt
                    </p>
                    <p className="mt-2 font-heading text-2xl font-extrabold uppercase text-white">
                      Schnell zum Termin
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-brand-green/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-green">
                    Vor Ort
                  </span>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-5">
                  <div className="flex items-center justify-between text-white/60">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Fahrzeug
                    </span>
                    <span className="text-xs">Angebot anfragen</span>
                  </div>

                  <svg
                    viewBox="0 0 420 150"
                    className="mt-4 h-28 w-full"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="carStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                        <stop offset="45%" stopColor="#00B627" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M66 101c9-24 24-38 47-44l52-15c13-4 30-6 50-6h31c25 0 46 8 61 23l24 24h17c10 0 18 8 18 18v8H53v-12c0-9 6-16 13-16z"
                      fill="none"
                      stroke="url(#carStroke)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="127" cy="111" r="23" fill="#0f0f0f" stroke="#676767" strokeWidth="3" />
                    <circle cx="127" cy="111" r="10" fill="#2a2a2a" />
                    <circle cx="318" cy="111" r="23" fill="#0f0f0f" stroke="#676767" strokeWidth="3" />
                    <circle cx="318" cy="111" r="10" fill="#2a2a2a" />
                    <path
                      d="M170 55h86c15 0 29 4 40 13l18 15H145l25-21z"
                      fill="rgba(255,255,255,0.06)"
                      stroke="rgba(255,255,255,0.15)"
                    />
                  </svg>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <InfoChip label="Wartung" />
                    <InfoChip label="Reparatur" />
                    <InfoChip label="Diagnose" />
                    <InfoChip label="Reifenservice" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <MiniCard
                    label="Telefon"
                    value="+49 179 6641413"
                    icon={<PhoneMini />}
                  />
                  <MiniCard
                    label="Standort"
                    value="Schwäbisch Gmünd"
                    icon={<PinMini />}
                  />
                </div>
              </div>

              <div className="absolute -right-5 top-10 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Antwort
                </p>
                <p className="mt-1 font-heading text-xl font-extrabold uppercase text-white">
                  Schnell
                </p>
              </div>
            </div>
          </div>

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

function InfoChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
      {label}
    </span>
  );
}

function MiniCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
            {label}
          </p>
          <p className="mt-1 truncate text-sm font-semibold text-white/90">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function PhoneMini() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PinMini() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}
