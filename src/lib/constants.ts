import { EvidenceTier } from '@/data/types';

export const SITE = {
  title: 'Don’t Forget: Epstein Accountability Archive',
  description:
    'A documented, evidence-tiered record focused on accountability, survivor dignity, transparency, and prevention.',
  disclaimer: 'Appearing in records or documents does not establish criminal wrongdoing or legal guilt.',
  sensitiveWarning:
    'Content warning: this project documents sexual abuse, trafficking, suicide, and institutional failure.'
};

export const evidenceConfig: Record<EvidenceTier, { label: string; icon: string; color: string }> = {
  verified: { label: 'Verified', icon: '✅', color: 'text-verified border-verified/40' },
  alleged: { label: 'Alleged', icon: '📄', color: 'text-alleged border-alleged/40' },
  unresolved: { label: 'Unresolved', icon: '❓', color: 'text-unresolved border-unresolved/40' }
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/network', label: 'Network' },
  { href: '/locations', label: 'Locations' },
  { href: '/victims', label: 'Victims' },
  { href: '/failures', label: 'Failures' },
  { href: '/transparency', label: 'Transparency' },
  { href: '/prevention', label: 'Prevention' },
  { href: '/sources', label: 'Sources' }
];
