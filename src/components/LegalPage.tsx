import type { ReactNode } from "react";
import Link from "next/link";
import SmoothScroll from "./SmoothScroll";
import Nav from "./Nav";
import Footer from "./Footer";
import { BRAND } from "@/lib/data";

export const LEGAL_UPDATED = "September 20, 2026";

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-display mt-12 text-2xl text-ink sm:text-3xl">{children}</h2>;
}
export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-relaxed text-ink/75">{children}</p>;
}
export function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-ink/75">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LegalPage({
  tag,
  title,
  intro,
  children,
}: {
  tag: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="relative">
      <SmoothScroll />
      <Nav />
      <section className="relative overflow-hidden bg-cream pb-14 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="tag-block bg-purple font-display text-sm tracking-widest">{tag}</span>
          <h1 className="font-display mt-5 text-4xl leading-[1] text-ink sm:text-6xl">{title}</h1>
          <p className="mt-5 text-lg text-ink/70">{intro}</p>
          <p className="mt-3 text-sm font-bold text-ink/45">Last updated: {LEGAL_UPDATED}</p>
        </div>
      </section>
      <article className="bg-white pb-24 pt-4">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {children}
          <div className="mt-14 rounded-3xl bg-cream p-6">
            <p className="font-display text-xl text-ink">Questions?</p>
            <p className="mt-2 text-ink/75">
              {BRAND.legal} · {BRAND.address1}, {BRAND.address2}
              <br />
              <a href={BRAND.phoneHref} className="font-bold text-orange">{BRAND.phone}</a> ·{" "}
              <a href={`mailto:${BRAND.email}`} className="font-bold text-orange">{BRAND.email}</a>
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-extrabold">
              <Link href="/privacy/" className="text-pink hover:underline">Privacy Policy</Link>
              <Link href="/terms/" className="text-pink hover:underline">Terms &amp; Conditions</Link>
              <Link href="/" className="text-ink/60 hover:underline">Back to home</Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
