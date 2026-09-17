import { TESTIMONIALS } from "@/lib/data";
import { SectionHead } from "./ui";

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Parents say" title="The easiest party they ever threw." color="text-pink" />
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="marquee-track" style={{ animationDuration: "40s" }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 gap-6 px-3">
              {TESTIMONIALS.map((t, i) => (
                <figure key={`${k}-${i}`} className="card w-[min(85vw,420px)] shrink-0 p-7">
                  <div className="text-yellow">★★★★★</div>
                  <blockquote className="mt-3 text-lg font-semibold leading-snug text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm font-bold text-ink/55">
                    {t.name} · {t.meta}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
