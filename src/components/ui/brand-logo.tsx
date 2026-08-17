import Image from "next/image";
import logoJodie from "@/assets/logo-coral-transparent.png";

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
  size = 64,
  className,
  priority = false,
  alt = "Jodie Manent — Révélatrice de vos talents",
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
