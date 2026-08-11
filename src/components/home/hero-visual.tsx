/**
 * Composition géométrique sobre — écho de l'arc ouvert du logo.
 * Contraste suffisant sur fond crème (pas de flou rose).
 */
export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      role="img"
      aria-label="Composition géométrique abstraite aux arcs corail et crème"
    >
      <div className="absolute inset-[6%] rounded-full border-2 border-coral-500/40" />
      <div className="absolute inset-[14%] rounded-full border border-coral-800/35" />
      <div className="absolute inset-[22%] rounded-full border border-coral-500/50 bg-gradient-to-br from-cream-50 via-cream-100 to-coral-100/50 shadow-[inset_0_0_60px_rgba(255,107,107,0.08)]" />
      <div className="absolute inset-[34%] rounded-full border border-ink-700/15 bg-cream-50/80" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M318 72C365 138 372 228 338 298C304 368 220 408 138 382"
          stroke="#FF6B6B"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M78 118C36 192 48 286 112 338C176 390 268 398 328 352"
          stroke="#B03A2E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        <line
          x1="56"
          y1="308"
          x2="348"
          y2="96"
          stroke="#3B2A24"
          strokeWidth="1"
          opacity="0.18"
        />
        <circle cx="292" cy="112" r="6" fill="#FF6B6B" opacity="0.9" />
        <circle cx="108" cy="286" r="5" fill="#3B2A24" opacity="0.4" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-cream-50/70 px-6 py-4 text-center backdrop-blur-[2px]">
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
