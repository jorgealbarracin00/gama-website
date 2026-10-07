import { grocerymaster } from "./grocerymaster";
import type { PublicSpecimen } from "./types";

// First Bible-backed specimen. Other existing specimens will migrate only when
// their content is reconciled; do not turn the old API data into canonical facts.
export const specimenRegistry: readonly PublicSpecimen[] = [grocerymaster];

export function getSpecimen(slug: string): PublicSpecimen | undefined {
  return specimenRegistry.find((specimen) => specimen.slug === slug);
}

export function specimenPath(specimen: Pick<PublicSpecimen, "slug">): string {
  return `/incubation/${specimen.slug}`;
}

export function getSpecimenCard(slug: string) {
  const specimen = getSpecimen(slug);
  if (!specimen) throw new Error(`Unknown canonical specimen: ${slug}`);
  return {
    id: specimen.number,
    name: specimen.name,
    subtitle: specimen.epithet,
    status: specimen.status,
    statusLabel: specimen.statusLabel,
    summary: specimen.summary,
    classification: specimen.classification,
    technologySummary: specimen.technologySummary,
    href: specimen.productLink.url,
    incubationHref: specimenPath(specimen),
    image: specimen.artwork.hero.src,
  };
}
