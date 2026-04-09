import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { SourcesClient } from '@/components/sections/SourcesClient';

export const metadata: Metadata = { title: 'Sources | The Epstein Files', description: 'Searchable source database used across this project.' };

export default function SourcesPage() {
  return (
    <PageShell title="Source Database" intro="All records are categorized for traceability and evidence review.">
      <SourcesClient />
    </PageShell>
  );
}
