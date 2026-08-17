type PlaceholderSlotProps = {
  label: string;
};

export function PlaceholderSlot({ label }: PlaceholderSlotProps) {
  return (
    <div className="flex min-h-[14rem] flex-col justify-between rounded-2xl border border-dashed border-cream-200 bg-cream-50 px-6 py-8">
      <p className="text-lg font-semibold tracking-tight text-ink-500">
        {label}
      </p>
      <p className="text-sm text-ink-500">
        Emplacement réservé pour un prochain témoignage — sans contenu inventé.
      </p>
    </div>
  );
}
