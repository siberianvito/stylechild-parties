"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ADS, BRAND, FORM } from "@/lib/data";
import { PACKAGES } from "@/lib/pricing";
import { fireConfetti } from "./Confetti";

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

// The lead form card. `source` tags which placement converted (top / bottom).
export default function PartyForm({ source = "top", title }: { source?: string; title?: string }) {
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
          _subject: `🎉 New party inquiry — ${data.theme || "theme TBD"} — ${data.party_type}`,
          _template: "table",
          _captcha: "false",
          form_placement: source,
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
    <div className="card spray-frame p-6 sm:p-8">
      {title && <h3 className="font-display mb-5 text-2xl text-ink sm:text-3xl">{title}</h3>}
      {FORM.GHL_FORM_EMBED_URL ? (
        <GHLEmbed />
      ) : status === "sent" ? (
        <div className="py-14 text-center">
          <div className="font-display text-4xl text-orange sm:text-5xl">You&apos;re on the list! 🎉</div>
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
          <div className="sm:col-span-2">
            <label className="eyebrow mb-2 block text-ink/60">Your kid&apos;s favorite theme</label>
            <input
              name="theme"
              className="field"
              list={`themes-${source}`}
              placeholder="Sneakers, princess, Spider-Man, Wicked, spa day… anything!"
            />
            <datalist id={`themes-${source}`}>
              {PACKAGES.map((p) => <option key={p.slug} value={p.name} />)}
              <option value="Something custom" />
            </datalist>
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
  );
}
