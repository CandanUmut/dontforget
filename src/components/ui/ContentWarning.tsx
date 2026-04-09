'use client';

import { useState } from 'react';

export function ContentWarning({ children, title = 'Sensitive content notice' }: { children: React.ReactNode; title?: string }) {
  const [accepted, setAccepted] = useState(false);
  if (accepted) return <>{children}</>;
  return (
    <div className="card p-6 text-center">
      <h2 className="font-display text-3xl text-heading">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-body/80">
        This section contains survivor testimony and details of sexual abuse, trafficking, and institutional failure.
      </p>
      <button onClick={() => setAccepted(true)} className="mt-5 rounded-full border border-accent px-5 py-2 text-accent hover:bg-accent/10">
        I understand, continue
      </button>
    </div>
  );
}
