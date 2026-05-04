import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="font-heading text-sm uppercase tracking-widest text-brand-green">
          404
        </p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold sm:text-5xl text-brand-ink">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-brand-dark/70">
          Die gewünschte Seite existiert leider nicht.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
