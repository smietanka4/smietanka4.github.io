"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("Wysyłam wiadomość...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xovldbgk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Dziękuję za wiadomość! Skontaktuję się z Tobą wkrótce.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setMessage("Wystąpił błąd połączenia. Spróbuj ponownie.");
    } finally {
      // Clear message after 5 seconds if success or error
      setTimeout(() => {
        setMessage("");
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section id="kontakt">
      <h2>
        <i className="fa-solid fa-envelope"></i> Kontakt
      </h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label>
          <i className="fa-solid fa-user"></i> Imię:
          <br />
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          <i className="fa-solid fa-at"></i> Email:
          <br />
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          <i className="fa-solid fa-message"></i> Wiadomość:
          <br />
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit" disabled={status === "loading"}>
          <i className="fa-solid fa-paper-plane"></i> Wyślij
        </button>
      </form>
      <div
        id="contactResult"
        className={status !== "idle" ? status : ""}
        style={{ opacity: status !== "idle" ? 1 : 0 }}
      >
        {message}
      </div>
    </section>
  );
}
