"use client";

import { useEffect, useRef } from "react";

// Global confetti layer. Fire it from anywhere:
//   window.dispatchEvent(new CustomEvent("sc:confetti", { detail: { mode: "burst", x: 0.5, y: 0.5, count: 160 } }))
//   modes: "burst" (point), "cannons" (both bottom corners), "curtain" (full-width rain from top)

export type ConfettiDetail = {
  mode?: "burst" | "cannons" | "curtain";
  x?: number; // 0..1 viewport
  y?: number;
  count?: number;
};

export function fireConfetti(detail: ConfettiDetail = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<ConfettiDetail>("sc:confetti", { detail }));
}

const COLORS = ["#f5874f", "#eb1256", "#ff93c6", "#8b3fc4", "#ffd23f", "#4fd1c5", "#8fd3ff"];

type P = {
  x: number; y: number; vx: number; vy: number;
  w: number; h: number; rot: number; vr: number;
  color: string; life: number; ttl: number; shape: 0 | 1 | 2; wobble: number;
};

export default function Confetti() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = `${W}px`; canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const parts: P[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const spawn = (x: number, y: number, n: number, angle: number, spread: number, speed: number, gravityHint = 1) => {
      for (let i = 0; i < n; i++) {
        const a = angle + (Math.random() - 0.5) * spread;
        const s = speed * (0.5 + Math.random() * 0.8);
        parts.push({
          x, y,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s * gravityHint,
          w: 6 + Math.random() * 8,
          h: 4 + Math.random() * 6,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.35,
          color: COLORS[(Math.random() * COLORS.length) | 0],
          life: 0,
          ttl: 110 + Math.random() * 90,
          shape: ((Math.random() * 3) | 0) as 0 | 1 | 2,
          wobble: Math.random() * Math.PI * 2,
        });
      }
    };

    const onFire = (e: Event) => {
      if (reduced) return;
      const d = (e as CustomEvent<ConfettiDetail>).detail || {};
      const mode = d.mode ?? "burst";
      const count = d.count ?? 140;
      if (mode === "burst") {
        spawn((d.x ?? 0.5) * W, (d.y ?? 0.5) * H, count, -Math.PI / 2, Math.PI * 1.6, 13);
      } else if (mode === "cannons") {
        spawn(0, H * 0.95, count, -Math.PI / 3.2, 0.6, 22);
        spawn(W, H * 0.95, count, -Math.PI + Math.PI / 3.2, 0.6, 22);
      } else {
        for (let i = 0; i < count; i++) {
          spawn(Math.random() * W, -20 - Math.random() * H * 0.4, 1, Math.PI / 2, 0.5, 3);
        }
      }
      if (!running) loop();
    };
    window.addEventListener("sc:confetti", onFire);

    let running = false;
    let raf = 0;
    const loop = () => {
      running = true;
      ctx.clearRect(0, 0, W, H);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life++;
        p.vy += 0.28;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.wobble += 0.12;
        p.x += p.vx + Math.sin(p.wobble) * 0.8;
        p.y += p.vy;
        p.rot += p.vr;
        const fade = p.life > p.ttl - 30 ? (p.ttl - p.life) / 30 : 1;
        if (p.life > p.ttl || p.y > H + 40) { parts.splice(i, 1); continue; }
        ctx.save();
        ctx.globalAlpha = Math.max(0, fade);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === 0) ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.wobble)) + 1);
        else if (p.shape === 1) { ctx.beginPath(); ctx.arc(0, 0, p.h / 2, 0, Math.PI * 2); ctx.fill(); }
        else { ctx.beginPath(); ctx.moveTo(0, -p.h); ctx.lineTo(p.w / 2, p.h / 2); ctx.lineTo(-p.w / 2, p.h / 2); ctx.closePath(); ctx.fill(); }
        ctx.restore();
      }
      if (parts.length) raf = requestAnimationFrame(loop);
      else { running = false; ctx.clearRect(0, 0, W, H); }
    };

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("sc:confetti", onFire);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[80]"
    />
  );
}
