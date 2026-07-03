"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full resize-y border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center border border-white/15 px-5 py-3 text-xs tracking-[0.18em] text-white uppercase transition hover:border-accent hover:text-accent"
      >
        Send message
      </button>
    </form>
  );
}
