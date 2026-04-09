import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { supportResources, victimStats, victimStories } from '@/data/victims';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Victims | Don’t Forget', description: 'Survivor-centered documentation handled with dignity and care.' };

export default function VictimsPage() {
  return (
    <PageShell title="Victims’ Voices" intro="This section centers survivor testimony with dignity, citation, and zero sensationalism.">
      <section className="card grid gap-2 p-4 text-sm md:grid-cols-2">
        {Object.entries(victimStats).map(([k, v]) => <p key={k}><strong>{k.replaceAll(/([A-Z])/g, ' $1')}:</strong> {v}</p>)}
      </section>
      <div className="space-y-4">
        {victimStories.map((story) => (
          <article key={story.id} className="card space-y-2 p-4">
            <h2 className="font-display text-2xl">{story.publicName ?? 'Unnamed survivor(s)'}</h2>
            <EvidenceBadge tier={story.evidenceTier} />
            <p>{story.description}</p>
            <p>{story.experience}</p>
            <SourceList sources={story.sources} />
          </article>
        ))}
      </div>
      <section className="card p-4">
        <h3 className="font-display text-xl">Support resources</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {supportResources.map((r) => <li key={r.name}><a className="text-accent underline" href={r.url} target="_blank" rel="noreferrer">{r.name}</a> · {r.contact}</li>)}
        </ul>
      </section>
    </PageShell>
  );
}
