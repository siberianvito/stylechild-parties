"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INCLUDED } from "@/lib/data";
import { asset } from "@/lib/asset";

// "What the party brings" — a 3D party box flies in from deep space as you scroll,
// the lid opens and every included item pops out into place. Pinned + scrubbed.
export default function IncludedBox() {
  const rootRef = useRef<HTMLElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current, cube = cubeRef.current, lid = lidRef.current, items = itemsRef.current;
    if (!root || !cube || !lid || !items) return;

    const mm = gsap.matchMedia();
    mm.add(
      { desktop: "(min-width: 1024px)", mobile: "(max-width: 1023px)", reduced: "(prefers-reduced-motion: reduce)" },
      (ctx) => {
        const { desktop, reduced } = ctx.conditions as { desktop: boolean; reduced: boolean };
        const chips = items.querySelectorAll<HTMLElement>("[data-chip]");

        if (reduced) {
          gsap.set(cube, { opacity: 1, rotateX: -14, rotateY: -26, z: 0, scale: 1 });
          gsap.set(chips, { opacity: 1, y: 0, scale: 1 });
          return;
        }

        gsap.set(cube, { opacity: 0.25, rotateX: -75, rotateY: 55, z: -1400, scale: 0.55, y: 120 });
        gsap.set(lid, { rotateX: 0 });
        gsap.set(chips, { opacity: 0, y: 140, scale: 0.6, rotate: () => gsap.utils.random(-14, 14) });
        gsap.set(glowRef.current, { opacity: 0, scale: 0.6 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: desktop ? "+=260%" : "+=200%",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(cube, { opacity: 1, rotateX: -16, rotateY: -28, z: 0, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }, 0)
          .to(glowRef.current, { opacity: 1, scale: 1, duration: 0.8 }, 0.9)
          .to(lid, { rotateX: -118, duration: 0.7, ease: "power2.inOut" }, 1.25)
          .to(chips, { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.8, stagger: 0.16, ease: "back.out(1.6)" }, 1.5)
          .to(cube, { rotateY: -18, rotateX: -10, duration: 1.4, ease: "none" }, 1.5)
          .to({}, { duration: 0.4 });
      }
    );

    return () => mm.revert();
  }, []);

  // 3D box dims (px)
  const W = 360, H = 236, D = 250;

  const face = "absolute backface-hidden doodle-bg border-[3px] border-ink";

  return (
    <section
      id="included"
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden bg-cream"
    >
      {/* soft glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(245,135,79,0.28), rgba(255,147,198,0.18) 45%, transparent 70%)" }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-10 pt-28 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-24">
        {/* head */}
        <div ref={headRef} className="lg:col-span-5">
          <span className="eyebrow text-pink">{INCLUDED.eyebrow}</span>
          <h2 className="font-display mt-4 text-4xl leading-[1] text-ink sm:text-5xl md:text-6xl">
            {INCLUDED.title}
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink/70">{INCLUDED.sub}</p>
          <a href="#book" className="btn btn-orange mt-7 hidden lg:inline-flex">
            Plan My Party →
          </a>
        </div>

        {/* stage */}
        <div className="relative mt-8 flex flex-1 items-center justify-center lg:col-span-7 lg:mt-0">
          <div className="relative h-[520px] w-full max-w-[640px] sm:h-[560px]" style={{ perspective: "1500px" }}>
            {/* the box */}
            <div
              ref={cubeRef}
              className="preserve-3d absolute left-1/2 top-[56%] -ml-[180px] -mt-[118px]"
              style={{ width: W, height: H }}
            >
              {/* front */}
              <div className={`${face} flex items-center justify-center`} style={{ width: W, height: H, transform: `translateZ(${D / 2}px)` }}>
                <div className="grid h-24 w-24 place-items-center rounded-full bg-orange text-center text-white shadow-lg" style={{ clipPath: "polygon(50% 0,61% 9%,74% 4%,80% 16%,93% 17%,93% 30%,100% 40%,92% 50%,100% 61%,91% 70%,92% 84%,79% 85%,72% 97%,60% 93%,50% 100%,40% 93%,28% 97%,21% 85%,8% 84%,9% 70%,0 61%,8% 50%,0 40%,7% 30%,7% 17%,20% 16%,26% 4%,39% 9%)" }}>
                  <span className="font-display text-[11px] leading-tight tracking-widest">STYLE<br />CHILD</span>
                </div>
              </div>
              {/* back */}
              <div className={face} style={{ width: W, height: H, transform: `rotateY(180deg) translateZ(${D / 2}px)` }} />
              {/* right */}
              <div className={face} style={{ width: D, height: H, transform: `rotateY(90deg) translateZ(${W - D / 2}px)` }} />
              {/* left */}
              <div className={face} style={{ width: D, height: H, transform: `rotateY(-90deg) translateZ(${D / 2}px)` }} />
              {/* bottom */}
              <div className={face} style={{ width: W, height: D, transform: `rotateX(-90deg) translateZ(${H - D / 2}px)` }} />
              {/* lid (hinged at the back edge) */}
              <div
                ref={lidRef}
                className="preserve-3d absolute left-0 top-0"
                style={{ width: W, height: D, transformOrigin: "50% 0%", transform: `rotateX(90deg) translateZ(${-D / 2}px)` , transformStyle: "preserve-3d" }}
              >
                <div className={`${face} flex items-start justify-center pt-5`} style={{ width: W, height: D, transform: "translateZ(0.5px)" }}>
                  <span className="rounded-md border-[3px] border-ink bg-white px-3 py-1 font-display text-xs tracking-widest">HELLO I&apos;M</span>
                </div>
                <div className={face} style={{ width: W, height: D, transform: "rotateX(180deg) translateZ(0.5px)" }} />
              </div>
              {/* interior glow */}
              <div className="absolute inset-0" style={{ transform: `translateZ(${D / 2 - 6}px)`, background: "radial-gradient(60% 60% at 50% 40%, rgba(255,210,63,0.6), transparent 70%)" }} />
            </div>

            {/* items that pop out */}
            <div ref={itemsRef} className="absolute inset-0">
              {INCLUDED.items.map((it, i) => {
                const pos = [
                  "left-[2%] top-[2%]",
                  "right-[2%] top-[2%]",
                  "left-[0%] top-[36%]",
                  "right-[0%] top-[36%]",
                  "left-[8%] bottom-[2%]",
                  "right-[8%] bottom-[2%]",
                ][i];
                return (
                  <div
                    key={it.title}
                    data-chip
                    className={`card absolute ${pos} w-[46%] p-3 sm:w-[44%] sm:p-4`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cream text-xl">{it.icon}</span>
                      <div>
                        <h3 className="font-display text-sm leading-tight text-ink sm:text-base">{it.title}</h3>
                        <p className="mt-1 hidden text-xs leading-snug text-ink/65 sm:block">{it.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* mobile-only descriptions list below the pin for accessibility of the copy */}
      <div className="sr-only">
        {INCLUDED.items.map((it) => (
          <p key={it.title}>{it.title}: {it.body}</p>
        ))}
      </div>
      <img src={asset("/photos/kit-box.jpg")} alt="" aria-hidden className="hidden" />
    </section>
  );
}
