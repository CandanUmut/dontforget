import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { transparencyItems } from '@/data/institutions';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Transparency | Don’t Forget', description: 'What has been released, what remains withheld, and how people can engage.' };

export default function TransparencyPage() {
  return (
    <PageShell title="Transparency & What Is Still Hidden" intro="Track disclosures, unresolved withholdings, and civic engagement pathways.">
      <div className="space-y-4">
        {transparencyItems.map((item) => (
          <article key={item.id} className="card space-y-2 p-4">
            <div className="flex items-center justify-between"><h2 className="font-display text-2xl">{item.date}</h2><EvidenceBadge tier={item.evidenceTier} /></div>
            <p>{item.description}</p>
            <p><strong>Released:</strong> {item.released}</p>
            <p><strong>Withheld:</strong> {item.withheld}</p>
            <p><strong>Actions:</strong> {item.actions}</p>
            <SourceList sources={item.sources} />
          </article>
        ))}
      </div>
      <section className="card p-4 text-sm">
        <h3 className="font-display text-xl">Citizen action</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>File focused FOIA requests for specific withheld categories.</li>
          <li>Contact representatives about redaction oversight and survivor-centered transparency.</li>
          <li>Support survivor advocacy and legal aid organizations.</li>
        </ul>
      </section>
    </PageShell>
  );
}
