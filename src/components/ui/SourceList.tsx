import { Source } from '@/data/types';

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <details className="mt-2 text-sm text-body/80">
      <summary className="cursor-pointer text-accent">Sources ({sources.length})</summary>
      <ul className="mt-2 list-disc space-y-1 pl-6">
        {sources.map((source) => (
          <li key={`${source.name}-${source.date}`}>
            {source.name} ({source.date}){' '}
            {source.url ? (
              <a href={source.url} className="underline" target="_blank" rel="noreferrer">
                Link
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </details>
  );
}
