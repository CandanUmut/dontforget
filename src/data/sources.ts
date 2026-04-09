import { Source } from './types';

export const sourceCategories: Record<string, Source[]> = {
  'court-documents': [
    { name: 'United States v. Maxwell (SDNY trial record)', date: '2021' },
    { name: 'United States v. Maxwell, 118 F.4th 256 (2d Cir.)', date: '2024' },
    { name: 'Giuffre v. Maxwell (unsealed documents)', date: '2015-2024' },
    { name: 'Non-Prosecution Agreement (S.D. Fla.)', date: '2007-09-24' }
  ],
  'doj-fbi': [
    { name: 'DOJ OIG Report on MCC New York', date: '2023-06-27' },
    { name: 'DOJ OPR Report on NPA', date: '2020-11-01' },
    { name: 'DOJ Transparency Act releases', date: '2025-12 to 2026-01' }
  ],
  congressional: [
    { name: 'House Oversight Committee Releases', date: '2025-2026' },
    { name: 'Epstein Files Transparency Act (H.R. 4405)', date: '2025-11-19' }
  ],
  journalism: [
    { name: 'Miami Herald: Perversion of Justice', date: '2018-11-28' },
    { name: 'NPR investigative reports', date: '2019-2026' },
    { name: 'PBS reporting and interviews', date: '2019-2026' }
  ],
  testimony: [
    { name: 'Annie Farmer trial testimony', date: '2021' },
    { name: 'Maria Farmer FBI complaint release', date: '1996; released 2025' },
    { name: 'Courtney Wild CVRA proceedings', date: '2019-2021' }
  ]
};

export const allSources = Object.values(sourceCategories).flat();
