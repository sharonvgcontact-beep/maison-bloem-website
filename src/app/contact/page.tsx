import type { Metadata } from "next";
import styles from "./Contact.module.css";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FadeInSection from "@/components/FadeInSection";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Contact & Press",
  description: "Get in touch with Maison Bloem — general enquiries, press & media, partnerships, and careers.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Get in
            <br />
            touch.
          </>
        }
        subtitle="We'd love to hear from you — whether you have a question, a collaboration idea, or simply want to say hello."
        bg="rosewood"
      />

      <section className={styles.body}>
        <FadeInSection>
          <div className={styles.inner}>
            <div>
              <h2 className={styles.formTitle}>Send us a message</h2>
              <p className={styles.formSub}>We reply within 48 hours, always personally.</p>
              <ContactForm />
            </div>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${brand.emails.general}`}>{brand.emails.general}</a>
                </p>
              </div>
              <div className={styles.infoItem}>
                <h4>Press &amp; Media</h4>
                <p>
                  <a href={`mailto:${brand.emails.press}`}>{brand.emails.press}</a>
                </p>
              </div>
              <div className={styles.infoItem}>
                <h4>Follow Us</h4>
                <p>
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
              <div className={styles.infoItem}>
                <h4>Opening Soon</h4>
                <p>
                  {brand.launchCity}, {brand.launchCountry} — Coming {brand.launchYear}
                </p>
              </div>
              <div className={styles.infoItem}>
                <h4>For Job Applications</h4>
                <p>
                  Please visit our <a href="/jobs">Jobs page</a> to view open positions and apply directly.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
