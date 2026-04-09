import { allSources } from '@/data/sources';
import { people } from '@/data/people';
import { timelineEvents } from '@/data/timeline';

export const formatDate = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const coreStats = [
  { label: 'survivors compensated', value: 135, suffix: '+' },
  { label: 'pages released by DOJ', value: 3.5, suffix: 'M+' },
  { label: 'years of documented abuse', value: 20, suffix: '+' },
  { label: 'named associates in documents', value: people.length, suffix: '+' }
];

export const yearsCovered = () => {
  const years = timelineEvents.map((event) => Number(event.date.slice(0, 4))).filter(Boolean);
  return `${Math.min(...years)}-${Math.max(...years)}`;
};

export const sourceCount = allSources.length;
