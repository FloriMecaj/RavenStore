"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/cafe", label: "Café" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "border-b border-[var(--border-subtle)] bg-[rgba(17,6,8,0.72)] backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--border-subtle)] shadow-glow">
              <Image src="/images/logo-placeholder.svg" alt="Raven Store logo" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <p className="font-cinzel text-sm tracking-[0.35em] text-[var(--text-primary)]">RAVEN</p>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Tirana</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="relative pb-2 text-sm uppercase tracking-[0.28em] text-[var(--text-primary)] transition-colors hover:text-white">
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 h-px w-full bg-[var(--accent-crimson)] shadow-glow"
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[var(--border-subtle)] p-2 text-[var(--text-primary)] transition-all hover:border-[var(--accent-crimson)] hover:text-white md:block"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              className="rounded-full border border-[var(--border-subtle)] p-2 text-[var(--text-primary)] md:hidden"
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col justify-center bg-[rgba(10,4,5,0.96)] px-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45 }}
          >
            <div className="mx-auto flex w-full max-w-md flex-col gap-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-[var(--border-subtle)] py-4 font-cinzel text-2xl tracking-[0.18em] text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
