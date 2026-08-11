export function AbstractPortrait() {
  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-cream-200 bg-cream-100 shadow-[0_12px_32px_rgba(59,42,36,0.06)]"
      role="img"
      aria-label="Visuel abstrait géométrique — arcs et cercles corail, sans portrait."
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,_rgba(255,107,107,0.16),_transparent_42%),radial-gradient(circle_at_72%_68%,_rgba(176,58,46,0.1),_transparent_48%)]"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 500"
        fill="none"
      >
        <circle
          cx="200"
          cy="220"
          r="140"
          stroke="#FF6B6B"
          strokeWidth="1"
          opacity="0.35"
        />
        <circle
          cx="200"
          cy="220"
          r="100"
          stroke="#B03A2E"
          strokeWidth="1"
          opacity="0.25"
        />
        <path
          d="M90 220C90 140 150 80 230 90C300 99 340 170 320 240C300 310 220 350 150 330C110 318 90 270 90 220Z"
          stroke="#FF6B6B"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <line
          x1="70"
          y1="380"
          x2="330"
          y2="140"
          stroke="#3B2A24"
          strokeWidth="0.75"
          opacity="0.15"
        />
        <circle cx="280" cy="140" r="5" fill="#FF6B6B" opacity="0.7" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-script text-4xl text-coral-500">Jodie</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
          Ouverture · Clarté · Talents
        </p>
      </div>
    </div>
  );
}
