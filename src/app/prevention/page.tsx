import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { preventionItems } from '@/data/institutions';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Prevention | Don’t Forget', description: 'Actionable prevention patterns, warning signs, and reporting resources.' };

export default function PreventionPage() {
  return (
    <PageShell title="Patterns & Prevention" intro="Forward-looking actions to identify grooming, reduce institutional capture, and improve response.">
      <div className="space-y-4">
        {preventionItems.map((item) => (
          <article key={item.id} className="card space-y-2 p-4">
            <div className="flex items-center justify-between"><h2 className="font-display text-2xl">{item.pattern}</h2><EvidenceBadge tier={item.evidenceTier} /></div>
            <p>{item.description}</p>
            <p><strong>Warning signs:</strong> {item.warningSigns.join('; ')}</p>
            <p><strong>Prevention actions:</strong> {item.actions.join('; ')}</p>
            <SourceList sources={item.sources} />
          </article>
        ))}
      </div>
      <section className="card p-4 text-sm">
        <h3 className="font-display text-xl">Report suspected trafficking</h3>
        <p>U.S. National Human Trafficking Hotline: 888-373-7888 · text 233733.</p>
      </section>
    </PageShell>
  );
}
