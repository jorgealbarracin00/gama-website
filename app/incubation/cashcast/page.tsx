import type { Metadata } from 'next';
import CashCastFile from '@/components/specimen/CashCastFile';
import { cashcast } from '@/lib/specimens/cashcast';
const url='https://gamadynamics.com.au/incubation/cashcast';
export const metadata:Metadata={metadataBase:new URL('https://gamadynamics.com.au'),title:'CASH CAST — Specimen 008 | GAMA Dynamics',description:cashcast.summary,alternates:{canonical:url},openGraph:{title:'CASH CAST — See Tomorrow. Change Today.',description:cashcast.summary,url,type:'article',images:[{url:cashcast.artwork.hero.src,width:1536,height:1024,alt:cashcast.artwork.hero.alt}]},twitter:{card:'summary_large_image',title:'CASH CAST — Specimen 008',description:cashcast.summary,images:[cashcast.artwork.hero.src]}};
export default function Page(){return <CashCastFile/>;}
