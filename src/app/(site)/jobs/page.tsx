import type { Metadata } from "next";
import styles from "./Jobs.module.css";
import PageHero from "@/components/PageHero";
import JobCard from "@/components/JobCard";
import FadeInSection from "@/components/FadeInSection";
import { jobs } from "@/content/jobs";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Join Maison Bloem in London — open roles across our first boutique.",
};

export default function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Join
            <br />
            the team.
          </>
        }
        subtitle="We're building our first boutique in London, and looking for people who care about craft as much as we do."
        bg="coffee"
      />

      <section className={styles.body}>
        <FadeInSection>
          <div className={styles.inner}>
            <div className={styles.intro}>
              <h2 className={styles.introTitle}>Open positions</h2>
              <p className={styles.introBody}>
                Every role at Maison Bloem touches the guest experience in some way — precision, warmth, and
                attention to detail matter more than years of experience.
              </p>
            </div>

            <div className={styles.list}>
              {jobs.map((job) => (
                <JobCard key={job.title} {...job} />
              ))}
            </div>

            <div className={styles.note}>
              <h3 className={styles.noteTitle}>Don&apos;t see your role?</h3>
              <p className={styles.noteBody}>
                We&apos;re always glad to hear from people who love what we do. Email us at{" "}
                <a href={`mailto:${brand.emails.jobs}`}>{brand.emails.jobs}</a> with a little about yourself.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
