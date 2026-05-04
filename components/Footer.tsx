import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-x py-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 max-w-md">
          <Logo className="h-12 w-auto" variant="light" />
          <p className="mt-5 text-sm text-white/65 leading-relaxed">
            KFZ-Service Kaya - Ihre Kfz-Werkstatt in Schwäbisch Gmünd für
            Reparatur, Wartung, Diagnose, Reifenservice und Fahrzeugservice.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="tel:+491796641413"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white hover:bg-brand-greenDark"
              aria-label="Anrufen"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:kfz-service.kaya@web.de"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-green"
              aria-label="E-Mail schreiben"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/kfzservice_kaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-green"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-white/85">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "#start", label: "Start" },
              { href: "#leistungen", label: "Leistungen" },
              { href: "#ueber-uns", label: "Über uns" },
              { href: "#galerie", label: "Galerie" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/65 hover:text-brand-green"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-white/85">
            Kontakt
          </p>
          <address className="mt-4 not-italic space-y-2 text-sm text-white/70">
            <div>Neppersbergstraße 10</div>
            <div>73525 Schwäbisch Gmünd</div>
            <a
              href="tel:+491796641413"
              className="block hover:text-brand-green"
            >
              0179 / 6641413
            </a>
            <a
              href="mailto:kfz-service.kaya@web.de"
              className="block hover:text-brand-green break-all"
            >
              kfz-service.kaya@web.de
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6 text-xs text-white/55">
          <p>
            &copy; {new Date().getFullYear()} KFZ-Service Kaya. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <a href="/impressum" className="hover:text-brand-green">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-brand-green">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
