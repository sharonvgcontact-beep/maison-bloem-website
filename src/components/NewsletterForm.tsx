"use client";

import { useState, type FormEvent } from "react";
import styles from "./NewsletterForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm({ onLight = false }: { onLight?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={`${styles.form} ${onLight ? styles.onLight : ""}`} onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
      />
      <button type="submit" className={styles.button} disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Notify Me"}
      </button>
      {status === "success" && (
        <p className={styles.message}>You&apos;re on the list — we&apos;ll be in touch.</p>
      )}
      {status === "error" && (
        <p className={`${styles.message} ${styles.error}`}>Something went wrong — please try again.</p>
      )}
    </form>
  );
}
