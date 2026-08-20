import type { ReactNode } from "react";
import styles from "./PageHero.module.css";
import SectionLabel from "./SectionLabel";

type Bg = "rosewood" | "coffee" | "botticelli" | "lemon";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  bg?: Bg;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function PageHero({ eyebrow, title, subtitle, bg = "rosewood" }: Props) {
  const isDark = bg === "rosewood" || bg === "coffee";

  return (
    <section className={`${styles.hero} ${styles[bg]}`}>
      <div className={styles.inner}>
        {eyebrow && <SectionLabel color={isDark ? "lemon" : "coffee"}>{eyebrow}</SectionLabel>}
        <h1 className={`${styles.title} ${styles[`on${capitalize(bg)}` as keyof typeof styles]}`}>{title}</h1>
        {subtitle && (
          <p className={`${styles.sub} ${styles[`subOn${capitalize(bg)}` as keyof typeof styles]}`}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
