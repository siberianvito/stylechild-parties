"use client";

import { useEffect, useRef, useState } from "react";
import { WHY, BRAND } from "@/lib/data";
import { asset } from "@/lib/asset";
import { fireConfetti } from "./Confetti";
import { Reveal, Sticker } from "./ui";

// The 12s film (kids customizing → confetti → logo) beside "why choose us".
// Plays muted on loop when in view; a page confetti burst is synced to the film's confetti moment.
const CONFETTI_AT = 7.6;

export default function WhyUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const firedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [left, setLeft] = useState(12);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    const onTime = () => {
      // the party runs 12s, then the logo holds for ~1.2s
      const FILM = 12;
      setLeft(Math.max(0, Math.min(FILM, Math.ceil(FILM - v.currentTime))));
      setProgress(Math.min(1, v.currentTime / FILM));
      if (v.currentTime >= CONFETTI_AT && !firedRef.current) {
        firedRef.current = true;
        const r = v.getBoundingClientRect();
        fireConfetti({ mode: "burst", x: (r.left + r.width / 2) / window.innerWidth, y: (r.top + r.height / 2) / window.innerHeight, count: 160 });
      }
      if (v.currentTime < 1) firedRef.current = false;
    };
    v.addEventListener("timeupdate", onTime);
    return () => {
      io.disconnect();
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  return (
    <section id="why" className="relative overflow-hidden bg-white pb-24 pt-4 sm:pb-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14">
        {/* film */}
        <Reveal className="relative lg:col-span-7">
          <div className="spray-frame relative overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_80px_rgba(15,15,15,0.14)]">
            <video
              ref={videoRef}
              className={`aspect-video w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
              muted
              loop
              playsInline
              preload="metadata"
              poster={asset("/media/hero-poster.jpg")}
              onCanPlay={() => setReady(true)}
            >
              <source src={asset("/media/hero-720.mp4")} type="video/mp4" media="(max-width: 767px)" />
              <source src={asset("/media/hero.mp4")} type="video/mp4" />
            </video>
            {!ready && (
              <img src={asset("/media/hero-poster.jpg")} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
            )}
            {/* countdown tag */}
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="tag-block bg-pink font-display text-xs tracking-widest sm:text-sm">
                A StyleChild party in
              </span>
              <span
                aria-live="off"
                className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-white bg-orange font-display text-lg text-white shadow-lg"
              >
                {left}
              </span>
              <span className="eyebrow rounded-full bg-white/85 px-2 py-1 text-[0.6rem] text-ink/70 backdrop-blur">
                sec
              </span>
            </div>
            {/* progress bar */}
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/40">
              <div
                className="h-full bg-gradient-to-r from-orange via-pink to-purple"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          {/* contact the office */}
          <div className="card mt-6 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7">
            <div className="flex-1">
              <h3 className="font-display text-2xl text-ink sm:text-3xl">{WHY.contact.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{WHY.contact.body}</p>
              <p className="mt-2 text-xs font-bold text-ink/45">{WHY.contact.note}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <a href={BRAND.phoneHref} className="btn btn-orange w-full sm:w-auto">
                <span aria-hidden>📞</span> {WHY.contact.cta} · {BRAND.phone}
              </a>
              <a href="#book" className="text-sm font-extrabold text-pink underline-offset-4 hover:underline">
                {WHY.contact.cta2} →
              </a>
            </div>
          </div>
          <Sticker kind="smile" className="floaty absolute -left-5 -top-5 hidden w-16 md:block" style={{ ["--r" as string]: "-10deg" }} />
          <Sticker kind="star" className="floaty absolute -bottom-6 -right-4 hidden w-14 md:block" style={{ ["--r" as string]: "12deg", animationDelay: "-2s" }} />
        </Reveal>

        {/* why us */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow text-orange">{WHY.eyebrow}</span>
            <h2 className="font-display mt-4 text-4xl leading-[1] text-ink sm:text-5xl">{WHY.title}</h2>
            <p className="mt-4 text-lg text-ink/70">{WHY.sub}</p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {WHY.points.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(15,15,15,0.08)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream text-2xl">{p.icon}</span>
                  <div>
                    <h3 className="font-display text-lg text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.35}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#book" className="btn btn-orange">Plan My Party →</a>
              <div className="flex flex-wrap gap-2 text-xs font-extrabold text-ink/55">
                {WHY.proof.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-ink/40">[REPLACE — confirm the party count and founding year with StyleChild]</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
