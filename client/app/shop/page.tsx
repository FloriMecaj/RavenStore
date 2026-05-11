import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata = {
  title: "Shop",
  description: "Curated anime jewelry, accessories, clothing, and small dark treasures."
};

const categories = ["All", "Necklaces", "Rings", "Bracelets", "Stickers", "Accessories"] as const;

export default function ShopPage() {
  const featured = products.filter((product) => product.featured);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <section className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-mist p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">Featured Drop</p>
        <h1 className="mt-4 font-cinzel text-4xl uppercase tracking-[0.12em] text-white md:text-6xl">Relics for the midnight collection</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
          Raven pendants lead the room: hard silver lines, crimson edges, and enough presence to anchor a full look.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <div
              key={category}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.28em] ${
                index === 0
                  ? "border-[var(--accent-crimson)] bg-[rgba(196,30,58,0.1)] text-white shadow-glow"
                  : "border-[var(--border-subtle)] text-[var(--text-muted)]"
              }`}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
