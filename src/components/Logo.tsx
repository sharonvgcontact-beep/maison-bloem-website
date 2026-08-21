import Image from "next/image";
import styles from "./Logo.module.css";

type Props = {
  variant: "rosewood" | "lemon";
  // Fixed rendered width in px. Omit it and set a width via `className`
  // instead (e.g. a clamp()) when the logo needs to scale responsively.
  width?: number;
  className?: string;
  priority?: boolean;
};

// The official Maison Bloem wordmark (from FINAL FILES-2/PRIMARY LOGO),
// swapped by color to stay legible on whatever background it sits on:
// "lemon" for dark sections (nav, footer), "rosewood" for the lemon hero bar.
export default function Logo({ variant, width, className = "", priority }: Props) {
  return (
    <span className={`${styles.logo} ${className}`} style={width ? { width } : undefined}>
      <Image
        src={`/logo/maison-bloem-${variant}.svg`}
        alt="Maison Bloem"
        fill
        priority={priority}
        className={styles.img}
      />
    </span>
  );
}
