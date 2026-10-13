import type { Metadata } from 'next';
import TimeScopeFile from '@/components/specimen/TimeScopeFile';
import { timescope } from '@/lib/specimens/timescope';

const url = 'https://gamadynamics.com.au/incubation/timescope';

export const metadata: Metadata = {
  metadataBase: new URL('https://gamadynamics.com.au'),
  title: 'GAMA TimeScope — Specimen 009 | GAMA Dynamics',
  description: timescope.summary,
  alternates: { canonical: url },
  openGraph: {
    title: 'GAMA TimeScope — See where your time goes.',
    description: timescope.summary,
    url,
    type: 'article',
    images: [{ url: timescope.artwork.hero.src, width: 1536, height: 1024, alt: timescope.artwork.hero.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GAMA TimeScope — Specimen 009',
    description: timescope.summary,
    images: [timescope.artwork.hero.src],
  },
};

export default function Page() {
  return <TimeScopeFile />;
}
