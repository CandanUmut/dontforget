import Link from 'next/link';
import { coreStats } from '@/lib/utils';
import { navItems, SITE } from '@/lib/constants';
import { people } from '@/data/people';
import { timelineEvents } from '@/data/timeline';
import { institutionalFailures } from '@/data/institutions';
import { ContentWarning } from '@/components/ui/ContentWarning';
import { RedactedBlock } from '@/components/ui/RedactedBlock';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCounter } from '@/components/ui/StatCounter';

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl space-y-14 px-4 pb-14 pt-8">
      <ContentWarning title="Before you enter">
        <section className="card flex min-h-[78vh] flex-col justify-center p-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Documented investigative archive</p>
          <h1 className="mt-4 font-display text-6xl text-heading md:text-7xl">The Epstein Files</h1>
          <p className="mt-3 max-w-3xl font-section text-2xl text-heading">A Documented Investigation Into Systemic Abuse, Institutional Failure, and the Fight for Accountability</p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-body">
            For decades, children and young women were exploited while institutions repeatedly failed to act with urgency. This project organizes
            documented records into a readable, searchable public record so survivors are centered, facts remain traceable, and the same failures are harder to repeat.
            Every section links claims to sources and evidence tiering.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coreStats.map((stat) => <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />)}
          </div>
        </section>
      </ContentWarning>

      <section className="space-y-5">
        <SectionHeader title="How to Read This Site" subtitle="Each claim includes an evidence badge and expandable source record." />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-4">✅ <strong>Verified:</strong> corroborated by primary records or official releases.</div>
          <div className="card p-4">📄 <strong>Alleged:</strong> reported in testimony/filings not conclusively adjudicated.</div>
          <div className="card p-4">❓ <strong>Unresolved:</strong> key records remain withheld, contested, or unclear.</div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="Investigative Sections" subtitle="Progressive disclosure: quick summary first, full detail on click." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {navItems.filter((item) => item.href !== '/').map((item) => (
            <Link key={item.href} href={item.href} className="card block p-5 transition hover:scale-[1.01]">
              <h3 className="font-section text-2xl text-heading">{item.label}</h3>
              <p className="mt-2 text-body">Dive into documented events, people profiles, source links, and unresolved gaps.</p>
              <p className="mt-3 font-mono text-xs text-accent">
                {item.href === '/timeline' && `${timelineEvents.length} documented events`}
                {item.href === '/network' && `${people.length} named individuals`}
                {item.href === '/failures' && `${institutionalFailures.length} institutional failures`}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="Why This Matters" subtitle="Not only one case—this is a prevention and accountability blueprint." />
        <p className="max-w-4xl text-lg leading-8 text-body">
          Documenting exactly how power insulated abuse helps investigators, lawmakers, journalists, parents, and communities identify repeat patterns sooner.
          Public records prevent memory laundering. Survivor testimony reframes priorities from reputation management to human harm.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader title="What’s Still Hidden" subtitle="Core records remain withheld or heavily redacted despite large releases." />
        <div className="space-y-2">
          <RedactedBlock text="FBI 302 Victim Interview Statements" />
          <RedactedBlock text="2007 Draft Federal Indictment" />
          <RedactedBlock text="Prosecution Memorandum" />
          <RedactedBlock text="Hundreds of thousands of Epstein-system emails" />
        </div>
        <Link href="/transparency" className="text-accent underline">Go to transparency battle timeline</Link>
      </section>

      <section className="card p-4 text-sm text-body">{SITE.disclaimer}</section>
    </section>
  );
}
