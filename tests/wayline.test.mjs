import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync(new URL('../lib/wayline/model.ts', import.meta.url), 'utf8');
const compiled = ts.transpile(source, { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 });
const { advance, createFactory, defaultStages, factoryMetrics, itemTimes, severity } = await import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'));
function conservation(f) {
  assert.equal(new Set(f.items.map(i=>i.id)).size,f.items.length);
  for(const i of f.items){ const t=itemTimes(i,f.now);assert.ok(Math.abs(t.active+t.waiting-t.total)<1e-7);assert.ok(t.efficiency>=0&&t.efficiency<=100);for(let j=1;j<i.history.length;j++)assert.equal(i.history[j-1].end,i.history[j].start); }
  const m=factoryMetrics(f);assert.equal(m.arrived,m.completed+m.wip);
}
test('all items finish with complete eight-stage history and time conservation',()=>{ const f=advance(createFactory(),1000);conservation(f);assert.equal(factoryMetrics(f).completed,24);for(const i of f.items){assert.equal(i.history.filter(s=>s.reason!=='queue').length,8);assert.equal(itemTimes(i,f.now).active,132);assert.ok(itemTimes(i,f.now).waiting>=12);} });
test('event clock is independent of frame size and accelerated playback',()=>{let small=createFactory();for(let i=0;i<1000;i++)small=advance(small,.5);assert.deepEqual(small,advance(createFactory(),500));for(const speed of [1,5,20,100]){let accelerated=createFactory();for(let frame=0;frame<5;frame++)accelerated=advance(accelerated,speed);assert.deepEqual(accelerated,advance(createFactory(),5*speed));}});
test('a slowed coating station creates a queue; restore drains it without dropping items',()=>{let f=advance(createFactory(),70);f.bottleneck=4;f=advance(f,220);conservation(f);assert.ok(f.items.filter(i=>i.stage===4&&i.phase==='queued').length>8);const ids=f.items.map(i=>i.id);f.bottleneck=null;f=advance(f,1200);assert.deepEqual(f.items.map(i=>i.id),ids);assert.equal(factoryMetrics(f).completed,24);conservation(f);});
test('FIFO admissions and configured capacity hold',()=>{const stages=defaultStages.map(s=>({...s,duration:s.kind==='process'?30:s.duration,capacity:s.kind==='process'?1:0}));let f=createFactory(stages);for(let n=0;n<700;n++){f=advance(f,1);conservation(f);stages.forEach((s,k)=>{if(s.kind==='process')assert.ok(f.items.filter(i=>i.stage===k&&i.phase==='working').length<=s.capacity);});}for(let k=0;k<8;k++){const starts=f.items.flatMap(i=>i.history.filter(s=>s.stage===k&&s.reason!=='queue').map(s=>({id:i.id,start:s.start})));assert.deepEqual(starts.map(s=>s.start),starts.map(s=>s.start).sort((a,b)=>a-b));}});
test('buffers are waiting, never active processing',()=>{const f=advance(createFactory(),300);for(const i of f.items)for(const s of i.history)if([3,5].includes(s.stage))assert.equal(s.kind,'waiting');});
test('capacity changes preserve active service contracts',()=>{let f=advance(createFactory(),100);const working=f.items.filter(i=>i.phase==='working').map(i=>({id:i.id,finish:i.finish}));f.stages[4].capacity=1;f.bottleneck=4;f=advance(f,0);for(const old of working)assert.equal(f.items.find(i=>i.id===old.id).finish,old.finish);});
test('thresholds and boundaries are explicit',()=>{assert.equal(severity(19,[20,40,60]),'Normal');assert.equal(severity(20,[20,40,60]),'Attention');assert.equal(severity(40,[20,40,60]),'Delayed');assert.equal(severity(60,[20,40,60]),'Critical');assert.deepEqual(advance(createFactory(),-4),advance(createFactory(),0));});
