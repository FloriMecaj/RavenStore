import { Star } from "lucide-react";
import type { Review } from "@/lib/data";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-[2rem] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] p-6 shadow-card">
      <div className="mb-4 flex items-center gap-1 text-[var(--accent-gold)]">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="text-base leading-7 text-[var(--text-primary)]">“{review.quote}”</p>
      <p className="mt-5 font-cinzel text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">{review.name}</p>
    </article>
  );
}
