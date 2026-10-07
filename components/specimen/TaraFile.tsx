import Image from 'next/image';
import Link from 'next/link';
import type { SpecimenArtwork, TaraSpecimen } from '@/lib/specimens/types';
import SpecimenNavigation from './SpecimenNavigation';
import TaraTimeWindow from './TaraTimeWindow';
import { Mascot } from './TaraMascot';
import styles from './TaraFile.module.css';

function Art({ artwork, priority = false }: { artwork: SpecimenArtwork; priority?: boolean }) {
  return <Image {...artwork} alt={artwork.alt} priority={priority} sizes="(max-width: 768px) 100vw, 1280px" className={styles.art} />;
}
function Chapter({ s, index, phase }: { s: TaraSpecimen; index: number; phase: string }) {
  const c = s.chapters[index];
  return <header className={styles.chapterHead}><p className={styles.eyebrow}>Folder 0{index + 1} / {c.title}<span>{phase}</span></p><h2>{c.heading}</h2><div className={styles.prose}>{c.paragraphs.map(p => <p key={p}>{p}</p>)}</div></header>;
}
function Screen({ capture, className = '' }: { capture: TaraSpecimen['captures'][number]; className?: string }) {
  return <figure className={`${styles.screen} ${className}`}><a href={capture.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size native ${capture.platform} ${capture.title}`}><Image src={capture.src} alt={capture.alt} width={capture.width} height={capture.height} sizes={capture.platform === 'iPad' ? '(max-width: 768px) 90vw, 650px' : '(max-width: 600px) 80vw, 330px'} /></a><figcaption><span>{capture.platform} / {capture.title}</span><span aria-hidden="true">↗</span></figcaption></figure>;
}
export default function TaraFile({ specimen: s }: { specimen: TaraSpecimen }) {
  const captures = Object.fromEntries(s.captures.map(c => [c.id, c]));
  return <main className={styles.file}>
    <a className={styles.skip} href="#system">Skip to the real application</a>
    <div className={styles.wrap}>
      <div className={styles.filebar}><Link href="/incubation">← GAMA Dynamics / Specimen archive</Link><span><i />File {s.number} · {s.status.toUpperCase()}</span></div>
      <header className={styles.opening}>
        <div><p className={styles.eyebrow}>Specimen 003 / Your Timed Intake Assistant</p><h1>TARA<span aria-hidden="true">.</span></h1><p className={styles.wordmarkNote}>A little order. A little breathing room.</p></div>
        <div className={styles.openingCopy}><h2>Life does not run on perfect intervals.</h2><p>TARA helps your schedule keep up anyway.</p><span className={styles.eyebrow}>Native Apple application / iPhone + iPad</span></div>
      </header>
      <figure className={styles.hero}>
        <div className={styles.heroScene}>
          <picture className={styles.heroPicture}><source media="(max-width: 600px)" srcSet={s.artwork.heroMobile.src} /><Art artwork={s.artwork.hero} priority /></picture>
          <a className={styles.heroPhone} href={captures['today-iphone'].src} target="_blank" rel="noopener noreferrer" aria-label="Open full-size native TARA Today screen"><Image src={captures['today-iphone'].src} width={1206} height={2622} alt={captures['today-iphone'].alt} priority sizes="(max-width: 600px) 220px, 22vw" /></a>
        </div>
        <figcaption><span>A day with TARA / Cinematic concept + authentic native Today capture</span><span>Morning, with room for life.</span></figcaption>
      </figure>
      <div className={styles.dayLine} aria-label="The day in perspective"><span>Morning</span><i /><span>Now</span><i /><span>Next</span><i /><span>Evening</span></div>
      <div className={styles.introduction}><p>TARA makes<br /><strong>time visible.</strong></p><div><p>Medicine, vitamins, supplements, water and other timed routines. One understandable sequence.</p><p className={styles.scope}>Timing, scheduling, reminders and history. Healthcare decisions stay with the person and their clinician.</p></div></div>
    </div>
    <SpecimenNavigation chapters={s.chapters} className={styles.navigation} />
    <div className={styles.wrap}>
      <section id="origin" className={`${styles.chapter} ${styles.origin}`}>
        <div><Chapter s={s} index={0} phase="Morning" /><p className={styles.pullquote}>{s.chapters[0].annotation}</p></div>
        <figure><Art artwork={s.artwork.origin} /><figcaption>Study 01 / The arithmetic of everyday life</figcaption></figure>
      </section>
      <section id="experiment" className={styles.chapter}>
        <Chapter s={s} index={1} phase="Late morning" />
        <figure className={styles.wideScene}><Art artwork={s.artwork.experiment} /><figcaption>Study 02 / Priority through time</figcaption></figure>
        <div className={styles.windowStory}>
          <div><p className={styles.eyebrow}>The Smart Time Bar</p><h3>Time is a place<br />you can point to.</h3><p>TARA moves along the bar as time passes. The diamond marks the preferred time. The amber segment shows the chosen preference window.</p><p>Position gives you proximity. Names, times and status labels give it meaning.</p><figure><Art artwork={s.artwork.window} /><figcaption>A physical metaphor for the timing window</figcaption></figure></div>
          <TaraTimeWindow />
        </div>
      </section>
      <section id="system" className={styles.chapter}>
        <Chapter s={s} index={2} phase="Midday" />
        <p className={styles.evidenceLabel}>Product evidence / Native app captures with fictional release examples · 7 October 2026</p>
        <div className={styles.todayStory}>
          <Screen capture={captures['today-iphone']} />
          <div><p className={styles.eyebrow}>iPhone / The assistant in your pocket</p><h3>One moment leads.<br />The rest have a place.</h3><ol className={styles.todayNotes}><li><span>01</span><div><h4>The primary moment</h4><p>The first relevant intake expands. Its timing bar, Take and Skip actions stay together.</p></div></li><li><span>02</span><div><h4>A quieter chronology</h4><p>Compact cards show later moments. Repeated occurrences retain the intake’s visual identity and their own times.</p></div></li><li><span>03</span><div><h4>A deliberate handover</h4><p>Record Take or Skip. That moment leaves the upcoming sequence. The next one becomes primary.</p></div></li></ol><p className={styles.smallNote}>The screenshots show the real native interface. Their example names and amounts demonstrate the UI, not a suggested routine.</p></div>
        </div>
        <ol className={styles.workflow}>{s.workflow.map((w, i) => <li key={w.title}><span className={styles.eyebrow}>0{i + 1}</span><h3>{w.title}</h3><p>{w.body}</p></li>)}</ol>
        <div className={styles.scheduleIntro}><div><p className={styles.eyebrow}>Recurrence / Powered by GAMAEvents</p><h3>Choose the rhythm once.</h3><p>Pick the first time. TARA suggests the sequence. Adjust a slot with a controlled replacement, then choose the days.</p><details><summary>Two kinds of recurrence</summary><p>Choose one to four times per day on a calendar schedule, or an elapsed interval from 1 to 24 hours. Hourly and half-hourly controls set the time-selection grid; they do not prescribe intake frequency.</p><p>Calendar schedules support every day, every 2 or 3 days, or selected weekdays, and keep their configured time zone. Elapsed intervals continue across day boundaries. Taking an intake late records that action; it does not automatically prescribe or recalculate a new dosing plan.</p></details></div><figure><Art artwork={s.artwork.recurrence} /><figcaption>Study 04 / One anchor, a constructed sequence</figcaption></figure></div>
        <div className={styles.setupScreens}>{['times-iphone', 'days-iphone', 'manage-iphone'].map(id => <Screen key={id} capture={captures[id]} />)}</div>
        <div className={styles.ipadStory}><div><p className={styles.eyebrow}>iPad / The same rhythm, more room</p><h3>A wider view<br />of the day.</h3><p>TARA adapts its native interface to the larger canvas. The bounded reading column keeps cards readable and shows more moments together.</p><p>It shares the same timing and recurrence model. The larger screen brings perspective.</p><details><summary>See native iPad setup and management</summary><div className={styles.ipadExtras}>{['times-ipad', 'days-ipad', 'manage-ipad'].map(id => <Screen key={id} capture={captures[id]} />)}</div></details></div><Screen capture={captures['today-ipad']} /></div>
        <div className={styles.widgetStory}><figure><Art artwork={s.artwork.glance} /><figcaption>Study 05 / The next moment, at a glance</figcaption></figure><div><p className={styles.eyebrow}>WidgetKit / Beyond the application</p><h3>“What’s next?”<br />Before you open it.</h3><p>The same sequence reaches the Home Screen and Lock Screen. The available space determines how much of the day appears.</p><div className={styles.widgetSizes} aria-label="Home Screen widget capacity"><div><strong>01</strong><span>Small<br />Next moment</span></div><div><strong>02</strong><span>Medium<br />Next moments</span></div><div><strong>04</strong><span>Large<br />Plus later-today count</span></div></div><p className={styles.smallNote}>Home Screen widget capacities. Medium and Large support Take for the first active moment. Lock Screen: Inline, Circular and Rectangular. Apple controls widget refresh timing.</p><details><summary>Reminders and optional alarms</summary><p>Standard reminders are local to each device. Optional iOS 26+ alarms require separate permission and are off by default. Stopping an alarm does not record an intake.</p><a href="https://tara.gamadynamics.com.au/support" target="_blank" rel="noopener noreferrer">Read the current reminder guide ↗</a></details></div></div>
        <div className={styles.historyStory}><div><p className={styles.eyebrow}>History / A record of the day</p><h3>What happened.<br />Without the guesswork.</h3><p>Taken. Skipped. Missed. Week, Month and All Time views show outcomes, daily counts and recent details.</p><p>The record answers what you did. It does not interpret health outcomes.</p><figure><Art artwork={s.artwork.history} /><figcaption>Study 06 / A day becomes a record</figcaption></figure><details><summary>View native iPad History</summary><Screen capture={captures['history-ipad']} /></details></div><Screen capture={captures['history-iphone']} /></div>
      </section>
      <section id="problems" className={styles.chapter}>
        <Chapter s={s} index={3} phase="Afternoon complexity" />
        <p className={styles.smallNote}>{s.chapters[3].annotation}</p>
        <div className={styles.failures}>{s.failures.map(f => <article key={f.id}><figure><Art artwork={f.artwork} /><figcaption>Failure study {f.id} / Design metaphor</figcaption></figure><div><p className={styles.eyebrow}>Study {f.id}</p><h3>{f.title}</h3><p>{f.body}</p><details><summary>The design response</summary><p>{f.lesson}</p></details></div></article>)}</div>
        <aside className={styles.engineering}><p className={styles.eyebrow}>Engineering record / Documented corrections</p><h3>The quiet work underneath.</h3><p>The repository records real reconciliation fixes: fractional timestamps now use the same encoded representation; unchanged reconciliation no longer saves repeatedly and feeds its own remote-change loop.</p><details><summary>Protecting past and future</summary><p>Stale upcoming records for deleted, inactive or superseded plans are cleaned up. Recorded history keeps its independent details. Management operations refresh the widget projection and reconcile pending local reminders.</p><p>These corrections are documented in the native project’s App Store polish evidence. They are separate from the four conceptual design studies above.</p></details></aside>
      </section>
      <section id="solutions" className={styles.chapter}>
        <Chapter s={s} index={4} phase="Evening calm" />
        <figure className={styles.wideScene}><Art artwork={s.artwork.identity} /><figcaption>{s.chapters[4].annotation}</figcaption></figure>
        <div className={styles.solutions}>{s.solutions.map((item, i) => <article key={item.title}><span className={styles.eyebrow}>0{i + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        <div className={styles.privacy}><div><p className={styles.eyebrow}>Personal routines / Personal boundaries</p><h3>Your routines<br />are your business.</h3><p>Trust also lives in what a product chooses to keep, share and leave alone.</p><a href="https://tara.gamadynamics.com.au/privacy" target="_blank" rel="noopener noreferrer">Read TARA’s privacy policy ↗</a><div className={styles.companion}><Mascot state="taken" decorative={false} /><p>She guides the timing.<br />You make the decisions.</p></div></div><dl>{s.privacy.map(p => <div key={p.title}><dt>{p.title}</dt><dd>{p.body}</dd></div>)}</dl></div>
        <details className={styles.moreEvidence}><summary>Open the native Settings and guide captures</summary><div className={styles.setupScreens}>{['settings-iphone', 'guide-iphone', 'guide-ipad'].map(id => <Screen key={id} capture={captures[id]} />)}</div></details>
      </section>
      <section id="evolution" className={styles.chapter}>
        <Chapter s={s} index={5} phase="Night → next morning" /><p className={styles.smallNote}>{s.chapters[5].annotation}</p>
        <div className={styles.mutations}>{s.mutations.map(m => <article key={m.id}><figure><Art artwork={m.artwork} /></figure><div><p className={styles.eyebrow}>Mutation {m.id} / {m.numeral}</p><h3>{m.title}</h3><p>{m.summary}</p><details><summary>{m.form}</summary><p>{m.meaning}</p></details></div></article>)}</div>
        <div className={styles.current}><div><p className={styles.eyebrow}>Current state / {s.status.toUpperCase()}</p><h3>{s.currentStage.heading}</h3><p>{s.currentStage.body}</p></div><a className={styles.cta} href={s.productLink.url} target="_blank" rel="noopener noreferrer">{s.productLink.label}<span>↗</span></a></div>
      </section>
      <footer className={styles.ending}><p className={styles.eyebrow}>The day settles. The rhythm continues.</p><figure><Art artwork={s.artwork.final} /><figcaption>Final study / A calm system, one quiet future point</figcaption></figure><p className={styles.closing}>{s.closingLines[0]}<br /><strong>{s.closingLines[1]}</strong></p><Link href="/incubation">Return to the specimen archive ↗</Link><small>GAMA Dynamics / Specimen 003 / TARA</small></footer>
    </div>
  </main>;
}
