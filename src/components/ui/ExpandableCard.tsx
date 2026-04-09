'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export function ExpandableCard({ title, summary, children }: { title: string; summary: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card p-4">
      <button className="w-full text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <h3 className="font-display text-2xl text-heading">{title}</h3>
        <div className="mt-2 text-body/80">{summary}</div>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-4 border-t border-divider pt-4">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
