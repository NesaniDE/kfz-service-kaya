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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-tight">
            Möchten Sie ein{" "}
            <span className="text-brand-green">persönliches Angebot</span> für
            Ihr Fahrzeug?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+491796641413"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-brand-greenDark hover:-translate-y-0.5"
            >
              Jetzt anrufen
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-transparent px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition hover:border-brand-green hover:text-brand-green"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
