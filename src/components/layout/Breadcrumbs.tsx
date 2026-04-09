'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-body/70">
      <Link href="/" className="hover:text-accent">
        Home
      </Link>
      {parts.map((part, index) => {
        const href = '/' + parts.slice(0, index + 1).join('/');
        return (
          <span key={href}>
            {' '}/{' '}
            <Link href={href} className="capitalize hover:text-accent">
              {part}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
