"use client";

import { SLIDER } from "@/lib/data";
import { asset } from "@/lib/asset";
import { SectionHead } from "./ui";

// Slow, continuous photo slide. Three photos visible at a time on desktop,
// pauses on hover, falls back to a swipeable row with reduced motion.
export default function PhotoSlider() {
  const loop = [...SLIDER, ...SLIDER];
  return (
    <section id="moments" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Not just sneakers"
          title="Crowns, tees, slippers, squishies. Every party is different."
          sub="Real StyleChild parties and the things kids make at them."
          color="text-pink"
        />
      </div>

      <div className="slider-mask mx-auto mt-12 max-w-7xl overflow-hidden px-4 sm:px-6">
        <div className="slider-track flex w-max gap-6">
          {loop.map((s, i) => (
            <figure
              key={`${s.src}-${i}`}
              aria-hidden={i >= SLIDER.length}
              className="group relative shrink-0 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_50px_rgba(15,15,15,0.10)] w-[78vw] sm:w-[44vw] lg:w-[calc((min(100vw,80rem)-6rem)/3)]"
            >
              <img
                src={asset(s.src)}
                alt={s.alt}
                loading="lazy"
                draggable={false}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-5 pt-12">
                <span className="font-display text-lg text-white">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
