import styles from "./SectionLabel.module.css";

type Props = {
  children: string;
  color?: "rosewood" | "lemon" | "coffee" | "gold";
  className?: string;
};

export default function SectionLabel({ children, color = "rosewood", className = "" }: Props) {
  return <span className={`${styles.label} ${styles[color]} ${className}`}>{children}</span>;
}
