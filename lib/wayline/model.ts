export type Stage = { id: string; name: string; kind: 'process' | 'buffer'; duration: number; capacity: number };
export type Segment = { stage: number; kind: 'active' | 'waiting'; start: number; end?: number; reason: 'queue' | 'process' | 'buffer' };
export type Item = { id: string; arrival: number; stage: number; phase: 'pending' | 'queued' | 'working' | 'complete'; finish?: number; completedAt?: number; history: Segment[] };
export type Factory = { now: number; stages: Stage[]; items: Item[]; bottleneck: number | null };
export const defaultStages: Stage[] = [
  { id: 'preparation', name: 'Preparation', kind: 'process', duration: 18, capacity: 2 },
  { id: 'cleaning', name: 'Cleaning', kind: 'process', duration: 24, capacity: 2 },
  { id: 'racking', name: 'Racking', kind: 'process', duration: 18, capacity: 2 },
  { id: 'pre-coating', name: 'Pre-coating waiting', kind: 'buffer', duration: 6, capacity: 0 },
  { id: 'pvd', name: 'PVD coating', kind: 'process', duration: 36, capacity: 4 },
  { id: 'post-coating', name: 'Post-coating waiting', kind: 'buffer', duration: 6, capacity: 0 },
  { id: 'inspection', name: 'Unloading and inspection', kind: 'process', duration: 18, capacity: 2 },
  { id: 'assembly', name: 'Assembly and completion', kind: 'process', duration: 18, capacity: 2 },
];
export function createFactory(stages: Stage[] = defaultStages, count = 24): Factory {
  return { now: 0, stages: stages.map(s => ({ ...s })), bottleneck: null, items: Array.from({ length: count }, (_, i) => ({ id: `W${String(i + 1).padStart(3, '0')}`, arrival: i * 12, stage: 0, phase: 'pending', history: [] })) };
}
export function effectiveStage(factory: Factory, index: number) {
  const s = factory.stages[index];
  return { ...s, duration: s.duration * (factory.bottleneck === index ? 5 : 1), capacity: factory.bottleneck === index ? 1 : s.capacity };
}
function endSegment(item: Item, now: number) { const last = item.history.at(-1); if (last && last.end === undefined) last.end = now; }
function enqueue(item: Item, now: number) { item.phase = 'queued'; item.history.push({ stage: item.stage, kind: 'waiting', reason: 'queue', start: now }); }
function settle(factory: Factory) {
  const { items, now } = factory;
  for (const item of items) {
    if (item.phase === 'working' && item.finish! <= now) {
      endSegment(item, now); item.finish = undefined;
      if (item.stage === factory.stages.length - 1) { item.phase = 'complete'; item.completedAt = now; }
      else { item.stage++; enqueue(item, now); }
    }
    if (item.phase === 'pending' && item.arrival <= now) enqueue(item, now);
  }
  factory.stages.forEach((stage, index) => {
    const effective = effectiveStage(factory, index);
    let available = stage.kind === 'buffer' ? Infinity : Math.max(0, effective.capacity - items.filter(i => i.stage === index && i.phase === 'working').length);
    const queue = items.filter(i => i.stage === index && i.phase === 'queued').sort((a, b) => a.history.at(-1)!.start - b.history.at(-1)!.start || a.id.localeCompare(b.id));
    for (const item of queue) {
      if (available <= 0) break;
      endSegment(item, now); item.phase = 'working'; item.finish = now + effective.duration;
      item.history.push({ stage: index, kind: stage.kind === 'process' ? 'active' : 'waiting', reason: stage.kind === 'process' ? 'process' : 'buffer', start: now }); available--;
    }
  });
}
export function advance(input: Factory, seconds: number): Factory {
  const factory: Factory = structuredClone(input);
  const target = factory.now + Math.max(0, Number.isFinite(seconds) ? seconds : 0);
  settle(factory);
  while (factory.now < target) {
    const next = Math.min(target, ...factory.items.flatMap(i => i.phase === 'pending' ? [i.arrival] : i.phase === 'working' ? [i.finish!] : []).filter(t => t > factory.now));
    factory.now = next; settle(factory);
  }
  return factory;
}
export function itemTimes(item: Item, now: number) {
  let active = 0, waiting = 0;
  item.history.forEach(s => { const duration = Math.max(0, (s.end ?? now) - s.start); if (s.kind === 'active') active += duration; else waiting += duration; });
  const total = item.phase === 'pending' ? 0 : (item.completedAt ?? now) - item.arrival;
  return { active, waiting, total, efficiency: total > 0 ? active / total * 100 : 0 };
}
export function factoryMetrics(factory: Factory) {
  const arrived = factory.items.filter(i => i.phase !== 'pending');
  const completed = arrived.filter(i => i.phase === 'complete');
  const totals = arrived.reduce((acc, i) => { const t = itemTimes(i, factory.now); return { active: acc.active + t.active, waiting: acc.waiting + t.waiting, total: acc.total + t.total }; }, { active: 0, waiting: 0, total: 0 });
  return { ...totals, arrived: arrived.length, completed: completed.length, wip: arrived.length - completed.length, efficiency: totals.total ? totals.active / totals.total * 100 : 0, throughput: factory.now ? completed.length / (factory.now / 3600) : 0 };
}
export type Thresholds = [number, number, number];
export function severity(wait: number, thresholds: Thresholds): 'Normal' | 'Attention' | 'Delayed' | 'Critical' {
  return wait >= thresholds[2] ? 'Critical' : wait >= thresholds[1] ? 'Delayed' : wait >= thresholds[0] ? 'Attention' : 'Normal';
}
export function clock(seconds: number) { const s = Math.max(0, Math.floor(seconds)); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; }
