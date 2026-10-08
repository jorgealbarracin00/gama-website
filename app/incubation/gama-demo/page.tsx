import type { Metadata } from 'next';
import DemoFile from '@/components/specimen/DemoFile';
import { gamaDemo as specimen } from '@/lib/specimens/gama-demo';
const url = 'https://gamadynamics.com.au/incubation/gama-demo';
export const metadata: Metadata = {
 metadataBase:new URL('https://gamadynamics.com.au'), title:'GAMA DEMO — Specimen 006 | GAMA Dynamics', description:specimen.summary,
 alternates:{canonical:url}, openGraph:{title:'GAMA DEMO — '+specimen.epithet,description:specimen.summary,url,type:'article',images:[{url:specimen.artwork.hero.src,width:1536,height:1024,alt:specimen.artwork.hero.alt}]},
 twitter:{card:'summary_large_image',title:'GAMA DEMO — Specimen 006',description:specimen.summary,images:[specimen.artwork.hero.src]}
};
export default function Page(){return <DemoFile/>;}
