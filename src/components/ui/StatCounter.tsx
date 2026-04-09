'use client';

import { animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(value < 10 ? latest.toFixed(1) : Math.round(latest).toString())
    });
    return () => controls.stop();
  }, [value]);

  return (
    <div className="card p-4 text-center">
      <p className="font-section text-3xl text-heading">{display}{suffix}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-body/60">{label}</p>
    </div>
  );
}
