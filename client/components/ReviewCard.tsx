import { Star } from "lucide-react";
import type { Review } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card>
      <CardContent className="p-6">
      <div className="mb-4 flex items-center gap-1 text-[var(--accent-gold)]">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="text-base leading-7 text-[var(--text-primary)]">“{review.quote}”</p>
      <p className="mt-5 font-cinzel text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">{review.name}</p>
      </CardContent>
    </Card>
  );
}
