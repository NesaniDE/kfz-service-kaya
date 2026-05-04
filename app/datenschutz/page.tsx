import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | KFZ-Service Kaya",
  description:
    "Datenschutzerklärung von KFZ-Service Kaya. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: true, follow: true },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mt-5 font-heading text-base sm:text-lg font-bold text-brand-ink">
        {title}
      </h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      intro="Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung und Verwendung personenbezogener Daten bei der Nutzung unserer Webseite."
    >
      <Section title="1. Verantwortlicher">
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
          und anderer nationaler Datenschutzgesetze ist:
        </p>
        <p>
          <strong className="text-brand-ink">KFZ-Service Kaya</strong>
          <br />
          Inhaber: Mustafa Kaya
          <br />
          Neppersbergstraße 10
          <br />
          73525 Schwäbisch Gmünd
          <br />
          Deutschland
          <br />
          Telefon:{" "}
          <a
            href="tel:+491796641413"
            className="text-brand-greenDark hover:text-brand-green underline-offset-2 hover:underline"
          >
            0179 / 6641413
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:kfz-service.kaya@web.de"
            className="text-brand-greenDark hover:text-brand-green underline-offset-2 hover:underline"
          >
            kfz-service.kaya@web.de
          </a>
        </p>
      </Section>

      <Section title="2. Allgemeines zur Datenverarbeitung">
        <Sub title="Umfang der Verarbeitung personenbezogener Daten">
          <p>
            Wir verarbeiten personenbezogene Daten unserer Nutzer
            grundsätzlich nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Webseite sowie unserer Inhalte und Leistungen
            erforderlich ist.
          </p>
        </Sub>
        <Sub title="Rechtsgrundlage">
          <p>
            Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
            Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1
            lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur
            Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher
            Maßnahmen dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
            Soweit eine Verarbeitung zur Wahrung eines berechtigten Interesses
            erforderlich ist, dient Art. 6 Abs. 1 lit. f DSGVO als
            Rechtsgrundlage.
          </p>
        </Sub>
        <Sub title="Datenlöschung und Speicherdauer">
          <p>
            Personenbezogene Daten der betroffenen Person werden gelöscht oder
            gesperrt, sobald der Zweck der Speicherung entfällt. Eine
            Speicherung kann darüber hinaus erfolgen, wenn dies durch
            Rechtsvorschriften vorgesehen wurde.
          </p>
        </Sub>
      </Section>

      <Section title="3. Bereitstellung der Webseite und Server-Logfiles">
        <p>
          Bei jedem Aufruf unserer Webseite erfasst unser System automatisch
          Daten und Informationen vom Computersystem des aufrufenden Rechners.
          Folgende Daten werden hierbei erhoben:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>IP-Adresse des aufrufenden Rechners (in gekürzter Form)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Aufgerufene Seiten und Dateien</li>
          <li>HTTP-Statuscode und übertragene Datenmenge</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
          <li>Verwendeter Browser und Betriebssystem</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt zur Sicherstellung der Funktionsfähigkeit,
          Stabilität und Sicherheit unserer Webseite (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
      </Section>

      <Section title="4. Hosting (Vercel)">
        <p>
          Unsere Webseite wird bei Vercel Inc., 340 S Lemon Ave #4133,
          Walnut, CA 91789, USA gehostet. Beim Aufruf der Webseite werden
          technisch notwendige Daten (z. B. IP-Adresse, Zugriffszeit) an
          Vercel übermittelt. Vercel verarbeitet diese Daten in unserem
          Auftrag (Auftragsverarbeitung gemäß Art. 28 DSGVO).
        </p>
        <p>
          Eine Übermittlung in Drittländer (insbesondere die USA) erfolgt auf
          Grundlage der Standardvertragsklauseln der EU-Kommission und
          weiterer geeigneter Garantien. Weitere Informationen zum Datenschutz
          bei Vercel finden Sie unter:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-greenDark hover:text-brand-green underline-offset-2 hover:underline"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>
      </Section>

      <Section title="5. Kontaktaufnahme per Telefon oder E-Mail">
        <p>
          Wenn Sie uns telefonisch oder per E-Mail kontaktieren, werden die
          von Ihnen mitgeteilten Daten (Name, Telefonnummer bzw.
          E-Mail-Adresse, Inhalt Ihrer Anfrage) zur Bearbeitung Ihrer Anfrage
          und für den Fall von Anschlussfragen gespeichert. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b oder lit. f DSGVO.
        </p>
        <p>
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
          Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
          ihrer Erhebung nicht mehr erforderlich sind und keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </p>
      </Section>

      <Section title="6. Google Maps">
        <p>
          Auf dieser Webseite nutzen wir das Angebot von Google Maps zur
          Darstellung unseres Standorts. Anbieter ist Google Ireland Limited
          (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
          Irland.
        </p>
        <p>
          <strong className="text-brand-ink">Click-to-Load:</strong> Die
          Google-Maps-Karte wird erst dann geladen, wenn Sie aktiv auf die
          Schaltfläche &bdquo;Karte anzeigen&ldquo; klicken. Erst nach diesem
          Klick werden Daten (insbesondere Ihre IP-Adresse) an Google
          übermittelt. Bis dahin werden keine Daten an Google übertragen.
          Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a
          DSGVO. Die Einwilligung können Sie jederzeit für die Zukunft
          widerrufen, indem Sie die Seite neu laden.
        </p>
        <p>
          Weitere Informationen finden Sie in der Datenschutzerklärung von
          Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-greenDark hover:text-brand-green underline-offset-2 hover:underline"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
      </Section>

      <Section title="7. Schriftarten (Google Fonts, lokal eingebunden)">
        <p>
          Auf dieser Webseite werden die Schriftarten &bdquo;Inter&ldquo; und
          &bdquo;Montserrat&ldquo; verwendet. Diese werden lokal von unserem
          Server bzw. unserem Hoster ausgeliefert (über next/font). Es findet
          dabei keine Verbindung zu Servern von Google statt.
        </p>
      </Section>

      <Section title="8. Externe Links">
        <p>
          Unsere Webseite enthält Links zu externen Seiten Dritter (z. B.
          Instagram). Bei Klick auf einen solchen Link verlassen Sie unsere
          Webseite. Auf die Inhalte und Datenverarbeitung der verlinkten
          Seiten haben wir keinen Einfluss. Bitte beachten Sie die jeweiligen
          Datenschutzhinweise des Anbieters.
        </p>
      </Section>

      <Section title="9. Rechte der betroffenen Person">
        <p>
          Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
          Betroffener i. S. d. DSGVO und es stehen Ihnen folgende Rechte zu:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>
            Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3
            DSGVO)
          </li>
          <li>
            Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)
          </li>
        </ul>
        <p>
          Zur Geltendmachung Ihrer Rechte genügt eine formlose Mitteilung per
          E-Mail oder Telefon an die oben genannten Kontaktdaten.
        </p>
      </Section>

      <Section title="10. Aktualität dieser Datenschutzerklärung">
        <p>
          Diese Datenschutzerklärung ist aktuell gültig. Durch
          Weiterentwicklung unserer Webseite oder aufgrund geänderter
          gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
          diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Fassung
          kann jederzeit auf dieser Seite eingesehen werden.
        </p>
      </Section>
    </LegalLayout>
  );
}
