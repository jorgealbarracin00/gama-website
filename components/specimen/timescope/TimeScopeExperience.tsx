'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { TimeScopeSpecimen } from '@/lib/specimens/types';
import styles from './TimeScope.module.css';

type DayApplication = {
  id: string;
  name: string;
  minutes: number;
  color: string;
  intervals: { start: number; minutes: number; label: string }[];
  explanation: string;
};

const applications: DayApplication[] = [
  {
    id: 'xcode',
    name: 'Xcode',
    minutes: 120,
    color: '#75aaff',
    intervals: [{ start: 540, minutes: 75, label: '9:00–10:15 am' }, { start: 660, minutes: 45, label: '11:00–11:45 am' }],
    explanation: 'Two foreground sessions, 120 minutes in total. The application name describes the window in front; it does not measure the quality of the work.',
  },
  {
    id: 'chrome',
    name: 'Google Chrome',
    minutes: 78,
    color: '#bb9bff',
    intervals: [{ start: 615, minutes: 30, label: '10:15–10:45 am' }, { start: 720, minutes: 48, label: '12:00–12:48 pm' }],
    explanation: 'Two foreground sessions, 78 minutes in total. This example includes optional recorded website coverage. Those minutes are already part of Chrome’s total.',
  },
  {
    id: 'opera',
    name: 'Opera',
    minutes: 60,
    color: '#ffb779',
    intervals: [{ start: 810, minutes: 60, label: '1:30–2:30 pm' }],
    explanation: 'One foreground session, 60 minutes in total. The current detailed browser adapter is disabled for Opera; the application time still has a place in the day.',
  },
];

const domains = [
  { name: 'example.com', minutes: 28, color: '#b798f8' },
  { name: 'wikipedia.org', minutes: 15, color: '#9b83cf' },
  { name: 'youtube.com', minutes: 10, color: '#7e6bae' },
  { name: 'Unclassified application time', minutes: 25, color: '#5b536c' },
];

const duration = (minutes: number) => minutes >= 60
  ? `${Math.floor(minutes / 60)}h ${minutes % 60}m`
  : `${minutes}m`;

