export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-3">
      <div className="h-px w-24 bg-accent" />
      <h2 className="font-section text-3xl text-heading">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-body/80">{subtitle}</p> : null}
    </div>
  );
}
