"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INTRO } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Reveal, Sticker } from "./ui";

// "The Ultimate Party" — scroll-scrubbed word illumination + the live site's collage.
export default function Intro() {
  const wordsRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = wordsRef.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("span[data-w]");
    const tween = gsap.fromTo(
      words,
      { opacity: 0.16 },
      {
        opacity: 1,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const headline = `${INTRO.body[0]} ${INTRO.body[1]}`;

  return (
    <section id="party" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* giant watermark */}
      <div className="font-display outline-text pointer-events-none absolute -left-4 top-6 select-none text-[22vw] leading-none">
        PARTY
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="tag-block bg-orange font-display text-sm tracking-widest sm:text-base">
              You won&apos;t want to miss this
            </span>
            <h2 className="font-display mt-5 text-5xl leading-[0.98] text-ink sm:text-6xl md:text-7xl">
              {INTRO.eyebrow}
            </h2>
          </Reveal>

          <p ref={wordsRef} className="mt-8 max-w-2xl text-2xl font-bold leading-snug text-ink sm:text-3xl">
            {headline.split(" ").map((w, i) => (
              <span key={i} data-w className="inline-block pr-[0.3em]">
                {w}
              </span>
            ))}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {INTRO.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="card h-full p-5">
                  <div className={`mb-3 h-1.5 w-10 rounded-full ${i === 0 ? "bg-pink" : i === 1 ? "bg-orange" : "bg-purple"}`} />
                  <h3 className="font-display text-xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal delay={0.15} className="relative">
            <img
              src={asset("/photos/collage.jpg")}
              alt="StyleChild party collage: custom sneakers, bead bar and birthday kids"
              className="w-full rounded-[2rem]"
              loading="lazy"
            />
            <Sticker kind="star" className="floaty absolute -left-6 top-6 w-16" style={{ ["--r" as string]: "-14deg" }} />
            <Sticker kind="bolt" className="floaty absolute -right-4 bottom-10 w-14" style={{ ["--r" as string]: "10deg", animationDelay: "-2s" }} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
