import styles from "./LocationCard.module.css";
import type { Location } from "@/content/locations";

export default function LocationCard({ city, country, status, statusLabel, detail, hours }: Location) {
  return (
    <div className={`${styles.card} ${status === "opening" ? styles.opening : ""}`}>
      <span className={styles.badge}>{statusLabel}</span>
      <div className={styles.city}>{city}</div>
      <div className={styles.country}>{country}</div>
      <p className={styles.detail}>{detail}</p>
      <p className={styles.hours}>{hours}</p>
    </div>
  );
}
