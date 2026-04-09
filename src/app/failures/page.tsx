import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { institutionalFailures } from '@/data/institutions';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Institutional Failures | Don’t Forget', description: 'Documented institutional breakdowns from 2006 through 2026.' };

export default function FailuresPage() {
  return (
    <PageShell title="Institutional Failures" intro="Chronological breakdowns of legal, custodial, and transparency failures.">
      <div className="space-y-4">
        {institutionalFailures.map((failure) => (
          <article key={failure.id} className="card space-y-2 p-4">
            <div className="flex items-center justify-between"><h2 className="font-display text-2xl">{failure.period}</h2><EvidenceBadge tier={failure.evidenceTier} /></div>
            <p>{failure.description}</p>
            <p><strong>What happened:</strong> {failure.whatHappened}</p>
            <p><strong>What law/protocol required:</strong> {failure.legalExpectation}</p>
            <p><strong>Who responsible:</strong> {failure.responsibleParties.join(', ')}</p>
            <p><strong>Still unresolved:</strong> {failure.unresolvedQuestions}</p>
            <SourceList sources={failure.sources} />
          </article>
        ))}
      </div>
    </PageShell>
  );
}
