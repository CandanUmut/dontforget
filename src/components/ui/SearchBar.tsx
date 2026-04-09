'use client';

interface SearchBarProps {
  value: string;
  onChange: (next: string) => void;
  label?: string;
}

export function SearchBar({ value, onChange, label = 'Search' }: SearchBarProps) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span>{label}</span>
      <input
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to filter..."
        className="rounded-lg border border-white/20 bg-black/20 px-3 py-2"
      />
    </label>
  );
}
