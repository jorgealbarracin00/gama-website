import type { Metadata } from 'next';
import Link from 'next/link';
import FactorySimulation from '@/components/specimen/flow/FactorySimulation';
import s from '@/components/specimen/flow/Exhibition.module.css';
export const metadata: Metadata={title:'WAYLINE — Conceptual Manager Dashboard | GAMA Dynamics',description:'An interactive, simulated factory flow dashboard. No live production connection.',alternates:{canonical:'https://gamadynamics.com.au/incubation/wayline/manager'}};
export default function ManagerPage(){return <main className={`${s.page} ${s.wayline} ${s.managerPage}`}><div className={s.wrap}><header className={s.top}><Link href="/incubation/wayline#solutions">← WAYLINE / Specimen 007</Link><span className={s.status}>Conceptual simulation</span></header><h1>The factory, in view.</h1><p>Explore one finite illustrative production shift. Every value is calculated from simulated item history. This standalone view starts its own local session.</p><FactorySimulation standalone/><footer className={s.footer}>Designed for iPad, desktop and phone. No real factory connection. Timing is illustrative; it does not describe a PVD recipe.</footer></div></main>;}
