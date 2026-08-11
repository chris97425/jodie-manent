type ProgressBarProps = {
  value: number;
  max: number;
  label: string;
};

export function ProgressBar({ value, max, label }: ProgressBarProps) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-ink-600">{label}</span>
        <span className="tabular-nums text-ink-400">
          {value}/{max}
        </span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-cream-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-coral-500 transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
