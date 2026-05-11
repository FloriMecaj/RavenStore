import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[160px] w-full rounded-[1.25rem] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus-visible:border-[var(--accent-crimson)] focus-visible:bg-[rgba(255,255,255,0.045)] focus-visible:ring-4 focus-visible:ring-[rgba(196,30,58,0.12)]",
          "placeholder:text-[var(--text-muted)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
