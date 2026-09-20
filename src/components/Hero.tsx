"use client";

import { useEffect } from "react";
import Link from "next/link";
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
    <section id="top" className="relative isolate overflow-hidden bg-white md:min-h-[100svh]">
      {/* phones: photo on top, copy below (keeps every face visible) */}
      <div className="relative pt-20 md:hidden">
        <img
          src={asset("/media/hero-mixed.jpg")}
          alt="Kids at a StyleChild party showing off custom crowns, tees, slippers, squishies and sneakers"
          className="aspect-[4/3] w-full object-cover object-top"
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* tablet/desktop: full-bleed still */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={asset("/media/hero-mixed.jpg")}
          alt="Kids at a StyleChild party showing off custom crowns, tees, slippers, squishies and sneakers"
          className="h-full w-full object-cover object-top"
          fetchPriority="high"
        />
        {/* readability gradients */}
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-white via-white/90 via-55% to-transparent" />
      </div>

      {/* floating stickers */}
      <Sticker kind="star" className="floaty absolute left-[3%] bottom-[30%] hidden w-16 md:block" style={{ ["--r" as string]: "-12deg" }} />
      <Sticker kind="bolt" className="floaty absolute right-[3%] bottom-[32%] hidden w-14 md:block" style={{ ["--r" as string]: "14deg", animationDelay: "-1.6s" }} />
            
      {/* copy */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-end px-4 pb-12 pt-4 text-center sm:px-6 md:min-h-[100svh] md:pb-16 md:pt-32">
        <div className="max-w-4xl">
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
            className="font-display mt-3 text-[12vw] leading-[0.95] text-orange drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            {HERO.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-relaxed text-ink/85 sm:text-lg"
          >
            {HERO.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#book" className="btn btn-orange text-base">
              {HERO.cta}
              <span aria-hidden>→</span>
            </a>
            <Link href="/packages/" className="btn btn-ghost text-base">
              {HERO.cta2}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-ink/60"
          >
            <span>★★★★★ Parent-approved</span>
            <span>Boca Raton HQ · We travel · We ship</span>
            <a href={BRAND.phoneHref} className="text-pink">{BRAND.phone}</a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
