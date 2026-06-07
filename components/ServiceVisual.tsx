import Image from "next/image";

type ServiceId =
  | "wartung"
  | "reparaturen"
  | "diagnose"
  | "reifenservice"
  | "tuning"
  | "fahrzeughandel";

interface ServiceVisualProps {
  id: ServiceId;
  sizes?: string;
  priority?: boolean;
}

const sources: Record<ServiceId, { src: string; alt: string }> = {
  wartung: {
    src: "/images/hero-workshop.png",
    alt: "Werkstattinnenraum mit Fahrzeug auf der Hebebühne",
  },
  reparaturen: {
    src: "/images/reparaturen-werkstatt.png",
    alt: "Reparaturarbeiten in der Werkstatt",
  },
  diagnose: {
    src: "/images/gallery-diagnose.png",
    alt: "Diagnosearbeiten mit Tablet am geöffneten Motorraum",
  },
  reifenservice: {
    src: "/images/gallery-tireservice.png",
    alt: "Reifenservice mit montiertem Rad und Werkstattausrüstung",
  },
  tuning: {
    src: "/images/gallery-detailing.png",
    alt: "Frisch aufbereitetes Fahrzeug in der Werkstatt",
  },
  fahrzeughandel: {
    src: "/images/about-exterior.png",
    alt: "Außenansicht der Werkstatt",
  },
};

/**
 * Renders the service photo as a fill image — caller must provide a
 * positioned parent (relative/absolute/fixed) with the desired aspect ratio.
 */
export default function ServiceVisual({
  id,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
}: ServiceVisualProps) {
  const { src, alt } = sources[id];
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brand-ink/30 via-transparent to-transparent"
      />
    </>
  );
}
