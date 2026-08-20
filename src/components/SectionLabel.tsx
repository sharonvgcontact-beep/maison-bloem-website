import styles from "./SectionLabel.module.css";

type Props = {
  children: string;
  color?: "rosewood" | "lemon" | "coffee" | "gold";
};

export default function SectionLabel({ children, color = "rosewood" }: Props) {
  return <span className={`${styles.label} ${styles[color]}`}>{children}</span>;
}
