import Link from "next/link";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container-x max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-greenDark hover:text-brand-green"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>

          <h1 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-ink">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg text-brand-dark/80 leading-relaxed">
              {intro}
            </p>
          )}

          <div className="mt-10 space-y-10 text-brand-dark/85 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
