import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { TimelineClient } from '@/components/sections/TimelineClient';

export const metadata: Metadata = {
  title: 'Timeline | Don’t Forget',
  description: 'Chronological, evidence-tiered timeline of key events in the Epstein case.'
};

export default function TimelinePage() {
  return (
    <PageShell title="Interactive Timeline" intro="Filter key legal, political, personal, and institutional milestones.">
      <TimelineClient />
    </PageShell>
  );
}
