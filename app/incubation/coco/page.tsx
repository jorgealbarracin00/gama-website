import type { Metadata } from 'next';
import CocoFile from '@/components/specimen/CocoFile';
import { getSpecimen, specimenPath } from '@/lib/specimens/registry';
const specimen = getSpecimen('coco');
const origin = 'https://gamadynamics.com.au';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Coco the Llama — Specimen 004 | GAMA Dynamics',
  description: specimen.summary,
  alternates: { canonical: `${origin}${specimenPath(specimen)}` },
  openGraph: { title: 'Coco the Llama — Front stage magic. Backstage machinery.', description: specimen.summary, url: `${origin}${specimenPath(specimen)}`, type: 'article', images: [{ url: specimen.artwork.hero.src, width: 1536, height: 1024, alt: specimen.artwork.hero.alt }] },
  twitter: { card: 'summary_large_image', title: 'Coco the Llama — Specimen 004', description: specimen.summary, images: [specimen.artwork.hero.src] },
};
export default function CocoPage() { return <CocoFile specimen={specimen} />; }
