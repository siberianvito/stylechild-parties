import type { Metadata } from "next";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";
import Confetti from "@/components/Confetti";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import ThemeGrid from "@/components/ThemeGrid";
import { Reveal, Sticker } from "@/components/ui";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kids' Party Themes | StyleChild Parties Boca Raton",
  description:
    "Eight StyleChild party themes: Sneaker Party, Princess + Prince, Candyland, Caboodle Beauty Bash, Spa Craft, All Star Sports, Squishy and Superhero Bash. Every theme is fully hosted and customizable.",
  alternates: { canonical: "/themes/" },
};

export default function ThemesPage() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Confetti />
      <Nav />

      <section className="relative overflow-hidden checker-holo pb-16 pt-36 sm:pt-44">
        <Sticker kind="heart" className="floaty absolute left-[7%] top-[32%] hidden w-14 lg:block" style={{ ["--r" as string]: "-10deg" }} />
        <Sticker kind="smile" className="floaty absolute right-[9%] top-[28%] hidden w-14 lg:block" style={{ ["--r" as string]: "10deg", animationDelay: "-2s" }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="tag-block bg-orange font-display text-sm tracking-widest sm:text-base">Pick a vibe</span>
            <h1 className="font-display mt-6 text-5xl leading-[0.96] text-ink sm:text-6xl md:text-7xl">
              Eight themes. <span className="text-pink">One</span> unforgettable party.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70 sm:text-xl">
              Every theme is a fully hosted StyleChild party: a welcome craft, the main creative station, décor and a team that runs the room. Pick the one your kid will lose their mind over.
            </p>
          </Reveal>
        </div>
      </section>

      <ThemeGrid />

      <Marquee reverse tone="pink" />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="eyebrow text-orange">Don&apos;t see your theme?</span>
            <h2 className="font-display mt-4 text-4xl text-ink sm:text-5xl">We&apos;ll build it.</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/70">
              All StyleChild parties can be customized by theme, age, guest count and budget. Mix stations from the menu or tell us the obsession of the month and we&apos;ll design around it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#book" className="btn btn-orange">Plan My Party →</Link>
              <Link href="/packages/#stations" className="btn btn-ghost">Browse à la carte stations</Link>
              <a href={BRAND.phoneHref} className="btn btn-ghost">Call {BRAND.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
