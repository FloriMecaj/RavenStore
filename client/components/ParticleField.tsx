"use client";

import { useEffect, useRef } from "react";

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedY: Math.random() * 0.8 + 0.2,
      speedX: Math.random() * 0.6 - 0.3,
      alpha: Math.random() * 0.45 + 0.18
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.y * 0.01);
        context.fillStyle = `rgba(196, 30, 58, ${particle.alpha})`;
        context.beginPath();
        context.ellipse(0, 0, particle.size * 1.8, particle.size, Math.PI / 4, 0, Math.PI * 2);
        context.fill();
        context.restore();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.y > height + 12) {
          particle.y = -20;
          particle.x = Math.random() * width;
        }
        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-80" />;
}
