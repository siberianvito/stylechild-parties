"use client";

import { useState } from "react";
import { GUEST_TIERS, STATION_GROUPS, STATIONS_INTRO, money, type GuestTier } from "@/lib/pricing";
import { Reveal, SectionHead } from "./ui";

// A la carte stations with a guest-count switch (10 / 20 / 30 / 40 / 50).
export default function StationsTable() {
  const [tier, setTier] = useState<GuestTier>(10);
  const [group, setGroup] = useState<string>("All");
  const idx = GUEST_TIERS.indexOf(tier);
  const groups = group === "All" ? STATION_GROUPS : STATION_GROUPS.filter((g) => g.group === group);

  return (
    <section id="stations" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Build your own"
          title="À la carte stations."
          sub={STATIONS_INTRO}
          color="text-pink"
        />

        {/* controls */}
        <Reveal className="mt-10">
          <div className="card flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow text-ink/50">Guest count</p>
              <div className="mt-2 inline-flex rounded-full bg-cream p-1">
                {GUEST_TIERS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`rounded-full px-4 py-2 font-display text-sm transition ${
                      tier === t ? "bg-orange text-white shadow" : "text-ink/70 hover:text-ink"
                    }`}
                    aria-pressed={tier === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-ink/50">Category</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["All", ...STATION_GROUPS.map((g) => g.group)].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGroup(g)}
                    className={`rounded-full border-2 px-3 py-1.5 text-xs font-extrabold transition ${
                      group === g ? "border-pink bg-pink text-white" : "border-line text-ink/70 hover:border-pink hover:text-pink"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 text-center text-sm font-bold text-ink/55">
          Showing pricing for up to <span className="text-orange">{tier} guests</span>. Prices are starting prices.
        </p>

        {/* groups */}
        <div className="mt-8 space-y-10">
          {groups.map((g) => (
            <div key={g.group}>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">{g.group}</h3>
                  {g.blurb && <p className="text-sm text-ink/60">{g.blurb}</p>}
                </div>
                <span className="eyebrow hidden text-ink/40 sm:block">{g.items.length} station{g.items.length > 1 ? "s" : ""}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s, i) => (
                  <Reveal key={`${g.group}-${s.name}`} delay={Math.min(i, 6) * 0.04}>
                    <div className="card group flex h-full items-center justify-between gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,15,15,0.10)]">
                      <div className="min-w-0">
                        <h4 className="font-display text-lg leading-tight text-ink">{s.name}</h4>
                        <p className="mt-1 text-sm text-ink/65">{s.includes}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="font-display text-2xl text-orange transition-transform group-hover:scale-105">
                          {money(s.prices[idx])}
                        </div>
                        <div className="text-[0.65rem] font-extrabold uppercase tracking-widest text-ink/40">
                          up to {tier}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* full grid for print / comparison */}
        <details className="mt-12 rounded-3xl border border-line bg-white p-5">
          <summary className="cursor-pointer font-display text-lg text-ink">See the full comparison grid (all guest counts)</summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-[0.65rem] uppercase tracking-widest text-ink/50">
                  <th className="py-2 pr-4">Station</th>
                  <th className="py-2 pr-4">Includes</th>
                  {GUEST_TIERS.map((t) => (
                    <th key={t} className="py-2 pr-4 text-right">{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATION_GROUPS.flatMap((g) =>
                  g.items.map((s) => (
                    <tr key={`${g.group}-${s.name}`} className="border-b border-line/70">
                      <td className="py-2 pr-4 font-extrabold text-ink">{s.name}<span className="ml-2 text-[0.6rem] uppercase tracking-widest text-ink/40">{g.group}</span></td>
                      <td className="py-2 pr-4 text-ink/65">{s.includes}</td>
                      {s.prices.map((p, i) => (
                        <td key={i} className="py-2 pr-4 text-right font-bold text-ink">{money(p)}</td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}
