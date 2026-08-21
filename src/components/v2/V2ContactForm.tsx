"use client";

import { useState, type FormEvent } from "react";
import shared from "@/app/v2/V2Shared.module.css";
import styles from "./V2ContactForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

const subjects = ["General Enquiry", "Press & Media", "Partnership", "Catering & Events", "Other"];

export default function V2ContactForm() {
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
    <form onSubmit={handleSubmit}>
      <div className={shared.field}>
        <label className={shared.label} htmlFor="name">
          Your name
        </label>
        <input id="name" name="name" type="text" required className={shared.input} placeholder="Your name" />
      </div>

      <div className={shared.field}>
        <label className={shared.label} htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={shared.input}
          placeholder="you@example.com"
        />
      </div>

      <div className={shared.field}>
        <label className={shared.label} htmlFor="subject">
          Subject
        </label>
        <select id="subject" name="subject" className={shared.select} defaultValue={subjects[0]}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className={shared.field}>
        <label className={shared.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className={shared.textarea}
          placeholder="Tell us what's on your mind"
        />
      </div>

      <button type="submit" className={`${shared.btnPrimary} ${styles.submit}`} disabled={status === "loading"}>
        {status === "loading" ? "Sending" : "Send Message"}
      </button>

      {status === "success" && <p className={styles.message}>Thank you. We&apos;ll reply within 48 hours.</p>}
      {status === "error" && (
        <p className={`${styles.message} ${styles.error}`}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
