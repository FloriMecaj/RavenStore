"use client";

import Image from "next/image";
import { Instagram, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/data";

type InstagramResponse = {
  items: GalleryItem[];
  source: "instagram" | "fallback";
};

const filters = ["All", "Products", "Cafe", "Events"] as const;

export function InstagramGrid({ fallback }: { fallback: GalleryItem[] }) {
  const [items, setItems] = useState<GalleryItem[]>(fallback);
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [source, setSource] = useState<InstagramResponse["source"]>("fallback");

  useEffect(() => {
    let ignore = false;

    fetch("/api/instagram", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: InstagramResponse) => {
        if (!ignore && Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
          setSource(data.source);
        }
      })
      .catch(() => undefined);

    return () => {
      ignore = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.28em] transition-all ${
              active === filter
                ? "border-[var(--accent-crimson)] bg-[rgba(196,30,58,0.12)] text-white shadow-glow"
                : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-white"
            }`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
        <span className="ml-auto text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
          Feed: {source === "instagram" ? "Live public fetch" : "Curated fallback"}
        </span>
      </div>

      <motion.div layout className="columns-1 gap-5 md:columns-2 xl:columns-3">
        {filtered.map((item, index) => (
          <motion.button
            layout
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className="group relative mb-5 block w-full overflow-hidden rounded-[1.75rem] border border-[var(--border-subtle)] text-left"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.04 }}
          >
            <div className="relative min-h-[280px] w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,4,5,0.82))]" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
              <div>
                <p className="font-cinzel text-base text-[var(--text-primary)]">{item.title}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">{item.category}</p>
              </div>
              <Instagram className="text-[var(--text-primary)]" size={18} />
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[65] flex items-center justify-center bg-[rgba(10,4,5,0.92)] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close lightbox"
              className="absolute right-6 top-6 rounded-full border border-[var(--border-subtle)] p-3 text-white"
              onClick={() => setSelected(null)}
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-[var(--border-subtle)]"
            >
              <Image src={selected.image} alt={selected.title} fill className="object-cover" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
