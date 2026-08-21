import type { Metadata } from "next";
import Link from "next/link";
import shared from "../V2Shared.module.css";
import styles from "./Contact2.module.css";
import V2PageHero from "@/components/v2/V2PageHero";
import V2ContactForm from "@/components/v2/V2ContactForm";
import FadeInSection from "@/components/FadeInSection";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Contact & Press",
  description: "Get in touch with Maison Bloem: general enquiries, press and media, partnerships, and careers.",
};

export default function ContactV2Page() {
  return (
    <>
      <V2PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Get in <em>touch.</em>
          </>
        }
        subtitle="We'd love to hear from you, whether you have a question, a collaboration idea, or simply want to say hello."
      />

      <section className={`${shared.section} ${shared.container}`} style={{ borderBottom: "none" }}>
        <FadeInSection className={styles.grid}>
          <div>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <p className={styles.formSub}>We reply within 48 hours, always personally.</p>
            <V2ContactForm />
          </div>

          <div className={styles.info}>
            <div>
              <span className={styles.infoLabel}>Email</span>
              <p className={styles.infoBody}>
                <a href={`mailto:${brand.emails.general}`}>{brand.emails.general}</a>
              </p>
            </div>
            <div>
              <span className={styles.infoLabel}>Press &amp; media</span>
              <p className={styles.infoBody}>
                <a href={`mailto:${brand.emails.press}`}>{brand.emails.press}</a>
              </p>
            </div>
            <div>
              <span className={styles.infoLabel}>Follow us</span>
              <p className={styles.infoBody}>
                <a href={brand.social.instagram.url} target="_blank" rel="noreferrer">
                  {brand.social.instagram.handle}
                </a>{" "}
                on Instagram
                <br />
                <a href={brand.social.tiktok.url} target="_blank" rel="noreferrer">
                  {brand.social.tiktok.handle}
                </a>{" "}
                on TikTok
              </p>
            </div>
            <div>
              <span className={styles.infoLabel}>Opening soon</span>
              <p className={styles.infoBody}>
                {brand.launchCity}, {brand.launchCountry}. Coming {brand.launchYear}.
              </p>
            </div>
            <div>
              <span className={styles.infoLabel}>Job applications</span>
              <p className={styles.infoBody}>
                Please visit our <Link href="/v2/jobs">Jobs page</Link> to view open positions and apply directly.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
