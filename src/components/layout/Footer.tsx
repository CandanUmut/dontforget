import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 px-4 py-10 text-sm">
      <div className="mx-auto max-w-6xl space-y-2 text-body/80">
        <p>{SITE.disclaimer}</p>
        <p>Last updated: April 9, 2026 (UTC).</p>
        <p>
          GitHub: <Link href="https://github.com" className="text-accent underline">Repository</Link> · Contribute via pull requests.
        </p>
      </div>
    </footer>
  );
}
