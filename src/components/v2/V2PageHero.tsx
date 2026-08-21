import type { ReactNode } from "react";
import styles from "./V2PageHero.module.css";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
};

export default function V2PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
