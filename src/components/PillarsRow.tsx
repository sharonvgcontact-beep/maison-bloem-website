import styles from "./PillarsRow.module.css";

type Pillar = {
  num: string;
  title: string;
  body?: string;
  desc?: string;
};

type Props = {
  pillars: readonly Pillar[];
  dark?: boolean;
  cols?: number;
};

export default function PillarsRow({ pillars, dark = false, cols = 3 }: Props) {
  return (
    <div
      className={`${styles.row} ${dark ? styles.dark : ""}`}
      style={{ ["--cols" as string]: cols }}
    >
      {pillars.map((p) => (
        <div className={styles.pillar} key={p.title}>
          <span className={styles.num}>{p.num}</span>
          <h3 className={styles.title}>{p.title}</h3>
          <p className={styles.body}>{p.body ?? p.desc}</p>
        </div>
      ))}
    </div>
  );
}
