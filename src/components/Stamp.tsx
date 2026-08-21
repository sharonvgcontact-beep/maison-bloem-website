import Image from "next/image";
import styles from "./Stamp.module.css";

type Props = {
  variant: "rosewood" | "lemon";
  className?: string;
};

// The circular "MB" submark (FINAL FILES-2/SUBMARK LOGO) — a stamp-like
// badge, e.g. as a divider between a page hero and its body content.
export default function Stamp({ variant, className = "" }: Props) {
  return (
    <span className={`${styles.stamp} ${className}`}>
      <Image src={`/logo/submark-${variant}.svg`} alt="Maison Bloem seal" fill className={styles.img} />
    </span>
  );
}
