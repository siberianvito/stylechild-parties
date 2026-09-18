"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const path = href.split("#")[0] || "/";
    return path !== "/" && pathname?.replace(/\/$/, "") === path.replace(/\/$/, "");
  };

  return (
    <>
      {/* scroll progress */}
      <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-orange via-pink to-purple transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 sm:px-5 ${
              scrolled
                ? "bg-white/85 shadow-[0_10px_40px_rgba(15,15,15,0.10)] backdrop-blur-xl"
                : "bg-white/60 backdrop-blur-md"
            }`}
          >
            <Link href="/" className="flex items-center gap-3" aria-label="StyleChild Parties home">
              <img src={asset("/logo-sm.png")} alt="StyleChild" className="h-9 w-auto sm:h-11" />
              <span className="eyebrow hidden text-ink/60 md:inline">Parties &amp; Events</span>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`text-sm font-extrabold transition hover:text-orange ${
                    isActive(n.href) ? "text-orange" : "text-ink/75"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a href={BRAND.phoneHref} className="hidden text-sm font-extrabold text-ink/80 hover:text-pink md:inline">
                {BRAND.phone}
              </a>
              <Link href="/#book" className="btn btn-orange !px-5 !py-2.5 text-sm">
                Plan My Party
              </Link>
              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink/10 lg:hidden"
              >
                <span className="relative block h-3.5 w-5">
                  <span className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 rotate-45" : ""}`} />
                  <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
                  <span className={`absolute left-0 top-3 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 -rotate-45" : ""}`} />
                </span>
              </button>
            </div>
          </div>

          {/* mobile sheet */}
          <div className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "mt-2 max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="card flex flex-col gap-1 p-3">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 font-extrabold hover:bg-cream hover:text-orange ${isActive(n.href) ? "text-orange" : "text-ink/80"}`}
                >
                  {n.label}
                </Link>
              ))}
              <a href={BRAND.phoneHref} className="rounded-xl px-4 py-3 font-extrabold text-pink">
                Call {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
