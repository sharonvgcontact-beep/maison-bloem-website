import styles from "./BrandDivider.module.css";

type Props = {
  bg: string;
  color?: string;
};

// A small repeated-square (waffle) motif marking the seam between two
// sections — a recurring brand device instead of a plain color change.
export default function BrandDivider({ bg, color = "var(--rosewood)" }: Props) {
  return (
    <div className={styles.divider} style={{ background: bg, color }} aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <span className={styles.square} key={i} />
      ))}
    </div>
  );
}
