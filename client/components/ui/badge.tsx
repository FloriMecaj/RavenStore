import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "gold";

const badgeVariants: Record<BadgeVariant, string> = {
  default: "border-[var(--accent-crimson)] bg-[rgba(196,30,58,0.12)] text-white shadow-glow",
  outline: "border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] text-[var(--text-muted)]",
  gold: "border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.08)] text-[var(--accent-gold)]"
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em]",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
