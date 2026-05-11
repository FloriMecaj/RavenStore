"use client";

import { FormEvent, useState } from "react";
import { Instagram, Phone, Send } from "lucide-react";
import { site } from "@/lib/data";

export function ContactPageClient() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1400);
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">Contact</p>
        <h1 className="mt-4 font-cinzel text-4xl uppercase tracking-[0.12em] text-white">Step into the inbox</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-muted)]">
          Ask about jewelry drops, café visits, or event nights. Keep it short. We like mystery, not friction.
        </p>

        <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
          <input className="raven-input" placeholder="Name" required />
          <input className="raven-input" type="email" placeholder="Email" required />
          <select className="raven-input" defaultValue="Jewelry">
            <option>Jewelry</option>
            <option>Café</option>
            <option>Events</option>
          </select>
          <textarea className="raven-input min-h-40 resize-none" placeholder="Message" required />
          <button type="submit" className="raven-button w-full justify-center">
            <Send size={16} className={loading ? "animate-pulse" : ""} />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="space-y-6">
        <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-mist p-8">
          <p className="font-cinzel text-2xl text-white">Visit the shop</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-muted)]">{site.address}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-[2rem] border border-[var(--border-subtle)] p-8 transition-transform hover:-translate-y-1"
          >
            <Instagram className="text-[var(--accent-crimson)]" />
            <p className="mt-4 font-cinzel text-xl text-white">Instagram</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">@ravenstore.al</p>
          </a>
          <a href={`tel:${site.phone}`} className="rounded-[2rem] border border-[var(--border-subtle)] p-8 transition-transform hover:-translate-y-1">
            <Phone className="text-[var(--accent-crimson)]" />
            <p className="mt-4 font-cinzel text-xl text-white">Phone</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{site.phone}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
