type PlaceholderSlotProps = {
  label: string;
};

export function PlaceholderSlot({ label }: PlaceholderSlotProps) {
  return (
    <div className="flex min-h-[14rem] flex-col justify-between rounded-3xl border border-dashed border-coral-200 bg-warm-50/80 px-6 py-8">
      <p className="font-display text-2xl text-ink-400">{label}</p>
      <p className="text-sm text-ink-500">
        Emplacement réservé pour un prochain témoignage — sans contenu inventé.
      </p>
    </div>
  );
}
