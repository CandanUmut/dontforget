import { Source } from './types';

export const allSources: Source[] = [
  { name: 'United States v. Maxwell (SDNY trial and appellate record)', date: '2021-2024', type: 'court-document' },
  { name: 'Giuffre v. Maxwell (depositions and unsealed filings)', date: '2015-2024', type: 'court-document' },
  { name: 'Giuffre v. Prince Andrew', date: '2021-2022', type: 'court-document' },
  { name: 'In re: Courtney Wild, 11th Circuit', date: '2019-2021', type: 'court-document' },
  { name: '2007 Non-Prosecution Agreement (S.D. Fla.)', date: '2007-09-24', type: 'court-document' },
  { name: 'Palm Beach PD Incident Report Case No. 1-05-000368', date: '2005-2006', type: 'court-document' },
  { name: 'DOJ OIG: Custody, Care, and Supervision of Epstein at MCC', date: '2023-06-27', type: 'doj-release', url: 'https://oig.justice.gov/reports' },
  { name: 'DOJ OPR Report on 2007-2008 NPA', date: '2020-11', type: 'doj-release', url: 'https://www.justice.gov' },
  { name: 'DOJ Transparency Act publication portal', date: '2025-12 to 2026-01', type: 'doj-release', url: 'https://www.justice.gov/epstein' },
  { name: 'House Oversight Committee releases and depositions', date: '2025-2026', type: 'congressional' },
  { name: 'Congress.gov H.R. 4405 Epstein Files Transparency Act', date: '2025-11-19', type: 'congressional', url: 'https://www.congress.gov' },
  { name: 'Miami Herald: Perversion of Justice (Julie K. Brown)', date: '2018-11-28', type: 'journalism', url: 'https://www.miamiherald.com' },
  { name: 'NPR compiled reporting on Epstein/Maxwell/settlements', date: '2019-2026', type: 'journalism', url: 'https://www.npr.org' },
  { name: 'PBS News reports and explainers', date: '2019-2026', type: 'journalism', url: 'https://www.pbs.org' },
  { name: 'CNN unsealed document coverage and timeline reporting', date: '2024-2026', type: 'journalism', url: 'https://www.cnn.com' },
  { name: 'ABC News and ABC7 reporting on grand jury transcripts', date: '2024-2026', type: 'journalism' },
  { name: 'CNBC reporting on redaction controversy and Senate letter', date: '2025-12', type: 'journalism' },
  { name: 'Al Jazeera reporting on redactions and document structure', date: '2025-2026', type: 'journalism' },
  { name: 'Victim impact statements filed at Maxwell sentencing', date: '2022-06', type: 'victim-testimony' },
  { name: 'Virginia Giuffre sworn deposition and filings', date: '2016-2022', type: 'victim-testimony' },
  { name: 'Maria Farmer interviews and 2025 civil complaint', date: '2019-2025', type: 'victim-testimony' },
  { name: 'White House / DOJ / BOP public statements', date: '2019-2026', type: 'public-statement' }
];
