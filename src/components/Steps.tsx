"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STEPS, STATS } from "@/lib/data";
import { Reveal, SectionHead } from "./ui";

export default function Steps() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = statsRef.current;
    if (!root) return;
    const nums = root.querySelectorAll<HTMLSpanElement>("[data-count]");
    const st = ScrollTrigger.create({
      trigger: root,
      start: "top 80%",
      once: true,
      onEnter: () => {
        nums.forEach((n) => {
          const target = Number(n.dataset.count);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power3.out",
            onUpdate: () => { n.textContent = String(Math.round(obj.v)); },
          });
        });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      {/* holographic checker echo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)", backgroundSize: "56px 56px" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="How it works" title="We take the work. You take the pictures." color="text-yellow" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <span className="font-display text-5xl text-orange">{s.n}</span>
                <h3 className="font-display mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 text-white/70">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-5 top-1/2 hidden text-3xl text-white/30 md:block" aria-hidden>→</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl text-white sm:text-6xl">
                <span data-count={s.value}>0</span>
                <span className="text-pink">{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-white/35">[REPLACE — confirm real numbers with StyleChild before launch]</p>
      </div>
    </section>
  );
}
