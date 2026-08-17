import Image from "next/image";
import logoSaumon from "@/assets/logos/logo-jodie-m-saumon.png";
import logoOnCoral from "@/assets/logos/logo-blanc-fond-saumon.png";

type BrandLogoVariant = "saumon" | "onCoral";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
  variant?: BrandLogoVariant;
};

const sources = {
  saumon: logoSaumon,
  onCoral: logoOnCoral,
} as const;

/**
 * Logo via import statique — chemin résolu correctement avec basePath.
 * `saumon` : header, footer clair, contact.
 * `onCoral` : bandeaux corail et petits formats contrastés.
 */
export function BrandLogo({
  size = 64,
  className,
  priority = false,
  alt = "Jodie Manent — Révélatrice de vos talents",
  variant = "saumon",
}: BrandLogoProps) {
  return (
    <Image
      src={sources[variant]}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
