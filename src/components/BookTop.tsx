import { WHY, BRAND } from "@/lib/data";
import PartyForm from "./PartyForm";
import { Reveal, Sticker } from "./ui";

// Directly under the header: the form, with "why choose us" beside it.
export default function BookTop() {
  return (
    <section id="book" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-bubblegum/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14">
        {/* why choose us */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="tag-block bg-pink font-display text-sm tracking-widest">Why choose us</span>
            <h2 className="font-display mt-5 text-4xl leading-[1] text-ink sm:text-5xl">
              We do <span className="text-orange">all</span> types of parties.
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Tell us your kid&apos;s favorite theme and we&apos;ll make it happen. Sneakers, crowns, slippers, tees, squishies, spa days, superheroes. You pick the vibe, we run the whole party.
            </p>
          </Reveal>
          <ul className="mt-7 space-y-3">
            {WHY.points.map((p, i) => (
              <Reveal key={p.title} delay={0.07 * i}>
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
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-extrabold">
              <a href={BRAND.phoneHref} className="text-pink">📞 {BRAND.phone}</a>
              <span className="text-ink/45">Boca Raton HQ · We travel · We ship</span>
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={0.12} className="relative lg:col-span-7">
          <Sticker kind="star" className="floaty absolute -right-3 -top-6 z-10 hidden w-14 md:block" style={{ ["--r" as string]: "12deg" }} />
          <PartyForm source="top" title="Tell us about the party. Two minutes, no commitment." />
        </Reveal>
      </div>
    </section>
  );
}
