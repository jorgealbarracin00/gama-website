import { getSpecimenCard, listSpecimens } from '@/lib/specimens/registry';

export function GET() {
  return Response.json({ specimens: listSpecimens().map(specimen => getSpecimenCard(specimen.slug)) });
}
