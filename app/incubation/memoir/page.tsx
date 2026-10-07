import type { Metadata } from 'next';
import IncMemoir from '@/components/incubation/Inc_Memoir';
import { getSpecimen, specimenPath } from '@/lib/specimens/registry';

const specimen = getSpecimen('memoir');
const origin = 'https://gamadynamics.com.au';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: `${specimen.name} — Specimen ${specimen.number} | GAMA Dynamics`,
  description: specimen.summary,
  alternates: { canonical: `${origin}${specimenPath(specimen)}` },
  openGraph: { url: `${origin}${specimenPath(specimen)}`, type: 'article', title: `${specimen.name} — An archive of human memory`, description: specimen.summary,
    images: [{ url: specimen.artwork.hero.src, width: 1536, height: 1024, alt: specimen.artwork.hero.alt }] },
};
export default function MemoirIncubationPage() { return <IncMemoir />; }
