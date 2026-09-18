import Link from "next/link";
import { GOOD_TO_KNOW, INVITATION } from "@/lib/pricing";
import { Reveal, SectionHead } from "./ui";

export default function GoodToKnow({ compact = false }: { compact?: boolean }) {
  return (
    <section id="good-to-know" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="font-display outline-text pointer-events-none absolute -right-6 top-4 select-none text-[18vw] leading-none">
        FYI
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Good to know"
          title="The details, upfront."
          sub="Everything parents ask about timing, deposits and group sizes, in one place."
          color="text-purple"
        />
        <div className={`mt-12 grid gap-4 sm:grid-cols-2 ${compact ? "lg:grid-cols-4" : "lg:grid-cols-4"}`}>
          {GOOD_TO_KNOW.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="card h-full p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cream text-2xl">{g.icon}</span>
                <h3 className="font-display mt-4 text-lg text-ink">{g.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-6 flex flex-col items-start gap-3 rounded-3xl border-2 border-dashed border-orange/50 bg-cream p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💌</span>
              <div>
                <p className="font-display text-lg text-ink">Complimentary invitation</p>
                <p className="text-sm text-ink/70">{INVITATION}</p>
              </div>
            </div>
            <Link href="/#book" className="btn btn-orange !py-2.5 text-sm">Request mine →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
