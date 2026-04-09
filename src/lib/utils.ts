import { allSources } from '@/data/sources';

export const formatDate = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const yearsCovered = () => {
  const years = [2005, 2026];
  return `${years[0]}-${years[1]}`;
};

export const coreStats = {
  knownVictimClaims: '225+',
  yearsOfAbuseDocumented: '~2 decades',
  pagesReleased: '3.5M',
  associatesDocumented: '150+ names unsealed'
};

export const sourceCount = allSources.length;
