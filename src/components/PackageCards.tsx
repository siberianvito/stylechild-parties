"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { PACKAGES, money, type Package } from "@/lib/pricing";
import { asset } from "@/lib/asset";
import { Reveal, Tilt } from "./ui";

const TAG: Record<Package["color"], string> = {
  orange: "bg-orange",
  pink: "bg-pink",
  purple: "bg-purple",
  turq: "bg-turq",
  yellow: "bg-yellow !text-ink",
  sky: "bg-sky !text-ink",
};

export default function PackageCards({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<Package | null>(null);
  const list = limit ? PACKAGES.slice(0, limit) : PACKAGES;

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 0.08}>
            <Tilt className="group h-full" max={6}>
              <article id={p.slug} className="card flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <img
                    src={asset(p.image)}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className={`tag-block absolute left-4 top-4 font-display text-xs tracking-widest ${TAG[p.color]}`}>
                    {p.ages}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl shadow-lg">
                    {p.emoji}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl leading-tight text-ink">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink/70">{p.short}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-cream p-3">
                    <div>
                      <div className="text-[0.6rem] font-extrabold uppercase tracking-widest text-ink/45">Up to 10</div>
                      <div className="font-display text-2xl text-orange">{money(p.price10)}</div>
                    </div>
                    <div>
                      <div className="text-[0.6rem] font-extrabold uppercase tracking-widest text-ink/45">Up to 20</div>
                      <div className="font-display text-2xl text-pink">{money(p.price20)}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => setOpen(p)} className="text-sm font-extrabold text-ink/70 underline-offset-4 hover:text-orange hover:underline">
                      What&apos;s included
                    </button>
                    <Link href={`/#book`} className="text-sm font-extrabold text-orange">Book →</Link>
                  </div>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>

      {/* detail modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/60 p-3 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              role="dialog"
              aria-modal
              className="card max-h-[88vh] w-full max-w-3xl overflow-y-auto"
              initial={{ y: 40, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid sm:grid-cols-5">
                <div className="relative aspect-[4/5] sm:col-span-2 sm:aspect-auto">
                  <img src={asset(open.image)} alt={open.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6 sm:col-span-3 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`tag-block font-display text-xs tracking-widest ${TAG[open.color]}`}>{open.ages}</span>
                      <h3 className="font-display mt-3 text-3xl leading-tight text-ink">{open.name}</h3>
                    </div>
                    <button onClick={() => setOpen(null)} aria-label="Close" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-xl">×</button>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/75">{open.body}</p>
                  {open.welcome && (
                    <p className="mt-3 text-sm font-bold text-ink/60">Welcome craft: <span className="text-ink">{open.welcome}</span></p>
                  )}
                  <ul className="mt-4 space-y-2">
                    {open.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm font-bold text-ink/80">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-orange text-[10px] text-white">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-cream p-4">
                    <div>
                      <div className="text-[0.6rem] font-extrabold uppercase tracking-widest text-ink/45">Up to 10 guests</div>
                      <div className="font-display text-3xl text-orange">{money(open.price10)}</div>
                    </div>
                    <div>
                      <div className="text-[0.6rem] font-extrabold uppercase tracking-widest text-ink/45">Up to 20 guests</div>
                      <div className="font-display text-3xl text-pink">{money(open.price20)}</div>
                    </div>
                    <Link href="/#book" className="btn btn-orange ml-auto !py-2.5 text-sm">Book this party →</Link>
                  </div>
                  <p className="mt-3 text-xs text-ink/50">Larger groups by custom quote. Food not included. Starting pricing.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
