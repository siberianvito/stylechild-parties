"use client";

import { WAYS } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Reveal, SectionHead, Tilt } from "./ui";

const COLOR: Record<string, { tag: string; ring: string }> = {
  orange: { tag: "bg-orange", ring: "group-hover:shadow-[0_30px_80px_rgba(245,135,79,0.35)]" },
  pink: { tag: "bg-pink", ring: "group-hover:shadow-[0_30px_80px_rgba(235,18,86,0.3)]" },
  purple: { tag: "bg-purple", ring: "group-hover:shadow-[0_30px_80px_rgba(139,63,196,0.3)]" },
};

export default function Ways() {
  return (
    <section id="ways" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow={WAYS.eyebrow} title={WAYS.title} sub="Same magic, three ways to get it. Every option includes the custom kicks bar, supplies and a StyleChild party plan." />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WAYS.cards.map((c, i) => {
            const col = COLOR[c.color];
            return (
              <Reveal key={c.title} delay={i * 0.12}>
                <Tilt className="group h-full" max={8}>
                  <article className={`card relative flex h-full flex-col overflow-hidden transition-shadow duration-500 ${col.ring}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={asset(c.image)}
                        alt={c.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className={`tag-block ${col.tag} absolute left-4 top-4 font-display text-sm tracking-widest`}>
                        {c.tag}
                      </span>
                      {/* cursor glow */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ background: "radial-gradient(240px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.35), transparent 60%)" }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{c.body}</p>
                      <a href="#book" className="mt-6 inline-flex items-center gap-2 font-extrabold text-orange transition group-hover:gap-3">
                        {c.cta} <span aria-hidden>→</span>
                      </a>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
