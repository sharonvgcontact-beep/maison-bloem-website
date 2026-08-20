"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

const subjects = ["General Enquiry", "Press & Media", "Partnership", "Catering & Events", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label} htmlFor="name">
          Your Name
        </label>
        <input id="name" name="name" type="text" required className={styles.input} placeholder="Jane Doe" />
      </div>

      <div>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={styles.input}
          placeholder="hello@example.com"
        />
      </div>

      <div>
        <label className={styles.label} htmlFor="subject">
          Subject
        </label>
        <select id="subject" name="subject" className={styles.select} defaultValue={subjects[0]}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className={styles.textarea}
          placeholder="Tell us what's on your mind..."
        />
      </div>

      <button type="submit" className={styles.submit} disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && <p className={styles.message}>Thank you — we&apos;ll reply within 48 hours.</p>}
      {status === "error" && (
        <p className={`${styles.message} ${styles.error}`}>Something went wrong — please try again.</p>
      )}
    </form>
  );
}
