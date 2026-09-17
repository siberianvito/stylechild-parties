import { BRAND, NAV } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer className="bg-orange text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={asset("/logo-sm.png")}
            alt="StyleChild"
            className="h-16 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
          />
          <p className="mt-5 max-w-sm font-semibold text-white/90">
            Fully planned kids&apos; parties in Boca Raton and across South Florida. We take the work off the parents so you can enjoy it with your kids.
          </p>
          <div className="mt-5 flex gap-4 text-sm font-extrabold">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Instagram</a>
            <a href={BRAND.facebook} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Facebook</a>
            <a href={BRAND.shop} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Shop StyleChild</a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-white/80">Contact us</p>
          <a href={BRAND.phoneHref} className="font-display mt-3 block text-2xl">{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="mt-1 block font-bold">{BRAND.email}</a>
          <a href={BRAND.mapsHref} target="_blank" rel="noreferrer" className="mt-4 block text-sm font-semibold text-white/90">
            {BRAND.address1}<br />{BRAND.address2}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/80">Parties</p>
          <ul className="mt-3 space-y-2 text-sm font-bold">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:underline">{n.label}</a></li>
            ))}
            <li><a href="#book" className="hover:underline">Book Your Party</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/80">We serve</p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">{BRAND.serviceArea}</p>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs font-semibold text-white/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</span>
          <span>Be Your StyleChild™</span>
        </div>
      </div>
    </footer>
  );
}
