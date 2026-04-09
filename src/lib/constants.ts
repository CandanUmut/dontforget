import { EvidenceTier } from '@/data/types';

export const SITE = {
  title: 'The Epstein Files',
  description: 'A documented investigation into systemic abuse, institutional failure, and the fight for accountability.',
  disclaimer:
    'This website presents documented facts from court records, government releases, and credible journalism. Presence in documents does not establish guilt.',
  sensitiveWarning:
    'Sensitive content: sexual abuse, trafficking, institutional failure, and suicide. Reader discretion is advised.'
};

export const evidenceConfig: Record<EvidenceTier, { label: string; icon: string; color: string; bg: string }> = {
  verified: { label: 'Verified', icon: '✅', color: 'text-verified border-verified/60', bg: 'bg-verified/10' },
  alleged: { label: 'Alleged', icon: '📄', color: 'text-alleged border-alleged/60', bg: 'bg-alleged/10' },
  unresolved: { label: 'Unresolved', icon: '❓', color: 'text-unresolved border-unresolved/60', bg: 'bg-unresolved/10' }
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
