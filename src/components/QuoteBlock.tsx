import styles from "./QuoteBlock.module.css";

type Props = {
  lines: readonly string[];
  attribution: string;
  dark?: boolean;
};

export default function QuoteBlock({ lines, attribution, dark = false }: Props) {
  return (
    <div className={`${styles.wrap} ${dark ? styles.dark : ""}`}>
      <span className={styles.mark}>&ldquo;</span>
      <p className={styles.text}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
      <span className={styles.attribution}>{attribution}</span>
    </div>
  );
}
