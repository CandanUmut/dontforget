'use client';

import { useMemo, useState } from 'react';
import { people } from '@/data/people';
import { SearchBar } from '@/components/ui/SearchBar';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';
import { ConnectionMap } from '@/components/charts/ConnectionMap';

export function NetworkClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [active, setActive] = useState<string | null>(null);
  const filtered = useMemo(() => people.filter((p) => (category === 'all' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())), [query, category]);
  const activePerson = people.find((p) => p.id === active);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        <SearchBar value={query} onChange={setQuery} label="Search people" />
        <label className="text-sm">Category
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="mt-2 w-full rounded border bg-black/20 p-2">
            <option value="all">All categories</option>
            {Array.from(new Set(people.map((p) => p.category))).map((cat)=><option key={cat} value={cat}>{cat}</option>)}
          </select>
        </label>
      </div>
      {activePerson ? <ConnectionMap active={activePerson.name} targets={activePerson.connections.map((c)=>c.personId)} /> : null}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((person)=>(<article key={person.id} className="card space-y-2 p-4">
          <button className="text-left" onClick={()=>setActive(person.id)}><h2 className="font-display text-2xl">{person.name}</h2></button>
          <p className="text-sm text-body/70">{person.role}</p><EvidenceBadge tier={person.evidenceTier} /><p>{person.description}</p>
          <p className="text-sm"><strong>Legal status:</strong> {person.legalStatus}</p>
          <p className="text-sm"><strong>Statements:</strong> {person.publicStatements.join(' ')}</p>
          <SourceList sources={person.sources} />
        </article>))}
      </div>
    </>
  );
}
