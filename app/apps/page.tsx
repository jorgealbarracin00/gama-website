import type { Metadata } from 'next';
import AppsShowcase from '@/components/apps/AppsShowcase';

const title = 'Explore Our Apps | GAMA Dynamics';
const description = 'Different ideas. A common purpose. Practical tools, creative experiences and useful apps for everyday life.';
const url = 'https://gamadynamics.com.au/apps';

export const metadata: Metadata = {
  metadataBase: new URL('https://gamadynamics.com.au'),
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'GAMA Dynamics',
    type: 'website',
    locale: 'en_AU',
    images: [{ url: '/apps/opengraph-image', width: 1200, height: 630, alt: 'Six colourful app worlds from GAMA Dynamics.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/apps/opengraph-image'],
  },
};

export default function AppsPage() {
  return <AppsShowcase />;
}
