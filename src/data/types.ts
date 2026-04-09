export interface Source {
  name: string;
  date: string;
  url?: string;
  type: 'court-document' | 'doj-release' | 'congressional' | 'journalism' | 'victim-testimony' | 'public-statement';
}

export type EvidenceTier = 'verified' | 'alleged' | 'unresolved';

export interface Person {
  id: string;
  name: string;
  category: 'inner-circle' | 'financial' | 'political-us' | 'political-intl' | 'royalty' | 'academic' | 'recruitment' | 'legal-defense';
  role: string;
  documentedRelationship: string;
  connections: Array<{ personId: string; nature: string; documented: boolean }>;
  publicStatements: Array<{ quote: string; context: string; date: string; source: Source }>;
  legalStatus: string;
  keyDocuments: string[];
  evidenceTier: EvidenceTier;
  sources: Source[];
  allegations?: string[];
  imageDescription?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  summary: string;
  detail: string;
  category: 'background' | 'crime' | 'legal' | 'political' | 'transparency' | 'institutional-failure' | 'victim' | 'death';
  relatedPeopleIds: string[];
  relatedLocationIds: string[];
  evidenceTier: EvidenceTier;
  sources: Source[];
  significance: 'critical' | 'major' | 'standard';
}

export interface Location {
  id: string;
  name: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
  type: 'residence' | 'island' | 'ranch' | 'transport' | 'office';
  documentedPurpose: string;
  keyEvents: string[];
  victimTestimonies: string[];
  fbiFindings?: string[];
  evidenceTier: EvidenceTier;
  sources: Source[];
}

export interface InstitutionalFailure {
  id: string;
  title: string;
  date: string;
  institution: string;
  whatHappened: string;
  whatShouldHaveHappened: string;
  whoWasResponsible: string[];
  consequence: string;
  evidenceTier: EvidenceTier;
  sources: Source[];
  stillUnresolved: string[];
}

export interface VictimTestimony {
  id: string;
  name?: string;
  anonymous: boolean;
  ageAtTime?: string;
  testimony: string;
  context: string;
  source: Source;
  relatedLocationIds: string[];
  relatedPeopleIds: string[];
}

export interface PreventionItem {
  id: string;
  title: string;
  description: string;
  actions: string[];
}
