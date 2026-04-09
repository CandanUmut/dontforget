'use client';

import Link from 'next/link';
import { SITE, evidenceConfig } from '@/lib/constants';

export function Footer() {
  const share = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <footer className="mt-16 border-t border-divider px-4 py-10 text-sm">
      <div className="mx-auto max-w-7xl space-y-4 text-body">
        <div className="flex flex-wrap gap-2">
          {Object.values(evidenceConfig).map((tier) => (
            <span key={tier.label} className={`rounded-full border px-3 py-1 text-xs ${tier.color} ${tier.bg}`}>
              {tier.icon} {tier.label}
            </span>
          ))}
        </div>
        <p>{SITE.disclaimer}</p>
        <div className="flex flex-wrap items-center gap-3">
          <p>Last updated: April 9, 2026.</p>
          <Link href="https://github.com" className="text-accent underline">GitHub repo</Link>
          <button onClick={share} className="rounded border border-divider px-3 py-1 hover:border-accent">Share this site</button>
        </div>
        <p className="font-section text-heading">Built for awareness and prevention.</p>
      </div>
    </footer>
  );
}
