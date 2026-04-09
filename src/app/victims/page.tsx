import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { supportResources, victimStats, victimStories } from '@/data/victims';
import { SourceList } from '@/components/ui/SourceList';
import { ContentWarning } from '@/components/ui/ContentWarning';

export const metadata: Metadata = { title: 'Victims | The Epstein Files', description: 'Survivor-centered testimony and support resources.' };

export default function VictimsPage() {
  return (
    <PageShell title="Their Stories" intro="This page centers the experiences of survivors as documented in court records and credible reporting.">
      <ContentWarning>
        <section className="card p-4 text-sm">
          <p className="font-section text-2xl text-heading">Scale and compensation</p>
          <div className="mt-2 grid gap-2 md:grid-cols-2">
            {Object.entries(victimStats).map(([key, value]) => <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</p>)}
          </div>
        </section>

        <div className="space-y-4">
          {victimStories.map((story) => (
            <article key={story.id} className="card p-4">
              <h2 className="font-section text-2xl text-heading">{story.name ?? 'Unnamed survivor(s)'}</h2>
              <p className="font-mono text-xs text-accent">{story.anonymous ? 'Anonymous testimony cluster' : `Age at time: ${story.ageAtTime ?? 'N/A'}`}</p>
              <p className="mt-2">{story.testimony}</p>
              <p className="mt-2 text-sm text-body">{story.context}</p>
              <SourceList sources={[story.source]} />
            </article>
          ))}
        </div>

        <section className="card p-4">
          <h3 className="font-section text-2xl text-heading">International victims and support</h3>
          <p className="mt-2 text-body">The source record references cross-border trafficking pathways including Turkey, Czech Republic, Lithuania, and broader international routes.</p>
          <ul className="mt-3 space-y-1 text-sm">
            {supportResources.map((resource) => <li key={resource.name}><a className="text-accent underline" href={resource.url} target="_blank" rel="noreferrer">{resource.name}</a> · {resource.contact}</li>)}
          </ul>
        </section>
      </ContentWarning>
    </PageShell>
  );
}
