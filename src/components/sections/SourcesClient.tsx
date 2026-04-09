'use client';

import { useMemo, useState } from 'react';
import { sourceCategories } from '@/data/sources';
import { SearchBar } from '@/components/ui/SearchBar';

export function SourcesClient() {
  const [query, setQuery] = useState('');
  const flattened = Object.entries(sourceCategories).flatMap(([category, items]) => items.map((item) => ({ ...item, category })));
  const filtered = useMemo(() => flattened.filter((s) => `${s.name} ${s.category}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="space-y-4">
      <SearchBar value={query} onChange={setQuery} label="Search sources" />
      <ul className="space-y-2">
        {filtered.map((source) => (
          <li key={`${source.category}-${source.name}`} className="card p-4 text-sm">
            <p className="text-xs uppercase text-accent">{source.category}</p>
            <p className="font-semibold text-heading">{source.name}</p>
            <p>{source.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
