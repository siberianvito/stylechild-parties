"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ALL_SHOTS, type Shot } from "@/lib/gallery";
import { asset } from "@/lib/asset";

const TAGS = ["All", "Parties", "Stations", "Themes"] as const;

// Masonry collage of every picture, with filters and a keyboard-friendly lightbox.
export default function Collage() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const shots = useMemo<Shot[]>(() => (tag === "All" ? ALL_SHOTS : ALL_SHOTS.filter((s) => s.tag === tag)), [tag]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % shots.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, shots.length]);

  return (
    <section className="bg-white pb-24 pt-10 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => { setTag(t); setOpen(null); }}
              className={`rounded-full border-2 px-4 py-2 text-sm font-extrabold transition ${
                tag === t ? "border-orange bg-orange text-white" : "border-line text-ink/70 hover:border-orange hover:text-orange"
              }`}
              aria-pressed={tag === t}
            >
              {t}
              <span className="ml-2 text-xs opacity-70">
                {t === "All" ? ALL_SHOTS.length : ALL_SHOTS.filter((s) => s.tag === t).length}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 lg:gap-5">
          {shots.map((s, i) => (
            <motion.button
              key={s.src}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
              onClick={() => setOpen(i)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.4rem] bg-cream shadow-[0_14px_40px_rgba(15,15,15,0.10)] lg:mb-5"
              style={{ rotate: `${(i % 3 - 1) * 0.8}deg` }}
              aria-label={`Open photo: ${s.alt}`}
            >
              <img
                src={asset(s.src)}
                alt={s.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 text-left text-sm font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                {s.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && shots[open] && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              key={shots[open].src}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={asset(shots[open].src)} alt={shots[open].alt} className="max-h-[82vh] w-auto rounded-2xl object-contain" />
              <figcaption className="mt-3 text-center text-sm font-bold text-white/85">
                {shots[open].alt} · {open + 1} / {shots.length}
              </figcaption>
            </motion.figure>
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-ink">×</button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + shots.length) % shots.length); }} className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-ink sm:left-6">←</button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % shots.length); }} className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-ink sm:right-6">→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
