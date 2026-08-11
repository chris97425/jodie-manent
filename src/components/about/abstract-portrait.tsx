export function AbstractPortrait() {
  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-coral-500 shadow-sm"
      role="img"
      aria-label="Visuel abstrait représentant l'univers de marque de Jodie Manent — formes organiques corail, sans portrait."
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,_rgba(255,255,255,0.35),_transparent_40%),radial-gradient(circle_at_70%_70%,_rgba(255,255,255,0.18),_transparent_45%)]"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 500"
        fill="none"
      >
        <path
          d="M70 250C70 140 160 60 260 80C340 96 370 180 340 260C310 340 220 390 140 360C90 340 70 300 70 250Z"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2"
        />
        <path
          d="M120 270C130 190 200 140 270 160C320 175 340 230 320 285C300 340 240 370 180 350C145 338 115 310 120 270Z"
          fill="rgba(255,255,255,0.12)"
        />
        <circle cx="280" cy="150" r="18" fill="rgba(255,255,255,0.35)" />
        <path
          d="M90 390C150 420 250 430 330 390"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-display text-3xl text-white">Jodie M.</p>
        <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/80">
          Ouverture · Clarté · Talents
        </p>
      </div>
    </div>
  );
}
