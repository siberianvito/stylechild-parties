import type { Metadata } from "next";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";
import Confetti from "@/components/Confetti";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Collage from "@/components/Collage";
import { Reveal, Sticker } from "@/components/ui";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Party Gallery | StyleChild Parties Boca Raton",
  description:
    "Photos from StyleChild parties: custom sneakers, crowns, slippers, tees, squishies, spa days, superhero bashes and more. Boca Raton HQ, at your place, or shipped in a box.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Confetti />
      <Nav />

      <section className="relative overflow-hidden checker-holo pb-12 pt-36 sm:pt-44">
        <Sticker kind="star" className="floaty absolute left-[8%] top-[34%] hidden w-14 lg:block" style={{ ["--r" as string]: "-12deg" }} />
        <Sticker kind="peace" className="floaty absolute right-[9%] top-[30%] hidden w-14 lg:block" style={{ ["--r" as string]: "10deg", animationDelay: "-2s" }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="tag-block bg-purple font-display text-sm tracking-widest sm:text-base">The gallery</span>
            <h1 className="font-display mt-6 text-5xl leading-[0.96] text-ink sm:text-6xl md:text-7xl">
              Every party, <span className="text-orange">one</span> big collage.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70 sm:text-xl">
              Sneakers, crowns, slippers, cupcakes, superheroes. Tap any photo to see it big.
            </p>
          </Reveal>
        </div>
      </section>

      <Collage />

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl">Your kid&apos;s party could be next.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">Tell us their favorite theme and we&apos;ll make it happen.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#book" className="btn btn-orange">Plan My Party →</Link>
              <Link href="/packages/" className="btn btn-ghost !bg-white">See packages</Link>
              <a href={BRAND.phoneHref} className="btn btn-ghost !bg-white">Call {BRAND.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
