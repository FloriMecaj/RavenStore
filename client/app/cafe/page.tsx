import Image from "next/image";
import { getAlbaniaOpenState } from "@/lib/utils";
import { menu } from "@/lib/data";

export const metadata = {
  title: "Café",
  description: "Coffee, cocktails, desserts, and a moody late-night anime café atmosphere."
};

function Section({ title, items }: { title: string; items: Array<{ name: string; price: string; description: string }> }) {
  return (
    <section className="space-y-4">
      <h2 className="font-cinzel text-2xl uppercase tracking-[0.16em] text-white">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.name}
            className={`rounded-[1.5rem] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] p-5 ${
              index % 2 === 0 ? "translate-x-0 md:translate-x-4" : "translate-x-0 md:-translate-x-4"
            } transition-transform duration-500 hover:translate-x-0`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-cinzel text-lg text-[var(--text-primary)]">{item.name}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.description}</p>
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-gold)]">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CafePage() {
  const openState = getAlbaniaOpenState();

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">Dark menu</p>
          <h1 className="mt-4 font-cinzel text-4xl uppercase tracking-[0.12em] text-white md:text-6xl">Steam, sugar, and red light</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            An intimate café layered with anime energy, soft shadows, and dessert that looks too sharp to be real.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Dine-in", "Curbside Pickup", "Delivery"].map((badge) => (
              <span key={badge} className="rounded-full border border-[var(--accent-crimson)] bg-[rgba(196,30,58,0.12)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white shadow-glow">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] px-5 py-3">
            <span className={`h-2.5 w-2.5 rounded-full ${openState.isOpen ? "bg-emerald-400" : "bg-rose-500"}`} />
            <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-primary)]">{openState.label}</span>
            <span className="text-sm text-[var(--text-muted)]">{openState.detail}</span>
          </div>
        </div>

        <div className="grid gap-10">
          <Section title="Cocktails" items={menu.cocktails} />
          <Section title="Hot Drinks" items={menu.hotDrinks} />
          <Section title="Desserts" items={menu.desserts} />
          <Section title="Snacks" items={menu.snacks} />
        </div>
      </div>

      <div className="relative">
        <div className="cafe-steam absolute inset-0 -z-10" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[var(--border-subtle)]">
            <Image src="/images/gallery-dessert-lotus.svg" alt="Lotus dessert" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,4,5,0.74))]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-cinzel text-2xl text-white">Lotus Moon Jar</p>
              <p className="mt-2 max-w-sm text-sm leading-7 text-[var(--text-muted)]">
                The dessert centerpiece: creamy, layered, and built for slow nights.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {["/images/gallery-cafe-night.svg", "/images/gallery-coffee-sigil.svg"].map((image) => (
              <div key={image} className="relative min-h-[220px] overflow-hidden rounded-[2rem] border border-[var(--border-subtle)]">
                <Image src={image} alt="Raven café detail" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
