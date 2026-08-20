import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import styles from "./ImageSlot.module.css";

type Props = {
  name: string; // expected filename inside /public/images, e.g. "hero-waffle.jpg"
  alt: string;
  variant?: "warm" | "cool" | "dark" | "light";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Server component: checks whether the real file has been dropped into
// /public/images yet. If so, renders it via next/image. Otherwise renders a
// styled placeholder labelled with the exact filename it's waiting on, so
// content can be swapped in later just by adding a file with that name.
export default function ImageSlot({ name, alt, variant = "warm", className = "", priority, sizes }: Props) {
  const realFilePath = path.join(process.cwd(), "public", "images", name);
  const hasRealImage = fs.existsSync(realFilePath);

  if (hasRealImage) {
    return (
      <div className={`${styles.slot} ${className}`}>
        <Image
          src={`/images/${name}`}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          className={styles.real}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.slot} ${styles[variant]} ${className}`} role="img" aria-label={alt}>
      <svg className={styles.icon} viewBox="0 0 120 120" fill="none" stroke="#FFF8CA" strokeWidth="1.8" strokeLinecap="round">
        <rect x="18" y="28" width="84" height="64" rx="10" />
        <line x1="18" y1="52" x2="102" y2="52" />
        <line x1="18" y1="76" x2="102" y2="76" />
        <line x1="46" y1="28" x2="46" y2="92" />
        <line x1="74" y1="28" x2="74" y2="92" />
      </svg>
      <span className={styles.caption}>{name}</span>
    </div>
  );
}
