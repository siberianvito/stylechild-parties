import { BRAND } from "@/lib/data";
import PartyForm from "./PartyForm";
import { Reveal } from "./ui";

// Bottom-of-page form (the primary one lives right under the header in BookTop).
export default function LeadForm() {
  return (
    <section id="book-bottom" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-bubblegum/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-orange/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="tag-block bg-pink font-display text-sm tracking-widest">Let&apos;s plan it</span>
          <h2 className="font-display mt-5 text-5xl leading-[0.98] text-ink sm:text-6xl">
            Ready when you are.
          </h2>
          <p className="mt-5 text-lg text-ink/70">
            Tell us the theme, the date and the headcount. We reply within one business day with availability and a plan for your kid&apos;s big day.
          </p>
          <ul className="mt-8 space-y-3 font-bold text-ink/80">
            {["Any theme: sneakers, crowns, slippers, spa, superheroes", "At HQ, at your place, or shipped in a box", "Set-up, hosting and clean-up included"].map((l) => (
              <li key={l} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-orange text-xs text-white">✓</span>
                {l}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-3xl bg-cream p-6">
            <p className="eyebrow text-ink/50">Prefer to talk?</p>
            <a href={BRAND.phoneHref} className="font-display mt-2 block text-3xl text-orange">{BRAND.phone}</a>
            <a href={`mailto:${BRAND.email}`} className="mt-1 block font-bold text-ink/70">{BRAND.email}</a>
            <p className="mt-3 text-sm text-ink/55">{BRAND.address1}, {BRAND.address2}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <PartyForm source="bottom" />
        </Reveal>
      </div>
    </section>
  );
}
