import { Person } from './types';

export const people: Person[] = [
  {
    id: 'ghislaine-maxwell',
    name: 'Ghislaine Maxwell',
    role: 'Recruitment and trafficking coordinator',
    category: 'inner-circle',
    description: 'Convicted for recruiting and grooming minors for Epstein between approximately 1994 and 2004.',
    legalStatus: 'Convicted in 2021, sentenced to 20 years in 2022; conviction affirmed in 2024.',
    evidenceTier: 'verified',
    publicStatements: ['Publicly denied wrongdoing before trial.'],
    connections: [
      { personId: 'jeffrey-epstein', nature: 'Primary operational partner', sources: [{ name: 'US v. Maxwell', date: '2021' }] }
    ],
    sources: [{ name: 'US v. Maxwell / SDNY', date: '2021-2024' }]
  },
  {
    id: 'leslie-wexner',
    name: 'Les Wexner',
    role: 'Primary financial relationship',
    category: 'financial',
    description: 'Granted Epstein broad power of attorney in 1991 and later stated ties were severed in 2007.',
    legalStatus: 'Never criminally charged; deposed by House Oversight in 2026.',
    evidenceTier: 'verified',
    publicStatements: ['Stated he was naive, foolish, and gullible to trust Epstein.'],
    connections: [
      { personId: 'jeffrey-epstein', nature: 'Financial patron and principal client relationship', sources: [{ name: 'House Oversight records', date: '2026' }] }
    ],
    sources: [{ name: 'PBS / WOSU / House Oversight', date: '2026' }]
  },
  {
    id: 'sarah-kellen',
    name: 'Sarah Kellen (Sarah Kensington)',
    role: 'Scheduler and assistant',
    category: 'recruitment',
    description: 'Named in the 2008 NPA as a co-conspirator receiving immunity; alleged to have scheduled abuse sessions.',
    legalStatus: 'Never criminally charged.',
    evidenceTier: 'verified',
    publicStatements: ['Claimed in 2019 she was also abused by Epstein and Maxwell.'],
    connections: [
      { personId: 'ghislaine-maxwell', nature: 'Operational coordination', sources: [{ name: 'NPA and victim statements', date: '2007-2019' }] }
    ],
    sources: [{ name: 'NPA document; Palm Beach reports', date: '2005-2008' }]
  },
  {
    id: 'bill-clinton',
    name: 'Bill Clinton',
    role: 'Former U.S. President linked by flight logs and meetings',
    category: 'political-us',
    description: 'Flight records document multiple trips on Epstein aircraft; appearing in logs does not establish wrongdoing.',
    legalStatus: 'No criminal charges related to Epstein.',
    evidenceTier: 'verified',
    publicStatements: ['Stated he knows nothing about Epstein’s crimes.'],
    connections: [
      { personId: 'jeffrey-epstein', nature: 'Documented travel and social contact', sources: [{ name: 'FactCheck / flight logs', date: '2002-2003' }] }
    ],
    sources: [{ name: 'FactCheck.org; Law & Crime', date: '2019-2021' }]
  },
  {
    id: 'prince-andrew',
    name: 'Prince Andrew',
    role: 'High-profile associate named in civil allegations',
    category: 'royalty',
    description: 'Civil case brought by Virginia Giuffre settled in 2022 without admission of liability.',
    legalStatus: 'No criminal conviction related to Epstein case.',
    evidenceTier: 'alleged',
    publicStatements: ['Denied allegations in 2019 BBC interview; later expressed regret for Epstein association.'],
    connections: [
      { personId: 'ghislaine-maxwell', nature: 'Social contact documented in photograph and records', sources: [{ name: 'Giuffre v. Prince Andrew', date: '2021-2022' }] }
    ],
    sources: [{ name: 'NPR / CNN / Giuffre v. Prince Andrew', date: '2021-2022' }]
  }
];
