"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY };
      targetRef.current = next;
      setPosition(next);
    };

    const interval = window.setInterval(() => {
      setRing((current) => ({
        x: current.x + (targetRef.current.x - current.x) * 0.18,
        y: current.y + (targetRef.current.y - current.y) * 0.18
      }));
    }, 16);

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <div
        className="custom-cursor-dot"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <div
        className="custom-cursor-ring"
        style={{ transform: `translate(${ring.x}px, ${ring.y}px)` }}
      />
    </div>
  );
}
