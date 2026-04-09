import { LocationEntry } from './types';

export const locations: LocationEntry[] = [
  {
    id: 'manhattan-townhouse',
    name: '9 East 71st Street Townhouse',
    location: 'New York City, NY',
    coordinates: { lat: 40.7698, lng: -73.9653 },
    documentedPurpose: 'Primary Manhattan residence and social venue.',
    description: 'Victim testimony and case records describe surveillance systems and abuse linked to this property.',
    keyEvents: ['Used for recruitment and abuse sessions', 'Searched in 2019 federal investigation'],
    testimonies: ['Maria Farmer described a monitor room with feeds across the house.'],
    evidenceTier: 'verified',
    sources: [{ name: 'CBS interview; FBI warrants', date: '2019; 2025' }]
  },
  {
    id: 'little-st-james',
    name: 'Little St. James',
    location: 'U.S. Virgin Islands',
    coordinates: { lat: 18.3001, lng: -64.8255 },
    documentedPurpose: 'Private island compound used for meetings and abuse allegations.',
    description: 'FBI search and civil filings document relevance to trafficking operation.',
    keyEvents: ['FBI searches in 2019', 'USVI litigation and settlement'],
    testimonies: ['Multiple survivors named the island in legal filings.'],
    evidenceTier: 'verified',
    sources: [{ name: 'FBI warrants; USVI litigation', date: '2019-2023' }]
  },
  {
    id: 'zorro-ranch',
    name: 'Zorro Ranch',
    location: 'New Mexico',
    coordinates: { lat: 35.621, lng: -105.577 },
    documentedPurpose: 'Ranch compound linked to testimony and reopened investigation.',
    description: 'First law enforcement search occurred in March 2026 after renewed state inquiry.',
    keyEvents: ['Named in Annie Farmer testimony', 'Searched by NM authorities in 2026'],
    testimonies: ['Jane trial testimony described abuse at the ranch as a minor.'],
    evidenceTier: 'verified',
    sources: [{ name: 'Time; trial testimony summaries', date: '2021; 2026' }]
  }
];
