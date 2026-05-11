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
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              className="absolute inset-0 bg-[rgba(10,4,5,0.58)] backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="absolute right-0 top-0 flex h-full w-[75vw] max-w-[380px] flex-col overflow-hidden border-l border-[var(--border-subtle)] bg-[linear-gradient(180deg,rgba(18,7,9,0.98),rgba(10,4,5,0.98))] shadow-[0_0_60px_rgba(0,0,0,0.45)]"
              initial={{ x: "100%", rotateZ: 2, scale: 0.98 }}
              animate={{ x: 0, rotateZ: 0, scale: 1 }}
              exit={{ x: "100%", rotateZ: 2, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,30,58,0.18),transparent_34%),radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.03),transparent_30%)]" />

              <div className="relative flex items-center justify-between border-b border-[var(--border-subtle)] px-5 py-5">
                <div>
                  <p className="font-cinzel text-sm tracking-[0.3em] text-[var(--text-primary)]">MENU</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Raven Store</p>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="rounded-full border border-[var(--border-subtle)] p-2 text-[var(--text-primary)] transition-all hover:border-[var(--accent-crimson)] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative flex flex-1 flex-col justify-between px-5 py-6">
                <div className="space-y-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.07 * index, duration: 0.35 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between rounded-[1.25rem] border border-transparent px-4 py-4 font-cinzel text-2xl tracking-[0.14em] text-[var(--text-primary)] transition-all hover:border-[var(--border-subtle)] hover:bg-[rgba(255,255,255,0.03)]"
                      >
                        <span>{link.label}</span>
                        <motion.span
                          className="h-px w-10 origin-left bg-[var(--accent-crimson)] opacity-60"
                          initial={{ scaleX: 0.2 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.1 + 0.07 * index, duration: 0.4 }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] p-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Late-night mood</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-primary)]">
                    Jewelry, coffee, dessert, and crimson light. Open until 11 PM.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
