import Image from "next/image";
import styles from "./ImageSlot.module.css";
import BrandMark from "./BrandMark";

type Props = {
  name: string;
  alt: string;
  variant?: "warm" | "cool" | "dark" | "light";
  className?: string;
  priority?: boolean;
  sizes?: string;
  hasReal: boolean;
  fit?: "cover" | "contain";
};

// Presentational half of the image-slot pattern — no node:fs import, so it's
// safe to use from Client Components too. `hasReal` must be computed
// server-side first (see lib/imageExists.ts) and passed in as a prop.
export default function ImageSlotView({ name, alt, variant = "warm", className = "", priority, sizes, hasReal, fit = "cover" }: Props) {
  if (hasReal) {
    return (
      <div className={`${styles.slot} ${className}`}>
        <Image
          src={`/images/${name}`}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          className={fit === "contain" ? styles.contain : styles.real}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.slot} ${styles[variant]} ${className}`} role="img" aria-label={alt}>
      <BrandMark className={styles.mark} strokeWidth={2} />
      <span className={styles.caption}>{name}</span>
    </div>
  );
}
