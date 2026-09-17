"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ADS, BRAND, FORM } from "@/lib/data";
import { fireConfetti } from "./Confetti";
import { Reveal } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

function GHLEmbed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
  const id = FORM.GHL_FORM_EMBED_URL.split("/").pop();
  return (
    <iframe
      src={FORM.GHL_FORM_EMBED_URL}
      id={`inline-${id}`}
      title="Plan my party — StyleChild"
      className="block w-full border-0"
      style={{ minHeight: 640 }}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-activation-type="alwaysActivated"
      data-deactivation-type="neverDeactivate"
      data-form-name="StyleChild — Party Inquiry"
    />
  );
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return; // bot
    setStatus("sending");
    try {
      const res = await fetch(FORM.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `🎉 New party inquiry — ${data.child_age ? `age ${data.child_age}` : "kids party"} — ${data.party_type}`,
          _template: "table",
          _captcha: "false",
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      fireConfetti({ mode: "cannons", count: 220 });
      if (ADS.gtagId && ADS.conversionLabel && window.gtag) {
        window.gtag("event", "conversion", { send_to: `${ADS.gtagId}/${ADS.conversionLabel}` });
      }
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="book" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-bubblegum/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-orange/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="tag-block bg-pink font-display text-sm tracking-widest">Let&apos;s plan it</span>
          <h2 className="font-display mt-5 text-5xl leading-[0.98] text-ink sm:text-6xl">
            Tell us about the party.
          </h2>
          <p className="mt-5 text-lg text-ink/70">
            Two minutes, no commitment. We reply within one business day with availability and a plan for your kid&apos;s big day.
          </p>
          <ul className="mt-8 space-y-3 font-bold text-ink/80">
            {["Birthdays, playdates, days off, team parties", "At HQ, at your place, or shipped in a box", "Set-up, hosting and clean-up included"].map((l) => (
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
          <div className="card spray-frame p-6 sm:p-9">
            {FORM.GHL_FORM_EMBED_URL ? (
              <GHLEmbed />
            ) : status === "sent" ? (
              <div className="py-16 text-center">
                <div className="font-display text-5xl text-orange">You&apos;re on the list! 🎉</div>
                <p className="mt-4 text-lg text-ink/70">We got it. Expect a reply within one business day. Can&apos;t wait? Call {BRAND.phone}.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Parent name *</label>
                  <input name="name" required className="field" placeholder="Your name" autoComplete="name" />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Phone *</label>
                  <input name="phone" type="tel" required className="field" placeholder="(561) 000-0000" autoComplete="tel" />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Email *</label>
                  <input name="email" type="email" required className="field" placeholder="you@email.com" autoComplete="email" />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Party date</label>
                  <input name="party_date" type="date" className="field" />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Party type *</label>
                  <select name="party_type" required className="field" defaultValue="">
                    <option value="" disabled>Choose one</option>
                    <option>Birthday party</option>
                    <option>Playdate / day off</option>
                    <option>Team or school event</option>
                    <option>Camp / group</option>
                    <option>Adult or corporate</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Where?</label>
                  <select name="location" className="field" defaultValue="Not sure yet">
                    <option>StyleChild HQ (Boca Raton)</option>
                    <option>At my location</option>
                    <option>Ship me a Bash in a Box</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Kid&apos;s age</label>
                  <input name="child_age" type="number" min={1} max={99} className="field" placeholder="e.g. 8" />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-ink/60">Guests (approx.)</label>
                  <input name="guests" type="number" min={1} max={200} className="field" placeholder="e.g. 12" />
                </div>
                <div className="sm:col-span-2">
                  <label className="eyebrow mb-2 block text-ink/60">Anything else?</label>
                  <textarea name="message" rows={3} className="field" placeholder="Theme ideas, allergies, the birthday kid's favorite things…" />
                </div>
                <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" disabled={status === "sending"} className="btn btn-orange w-full text-base sm:w-auto disabled:opacity-60">
                    {status === "sending" ? "Sending…" : "Plan My Party →"}
                  </button>
                  <p className="text-xs text-ink/50">No spam. We only use this to plan your party.</p>
                </div>
                {status === "error" && (
                  <p className="sm:col-span-2 rounded-xl bg-pink/10 p-3 text-sm font-bold text-pink">
                    Something went wrong. Call us at {BRAND.phone} or email {BRAND.email}.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
