import type { Metadata } from "next";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";
import Confetti from "@/components/Confetti";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import GoodToKnow from "@/components/GoodToKnow";
import StationsTable from "@/components/StationsTable";
import PackageCards from "@/components/PackageCards";
import { Reveal, SectionHead, Sticker } from "@/components/ui";
import { ADD_ONS, MENU_META, money } from "@/lib/pricing";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Party Packages & Pricing | StyleChild Parties Boca Raton",
  description:
    "StyleChild 2026 party menu: full party packages from $850, à la carte creative stations for 10–50 guests, add-ons and everything good to know. Boca Raton HQ, your place, or shipped.",
  alternates: { canonical: "/packages/" },
};

export default function PackagesPage() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Confetti />
      <Nav />

      {/* header */}
      <section className="relative overflow-hidden bg-white pb-16 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-orange/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-bubblegum/30 blur-3xl" />
        <Sticker kind="star" className="floaty absolute left-[8%] top-[30%] hidden w-14 lg:block" style={{ ["--r" as string]: "-12deg" }} />
        <Sticker kind="bolt" className="floaty absolute right-[10%] top-[26%] hidden w-12 lg:block" style={{ ["--r" as string]: "12deg", animationDelay: "-2s" }} />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="tag-block bg-pink font-display text-sm tracking-widest sm:text-base">
              StyleChild Party Menu · {MENU_META.year}
            </span>
            <h1 className="font-display mt-6 text-5xl leading-[0.96] text-ink sm:text-6xl md:text-7xl">
              Party packages <span className="text-orange">+</span> creative stations.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70 sm:text-xl">{MENU_META.intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3">
              {MENU_META.facts.map((f) => (
                <div key={f.label} className="card p-4 sm:p-5">
                  <div className="font-display text-3xl text-orange sm:text-4xl">
                    {f.big}
                    {f.small && <span className="ml-1 text-base text-ink/50 sm:text-lg">{f.small}</span>}
                  </div>
                  <p className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-ink/50 sm:text-xs">{f.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#packages" className="btn btn-orange">Full packages ↓</a>
              <a href="#stations" className="btn btn-ghost">À la carte stations</a>
              <a href="#add-ons" className="btn btn-ghost">Add-ons</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* packages */}
      <section id="packages" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Full party packages"
            title="Pick a package. We handle the rest."
            sub={MENU_META.packagesNote}
          />
          <PackageCards />
        </div>
      </section>

      <StationsTable />

      {/* add-ons */}
      <section id="add-ons" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Party add-ons"
            title="Turn it up a notch."
            sub="Layer any of these onto a package or a station. Starting prices."
            color="text-turq"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADD_ONS.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.05}>
                <div className="card flex h-full flex-col justify-between p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,15,15,0.10)]">
                  <h3 className="font-display text-xl text-ink">{a.name}</h3>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-ink/45">{a.detail}</span>
                    <span className="font-display text-2xl text-pink">{money(a.price)}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoodToKnow />

      {/* CTA */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="eyebrow text-yellow">Ready when you are</span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl md:text-6xl">Let&apos;s build your party.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Tell us the date, the age and the vibe. We&apos;ll put together a package or a custom station lineup and send it back within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#book" className="btn btn-orange">Plan My Party →</Link>
              <a href={BRAND.phoneHref} className="btn btn-ghost !bg-white">Call {BRAND.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
