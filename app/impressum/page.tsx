import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum | KFZ-Service Kaya",
  description:
    "Impressum von KFZ-Service Kaya, Inhaber Mustafa Kaya, Neppersbergstraße 10, 73525 Schwäbisch Gmünd.",
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

export default function ImpressumPage() {
  return (
    <LegalLayout
      title="Impressum"
      intro="Angaben gemäß § 5 TMG."
    >
      <Section title="Anbieter">
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
        </p>
      </Section>

      <Section title="Kontakt">
        <p>
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

      <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          Mustafa Kaya
          <br />
          Neppersbergstraße 10
          <br />
          73525 Schwäbisch Gmünd
        </p>
      </Section>

      <Section title="Umsatzsteuer-ID">
        <p>
          Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a
          Umsatzsteuergesetz wird auf Anfrage mitgeteilt, sofern vorhanden.
        </p>
      </Section>

      <Section title="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
          (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-greenDark hover:text-brand-green underline-offset-2 hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </Section>

      <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>

      <Section title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
      </Section>

      <Section title="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          der Seiten verantwortlich.
        </p>
        <p>
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
          mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
          Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </Section>

      <Section title="Urheberrecht">
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
          wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </Section>
    </LegalLayout>
  );
}
