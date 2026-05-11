import Link from "next/link";
import { ChevronDown, Coffee, Gem } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { site } from "@/lib/data";

export const metadata = {
  title: "Home",
  description: "Anime jewelry and café atmosphere in a crimson gothic world."
};

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="hero-fog absolute inset-0" />
      <ParticleField />
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent-crimson)] shadow-glow" />
            4.9 / 5 on Google · 287 reviews
          </div>
          <h1 className="glitch font-cinzel text-5xl uppercase leading-none tracking-[0.16em] text-white md:text-8xl">
            RAVEN STORE
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)] md:text-xl">
            Anime Jewelry & Café · Tirana, Albania. A secret corner of crimson metal, midnight coffee, and cinematic calm.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/shop" className="raven-button">
              <Gem size={16} />
              Explore Jewelry
            </Link>
            <Link href="/cafe" className="raven-button raven-button-secondary">
              <Coffee size={16} />
              Visit the Café
            </Link>
          </div>
          <div className="mt-10 grid gap-4 text-sm uppercase tracking-[0.22em] text-[var(--text-muted)] md:grid-cols-3">
            <p>{site.address}</p>
            <p>{site.hours}</p>
            <p>{site.priceRange}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[var(--accent-crimson)]">
        <ChevronDown />
      </div>
    </section>
  );
}
