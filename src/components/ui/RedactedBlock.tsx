export function RedactedBlock({ text }: { text: string }) {
  return (
    <div className="rounded border border-red-900/60 bg-black px-3 py-2 font-mono text-sm tracking-wide text-red-300 shadow-[0_0_24px_rgba(220,38,38,0.18)]">
      {text} <span className="text-red-500">[REDACTED]</span>
    </div>
  );
}
