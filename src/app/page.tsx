import Link from 'next/link';
import { coreStats } from '@/lib/utils';
import { evidenceConfig, navItems, SITE } from '@/lib/constants';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-10">
      <section className="card space-y-4 p-6">
        <p className="text-sm text-alleged">{SITE.sensitiveWarning}</p>
        <h1 className="font-display text-5xl text-heading">The Jeffrey Epstein case: documented accountability record</h1>
        <p className="max-w-3xl text-body/85">
          This public awareness project presents structured, source-cited records focused on survivor dignity, institutional accountability,
          and prevention.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(coreStats).map(([key, value]) => (
          <article key={key} className="card p-4">
            <p className="text-xs uppercase text-body/70">{key.replaceAll(/([A-Z])/g, ' $1')}</p>
            <p className="mt-1 text-2xl font-semibold text-heading">{value}</p>
          </article>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="font-display text-2xl">Evidence legend</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {Object.values(evidenceConfig).map((tier) => (
            <p key={tier.label} className={`rounded-full border px-3 py-1 text-sm ${tier.color}`}>
              {tier.icon} {tier.label}
            </p>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {navItems.filter((n) => n.href !== '/').map((item) => (
          <Link key={item.href} href={item.href} className="card block p-4 transition hover:border-accent/70">
            <h3 className="font-display text-xl text-heading">{item.label}</h3>
            <p className="mt-2 text-sm text-body/80">Explore documented claims, evidence tiering, and source citations.</p>
          </Link>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="font-display text-2xl text-heading">Why this matters</h2>
        <p className="mt-2 max-w-4xl text-body/85">
          The historical record demonstrates sustained abuse, gatekeeping failures, and delayed accountability. Public memory, source
          transparency, and prevention education are essential to reduce repeat patterns.
        </p>
        <Link href="/prevention" className="mt-4 inline-block text-accent underline">
          See prevention actions
        </Link>
      </section>
    </main>
  );
}
