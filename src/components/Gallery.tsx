"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY } from "@/lib/data";
import { asset } from "@/lib/asset";
import { fireConfetti } from "./Confetti";
import { SectionHead } from "./ui";

// Confetti transition: as the gallery enters, confetti cannons fire and the photos
// scatter up into a parallax mosaic (each column moves at its own speed).
export default function Gallery() {
  const rootRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const enter = ScrollTrigger.create({
      trigger: root,
      start: "top 65%",
      onEnter: () => fireConfetti({ mode: "cannons", count: 150 }),
      onEnterBack: () => fireConfetti({ mode: "curtain", count: 90 }),
    });

    const tweens = colsRef.current.map((col, i) =>
      gsap.fromTo(
        col,
        { y: i % 2 === 0 ? 120 : -60 },
        {
          y: i % 2 === 0 ? -120 : 60,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 0.8 },
        }
      )
    );

    return () => {
      enter.kill();
      tweens.forEach((t) => { t.scrollTrigger?.kill(); t.kill(); });
    };
  }, []);

  const cols = [GALLERY.slice(0, 3), GALLERY.slice(3, 5), GALLERY.slice(5, 8)];

  return (
    <section id="gallery" ref={rootRef} className="relative overflow-hidden checker-holo py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Real parties"
          title="This is what a StyleChild party looks like."
          sub="Real kids, real sneakers, real glitter on the floor (we clean that up too)."
          color="text-purple"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {cols.map((col, i) => (
            <div
              key={i}
              ref={(el) => { if (el) colsRef.current[i] = el; }}
              className={`flex flex-col gap-4 md:gap-6 ${i === 1 ? "md:pt-16" : ""}`}
            >
              {col.map((g, j) => (
                <figure
                  key={g.src}
                  className="group relative overflow-hidden rounded-[1.6rem] bg-white shadow-[0_18px_50px_rgba(15,15,15,0.10)]"
                  style={{ transform: `rotate(${((i + j) % 2 === 0 ? -1 : 1) * 1.2}deg)` }}
                >
                  <img
                    src={asset(g.src)}
                    alt={g.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
