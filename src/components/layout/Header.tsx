'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-charcoal/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3" aria-label="Primary navigation">
        <Link href="/" className="font-display text-2xl text-heading">
          The Epstein Files
        </Link>
        <button className="rounded p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:hidden" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
        <ul className="hidden gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? 'text-accent underline' : 'text-body hover:text-heading'}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open ? (
        <ul className="space-y-3 border-t border-divider bg-elevated px-4 py-4 text-lg md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-1">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
