import styles from "./JobCard.module.css";
import type { Job } from "@/content/jobs";

export default function JobCard({ title, type, location, description }: Job) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.meta}>
          <span className={styles.type}>{type}</span>
          <span className={styles.location}>{location}</span>
        </div>
      </div>
    </div>
  );
}
