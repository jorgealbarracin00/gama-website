import { grocerymaster } from './grocerymaster';
import { memoirEchoes } from './memoir-echoes';
import type { CanonicalSpecimen, MemoirSpecimen, PublicSpecimen, SpecimenStatus } from './types';

// Permanent IDs never follow carousel position. featuredOrder records entry into
// the lifecycle group: append future shipped specimens, never renumber these.
const lifecycle: SpecimenStatus[] = ['deployed', 'incubating', 'experimental', 'concept', 'paused', 'archived'];
export const specimenRegistry: readonly CanonicalSpecimen[] = [grocerymaster, memoirEchoes];
export function listSpecimens(): CanonicalSpecimen[] {
  return [...specimenRegistry].sort((a, b) => lifecycle.indexOf(a.status) - lifecycle.indexOf(b.status) || a.featuredOrder - b.featuredOrder);
}
export function specimenGroups() {
  const labels: Record<SpecimenStatus, string> = {
    deployed: 'Deployed', incubating: 'Incubating', experimental: 'Experimental',
    concept: 'Concept', paused: 'Paused', archived: 'Archived',
  };
  return lifecycle.map(status => ({
    status, label: labels[status], specimens: listSpecimens().filter(specimen => specimen.status === status),
  })).filter(group => group.specimens.length > 0);
}
export function specimenCount(status?: SpecimenStatus): string {
  return specimenRegistry.filter(specimen => !status || specimen.status === status).length.toString().padStart(2, '0');
}
export function getSpecimen(slug: 'grocerymaster'): PublicSpecimen;
export function getSpecimen(slug: 'memoir'): MemoirSpecimen;
export function getSpecimen(slug: string): CanonicalSpecimen | undefined;
export function getSpecimen(slug: string): CanonicalSpecimen | undefined {
  return specimenRegistry.find(specimen => specimen.slug === slug);
}
export function specimenPath(specimen: Pick<CanonicalSpecimen, 'slug'>): string {
  return `/incubation/${specimen.slug}`;
}
export function getSpecimenCard(slug: string) {
  const specimen = getSpecimen(slug);
  if (!specimen) throw new Error(`Unknown canonical specimen: ${slug}`);
  return {
    id: specimen.number, name: specimen.name, subtitle: specimen.epithet,
    status: specimen.status, statusLabel: specimen.statusLabel, accent: specimen.accent,
    summary: specimen.summary, classification: specimen.classification,
    technologySummary: specimen.technologySummary,
    href: specimen.productLink.url, incubationHref: specimenPath(specimen), image: specimen.artwork.hero.src,
  };
}
