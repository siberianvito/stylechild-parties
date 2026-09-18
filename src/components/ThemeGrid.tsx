"use client";

import Link from "next/link";
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

// Big editorial theme tiles: alternating wide/tall layout, hover reveals the highlights.
export default function ThemeGrid() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-6">
        {PACKAGES.map((p, i) => {
          const wide = i % 4 === 0 || i % 4 === 3;
          return (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className={wide ? "md:col-span-4" : "md:col-span-2"}>
              <Tilt className="group h-full" max={5}>
                <Link
                  href={`/packages/#${p.slug}`}
                  className={`relative block h-full overflow-hidden rounded-[2rem] bg-cream shadow-[0_18px_50px_rgba(15,15,15,0.10)] ${wide ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[4/5] md:aspect-auto"}`}
                >
                  <img
                    src={asset(p.image)}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <span className={`tag-block absolute left-5 top-5 font-display text-xs tracking-widest ${TAG[p.color]}`}>
                    {p.ages}
                  </span>
                  <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl shadow-lg">
                    {p.emoji}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <h2 className="font-display text-2xl leading-tight sm:text-3xl">{p.name}</h2>
                    <p className="mt-1 max-w-md text-sm text-white/85">{p.short}</p>
                    <ul className="mt-3 hidden flex-wrap gap-2 sm:flex">
                      {p.highlights.map((h) => (
                        <li key={h} className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-extrabold">
                        From <span className="text-yellow">{money(p.price10)}</span> · up to 10 guests
                      </span>
                      <span className="text-sm font-extrabold transition group-hover:translate-x-1">See package →</span>
                    </div>
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
