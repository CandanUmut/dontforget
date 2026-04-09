import { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/sections/PageShell';
import { locations } from '@/data/locations';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Locations | The Epstein Files', description: 'Documented locations, logistics, and related testimonies.' };

export default function LocationsPage() {
  return (
    <PageShell title="Where It Happened" intro="Residences, transport, and operational sites documented across testimony, records, and investigative reporting.">
      <div className="grid gap-4 md:grid-cols-2">
        {locations.map((location) => (
          <article id={location.id} key={location.id} className="card space-y-3 p-4">
            <h2 className="font-section text-3xl text-heading">{location.name}</h2>
            <p className="font-mono text-xs text-accent">{location.address ?? 'Address withheld/varied'} · {location.type}</p>
            <EvidenceBadge tier={location.evidenceTier} />
            <p>{location.documentedPurpose}</p>
            <p className="text-sm"><strong>Key events:</strong> {location.keyEvents.join(' · ')}</p>
            <p className="text-sm"><strong>Victim testimonies:</strong> {location.victimTestimonies.join(' ')}</p>
            {location.fbiFindings?.length ? <p className="text-sm"><strong>FBI findings:</strong> {location.fbiFindings.join(' ')}</p> : null}
            <div>
              <Link href="/timeline" className="text-accent underline">View related timeline events</Link>
            </div>
            <SourceList sources={location.sources} />
          </article>
        ))}
      </div>
    </PageShell>
  );
}
