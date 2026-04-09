'use client';

import { useMemo, useState } from 'react';
import { timelineEvents } from '@/data/timeline';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';
import { SearchBar } from '@/components/ui/SearchBar';
import { formatDate } from '@/lib/utils';

export function TimelineClient() {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState<'all' | 'verified' | 'alleged' | 'unresolved'>('all');
  const filtered = useMemo(
    () => timelineEvents.filter((e) => (tier === 'all' || e.evidenceTier === tier) && `${e.title} ${e.description}`.toLowerCase().includes(query.toLowerCase())),
    [query, tier]
  );

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        <SearchBar value={query} onChange={setQuery} label="Search timeline" />
        <label className="text-sm">Evidence tier
          <select value={tier} onChange={(e)=>setTier(e.target.value as typeof tier)} className="mt-2 w-full rounded border bg-black/20 p-2">
            <option value="all">All</option><option value="verified">Verified</option><option value="alleged">Alleged</option><option value="unresolved">Unresolved</option>
          </select>
        </label>
      </div>
      <ol className="space-y-4 border-l border-accent/40 pl-4">
        {filtered.map((event) => (
          <li key={event.id} className={`card p-4 ${event.milestone ? 'border-accent/80' : ''}`}>
            <div className="flex flex-wrap items-center justify-between gap-2"><h2 className="font-display text-2xl">{event.title}</h2><EvidenceBadge tier={event.evidenceTier} /></div>
            <p className="mt-1 text-sm text-body/70">{formatDate(event.date)} · {event.category}</p>
            <p className="mt-2">{event.description}</p>
            <SourceList sources={event.sources} />
          </li>
        ))}
      </ol>
    </>
  );
}
