"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.06, duration: 0.55 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 shadow-card"
    >
      <span className="absolute right-4 top-3 text-6xl text-[rgba(255,255,255,0.05)]">{product.watermark}</span>
      <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[rgba(255,255,255,0.02)]">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,4,5,0.68))]" />
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-cinzel text-lg text-[var(--text-primary)]">{product.name}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{product.description}</p>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.84 }}
            animate={liked ? { scale: [1, 1.25, 1] } : {}}
            className="rounded-full border border-[var(--border-subtle)] p-2 text-[var(--accent-crimson)] transition-colors hover:bg-[rgba(196,30,58,0.12)]"
            onClick={() => setLiked((current) => !current)}
          >
            <Heart size={16} fill={liked ? "currentColor" : "none"} />
          </motion.button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-gold)]">{formatPrice(product.price)}</p>
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">{product.category}</span>
        </div>
      </div>
    </motion.article>
  );
}
