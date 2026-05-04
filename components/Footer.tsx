import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      <div className="container-x py-14 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <Logo className="h-10 w-auto" />
          <p className="mt-5 text-sm text-white/65 leading-relaxed">
            KFZ-Service Kaya - Ihre Kfz-Werkstatt in Schwäbisch Gmünd für
            Reparatur, Wartung, Diagnose, Reifenservice und Fahrzeugservice.
          </p>
        </div>

        <div>
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

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-white/85">
            Kontakt
          </p>
          <address className="mt-4 not-italic space-y-2 text-sm text-white/65">
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

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} KFZ-Service Kaya. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <a href="#impressum" className="hover:text-brand-green">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:text-brand-green">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
