import { InstitutionalFailure, TransparencyItem, PreventionItem } from './types';

export const institutionalFailures: InstitutionalFailure[] = [
  {
    id: '2006-grand-jury',
    period: '2006',
    description: 'Grand jury heard limited testimony and produced a single solicitation charge despite broader police recommendations.',
    whatHappened: 'Proceeding reportedly lasted less than four hours and included only two alleged underage victims.',
    legalExpectation: 'Charging decisions should reflect full investigative record and victim-protective handling.',
    responsibleParties: ['Palm Beach State Attorney office'],
    unresolvedQuestions: 'Why were recommended felony charges not advanced?',
    evidenceTier: 'verified',
    sources: [{ name: 'Unsealed transcript reporting', date: '2006; 2024' }]
  },
  {
    id: '2008-npa-failure',
    period: '2007-2008',
    description: 'Secret NPA gave broad immunity including unnamed co-conspirators and bypassed victim notification.',
    whatHappened: 'Federal prosecutors negotiated sealed deal with defense while victims were excluded.',
    legalExpectation: 'Crime Victims’ Rights Act values timely victim notice and participation.',
    responsibleParties: ['U.S. Attorney office S.D. Florida'],
    unresolvedQuestions: 'Which potential co-conspirators benefited from blanket immunity?',
    evidenceTier: 'verified',
    sources: [{ name: 'NPA document; DOJ OPR', date: '2007; 2020' }]
  },
  {
    id: '2019-custody-failure',
    period: '2019',
    description: 'MCC staff failures included missed checks, false logs, and camera deficiencies on night of death.',
    whatHappened: 'Guards skipped rounds for ~8 hours and falsified records.',
    legalExpectation: 'Suicide-watch and high-risk detainee protocols require frequent checks and proper monitoring.',
    responsibleParties: ['MCC New York staff', 'BOP supervision'],
    unresolvedQuestions: 'How did repeated known deficiencies remain unresolved?',
    evidenceTier: 'verified',
    sources: [{ name: 'DOJ OIG', date: '2023-06-27' }]
  },
  {
    id: '2026-release-failure',
    period: '2025-2026',
    description: 'Transparency Act implementation saw missed deadlines, heavy redactions, and blacked-out documents.',
    whatHappened: 'Released sets contained large unreadable sections despite statutory transparency mandate.',
    legalExpectation: 'Public law required searchable and downloadable release of unclassified records.',
    responsibleParties: ['DOJ records release offices'],
    unresolvedQuestions: 'Which withholdings are lawful victim protection versus avoidable secrecy?',
    evidenceTier: 'unresolved',
    sources: [{ name: 'Congressional statements; DOJ portal', date: '2025-2026' }]
  }
];

export const transparencyItems: TransparencyItem[] = [
  {
    id: 'unsealed-2024',
    date: '2023-12-18 to 2024-01',
    description: 'Court-ordered unsealing in Giuffre v. Maxwell exposed thousands of pages and >150 names.',
    released: '4,553 pages of civil records',
    withheld: 'Some names remained sealed for safety and legal reasons',
    actions: 'Catalyzed renewed public scrutiny and congressional focus',
    evidenceTier: 'verified',
    sources: [{ name: 'CNN/ABC on Preska order', date: '2023-2024' }]
  },
  {
    id: 'efta-2026',
    date: '2026-01-30',
    description: 'DOJ announced release volume of roughly 3.5 million pages plus images and video.',
    released: '3.5M pages, 180k images, 2k videos (reported)',
    withheld: 'FBI 302s, grand jury materials, internal charging memos largely obscured',
    actions: 'Bipartisan criticism and calls for IG review',
    evidenceTier: 'unresolved',
    sources: [{ name: 'DOJ release statement; senate letters', date: '2026' }]
  }
];

export const preventionItems: PreventionItem[] = [
  {
    id: 'pattern-wealth-immunity',
    pattern: 'Concentrated wealth can distort accountability pathways.',
    description: 'Case records show prolonged access and deference around powerful networks.',
    warningSigns: ['Unusual prosecutorial leniency', 'Private legal structures shielding conduct'],
    actions: ['Mandate transparency audits for extraordinary plea deals', 'Expand survivor rights in pre-charge phases'],
    evidenceTier: 'verified',
    sources: [{ name: 'DOJ OPR; CVRA litigation', date: '2020-2021' }]
  },
  {
    id: 'pattern-recruitment',
    pattern: 'Recruitment pipelines normalized grooming through intermediaries.',
    description: 'Trial testimony described repeated use of trusted intermediaries to recruit minors.',
    warningSigns: ['Adults paying teens to recruit peers', 'Isolation in private residences'],
    actions: ['Youth-targeted grooming education', 'Mandatory reporter training for hospitality staff'],
    evidenceTier: 'verified',
    sources: [{ name: 'US v. Maxwell testimony', date: '2021' }]
  }
];
