import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { locations } from '@/data/locations';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Locations | Don’t Forget', description: 'Properties and infrastructure relevant to documented events.' };

export default function LocationsPage() {
  return (
    <PageShell title="Locations & Infrastructure" intro="Properties linked in records, testimony, and investigative findings.">
      <div className="grid gap-4 md:grid-cols-2">
        {locations.map((location) => (
          <article key={location.id} className="card space-y-2 p-4">
            <h2 className="font-display text-2xl">{location.name}</h2>
            <p className="text-sm text-body/70">{location.location} · {location.coordinates.lat}, {location.coordinates.lng}</p>
            <EvidenceBadge tier={location.evidenceTier} />
            <p>{location.description}</p>
            <p className="text-sm"><strong>Documented purpose:</strong> {location.documentedPurpose}</p>
            <p className="text-sm"><strong>Key events:</strong> {location.keyEvents.join('; ')}</p>
            <p className="text-sm"><strong>Testimony links:</strong> {location.testimonies.join(' ')}</p>
            <SourceList sources={location.sources} />
          </article>
        ))}
      </div>
    </PageShell>
  );
}
