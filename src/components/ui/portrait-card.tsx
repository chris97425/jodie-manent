import Image from "next/image";
import { cx } from "@/lib/cx";
import { withBasePath } from "@/lib/assets";

type PortraitCardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  caption?: string;
};

/**
 * Cadre photo premium — radius généreux, bordure fine, ombre douce.
 */
export function PortraitCard({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  imageClassName,
  caption,
}: PortraitCardProps) {
  return (
    <figure
      className={cx(
        "overflow-hidden rounded-[1.75rem] border border-cream-200 bg-cream-50 shadow-lg",
        className,
      )}
    >
      <Image
        src={withBasePath(src)}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cx("h-full w-full object-cover", imageClassName)}
      />
      {caption ? (
        <figcaption className="sr-only">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
