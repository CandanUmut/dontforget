import { Metadata } from 'next';
import { PageShell } from '@/components/sections/PageShell';
import { NetworkClient } from '@/components/sections/NetworkClient';

export const metadata: Metadata = {
  title: 'Network | Don’t Forget',
  description: 'People and connections explorer with evidence tiers and source citations.'
};

export default function NetworkPage() {
  return (
    <PageShell title="People & Connections" intro="Appearing in documents does not establish wrongdoing.">
      <NetworkClient />
    </PageShell>
  );
}
