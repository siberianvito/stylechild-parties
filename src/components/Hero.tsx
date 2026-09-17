"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { HERO, BRAND } from "@/lib/data";
import { asset } from "@/lib/asset";
import { fireConfetti } from "./Confetti";
import { Sticker } from "./ui";

// Still header (the film lives in the "Why StyleChild" section below).
export default function Hero() {
  useEffect(() => {
    // one welcome burst after the headline lands
    const t = window.setTimeout(() => fireConfetti({ mode: "cannons", count: 120 }), 1400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-white">
      {/* still header image */}
      <div className="absolute inset-0">
        <img
          src={asset("/media/hero-poster.jpg")}
          alt="Kids customizing sneakers at an outdoor StyleChild party"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* readability gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/10 to-transparent" />
      </div>

      {/* floating stickers */}
      <Sticker kind="star" className="floaty absolute left-[6%] top-[18%] hidden w-16 md:block" style={{ ["--r" as string]: "-12deg" }} />
      <Sticker kind="bolt" className="floaty absolute right-[9%] top-[22%] hidden w-14 md:block" style={{ ["--r" as string]: "14deg", animationDelay: "-1.6s" }} />
      <Sticker kind="peace" className="floaty absolute right-[18%] bottom-[24%] hidden w-14 lg:block" style={{ ["--r" as string]: "-8deg", animationDelay: "-3s" }} />
      <Sticker kind="heart" className="floaty absolute left-[38%] top-[14%] hidden w-12 lg:block" style={{ ["--r" as string]: "10deg", animationDelay: "-2.2s" }} />

      {/* copy */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 md:justify-center md:pb-24">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="tag-block bg-pink font-display text-base tracking-wide sm:text-xl"
          >
            {HERO.kicker}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display mt-4 text-[13vw] leading-[0.92] text-orange drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] sm:text-7xl md:text-8xl lg:text-[7.2rem]"
          >
            {HERO.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-ink/85 sm:text-xl"
          >
            {HERO.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#book" className="btn btn-orange text-base">
              {HERO.cta}
              <span aria-hidden>→</span>
            </a>
            <a href="#included" className="btn btn-ghost text-base">
              {HERO.cta2}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-ink/60"
          >
            <span>★★★★★ Parent-approved</span>
            <span>Boca Raton HQ · We travel · We ship</span>
            <a href={BRAND.phoneHref} className="text-pink">{BRAND.phone}</a>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#party"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="eyebrow absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-ink/60 md:flex"
      >
        Plan your party
        <span className="inline-block animate-bounce">↓</span>
      </motion.a>
    </section>
  );
}
