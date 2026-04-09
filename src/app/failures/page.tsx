import { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/sections/PageShell';
import { institutionalFailures } from '@/data/institutions';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Institutional Failures | The Epstein Files', description: 'Chronological record of legal and custodial failures.' };

export default function FailuresPage() {
  return (
    <PageShell title="How the System Protected Power" intro="A chronological cascade of documented failures that enabled abuse, reduced accountability, and damaged trust.">
      <div className="space-y-4">
        {institutionalFailures.map((failure) => (
          <article key={failure.id} className="card space-y-3 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-section text-2xl text-heading">{failure.title}</h2>
              <EvidenceBadge tier={failure.evidenceTier} />
            </div>
            <p className="font-mono text-xs text-accent">{failure.date} · {failure.institution}</p>
            <div className="rounded border border-verified/40 bg-verified/10 p-3 text-sm">
              <strong>What the law/standard required:</strong> {failure.whatShouldHaveHappened}
            </div>
            <div className="rounded border border-unresolved/50 bg-unresolved/10 p-3 text-sm">
              <strong>What actually happened:</strong> {failure.whatHappened}
            </div>
            <p className="text-sm"><strong>Who was responsible:</strong> {failure.whoWasResponsible.join(', ')}</p>
            <p className="text-sm"><strong>What resulted:</strong> {failure.consequence}</p>
            <p className="text-sm"><strong>What remains unresolved:</strong> {failure.stillUnresolved.join(' | ')}</p>
            <p className="text-sm">Cross-reference profiles in the <Link href="/network" className="text-accent underline">network page</Link>.</p>
            <SourceList sources={failure.sources} />
          </article>
        ))}
      </div>
    </PageShell>
  );
}
