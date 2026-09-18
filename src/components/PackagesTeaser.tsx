import Link from "next/link";
import PackageCards from "./PackageCards";
import { SectionHead } from "./ui";

export default function PackagesTeaser() {
  return (
    <section id="packages" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Party packages · 2026 menu"
          title="Full parties from $850."
          sub="Eight themed packages, each with a welcome craft, the main creative station and a team that runs the whole thing. Or build your own from 26 à la carte stations."
        />
        <PackageCards limit={4} />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/packages/" className="btn btn-orange">See all packages &amp; pricing →</Link>
          <Link href="/themes/" className="btn btn-ghost">Browse themes</Link>
        </div>
      </div>
    </section>
  );
}
