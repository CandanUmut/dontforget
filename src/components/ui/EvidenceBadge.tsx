import { EvidenceTier } from '@/data/types';
import { evidenceConfig } from '@/lib/constants';

export function EvidenceBadge({ tier }: { tier: EvidenceTier }) {
  const cfg = evidenceConfig[tier];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${cfg.color} ${cfg.bg}`}>
      <span aria-hidden>{cfg.icon}</span>
      {cfg.label}
    </span>
  );
}
