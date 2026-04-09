import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { transparencyTimeline } from '@/data/institutions';
import { RedactedBlock } from '@/components/ui/RedactedBlock';
import { SourceList } from '@/components/ui/SourceList';

export const metadata: Metadata = { title: 'Transparency | The Epstein Files', description: 'Release timeline, withheld categories, and civic action paths.' };

export default function TransparencyPage() {
  return (
    <PageShell title="The Fight for the Truth" intro="What has been released, what remains hidden, and how public pressure has changed disclosure over time.">
      <ol className="space-y-3 border-l border-accent pl-4">
        {transparencyTimeline.map((item) => (
          <li key={item.id} className="card p-4">
            <p className="font-mono text-xs text-accent">{item.date}</p>
            <h2 className="font-section text-2xl text-heading">{item.title}</h2>
            <p className="mt-1">{item.summary}</p>
            <p className="mt-1 text-sm text-body">{item.detail}</p>
            <SourceList sources={item.sources} />
          </li>
        ))}
      </ol>

      <section className="space-y-2">
        <h3 className="font-section text-3xl text-heading">What’s still withheld</h3>
        <RedactedBlock text="FBI 302 victim interview statements" />
        <RedactedBlock text="2007 draft federal indictment" />
        <RedactedBlock text="Prosecution memorandum" />
        <RedactedBlock text="Large email archives from Epstein computers" />
      </section>

      <section className="card p-4 text-sm">
        <h3 className="font-section text-2xl text-heading">How to take action</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Use targeted FOIA templates focused on specific withheld categories.</li>
          <li>Contact representatives and request oversight of redaction standards and victim-safety controls.</li>
          <li>Support survivor-centered legal and advocacy organizations.</li>
          <li>Share direct links to documented sections of this site for public education.</li>
        </ul>
        <p className="mt-3">Primary document hubs: <a href="https://www.justice.gov/epstein" className="text-accent underline">justice.gov/epstein</a> and House Oversight release pages.</p>
      </section>
    </PageShell>
  );
}
