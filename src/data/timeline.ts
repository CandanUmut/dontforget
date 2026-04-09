import { TimelineEvent } from './types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '2005-report',
    date: '2005-03-01',
    title: 'Palm Beach report initiates case',
    description: 'Initial report alleged a 14-year-old was paid for sexualized massage activity, leading to broader investigation.',
    category: 'legal',
    relatedPeople: ['jeffrey-epstein'],
    relatedLocations: ['palm-beach-estate'],
    evidenceTier: 'verified',
    sources: [{ name: 'Palm Beach PD / PBS / NPR', date: '2005-2006' }],
    milestone: true
  },
  {
    id: '2007-npa',
    date: '2007-09-24',
    title: 'Non-Prosecution Agreement signed',
    description: 'Federal NPA granted immunity to Epstein and potential co-conspirators; victims were not informed.',
    category: 'institutional',
    relatedPeople: ['sarah-kellen'],
    relatedLocations: ['southern-district-florida'],
    evidenceTier: 'verified',
    sources: [{ name: 'NPA document; DOJ OPR', date: '2007; 2020' }],
    milestone: true
  },
  {
    id: '2019-death',
    date: '2019-08-10',
    title: 'Epstein dies at MCC New York',
    description: 'DOJ OIG documented severe custodial failures; FBI and OIG affirmed suicide determination.',
    category: 'institutional',
    relatedPeople: ['jeffrey-epstein'],
    relatedLocations: ['mcc-new-york'],
    evidenceTier: 'verified',
    sources: [{ name: 'DOJ OIG report', date: '2023-06-27' }],
    milestone: true
  },
  {
    id: '2021-maxwell-conviction',
    date: '2021-12-29',
    title: 'Maxwell convicted',
    description: 'Jury found Maxwell guilty on five of six counts including sex trafficking conspiracy.',
    category: 'legal',
    relatedPeople: ['ghislaine-maxwell'],
    relatedLocations: ['sdny-court'],
    evidenceTier: 'verified',
    sources: [{ name: 'SDNY trial record', date: '2021' }],
    milestone: true
  },
  {
    id: '2025-transparency-act',
    date: '2025-11-19',
    title: 'Epstein Files Transparency Act signed',
    description: 'Law mandated release of unclassified records within 30 days; implementation disputes followed.',
    category: 'political',
    relatedPeople: [],
    relatedLocations: ['washington-dc'],
    evidenceTier: 'verified',
    sources: [{ name: 'Congress.gov; DOJ releases', date: '2025-2026' }],
    milestone: true
  },
  {
    id: '2026-redactions',
    date: '2026-01-30',
    title: 'Large-volume release with redaction controversy',
    description: 'Millions of pages released, but major portions were still heavily redacted or fully blacked out.',
    category: 'institutional',
    relatedPeople: [],
    relatedLocations: ['doj-release-portal'],
    evidenceTier: 'unresolved',
    sources: [{ name: 'DOJ release portal; congressional criticism', date: '2025-2026' }]
  }
];
