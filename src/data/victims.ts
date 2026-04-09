import { VictimTestimony } from './types';

export const victimStats = {
  compensatedSurvivors: '135+',
  compensationFundTotal: '$121M+',
  totalProgramsAndSettlements: '$750M+',
  pagesReleasedByDOJ: '3.5M+'
};

const testimonySource = { name: 'README documented record', date: '2026-04-09', type: 'victim-testimony' as const };

export const victimStories: VictimTestimony[] = [
  {
    id: 'virginia-giuffre',
    name: 'Virginia Giuffre',
    anonymous: false,
    ageAtTime: '16-17',
    testimony: 'Described recruitment by Maxwell, repeated trafficking, and abuse in sworn filings and interviews over many years.',
    context: 'Filed early civil actions and became the most visible survivor advocate before her death in April 2025.',
    source: testimonySource,
    relatedLocationIds: ['manhattan-townhouse', 'little-st-james', 'private-jets'],
    relatedPeopleIds: ['ghislaine-maxwell', 'prince-andrew', 'alan-dershowitz']
  },
  {
    id: 'sarah-ransome',
    name: 'Sarah Ransome',
    anonymous: false,
    ageAtTime: '22',
    testimony: 'Described recruitment under false promises and coercive sexual exploitation in court filings.',
    context: 'Her claims about tapes were publicly disputed and later re-addressed, illustrating evidentiary complexity.',
    source: testimonySource,
    relatedLocationIds: ['little-st-james', 'manhattan-townhouse'],
    relatedPeopleIds: ['ghislaine-maxwell', 'jeffrey-epstein']
  },
  {
    id: 'annie-farmer',
    name: 'Annie Farmer',
    anonymous: false,
    ageAtTime: '16',
    testimony: 'Testified in Maxwell trial that Maxwell and Epstein abused her at Zorro Ranch in 1996.',
    context: 'Only accuser at trial to testify under her real name.',
    source: testimonySource,
    relatedLocationIds: ['zorro-ranch'],
    relatedPeopleIds: ['ghislaine-maxwell', 'jeffrey-epstein']
  },
  {
    id: 'maria-farmer',
    name: 'Maria Farmer',
    anonymous: false,
    testimony: 'Reported Epstein to federal authorities in 1996 and later alleged broad surveillance and institutional inaction.',
    context: 'Filed 2025 negligence suit alleging federal failure enabled later abuse.',
    source: testimonySource,
    relatedLocationIds: ['manhattan-townhouse'],
    relatedPeopleIds: ['jeffrey-epstein', 'ghislaine-maxwell']
  },
  {
    id: 'courtney-wild',
    name: 'Courtney Wild',
    anonymous: false,
    ageAtTime: '14-15',
    testimony: 'Led CVRA challenge to secret NPA and became legislative reform advocate.',
    context: 'Case exposed statutory gaps when prosecutors avoid filing federal charges.',
    source: testimonySource,
    relatedLocationIds: ['palm-beach-mansion'],
    relatedPeopleIds: ['alexander-acosta']
  },
  {
    id: 'courtney-soerensen',
    name: 'Courtney Soerensen',
    anonymous: false,
    testimony: 'Named publicly in survivor records and advocacy compilations.',
    context: 'Included for full named-victim accounting in source document.',
    source: testimonySource,
    relatedLocationIds: ['palm-beach-mansion'],
    relatedPeopleIds: ['jeffrey-epstein']
  },
  {
    id: 'marina-lacerda',
    name: 'Marina Lacerda',
    anonymous: false,
    testimony: 'Listed in victim documentation and reporting related to trafficking allegations.',
    context: 'Included to preserve complete documented survivor roster from source text.',
    source: testimonySource,
    relatedLocationIds: ['little-st-james'],
    relatedPeopleIds: ['jeffrey-epstein']
  },
  {
    id: 'unnamed-survivors',
    anonymous: true,
    testimony: 'Hundreds of girls and young women were described by staff testimony, civil records, and compensation claims.',
    context: 'Record references include housekeeper testimony, 350-name list references, and 135+ compensation recipients.',
    source: testimonySource,
    relatedLocationIds: ['palm-beach-mansion', 'manhattan-townhouse', 'little-st-james', 'private-jets'],
    relatedPeopleIds: ['jeffrey-epstein', 'ghislaine-maxwell']
  }
];

export const supportResources = [
  { name: 'National Human Trafficking Hotline', contact: 'Call 1-888-373-7888 or text 233733', url: 'https://humantraffickinghotline.org' },
  { name: 'RAINN National Sexual Assault Hotline', contact: 'Call 800-656-HOPE', url: 'https://www.rainn.org' },
  { name: 'National Center for Missing & Exploited Children', contact: 'Call 1-800-THE-LOST', url: 'https://www.missingkids.org' }
];
