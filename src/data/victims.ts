import { VictimStory } from './types';

export const victimStories: VictimStory[] = [
  {
    id: 'annie-farmer',
    publicName: 'Annie Farmer',
    description: 'Testified under her real name at Maxwell trial.',
    experience: 'Described abuse attempts at age 16 and identified Maxwell’s role in grooming behavior.',
    ageRangeAtTime: '16',
    evidenceTier: 'verified',
    sources: [{ name: 'US v. Maxwell testimony', date: '2021' }]
  },
  {
    id: 'maria-farmer',
    publicName: 'Maria Farmer',
    description: 'First known complainant to report Epstein to FBI in 1996.',
    experience: 'Reported concerns including nude photos of minors and later sought accountability for institutional inaction.',
    evidenceTier: 'verified',
    sources: [{ name: 'FBI report release; Guardian', date: '1996; 2025' }]
  },
  {
    id: 'courtney-wild',
    publicName: 'Courtney Wild',
    description: 'Lead CVRA petitioner challenging secret plea process.',
    experience: 'Pursued legal challenge over victims not being notified of the 2008 agreement.',
    ageRangeAtTime: '14-15',
    evidenceTier: 'verified',
    sources: [{ name: 'In re: Courtney Wild (11th Cir.)', date: '2019-2021' }]
  },
  {
    id: 'unnamed-survivors',
    publicName: null,
    description: 'Many survivors remain unnamed for safety and privacy.',
    experience: 'Compensation fund and civil settlements indicate a far larger survivor population than named in public filings.',
    evidenceTier: 'verified',
    sources: [{ name: 'Victims Compensation Fund reports', date: '2020-2021' }]
  }
];

export const victimStats = {
  knownClaims: '225 claims submitted to compensation fund',
  paidSurvivors: 'Approximately 135-150 survivors received payments',
  compensationTotals: 'Over $121M from the fund; total settlements exceed $750M',
  documentedAgeRange: 'Victims include minors as young as 14 in court testimony'
};

export const supportResources = [
  { name: 'RAINN National Sexual Assault Hotline', contact: '800-656-HOPE', url: 'https://www.rainn.org/' },
  { name: 'National Human Trafficking Hotline', contact: '888-373-7888', url: 'https://humantraffickinghotline.org/' }
];
