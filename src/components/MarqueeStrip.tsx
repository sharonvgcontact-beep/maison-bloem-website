import Logo from "./Logo";
import styles from "./MarqueeStrip.module.css";

type Props = {
  repeat?: number;
  bg?: string;
  logoVariant?: "rosewood" | "lemon";
};

// A slow, seamless-looping ticker used as a quiet section separator —
// duplicated content + a translateX(-50%) loop is the standard trick for
// an infinite marquee with no visible seam. Repeats the real wordmark logo
// (same asset as the nav/footer) rather than styled text.
export default function MarqueeStrip({ repeat = 8, bg = "var(--lemon)", logoVariant = "rosewood" }: Props) {
  const items = Array.from({ length: repeat }).map((_, i) => (
    <span className={styles.item} key={i}>
      <Logo variant={logoVariant} className={styles.logo} />
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
