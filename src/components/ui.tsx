"use client";

import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from "react";
import { motion, useInView } from "motion/react";

/* ---------- Reveal: fade/slide in when scrolled into view ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Tilt: mouse-tracked 3D card ---------- */
export function Tilt({
  children,
  className = "",
  max = 10,
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
    el.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ---------- Section header ---------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
  color = "text-orange",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  color?: string;
}) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <span className={`eyebrow ${color}`}>{eyebrow}</span>
      <h2 className="font-display mt-4 text-4xl leading-[1.02] text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-ink/70">{sub}</p>}
    </Reveal>
  );
}

/* ---------- Sticker doodles (outline stickers like the live site) ---------- */
export function Sticker({
  kind,
  className = "",
  style,
}: {
  kind: "star" | "bolt" | "heart" | "peace" | "smile";
  className?: string;
  style?: CSSProperties;
}) {
  const common = "fill-white stroke-ink";
  const sw = 6;
  let path: ReactNode;
  switch (kind) {
    case "star":
      path = <path d="M50 6l13 28 30 3-22 21 6 30-27-15-27 15 6-30L7 37l30-3z" className={common} strokeWidth={sw} strokeLinejoin="round" />;
      break;
    case "bolt":
      path = <path d="M58 4L20 56h22l-8 40 44-58H56z" className={common} strokeWidth={sw} strokeLinejoin="round" />;
      break;
    case "heart":
      path = <path d="M50 88S10 60 10 34c0-12 9-22 21-22 9 0 15 5 19 12 4-7 10-12 19-12 12 0 21 10 21 22 0 26-40 54-40 54z" className={common} strokeWidth={sw} strokeLinejoin="round" />;
      break;
    case "peace":
      path = (
        <>
          <circle cx="50" cy="50" r="40" className={common} strokeWidth={sw} />
          <path d="M50 10v80M50 50L22 78M50 50l28 28" className="stroke-ink" strokeWidth={sw} strokeLinecap="round" fill="none" />
        </>
      );
      break;
    default:
      path = (
        <>
          <circle cx="50" cy="50" r="40" className={common} strokeWidth={sw} />
          <path d="M34 40l6 8-6 8M66 40l-6 8 6 8M30 62c10 12 30 12 40 0" className="stroke-ink" strokeWidth={sw} strokeLinecap="round" fill="none" />
        </>
      );
  }
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      {path}
    </svg>
  );
}
