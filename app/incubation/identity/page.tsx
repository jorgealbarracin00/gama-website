import type { Metadata } from 'next';
import IdentityFile from '@/components/specimen/IdentityFile';
import { getSpecimen, specimenPath } from '@/lib/specimens/registry';

const specimen = getSpecimen('identity');
const origin = 'https://gamadynamics.com.au';
export const metadata: Metadata = {
  metadataBase: new URL(origin), title: 'GAMA Identity — Specimen 005 | GAMA Dynamics', description: specimen.summary,
  alternates: { canonical: `${origin}${specimenPath(specimen)}` },
  openGraph: { title: 'GAMA Identity — Different products. Same person.', description: specimen.summary, url: `${origin}${specimenPath(specimen)}`, type: 'article', images: [{ url: specimen.artwork.hero.src, width: 1536, height: 1024, alt: specimen.artwork.hero.alt }] },
  twitter: { card: 'summary_large_image', title: 'GAMA Identity — Specimen 005', description: specimen.summary, images: [specimen.artwork.hero.src] },
};
export default function IdentityPage() { return <IdentityFile specimen={specimen} />; }
