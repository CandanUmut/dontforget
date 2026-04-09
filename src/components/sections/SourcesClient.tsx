'use client';

import { useMemo, useState } from 'react';
import { allSources } from '@/data/sources';
import { SearchBar } from '@/components/ui/SearchBar';

export function SourcesClient() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');

  const filtered = useMemo(
    () => allSources.filter((source) => (type === 'all' || source.type === type) && `${source.name} ${source.date}`.toLowerCase().includes(query.toLowerCase())),
    [query, type]
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <SearchBar value={query} onChange={setQuery} label="Search source database" />
        <label className="text-sm">Type
          <select value={type} onChange={(e)=>setType(e.target.value)} className="mt-2 w-full rounded border border-divider bg-charcoal p-2">
            <option value="all">All</option>
            {[...new Set(allSources.map((source) => source.type))].map((sourceType) => <option key={sourceType}>{sourceType}</option>)}
          </select>
        </label>
      </div>
      <ul className="space-y-2">
        {filtered.map((source) => (
          <li key={`${source.name}-${source.date}`} className="card p-4 text-sm">
            <p className="font-mono text-xs uppercase text-accent">{source.type}</p>
            <p className="font-semibold text-heading">{source.name}</p>
            <p className="text-body">{source.date}</p>
            {source.url ? <a className="text-accent underline" href={source.url} target="_blank" rel="noreferrer">Open source</a> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
