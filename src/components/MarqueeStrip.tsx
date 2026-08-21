import styles from "./MarqueeStrip.module.css";

type Props = {
  text?: string;
  repeat?: number;
  bg?: string;
  color?: string;
};

// A slow, seamless-looping ticker used as a quiet section separator —
// duplicated content + a translateX(-50%) loop is the standard trick for
// an infinite marquee with no visible seam.
export default function MarqueeStrip({ text = "Maison Bloem", repeat = 8, bg = "var(--lemon)", color }: Props) {
  const items = Array.from({ length: repeat }).map((_, i) => (
    <span className={styles.item} key={i} style={color ? { color } : undefined}>
      {text}
    </span>
  ));

  return (
    <div className={styles.wrap} style={{ background: bg }} aria-hidden="true">
      <div className={styles.track}>
        <div className={styles.group}>{items}</div>
        <div className={styles.group}>{items}</div>
      </div>
    </div>
  );
}
