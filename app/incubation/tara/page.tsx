import type { Metadata } from 'next';
import TaraFile from '@/components/specimen/TaraFile';
import { getSpecimen, specimenPath } from '@/lib/specimens/registry';
const specimen = getSpecimen('tara');
const origin = 'https://gamadynamics.com.au';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'TARA — Specimen 003 | GAMA Dynamics',
  description: specimen.summary,
  alternates: { canonical: `${origin}${specimenPath(specimen)}` },
  openGraph: { title: 'TARA — Your Timed Intake Assistant', description: specimen.summary,
    url: `${origin}${specimenPath(specimen)}`, type: 'article', images: [{ url: specimen.artwork.hero.src, width: specimen.artwork.hero.width, height: specimen.artwork.hero.height, alt: specimen.artwork.hero.alt }] },
  twitter: { card: 'summary_large_image', title: 'TARA — Specimen 003', description: specimen.summary, images: [specimen.artwork.hero.src] },
};
export default function TaraPage() { return <TaraFile specimen={specimen} />; }
