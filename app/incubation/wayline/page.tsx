import type { Metadata } from 'next';
import WaylineFile from '@/components/specimen/WaylineFile';
import { wayline as specimen } from '@/lib/specimens/wayline';
const url = 'https://gamadynamics.com.au/incubation/wayline';
export const metadata: Metadata = {
 metadataBase:new URL('https://gamadynamics.com.au'), title:'WAYLINE — Specimen 007 | GAMA Dynamics', description:specimen.summary,
 alternates:{canonical:url}, openGraph:{title:'WAYLINE — '+specimen.epithet,description:specimen.summary,url,type:'article',images:[{url:specimen.artwork.hero.src,width:1536,height:1024,alt:specimen.artwork.hero.alt}]},
 twitter:{card:'summary_large_image',title:'WAYLINE — Specimen 007',description:specimen.summary,images:[specimen.artwork.hero.src]}
};
export default function Page(){return <WaylineFile/>;}
