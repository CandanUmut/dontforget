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
    <header className="sticky top-0 z-30 border-b border-white/10 bg-charcoal/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Primary navigation">
        <Link href="/" className="font-display text-lg text-heading">
          Don’t Forget
        </Link>
        <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
        <ul className="hidden gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? 'text-accent' : 'text-body hover:text-white'}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open ? (
        <ul className="space-y-2 border-t border-white/10 px-4 py-3 text-sm md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
