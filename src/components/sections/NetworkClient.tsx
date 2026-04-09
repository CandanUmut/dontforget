'use client';

import { useMemo, useState } from 'react';
import { people } from '@/data/people';
import { SearchBar } from '@/components/ui/SearchBar';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';
import { ExpandableCard } from '@/components/ui/ExpandableCard';

const tabs = ['all', 'inner-circle', 'financial', 'political-us', 'political-intl', 'academic', 'recruitment', 'legal-defense', 'royalty'] as const;

export function NetworkClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof tabs)[number]>('all');

  const filtered = useMemo(
    () => people.filter((person) => (category === 'all' || person.category === category) && person.name.toLowerCase().includes(query.toLowerCase())),
    [category, query]
  );

  return (
    <>
      <div className="card p-4 text-sm">
        This page documents individuals named in court records, DOJ releases, congressional proceedings, and credible investigative journalism.
        Being named in a document does not imply guilt. Evidence tiers (✅ Verified, 📄 Alleged, ❓ Unresolved) indicate documented evidence strength.
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <SearchBar value={query} onChange={setQuery} label="Search names" />
        <div className="md:col-span-2 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setCategory(tab)} className={`rounded-full border px-3 py-1 text-xs ${category === tab ? 'border-accent text-accent' : 'border-divider text-body'}`}>
              {tab} ({tab === 'all' ? people.length : people.filter((p) => p.category === tab).length})
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((person) => (
          <div id={person.id} key={person.id}>
            <ExpandableCard
              title={person.name}
              summary={
                <>
                  <p className="text-sm text-body/80">“{person.role}”</p>
                  <div className="mt-2"><EvidenceBadge tier={person.evidenceTier} /></div>
                  <p className="mt-2">{person.documentedRelationship}</p>
                </>
              }
            >
              <p className="text-sm"><strong>Legal status:</strong> {person.legalStatus}</p>
              <p className="mt-2 text-sm"><strong>Key documents:</strong> {person.keyDocuments.join('; ')}</p>
              {person.allegations?.length ? <p className="mt-2 text-sm"><strong>Specific allegations:</strong> {person.allegations.join(' ')}</p> : null}
              <p className="mt-2 text-sm"><strong>Connections:</strong></p>
              <div className="mt-1 flex flex-wrap gap-2">
                {person.connections.map((connection) => {
                  const target = people.find((p) => p.id === connection.personId);
                  return (
                    <a key={`${person.id}-${connection.personId}`} href={`#${connection.personId}`} className="rounded-full border border-divider px-2 py-1 text-xs hover:border-accent">
                      {target?.name ?? connection.personId}
                    </a>
                  );
                })}
              </div>
              {person.publicStatements.length ? (
                <div className="mt-3 space-y-2">
                  {person.publicStatements.map((statement, index) => (
                    <blockquote key={index} className="rounded border border-divider bg-charcoal p-3 text-sm">
                      “{statement.quote}”
                      <div className="mt-1 font-mono text-xs text-body/70">{statement.context} · {statement.date}</div>
                    </blockquote>
                  ))}
                </div>
              ) : null}
              <SourceList sources={person.sources} />
              <p className="mt-3 text-xs text-body/70">Inclusion in documents does not establish wrongdoing unless otherwise noted.</p>
            </ExpandableCard>
          </div>
        ))}
      </div>
    </>
  );
}
