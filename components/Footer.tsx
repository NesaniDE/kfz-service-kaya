import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-line text-brand-ink">
      <div className="container-x py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        {/* Brand column */}
        <div className="lg:col-span-4 max-w-sm">
          <Logo className="h-12 w-auto" variant="dark" />
          <p className="mt-5 text-sm text-brand-gray leading-relaxed">
            KFZ-Service Kaya — Ihre Kfz-Werkstatt in Schwäbisch Gmünd für
            Reparatur, Wartung, Diagnose, Reifenservice und Fahrzeughandel.
            Persönlich und zuverlässig direkt vor Ort.
          </p>
        </div>

        {/* Unternehmen */}
        <div className="lg:col-span-2">
          <p className="font-heading text-sm font-extrabold uppercase tracking-wider text-brand-green">
            Unternehmen
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { href: "/#ueber-uns", label: "Über uns" },
              { href: "/#galerie", label: "Einblicke" },
              { href: "/#kontakt", label: "Kontakt" },
              { href: "/datenschutz", label: "Datenschutz" },
              { href: "/impressum", label: "Impressum" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-brand-ink hover:text-brand-green">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Leistungen */}
        <div className="lg:col-span-2">
          <p className="font-heading text-sm font-extrabold uppercase tracking-wider text-brand-green">
            Leistungen
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { href: "/leistungen#wartung", label: "Wartung" },
              { href: "/leistungen#reparaturen", label: "Reparaturen" },
              { href: "/leistungen#diagnose", label: "Diagnose" },
              { href: "/leistungen#reifenservice", label: "Reifenservice" },
              { href: "/leistungen#tuning", label: "Tuning" },
              { href: "/leistungen#fahrzeughandel", label: "Fahrzeughandel" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-brand-ink hover:text-brand-green">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt info */}
        <div className="lg:col-span-4">
          <p className="font-heading text-sm font-extrabold uppercase tracking-wider text-brand-green">
            Kontakt
          </p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <PinIcon className="h-5 w-5 shrink-0 text-brand-green mt-0.5" />
              <div className="leading-snug">
                Neppersbergstraße 10
                <br />
                73525 Schwäbisch Gmünd
              </div>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-brand-green" />
              <a href="tel:+491796641413" className="hover:text-brand-green">
                0179 / 6641413
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 shrink-0 text-brand-green" />
              <a
                href="mailto:kfz-service.kaya@web.de"
                className="hover:text-brand-green break-all"
              >
                kfz-service.kaya@web.de
              </a>
            </li>
            <li className="flex items-center gap-3">
              <InstagramIcon className="h-5 w-5 shrink-0 text-brand-green" />
              <a
                href="https://www.instagram.com/kfzservice_kaya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-green"
              >
                @kfzservice_kaya
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-line">
        <div className="container-x py-5 text-xs text-brand-gray">
          Copyright &copy; {new Date().getFullYear()} KFZ-Service Kaya. Alle
          Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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
