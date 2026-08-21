import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import styles from "./ImageSlot.module.css";
import BrandMark from "./BrandMark";

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
      <BrandMark className={styles.mark} strokeWidth={2} />
      <span className={styles.caption}>{name}</span>
    </div>
  );
}
