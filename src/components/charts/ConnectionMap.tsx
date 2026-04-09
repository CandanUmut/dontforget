'use client';

import { motion } from 'framer-motion';

export function ConnectionMap({ active, targets }: { active: string; targets: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-4 text-sm"
      aria-live="polite"
    >
      <p className="text-accent">Connection highlight</p>
      <p className="mt-1">Selected: {active}</p>
      <p className="mt-1">Connected to: {targets.length ? targets.join(', ') : 'No listed links in current dataset.'}</p>
    </motion.div>
  );
}
