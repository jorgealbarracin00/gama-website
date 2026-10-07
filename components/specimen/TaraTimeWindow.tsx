'use client';
import { useState, type CSSProperties } from 'react';
import { Mascot } from './TaraMascot';
import styles from './TaraFile.module.css';

// An editorial model of TARA's default timing geometry. No intake is created,
// recorded or rescheduled. Values come from TARAWindow and TemporalState.
export default function TaraTimeWindow() {
  const [offset, setOffset] = useState(-60);
  const position = (offset + 180) / 360 * 100;
  const within = offset >= -20 && offset <= 20;
  const phase = within ? 'Within the preferred window' : offset < -20 ? 'Before the preferred window' : 'After the preferred window';
  const hour = 12 + Math.floor(offset / 60);
  const minute = ((offset % 60) + 60) % 60;
  const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  return <div className={styles.timeModel}>
    <div className={styles.modelHead}><span className={styles.eyebrow}>Timing model / Interactive</span><span>Preferred time 12:00</span></div>
    <div className={styles.modelReading}><strong>{time}</strong><p aria-live="polite">{phase}</p></div>
    <div className={styles.timeRail} style={{ '--position': `${position}%` } as CSSProperties} aria-hidden="true">
      <span className={styles.preferenceBand} /><span className={styles.pivot} />
      <div className={styles.timeCompanion}><Mascot simplified state={within ? 'preferred' : 'moving'} /></div>
    </div>
    <div className={styles.railLabels}><span>09:00<br /><small>Reminder starts</small></span><span>12:00<br /><small>Preferred time</small></span><span>15:00<br /><small>Reminder ends</small></span></div>
    <label className={styles.rangeLabel} htmlFor="tara-time-offset">Move through the reminder window</label>
    <input id="tara-time-offset" type="range" min="-180" max="180" step="5" value={offset} onChange={e => setOffset(Number(e.target.value))} aria-valuetext={`${time}. ${phase}.`} />
    <div className={styles.timePresets}>{[[-60, 'Earlier'], [0, 'Preferred'], [60, 'Later']].map(([value, label]) => <button key={value} type="button" onClick={() => setOffset(Number(value))} aria-pressed={offset === value}>{label}</button>)}</div>
    <p className={styles.modelNote}>Default amber band: 20 minutes before and after. The wider reminder window is 3 hours each side. Both are adjustable organisational preferences; they do not determine whether an intake is medically safe.</p>
  </div>;
}
