export interface EngineeringTerm {
  semester: number;
  start: string;
  end: string;
  examEnd: string;
  result: string;
  source: string;
  published: string;
}
export interface AcademicStatus {
  semester: number | null;
  label: string;
  intro: string;
  source: string;
}
export const calendarIndex: string;
export function calendarLinks(
  html: string,
): { url: string; title: string; published: string }[];
export function parseEngineeringTerms(
  text: string,
  source: string,
  published: string,
): EngineeringTerm[];
export function resolveAcademicStatus(
  terms: EngineeringTerm[],
  now?: Date,
): AcademicStatus;
export function loadEngineeringTerms(
  fetcher?: typeof fetch,
): Promise<EngineeringTerm[]>;
