import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = "https://kfz-service-kaya.vercel.app";

export const metadata: Metadata = {
  title: "KFZ-Service Kaya | Ihre Kfz-Werkstatt in Schwäbisch Gmünd",
  description:
    "KFZ-Service Kaya in Schwäbisch Gmünd bietet Reparatur, Wartung, Diagnose, Reifenservice, Klimaservice, Bremsenservice und Fahrzeugservice für alle Marken.",
  keywords: [
    "Kfz Werkstatt Schwäbisch Gmünd",
    "KFZ-Service Schwäbisch Gmünd",
    "Autowerkstatt Schwäbisch Gmünd",
    "Reifenservice Schwäbisch Gmünd",
    "Inspektion Schwäbisch Gmünd",
    "Bremsenservice Schwäbisch Gmünd",
    "Klimaservice Schwäbisch Gmünd",
    "Fahrzeugdiagnose Schwäbisch Gmünd",
    "Gebrauchtwagen Schwäbisch Gmünd",
    "Unfallinstandsetzung Schwäbisch Gmünd",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "KFZ-Service Kaya | Ihre Kfz-Werkstatt in Schwäbisch Gmünd",
    description:
      "Reparatur, Wartung, Diagnose, Reifenservice und Fahrzeugservice für alle Marken. Persönlich, zuverlässig und direkt vor Ort.",
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "KFZ-Service Kaya",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "KFZ-Service Kaya",
    image: `${SITE_URL}/logo.svg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+49 179 6641413",
    email: "kfz-service.kaya@web.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Neppersbergstraße 10",
      postalCode: "73525",
      addressLocality: "Schwäbisch Gmünd",
      addressCountry: "DE",
    },
    sameAs: ["https://www.instagram.com/kfzservice_kaya"],
    priceRange: "€€",
  };

  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body bg-white text-brand-ink antialiased">
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
