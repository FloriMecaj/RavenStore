import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "border-[var(--accent-crimson)] bg-[linear-gradient(135deg,rgba(196,30,58,0.2),rgba(139,0,0,0.08))] text-white shadow-[0_0_28px_rgba(196,30,58,0.18)] hover:shadow-[0_0_34px_rgba(196,30,58,0.32)]",
  secondary:
    "border-[rgba(201,168,76,0.45)] bg-[rgba(255,255,255,0.02)] text-white hover:border-[var(--accent-gold)] hover:bg-[rgba(255,255,255,0.05)]",
  ghost:
    "border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] text-[var(--text-primary)] hover:border-[var(--accent-crimson)] hover:bg-[rgba(196,30,58,0.12)]"
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-5 py-3.5 text-xs tracking-[0.2em]",
  sm: "px-4 py-2.5 text-[11px] tracking-[0.18em]",
  lg: "px-6 py-4 text-xs tracking-[0.24em]",
  icon: "h-10 w-10 p-0"
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-3 rounded-full border uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild) {
      const { children, ...rest } = props;

      if (React.isValidElement(children)) {
        return React.cloneElement(children, {
          ...rest,
          className: cn(classes, (children.props as { className?: string }).className)
        });
      }

      return null;
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
