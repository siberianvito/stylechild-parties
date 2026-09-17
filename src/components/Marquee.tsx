const WORDS = [
  "Custom Kicks Bar",
  "Tee Station",
  "Bead Bar",
  "Décor & Paper Goods",
  "Games & Glitter",
  "Set-Up & Clean-Up",
  "Birthdays",
  "Playdates",
  "Days Off",
  "Team Parties",
];

export default function Marquee({ reverse = false, tone = "orange" }: { reverse?: boolean; tone?: "orange" | "pink" | "ink" }) {
  const bg = tone === "orange" ? "bg-orange" : tone === "pink" ? "bg-pink" : "bg-ink";
  return (
    <div className={`${bg} overflow-hidden py-3 text-white`} aria-hidden>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {WORDS.map((w) => (
              <span key={`${k}-${w}`} className="font-display flex items-center gap-6 px-6 text-lg tracking-wide sm:text-xl">
                {w}
                <span className="text-yellow">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
