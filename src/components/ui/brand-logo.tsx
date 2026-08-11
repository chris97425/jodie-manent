import Image from "next/image";
import logoJodie from "@/assets/logo_jodie.png";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

/**
 * Logo via import statique — chemin résolu correctement avec basePath
 * (évite l'icône cassée sur GitHub Pages).
 */
export function BrandLogo({
  size = 44,
  className,
  priority = false,
  alt = "Logo Jodie M.",
}: BrandLogoProps) {
  return (
    <Image
      src={logoJodie}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
