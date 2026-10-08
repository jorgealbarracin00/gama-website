'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { advance, clock, createFactory, effectiveStage, factoryMetrics, itemTimes, severity, type Factory, type Item, type Thresholds } from '@/lib/wayline/model';
import s from './FactorySimulation.module.css';
export default function FactorySimulation({ standalone = false }: { standalone?: boolean }) {
  const [factory, setFactory] = useState(() => createFactory());
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [selected, setSelected] = useState('W001');
  const [station, setStation] = useState(4);
  const [view, setView] = useState<'flow' | 'manager'>(standalone ? 'manager' : 'flow');
  const [thresholds, setThresholds] = useState<Thresholds>([20, 40, 60]);
  const [notice, setNotice] = useState('Ready. Start the flow or advance one step.');
  useEffect(() => {
    if (!running) return;
    let last = performance.now();
    const timer = setInterval(() => {
      const now = performance.now(); const delta = Math.min((now - last) / 1000, 1); last = now;
      if (!document.hidden) setFactory(f => f.items.every(i => i.phase === 'complete') ? f : advance(f, delta * speed));
    }, 200);
    return () => clearInterval(timer);
  }, [running, speed]);
  const metrics = factoryMetrics(factory);
  const item = factory.items.find(i => i.id === selected)!;
  const times = itemTimes(item, factory.now);
  const cfg = effectiveStage(factory, station);
  const active = factory.items.filter(i => i.stage === station && i.phase === 'working');
  const queue = queueAt(factory, station);
  const average = queue.length ? queue.reduce((n, i) => n + factory.now - i.history.at(-1)!.start, 0) / queue.length : 0;
  const allComplete = metrics.completed === factory.items.length;
  const railItems = factory.items.filter(i=>i.phase!=='pending'&&i.phase!=='complete');
  const railRows = Math.max(3,...factory.stages.map((_,n)=>railItems.filter(i=>i.stage===n).length));
  function reset() { setRunning(false); setFactory(f => createFactory(f.stages)); setNotice('Factory reset. Configuration retained; all 24 illustrative items are ready.'); }
  function updateStage(key: 'duration' | 'capacity', value: number) {
    if (!Number.isFinite(value)) return;
    setFactory(f => ({ ...f, stages: f.stages.map((st, i) => i === station ? { ...st, [key]: Math.max(1, Math.min(key === 'duration' ? 600 : 12, Math.round(value))) } : st) }));
  }
  return <div className={s.factory} data-view={view} data-standalone={standalone}>
    <header className={s.header}><div><span className={s.eyebrow}>WAYLINE / INTERACTIVE FACTORY</span><h3>See the rhythm. Find the interruption.</h3><p>Concept simulation · 24 items · illustrative seconds, not industrial cycle estimates</p></div><div className={s.time}><span>Simulated shift</span><strong data-testid="factory-clock">{clock(factory.now)}</strong><span>{allComplete ? 'Shift complete' : running ? 'Flow running' : 'Paused / ready'}</span></div></header>
    <div className={s.controls}>
      <button className={s.primary} disabled={allComplete} onClick={() => { setRunning(!running); setNotice(running ? 'Flow paused.' : 'Flow started. Each item keeps its identity.'); }}>{allComplete ? 'Shift complete' : running ? 'Pause flow' : 'Start flow'}</button>
      <button disabled={allComplete} onClick={() => setFactory(f => advance(f, 10))}>Step +10s</button>
      <button disabled={cfg.kind === 'buffer' || factory.bottleneck === station} onClick={() => {setFactory(f => ({ ...f, bottleneck: station })); setNotice(`${cfg.name} slowed: 5× service time, one admission slot. Existing work finishes as scheduled.`);}}>Trigger bottleneck</button>
      <button disabled={factory.bottleneck === null} onClick={() => {setFactory(f => ({ ...f, bottleneck: null }));setNotice('Normal service restored. Waiting items clear through ordinary FIFO processing.');}}>Restore flow</button>
      <button onClick={reset}>Reset shift</button>
      <label>Time accelerator<select aria-label="Time accelerator" value={speed} onChange={e => setSpeed(Number(e.target.value))}>{[1,5,20,100].map(n => <option key={n} value={n}>{n}×</option>)}</select></label>
    </div>
    <p className={s.notice} role="status">{notice}</p>
    <div className={s.views}><button aria-pressed={view === 'flow'} onClick={() => setView('flow')}>Production flow</button><button aria-pressed={view === 'manager'} onClick={() => setView('manager')}>Manager view</button>{!standalone && <Link href="/incubation/wayline/manager">Open standalone dashboard ↗</Link>}</div>
    <div className={s.metrics} aria-label="Simulated factory metrics">
      <Metric title="Completed" value={`${metrics.completed} / 24`} /><Metric title="Work in progress" value={String(metrics.wip)} /><Metric title="Throughput / hour" value={metrics.throughput.toFixed(1)} /><Metric title="Flow efficiency" value={`${metrics.efficiency.toFixed(1)}%`} />
    </div>
    <p className={s.metricNote}>Simulated data · Throughput = completions ÷ elapsed hours. Efficiency = total active time ÷ total journey time for all arrived items, including work in progress.</p>
    {view==='flow'&&<><div className={s.rhythmHeader}><span>THE LIVING LINE / STABLE ITEM IDENTITIES</span><strong>{factory.bottleneck===null?'Normal service':`${factory.stages[factory.bottleneck].name} · bottleneck active`}</strong></div>
    <p className={s.metricNote}>Capsules retain their identity as they move between stages. Select one to follow its journey. On smaller screens, swipe across the overview.</p>
    <div className={s.railScroll}><div className={s.rail} style={{height:130+railRows*44}} aria-label="Live item positions across the production route"><div className={s.railLabels}>{factory.stages.map((stage,i)=><span key={stage.id} data-slow={factory.bottleneck===i}>{String(i+1).padStart(2,'0')}<small>{stage.name}</small></span>)}</div><div className={s.routeLine}/>{railItems.map(i=>{const elapsed=factory.now-i.history.at(-1)!.start;const waiting=i.history.at(-1)!.kind==='waiting';return <button key={i.id} className={s.routePill} data-status={waiting?severity(elapsed,thresholds):'Processing'} aria-pressed={selected===i.id} aria-label={`Follow ${i.id} at ${factory.stages[i.stage].name}`} onClick={()=>setSelected(i.id)} style={{left:`${i.stage/8*100+1}%`,top:112+railItems.filter(other=>other.stage===i.stage).findIndex(other=>other.id===i.id)*44}}><strong>{i.id}</strong><span>{clock(elapsed)}</span><small>{waiting?severity(elapsed,thresholds):'Processing'}</small></button>;})}</div></div></>}
    <div className={s.map} aria-label="Production stations and waiting buffers">
      {factory.stages.map((stage, index) => {
        const effective = effectiveStage(factory,index); const working = factory.items.filter(i=>i.stage===index&&i.phase==='working'); const waiting=queueAt(factory,index);
        return <section className={`${s.station} ${stage.kind === 'buffer' ? s.buffer : ''}`} data-selected={station===index} key={stage.id}>
          <button className={s.stationSelect} aria-label={`Inspect ${stage.name}`} aria-pressed={station===index} onClick={()=>setStation(index)}><span>{String(index+1).padStart(2,'0')} / {stage.kind==='buffer'?'WAITING BUFFER':'ACTIVE PROCESS'}</span><strong>{stage.name}</strong><small>{factory.bottleneck===index?'Slowed · bottleneck':stage.kind==='buffer'?'Minimum dwell':'Operational'} · {effective.duration}s {stage.kind==='process'&&`/ ${effective.capacity} slots`}</small></button>
          <div className={s.items} aria-label={`${stage.name} active items`}>
            {working.length ? working.map(i=><Pill key={i.id} item={i} factory={factory} selected={selected} thresholds={thresholds} select={setSelected}/>):<span className={s.empty}>{stage.kind==='buffer'?'Buffer clear':'Station idle'}</span>}
          </div>
          <div className={s.queue}><span>FIFO queue · {waiting.length}</span><div className={s.items}>{waiting.map(i=><Pill key={i.id} item={i} factory={factory} selected={selected} thresholds={thresholds} select={setSelected}/>)}</div></div>
        </section>;
      })}
    </div>
    <div className={s.inspectors}>
      <section className={s.inspector}><div className={s.inspectorHead}><h4>Item journey</h4><label>Select item<select aria-label="Select item" value={selected} onChange={e=>setSelected(e.target.value)}>{factory.items.map(i=><option value={i.id} key={i.id}>{i.id}</option>)}</select></label></div>
        <p><strong>{item.id}</strong> · {item.phase==='pending'?'Not yet arrived':item.phase==='complete'?'Completed':factory.stages[item.stage].name} · {item.phase}</p>
        <div className={s.timebar} aria-label={`Active ${clock(times.active)}, waiting ${clock(times.waiting)}`}><span style={{width:times.total?`${times.efficiency}%`:'0%'}}/></div>
        <div className={s.miniMetrics}><Metric title="Active" value={clock(times.active)}/><Metric title="Waiting" value={clock(times.waiting)}/><Metric title="Journey" value={clock(times.total)}/></div>
        <p className={s.metricNote}>Arrival {clock(item.arrival)} · {item.phase==='complete'?`Completed ${clock(item.completedAt!)}`:`${times.efficiency.toFixed(1)}% flow efficiency`}{item.phase==='queued'&&` · Queue position ${queueAt(factory,item.stage).findIndex(i=>i.id===item.id)+1}`}</p>
        <ol className={s.history}>{item.history.filter(segment=>segment.end===undefined||segment.end>segment.start).map((segment,i)=><li key={i}><span>{factory.stages[segment.stage].name}<small>{segment.reason==='queue'?'Queue waiting':segment.kind==='active'?'Active processing':'Buffer waiting'}</small></span><time>{clock(segment.start)} → {segment.end===undefined?'now':clock(segment.end)}<small>{clock((segment.end??factory.now)-segment.start)} elapsed</small></time></li>)}</ol>
        {!item.history.length&&<p className={s.empty}>This item arrives at {clock(item.arrival)}. Start or step the shift to follow its journey.</p>}
      </section>
      <section className={s.inspector}><div className={s.inspectorHead}><h4>Station detail</h4><label>Select station<select aria-label="Select station" value={station} onChange={e=>setStation(Number(e.target.value))}>{factory.stages.map((st,i)=><option key={st.id} value={i}>{st.name}</option>)}</select></label></div>
        <h5>{cfg.name}</h5><p>{cfg.kind==='buffer'?'Timed waiting buffer · no active processing capacity':factory.bottleneck===station?'Slowed · bottleneck active':'Operational · normal service'}</p>
        <div className={s.miniMetrics}><Metric title="In stage" value={String(active.length)}/><Metric title="Queue length" value={String(queue.length)}/><Metric title="Average queue wait" value={clock(average)}/></div>
        {cfg.kind==='process'&&<p className={s.capacity}>Capacity {active.length} / {cfg.capacity} occupied · {Math.max(0,cfg.capacity-active.length)} available<br/>Expected service {cfg.duration}s · base {factory.stages[station].duration}s</p>}
        <div className={s.configuration}><label>{cfg.kind==='buffer'?'Minimum buffer dwell (s)':'Base process duration (s)'}<input type="number" min="1" max="600" value={factory.stages[station].duration} onChange={e=>updateStage('duration',e.target.valueAsNumber)}/></label>{cfg.kind==='process'&&<label>Base capacity<input type="number" min="1" max="12" value={factory.stages[station].capacity} onChange={e=>updateStage('capacity',e.target.valueAsNumber)}/></label>}</div>
        <p className={s.metricNote}>Changes apply to new admissions. Work already in progress retains its scheduled finish. Buffers wait for their configured dwell, then join the next stage’s queue.</p>
        {active.map(i=><p className={s.activeRow} key={i.id}>{i.id}<span>{clock(factory.now-i.history.at(-1)!.start)} elapsed / {clock(i.finish!-i.history.at(-1)!.start)} scheduled</span></p>)}
      </section>
    </div>
    {view==='manager'&&<section className={s.managerHistory}><h4>Whole-shift journey map</h4><p>Each row is one stable item. Cyan is active work; amber is waiting. Select a row to inspect its history.</p><div>{factory.items.filter(i=>i.phase!=='pending').map(i=><button key={i.id} onClick={()=>setSelected(i.id)} aria-label={`Inspect journey ${i.id}`} aria-pressed={selected===i.id}><strong>{i.id}</strong><span className={s.gantt}>{i.history.filter(seg=>(seg.end??factory.now)>seg.start).map((seg,n)=><span key={n} title={`${factory.stages[seg.stage].name}: ${seg.kind}`} data-kind={seg.kind} style={{left:`${seg.start/Math.max(factory.now,1)*100}%`,width:`${((seg.end??factory.now)-seg.start)/Math.max(factory.now,1)*100}%`}}/>)}</span><time>{clock(itemTimes(i,factory.now).total)}</time></button>)}</div></section>}
    <details className={s.thresholds}><summary>Configure waiting signals & understand the model</summary><p>Waiting signals use these scenario thresholds, in simulated seconds. They are illustrative settings, not universal definitions of acceptable factory delay.</p><div className={s.configuration}>{['Attention','Delayed','Critical'].map((label,i)=><label key={label}>{label} ≥<input aria-label={`${label} threshold`} type="number" min={i===0?1:thresholds[i-1]+1} max={i===2?3600:thresholds[i+1]-1} value={thresholds[i]} onChange={e=>{const n=e.target.valueAsNumber;if(Number.isFinite(n)){const next:[number,number,number]=[...thresholds];next[i]=Math.max(i===0?1:next[i-1]+1,Math.min(i===2?3600:next[i+1]-1,Math.round(n)));setThresholds(next);}}}/></label>)}</div><p>Finite arrivals every 12 seconds. Six processes and two buffers. FIFO queues, independent admission slots, no batch physics, transfers treated as instantaneous. This illustrates flow logic; it does not model a real PVD recipe, safety interlocks or production hardware. The clock pauses while the browser tab is hidden.</p></details>
  </div>;
}
function queueAt(f:Factory,stage:number){return f.items.filter(i=>i.stage===stage&&i.phase==='queued').sort((a,b)=>a.history.at(-1)!.start-b.history.at(-1)!.start||a.id.localeCompare(b.id));}
function Metric({title,value}:{title:string;value:string}){return <div><span>{title}</span><strong>{value}</strong></div>;}
function Pill({item,factory,selected,thresholds,select}:{item:Item;factory:Factory;selected:string;thresholds:Thresholds;select:(id:string)=>void}){
  const segment=item.history.at(-1)!;const elapsed=factory.now-segment.start;const waiting=segment.kind==='waiting';const status=waiting?severity(elapsed,thresholds):'Processing';
  return <button className={s.pill} data-status={status} aria-pressed={selected===item.id} aria-label={`Inspect ${item.id}, ${status}, ${clock(elapsed)} elapsed`} onClick={()=>select(item.id)}><strong>{item.id}</strong><span>{clock(elapsed)}</span><small>{status}</small></button>;
}
