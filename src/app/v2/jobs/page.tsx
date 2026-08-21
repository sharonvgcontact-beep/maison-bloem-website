import type { Metadata } from "next";
import shared from "../V2Shared.module.css";
import styles from "./Jobs2.module.css";
import V2PageHero from "@/components/v2/V2PageHero";
import FadeInSection from "@/components/FadeInSection";
import { jobs } from "@/content/jobs";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Join Maison Bloem in London. Open roles across our first boutique.",
};

export default function JobsV2Page() {
  return (
    <>
      <V2PageHero
        eyebrow="Careers"
        title={
          <>
            Join <em>the team.</em>
          </>
        }
        subtitle="We're building our first boutique in London, and looking for people who care about craft as much as we do."
      />

      <section className={`${shared.section} ${shared.container}`} style={{ borderBottom: "none" }}>
        <FadeInSection className={styles.intro}>
          <h2 className={styles.introTitle}>Open positions</h2>
          <p className={styles.introBody}>
            Every role at Maison Bloem touches the guest experience in some way. Precision, warmth, and attention to
            detail matter more than years of experience.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className={styles.list}>
            {jobs.map((job) => (
              <div className={styles.job} key={job.title}>
                <div>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobDesc}>{job.description}</p>
                </div>
                <div className={styles.jobMeta}>
                  <span className={styles.jobType}>{job.type}</span>
                  <span className={styles.jobLocation}>{job.location}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className={styles.note}>
          <h3 className={styles.noteTitle}>Don&apos;t see your role?</h3>
          <p className={styles.noteBody}>
            We&apos;re always glad to hear from people who love what we do. Email us at{" "}
            <a href={`mailto:${brand.emails.jobs}`}>{brand.emails.jobs}</a> with a little about yourself.
          </p>
        </FadeInSection>
      </section>
    </>
  );
}
