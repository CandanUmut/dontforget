export type EvidenceTier = 'verified' | 'alleged' | 'unresolved';

export interface Source {
  name: string;
  date: string;
  url?: string;
}

export interface BaseClaim {
  id: string;
  description: string;
  evidenceTier: EvidenceTier;
  sources: Source[];
}

export type PersonCategory =
  | 'inner-circle'
  | 'financial'
  | 'political-us'
  | 'political-intl'
  | 'royalty'
  | 'academic'
  | 'recruitment'
  | 'legal';

export interface Person extends BaseClaim {
  name: string;
  role: string;
  category: PersonCategory;
  legalStatus: string;
  publicStatements: string[];
  connections: Array<{ personId: string; nature: string; sources: Source[] }>;
}

export interface TimelineEvent extends BaseClaim {
  date: string;
  title: string;
  category: 'legal' | 'political' | 'personal' | 'institutional';
  relatedPeople: string[];
  relatedLocations: string[];
  milestone?: boolean;
}

export interface LocationEntry extends BaseClaim {
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  documentedPurpose: string;
  keyEvents: string[];
  testimonies: string[];
}

export interface VictimStory extends BaseClaim {
  publicName: string | null;
  ageRangeAtTime?: string;
  experience: string;
}

export interface InstitutionalFailure extends BaseClaim {
  period: string;
  responsibleParties: string[];
  whatHappened: string;
  legalExpectation: string;
  unresolvedQuestions: string;
}

export interface TransparencyItem extends BaseClaim {
  date: string;
  released: string;
  withheld: string;
  actions: string;
}

export interface PreventionItem extends BaseClaim {
  pattern: string;
  warningSigns: string[];
  actions: string[];
}
