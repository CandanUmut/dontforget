import { ReactNode } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export function PageShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-4 py-8">
      <Breadcrumbs />
      <div className="card p-4 text-sm text-alleged">{SITE.sensitiveWarning}</div>
      <div className="space-y-3">
        <h1 className="font-display text-5xl text-heading">{title}</h1>
        <p className="max-w-4xl text-body">{intro}</p>
        <p className="text-sm text-body/80">{SITE.disclaimer}</p>
      </div>
      {children}
      <div className="card p-4">
        <p>
          How to Help: Visit the{' '}
          <Link href="/prevention" className="text-accent underline">
            Prevention
          </Link>{' '}
          section for reporting resources and actionable safeguards.
        </p>
      </div>
    </section>
  );
}
