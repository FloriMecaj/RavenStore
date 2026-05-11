import Image from "next/image";
import Link from "next/link";
import { japaneseStrip, site, fallbackGallery } from "@/lib/data";

export function Footer() {
  const preview = fallbackGallery.slice(0, 4);

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[rgba(10,4,5,0.95)]">
      <div className="overflow-hidden border-b border-[var(--border-subtle)] py-3">
        <div className="animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {japaneseStrip.map((item) => `${item}  ·  `).join(" ")}
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image src="/images/logo-placeholder.svg" alt="Raven Store logo" width={52} height={52} />
            <div>
              <p className="font-cinzel text-lg tracking-[0.24em] text-[var(--text-primary)]">{site.name}</p>
              <p className="text-sm text-[var(--text-muted)]">{site.tagline}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--text-muted)]">
            Jewelry, desserts, coffee, and midnight mood packed into one hidden corner of Tirana.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-cinzel text-lg text-[var(--text-primary)]">Quick Links</p>
          <div className="grid grid-cols-2 gap-3 text-sm text-[var(--text-muted)]">
            {[
              ["/shop", "Shop"],
              ["/cafe", "Café"],
              ["/gallery", "Gallery"],
              ["/about", "About"],
              ["/contact", "Contact"]
            ].map(([href, label]) => (
              <Link key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-cinzel text-lg text-[var(--text-primary)]">Feed Preview</p>
          <div className="grid grid-cols-4 gap-2">
            {preview.map((item) => (
              <div key={item.id} className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border-subtle)] px-5 py-4 text-center text-xs uppercase tracking-[0.24em] text-[var(--text-muted)] md:px-8">
        © 2024 Raven Store · Tirana, Albania · Made with love for anime lovers
      </div>
    </footer>
  );
}
