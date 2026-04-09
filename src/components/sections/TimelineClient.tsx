'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { timelineEvents } from '@/data/timeline';
import { people } from '@/data/people';
import { locations } from '@/data/locations';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';
import { SearchBar } from '@/components/ui/SearchBar';

export function TimelineClient() {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState<'all' | 'verified' | 'alleged' | 'unresolved'>('all');
  const [criticalOnly, setCriticalOnly] = useState(false);
  const [highlightPerson, setHighlightPerson] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return timelineEvents.filter((event) => {
      const text = `${event.title} ${event.summary} ${event.detail}`.toLowerCase();
      return (
        (tier === 'all' || event.evidenceTier === tier) &&
        (!criticalOnly || event.significance === 'critical') &&
        text.includes(query.toLowerCase())
      );
    });
  }, [criticalOnly, query, tier]);

  return (
    <>
      <div className="card sticky top-16 z-20 grid gap-4 p-4 md:grid-cols-4">
        <SearchBar value={query} onChange={setQuery} label="Search timeline" />
        <label className="text-sm">Evidence tier
          <select value={tier} onChange={(e) => setTier(e.target.value as typeof tier)} className="mt-2 w-full rounded border border-divider bg-charcoal p-2">
            <option value="all">All</option><option value="verified">Verified</option><option value="alleged">Alleged</option><option value="unresolved">Unresolved</option>
          </select>
        </label>
        <label className="text-sm">Highlight person
          <select value={highlightPerson ?? ''} onChange={(e) => setHighlightPerson(e.target.value || null)} className="mt-2 w-full rounded border border-divider bg-charcoal p-2">
            <option value="">None</option>
            {people.map((person) => <option key={person.id} value={person.id}>{person.name}</option>)}
          </select>
        </label>
        <label className="mt-7 flex items-center gap-2 text-sm"><input type="checkbox" checked={criticalOnly} onChange={(e) => setCriticalOnly(e.target.checked)} /> Show critical only</label>
      </div>

      <ol className="mt-6 space-y-4 border-l border-accent pl-5">
        {filtered.map((event, index) => {
          const highlighted = highlightPerson ? event.relatedPeopleIds.includes(highlightPerson) : false;
          return (
            <motion.li
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className={`card p-4 ${event.significance === 'critical' ? 'border-l-4 border-l-accent' : ''} ${highlighted ? 'ring-1 ring-accent' : ''}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-section text-2xl text-heading">{event.title}</h2>
                <EvidenceBadge tier={event.evidenceTier} />
              </div>
              <p className="font-mono text-xs text-accent">{event.date}</p>
              <p className="mt-2 text-body">{event.summary}</p>
              <details className="mt-3">
                <summary className="cursor-pointer text-accent">Expand full detail</summary>
                <p className="mt-2 text-body">{event.detail}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.relatedPeopleIds.map((id) => {
                    const person = people.find((p) => p.id === id);
                    if (!person) return null;
                    return <Link key={id} href={`/network#${id}`} className="rounded-full border border-divider px-2 py-1 text-xs hover:border-accent">{person.name}</Link>;
                  })}
                  {event.relatedLocationIds.map((id) => {
                    const location = locations.find((l) => l.id === id);
                    if (!location) return null;
                    return <Link key={id} href={`/locations#${id}`} className="rounded-full border border-divider px-2 py-1 text-xs hover:border-accent">{location.name}</Link>;
                  })}
                </div>
                <SourceList sources={event.sources} />
              </details>
            </motion.li>
          );
        })}
      </ol>
    </>
  );
}
