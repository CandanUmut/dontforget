import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { preventionItems } from '@/data/institutions';

export const metadata: Metadata = { title: 'Prevention | The Epstein Files', description: 'Actionable prevention guidance rooted in documented case patterns.' };

export default function PreventionPage() {
  return (
    <PageShell title="Making Sure This Never Happens Again" intro="Forward-looking prevention: warning signs, institutional reforms, and practical actions for people and communities.">
      <div className="space-y-4">
        {preventionItems.map((item) => (
          <article key={item.id} className="card p-4">
            <h2 className="font-section text-2xl text-heading">{item.title}</h2>
            <p className="mt-2">{item.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {item.actions.map((action) => <li key={action}>{action}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <section className="card p-4 text-sm">
        <h3 className="font-section text-2xl text-heading">Resources directory</h3>
        <p className="mt-2">National Human Trafficking Hotline: 1-888-373-7888 · Text 233733.</p>
        <p>RAINN Hotline: 800-656-HOPE.</p>
      </section>
    </PageShell>
  );
}