export function DayExplorer() {
  const [selected, setSelected] = useState('chrome');
  const [view, setView] = useState<'summary' | 'timeline'>('summary');
  const [showMetadata, setShowMetadata] = useState(false);
  const application = applications.find(item => item.id === selected)!;
  const total = applications.reduce((sum, item) => sum + item.minutes, 0);

  return (
    <div className={styles.explorer}>
      <div className={styles.explorerTop}>
        <div><span className={styles.kicker}>AN ILLUSTRATIVE DAY / NO ACTIVITY COLLECTED</span><h3>Look a little closer.</h3></div>
        <div className={styles.viewButtons} aria-label="Choose example view">
          <button type="button" aria-pressed={view === 'summary'} onClick={() => setView('summary')}>Summary</button>
          <button type="button" aria-pressed={view === 'timeline'} onClick={() => setView('timeline')}>Timeline</button>
        </div>
      </div>
      <div className={styles.dayTotal}>
        <div><strong>{duration(total)}</strong><span>Active computer time</span></div>
        <p>Five foreground sessions.<br />Idle, pause and missing observations stay separate.</p>
      </div>

      {view === 'summary' ? (
        <div className={styles.daySplit}>
          <div className={styles.applicationList} aria-label="Choose an application">
            {applications.map(item => (
              <button type="button" key={item.id} aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}>
                <span className={styles.appDot} style={{ background: item.color }} aria-hidden="true" />
                <span className={styles.appName}>{item.name}</span>
                <strong>{duration(item.minutes)}</strong>
                <span className={styles.appRail} aria-hidden="true"><i style={{ width: `${item.minutes / total * 100}%`, background: item.color }} /></span>
              </button>
            ))}
            <p className={styles.fine}>Choose an application to inspect its recorded context.</p>
          </div>
          <div className={styles.applicationDetail} aria-live="polite">
            <div className={styles.detailHeading}><span className={styles.kicker}>INSIDE THE APPLICATION</span><h4>{application.name}<strong>{duration(application.minutes)}</strong></h4></div>
            <p>{application.explanation}</p>
            {application.id === 'chrome' ? (
              <>
                <div className={styles.domainList}>
                  {domains.map(domain => (
                    <div key={domain.name}>
                      <span>{domain.name}</span><strong>{duration(domain.minutes)}</strong>
                      <i aria-hidden="true" style={{ width: `${domain.minutes / application.minutes * 100}%`, background: domain.color }} />
                    </div>
                  ))}
                </div>
                <p className={styles.sumRule}>28 + 15 + 10 + 25 = 78 minutes.<br /><strong>More context. The same total.</strong></p>
                <button type="button" className={styles.metadataButton} aria-expanded={showMetadata} onClick={() => setShowMetadata(!showMetadata)}>
                  {showMetadata ? 'Hide' : 'Inspect'} optional YouTube metadata <span aria-hidden="true">{showMetadata ? '−' : '+'}</span>
                </button>
                {showMetadata && (
                  <div className={styles.metadata}>
                    <span className={styles.kicker}>FICTIONAL STORED METADATA</span>
                    <p>YouTube identifier: <code>DemoClip001</code><br />Recorded page title: <strong>Time and attention — an example</strong></p>
                    <p className={styles.fine}>A title is context. No playback, channel or separate content duration is inferred. Titles and video identifiers are additional opt-in choices in the app.</p>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.sessionList}>{application.intervals.map(interval => <div key={interval.start}><span>{interval.label}</span><strong>{duration(interval.minutes)}</strong></div>)}</div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.timelineExample}>
          <div className={styles.timeAxis} aria-hidden="true"><span>9 am</span><span>Noon</span><span>3 pm</span></div>
          {applications.map(item => (
            <div className={styles.timeRow} key={item.id}>
              <span>{item.name}</span>
              <div aria-label={`${item.name}: ${item.intervals.map(interval => interval.label).join(', ')}`}>
                {item.intervals.map(interval => <i key={interval.start} title={`${interval.label} / ${duration(interval.minutes)}`} style={{ left: `${(interval.start - 540) / 360 * 100}%`, width: `${interval.minutes / 360 * 100}%`, background: item.color }} />)}
              </div>
            </div>
          ))}
          <div className={styles.timelineLegend}><span><i style={{ background: '#75aaff' }} />Application session</span><span><i style={{ background: '#30313f' }} />Outside these example sessions</span></div>
          <ul className={styles.timelineSessions}>{applications.flatMap(item => item.intervals.map(interval => ({ ...interval, app: item.name }))).sort((a, b) => a.start - b.start).map(interval => <li key={interval.start}><span>{interval.label}</span><strong>{interval.app}</strong><span>{duration(interval.minutes)}</span></li>)}</ul>
          <p className={styles.fine}>Blank space in this example is not assigned a cause. The real app distinguishes observed inactivity, pauses and recorded monitoring gaps.</p>
        </div>
      )}
      <details className={styles.coverageDetails}>
        <summary>What permissions make this possible?</summary>
        <div><p><strong>Application time:</strong> foreground tracking uses public macOS APIs without an additional privacy permission.</p><p><strong>Chrome and Safari websites:</strong> disabled by default. Choose Enable for each browser and approve its normal macOS Automation request. Page titles and YouTube identifiers are separate optional choices.</p><p><strong>Current limits:</strong> Opera, Edge and Brave detailed adapters remain disabled; Firefox has no implemented native tab adapter. Generic app tracking remains available. Safari has no verified private-window indicator: disable its website details before private browsing.</p></div>
      </details>
      <p className={styles.demoNote}>A browser illustration of the reporting idea. Every number is fictional. This page cannot observe your applications, tabs or computer time.</p>
    </div>
  );
}

const humanUses = [
  {
    id: 'developer',
    label: 'For the developer',
    numeral: '01',
    question: '“I was at my desk all day. What did that day contain?”',
    title: 'Give the work a shape.',
    body: 'A build, some research, an unexpected interruption, a return to the editor. The summary shows which applications were active. The timeline shows the sequence. You bring the meaning of the work.',
    cue: 'Notice the pattern. Choose tomorrow deliberately.',
    color: '#75aaff',
  },
  {
    id: 'personal',
    label: 'For your own day',
    numeral: '02',
    question: '“How much of this was what I intended?”',
    title: 'Awareness starts with seeing.',
    body: 'Learning, creating, keeping in touch or simply enjoying a break. Computer time has more than one purpose. A local record helps you look back without a score telling you whether the day was good.',
    cue: 'Your time. Your context. Your next choice.',
    color: '#bb9bff',
  },
  {
    id: 'family',
    label: 'For the family conversation',
    numeral: '03',
    question: '“Can we understand school time and leisure together?”',
    title: 'Make accountability visible.',
    body: 'Talk openly about recording on a shared Mac. Look at the activity together. Optional Guardian Mode can protect settings and history deletion with a passcode, while the record gives your conversation a starting point.',
    cue: 'An open conversation needs more than a number.',
    color: '#9cdcc3',
  },
] as const;

export function HumanUses() {
  const [selected, setSelected] = useState<string>('developer');
  const item = humanUses.find(use => use.id === selected)!;
  return (
    <div className={styles.humanUses}>
      <div className={styles.humanButtons} aria-label="Explore the human reasons for TimeScope">
        {humanUses.map(use => <button key={use.id} type="button" aria-pressed={selected === use.id} onClick={() => setSelected(use.id)}><span>{use.numeral}</span>{use.label}<i aria-hidden="true" style={{ background: use.color }} /></button>)}
      </div>
      <div className={styles.humanStory} aria-live="polite">
        <blockquote>{item.question}</blockquote>
        <div><h3>{item.title}</h3><p>{item.body}</p><strong>{item.cue}</strong></div>
      </div>
      {selected === 'family' && <p className={styles.familyNote}>TimeScope records a macOS account, not the identity of the person using it. Guardian Mode is visible and does not block apps, prevent Force Quit or provide remote monitoring.</p>}
    </div>
  );
}

export function NativeGallery({ captures }: { captures: TimeScopeSpecimen['captures'] }) {
  const [selected, setSelected] = useState(captures[0].id);
  const capture = captures.find(item => item.id === selected)!;
  return (
    <div className={styles.nativeGallery}>
      <div className={styles.captureButtons} aria-label="Choose a native TimeScope view">
        {captures.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}><span>0{index + 1}</span>{item.title}</button>)}
      </div>
      <figure aria-live="polite">
        <a href={capture.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size native ${capture.title} render`}>
          <Image src={capture.src} alt={capture.alt} width={capture.width} height={capture.height} sizes="(max-width: 760px) 96vw, 1260px" />
          <span className={styles.fullSize}>View full size ↗</span>
        </a>
        <figcaption><strong>{capture.title}</strong><span>{capture.note}</span></figcaption>
      </figure>
    </div>
  );
}
