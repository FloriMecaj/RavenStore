"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("raven-loader-seen");

    if (!seen) {
      setVisible(true);
      const timer = window.setTimeout(() => {
        window.sessionStorage.setItem("raven-loader-seen", "1");
        setVisible(false);
      }, 1800);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="matrix-rain" />
          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Raven Store emblem"
                width={132}
                height={132}
                className="drop-shadow-[0_0_30px_rgba(196,30,58,0.35)]"
              />
            </motion.div>
            <motion.p
              className="font-cinzel text-2xl tracking-[0.45em] text-[var(--text-primary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.35 }}
            >
              RAVEN STORE
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
