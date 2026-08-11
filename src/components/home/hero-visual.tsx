/**
 * Composition géométrique sobre — écho de l'arc ouvert du logo.
 * Pas de flou rose, pas de portrait.
 */
export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      role="img"
      aria-label="Composition géométrique abstraite aux arcs corail et crème"
    >
      <div className="absolute inset-[8%] rounded-full border border-coral-500/25" />
      <div className="absolute inset-[16%] rounded-full border border-coral-500/35" />
      <div className="absolute inset-[24%] rounded-full border border-cream-200 bg-gradient-to-br from-cream-50 via-cream-100 to-coral-100/40" />
      <div className="absolute inset-[36%] rounded-full border border-coral-500/20" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M320 80C360 140 370 220 340 290C310 360 230 400 150 380"
          stroke="#FF6B6B"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M80 120C40 190 50 280 110 330C170 380 260 390 320 350"
          stroke="#B03A2E"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
        />
        <line
          x1="60"
          y1="300"
          x2="340"
          y2="100"
          stroke="#FF6B6B"
          strokeWidth="0.75"
          opacity="0.2"
        />
        <circle cx="286" cy="118" r="5" fill="#FF6B6B" opacity="0.7" />
        <circle cx="112" cy="278" r="4" fill="#3B2A24" opacity="0.35" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-script text-5xl text-coral-500 sm:text-6xl">
            Jodie
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">
            Ouverture · Clarté
          </p>
        </div>
      </div>
    </div>
  );
}
