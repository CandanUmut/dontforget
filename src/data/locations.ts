import { Location } from './types';

const s = [{ name: 'README documented record', date: '2026-04-09', type: 'journalism' as const }];

export const locations: Location[] = [
  {
    id: 'manhattan-townhouse',
    name: 'Manhattan Townhouse (9 East 71st Street)',
    address: '9 E 71st St, New York, NY',
    type: 'residence',
    documentedPurpose: 'Primary NYC residence used for meetings, abuse, and surveillance infrastructure per testimony and search records.',
    keyEvents: ['1989: Purchased by Wexner entity', '1998: Transfer to Epstein disputed', '2019: FBI search after arrest'],
    victimTestimonies: ['Maria Farmer described a monitor room with multi-room camera feeds.', 'Johanna Sjoberg described abuse-related incidents in this location.'],
    fbiFindings: ['Search documents cite large volumes of media evidence and images.'],
    evidenceTier: 'verified',
    sources: s
  },
  {
    id: 'palm-beach-mansion',
    name: 'Palm Beach Mansion',
    address: '358 El Brillo Way, Palm Beach, FL',
    type: 'residence',
    documentedPurpose: 'Central Florida site in early police case; repeated recruitment and abuse allegations from minors.',
    keyEvents: ['2005: First guardian report to Palm Beach police', '2005: Search recovers covert cameras', '2008: Plea case context'],
    victimTestimonies: ['Multiple victims reported being paid for massages that became sexual abuse.', 'House manager testimony described frequent underage presence.'],
    fbiFindings: ['Cameras physically recovered; broader system reportedly removed.'],
    evidenceTier: 'verified',
    sources: s
  },
  {
    id: 'little-st-james',
    name: 'Little St. James Island',
    address: 'U.S. Virgin Islands',
    type: 'island',
    documentedPurpose: 'Private island where victims and staff described systematic exploitation and controlled access.',
    keyEvents: ['2019-08-12: FBI search executes seizure warrants', '2020-2022: USVI litigation and settlement', '2023: Island sold'],
    victimTestimonies: ['At least one minor said she attempted to swim away to escape.', 'USVI personnel reported very young girls being flown in.'],
    fbiFindings: ['Search seized 27 electronic devices and site materials.'],
    evidenceTier: 'verified',
    sources: s
  },
  {
    id: 'zorro-ranch',
    name: 'Zorro Ranch',
    address: 'Stanley, New Mexico',
    type: 'ranch',
    documentedPurpose: 'Remote ranch location repeatedly named in testimony including Maxwell trial evidence.',
    keyEvents: ['1993: Property purchase', '1996: Annie Farmer abuse testimony timeframe', '2026-03-09: First law-enforcement search'],
    victimTestimonies: ['Annie Farmer testified abuse occurred at age 16.', 'Jane trial witness described abuse at age 14.'],
    fbiFindings: ['2019 federal search excluded ranch for probable-cause reasons; 2026 NM search found no remains.'],
    evidenceTier: 'verified',
    sources: s
  },
  {
    id: 'paris-apartment',
    name: 'Paris Apartment',
    address: 'Avenue Foch area, Paris, France',
    type: 'residence',
    documentedPurpose: 'International residence tied to travel and contact records.',
    keyEvents: ['2019: Return travel before federal arrest', 'French investigations linked related network actors'],
    victimTestimonies: ['Some testimony references international movement through European locations.'],
    evidenceTier: 'alleged',
    sources: s
  },
  {
    id: 'private-jets',
    name: 'Private Jets (“Lolita Express” fleet)',
    type: 'transport',
    documentedPurpose: 'Transport infrastructure documented in flight logs and witness records.',
    keyEvents: ['1990s-2000s: Repeated flights by associates', '2019-07-06: Arrest at Teterboro after return flight'],
    victimTestimonies: ['Giuffre testimony references flights with associates.', 'Other victim statements describe transport as control mechanism.'],
    evidenceTier: 'verified',
    sources: s
  }
];
