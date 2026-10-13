import Image from 'next/image';
import Link from 'next/link';
import { timescope as specimen } from '@/lib/specimens/timescope';
import type { SpecimenArtwork } from '@/lib/specimens/types';
import SpecimenNavigation from './SpecimenNavigation';
import { DayExplorer, HumanUses, NativeGallery } from './timescope/TimeScopeExperience';
import styles from './timescope/TimeScope.module.css';

function Art({ artwork, caption, priority = false }: { artwork: SpecimenArtwork; caption: string; priority?: boolean }) {
  return (
    <figure className={styles.art}>
      <Image {...artwork} alt={artwork.alt} priority={priority} sizes="(max-width: 760px) 100vw, 1300px" />
      <figcaption><span>{caption}</span><span>Conceptual artwork</span></figcaption>
    </figure>
  );
}

function ChapterHead({ index }: { index: number }) {
  const chapter = specimen.chapters[index];
  return (
    <header className={styles.chapterHead}>
      <p className={styles.eyebrow}>0{index + 1} / {chapter.title}</p>
      <h2>{chapter.heading}</h2>
      <div>{chapter.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </header>
  );
}

const principles = [
  ['Observe', 'The application in front. The elapsed time. A separate session when the foreground changes.'],
  ['Keep', 'Local SQLite records, transactional checkpoints and a journal of recording events.'],
  ['Explain', 'A daily total, a seven-day view, a timeline and the context underneath.'],
  ['Respect', 'A choice to begin, optional browser detail and visible controls for the person using the Mac.'],
];

const boundaries = [
  ['App time ≠ attention', 'An application in front does not prove reading, watching or the quality of someone’s work.'],
  ['A gap ≠ a verdict', 'An inferred interruption does not establish why recording stopped. Missing observations stay visible.'],
  ['An account ≠ a person', 'A shared macOS account cannot tell you which family member used the computer.'],
  ['More detail ≠ more time', 'Website observations belong within their application. They do not add more minutes to the day.'],
];

export default function TimeScopeFile() {
  return (
    <main className={styles.page}>
      <a className={styles.skip} href="#experiment">Skip to the illustrative day</a>
      <div className={styles.wrap}>
        <header className={styles.top}>
          <Link href="/incubation">← GAMA Dynamics / Specimen archive</Link>
          <span><i aria-hidden="true" />009 / BUILT · IN APP STORE REVIEW</span>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroIdentity}>
            <Image src="/specimens/timescope/icon-original.png" alt="The original TimeScope purple app icon: a silver computer displaying a static example time and a coloured usage bar" width={160} height={160} priority className={styles.originalIcon} />
            <div><p className={styles.eyebrow}>GAMA TIMESCOPE / NATIVE MACOS</p><span>THE DAY, MADE VISIBLE.</span></div>
          </div>
          <h1>Where did<br /><em>my day go?</em></h1>
          <div className={styles.heroBottom}>
            <p>A developer’s question.<br />A little clarity for anyone<br />who spends a day at a Mac.</p>
            <div><a className={styles.cta} href="#experiment">Give a day a shape <span aria-hidden="true">↗</span></a><span className={styles.heroMeta}>LOCAL RECORDS / HUMAN CONTEXT / MACOS 14+</span></div>
          </div>
          <div className={styles.prismRail} aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </section>

        <Art artwork={specimen.artwork.hero} caption="The hours begin to take a shape" priority />
        <SpecimenNavigation chapters={specimen.chapters} className={styles.navigation} />

        <section id="origin" className={styles.chapter}>
          <ChapterHead index={0} />
          <div className={styles.originStatement}><span>A DAY AT THE COMPUTER<br />IS STILL A HUMAN DAY.</span><p>Work. School. Research.<br />A message. A pause. A little play.<br /><em>The same hours. Different meanings.</em></p></div>
          <HumanUses />
        </section>

        <section id="experiment" className={styles.chapter}>
          <ChapterHead index={1} />
          <DayExplorer />
          <div className={styles.reportingRule}><span>THE REPORTING PRINCIPLE</span><p>One minute of computer time.<br /><em>One place in the total.</em></p><div>A browser can contain a website.<br />A website can have optional metadata.<br /><strong>Context deepens. The total stays honest.</strong></div></div>
        </section>

        <section id="system" className={styles.chapter}>
          <ChapterHead index={2} />
          <div className={styles.systemFlow}>{principles.map(([title, body], index) => <article key={title}><span className={styles.kicker}>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className={styles.nativeIntro}><p className={styles.eyebrow}>THE ACTUAL NATIVE INTERFACE</p><h3>The record.<br /><em>And the ways to read it.</em></h3><p>These are the app’s native SwiftUI views, rendered with isolated synthetic examples. Explore the surfaces. Open any image to inspect the details.</p></div>
          <NativeGallery captures={specimen.captures} />
          <div className={styles.localPromise}>
            <div><span className={styles.kicker}>NO ACCOUNT BETWEEN YOU AND YOUR DAY</span><h3>It stays here.</h3></div>
            <p>Activity records stay on the Mac. No GAMA account, cloud sync, subscription, advertising or external app analytics. The app works offline; opening a support website is an ordinary web request.</p>
          </div>
        </section>

        <section id="problems" className={styles.chapter}>
          <ChapterHead index={3} />
          <div className={styles.boundaries}>{boundaries.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
          <blockquote className={styles.pullquote}>The day can be measured.<br /><em>Its meaning needs a person.</em></blockquote>
          <details className={styles.detailBlock}><summary>The edges of the observation</summary><div><p>Website intervals are sampled foreground exposure and can miss quick tab changes. Passive viewing can become idle. Dedicated lock/unlock detection remains unverified.</p><p>Chrome’s native private-window mode is checked before and after a read. Safari has no verified private-window indicator: disable Safari website details before private browsing.</p><p>The engine records ambiguous clock changes and interrupted observations as explicit gaps. It does not invent activity for periods before monitoring began.</p></div></details>
        </section>

        <section id="solutions" className={styles.chapter}>
          <ChapterHead index={4} />
          <div className={styles.choiceGrid}>
            <article><span className={styles.kicker}>01 / BEGIN BY CHOICE</span><h3>Start when<br />you understand.</h3><p>The first-use explanation comes before recording. Choose Start recording to begin. Not now leaves it stopped.</p></article>
            <article><span className={styles.kicker}>02 / ASK BEFORE DETAIL</span><h3>Browser context<br />is optional.</h3><p>Chrome and Safari details need per-browser Enable and normal Automation approval. Page titles and YouTube identifiers are additional choices, off by default.</p></article>
            <article><span className={styles.kicker}>03 / KEEP CONTROL NEARBY</span><h3>Your records.<br />Your controls.</h3><p>Inspect sessions, pause recording and manage retention. The default is 90 days; choose 30, 365 or no automatic expiry. Delete activity history from the app.</p></article>
            <article><span className={styles.kicker}>04 / TALK IN THE OPEN</span><h3>A visible<br />Guardian Mode.</h3><p>Protect settings, tracking configuration and history deletion with a passcode. Optionally protect normal quitting. Everyone using the shared account should understand the recording.</p></article>
          </div>
          <div className={styles.guardianNote}><span className={styles.kicker}>ACCOUNTABILITY / WITH HUMAN CONTEXT</span><p>Guardian Mode supports an agreement.<br /><strong>It does not replace one.</strong></p><div><p>Normal operating-system controls remain available. Force Quit, shutdown and uninstalling are not prevented. There is no remote parent dashboard, app blocking or hidden monitoring.</p><a href="https://timescope.gamadynamics.com.au/privacy/" target="_blank" rel="noopener noreferrer">Read the TimeScope privacy policy ↗</a></div></div>
          <details className={styles.detailBlock}><summary>What stays outside the record</summary><div><p>TimeScope does not collect passwords, keystrokes, screenshots, private-message contents, browser cookies or authentication tokens. It does not read page contents, browser history databases, playback state or channel names.</p><p>The current app does not request Accessibility, Screen Recording or Input Monitoring. Optional browser metadata uses normal macOS Automation. Local activity is stored in the app’s SQLite container and is not separately encrypted by TimeScope; macOS account protection and your own backups apply.</p></div></details>
        </section>

        <section id="evolution" className={styles.chapter}>
          <ChapterHead index={5} />
          <ol className={styles.evolution}>
            <li><span>01</span><div><h3>Catch the foreground.</h3><p>Separate sessions, idle handling, local checkpoints and recovery. A foundation that leaves missing observations visible.</p></div></li>
            <li><span>02</span><div><h3>Bring context carefully.</h3><p>Optional Chrome and Safari metadata, explicit permissions, conservative URL storage and separate choices for sensitive detail.</p></div></li>
            <li><span>03</span><div><h3>Make the record readable.</h3><p>A Summary, selectable Timeline, Activity Journal and clear settings. Native interfaces around one coherent local history.</p></div></li>
            <li><span>04</span><div><h3>Keep the hierarchy honest.</h3><p>App, website and optional recorded metadata. Overlapping observations are handled without turning a deeper view into a larger total.</p></div></li>
          </ol>
          <div className={styles.releaseState}><div><span className={styles.kicker}>CURRENT STATE / SPECIMEN 009</span><h3>Built.<br /><em>In App Store review.</em></h3></div><div><p>The retained project documents a universal Mac build and 58 passing automated tests. Its native renders use synthetic examples, with no personal activity uploaded.</p><p>App Store Connect shows version 1.0.0 waiting for review on 13 October 2026. Publication of this specimen does not mean Apple has approved the application.</p><a className={styles.cta} href={specimen.productLink.url} target="_blank" rel="noopener noreferrer">Visit the TimeScope website ↗</a></div></div>
          <Art artwork={specimen.artwork.final} caption="A little clarity for the hours that matter" />
          <div className={styles.ending}><p className={styles.eyebrow}>GAMA TIMESCOPE / SEE WHERE YOUR TIME GOES.</p><h2>Your day.<br /><em>Made visible.</em></h2><p>A little more awareness.<br />A better conversation.</p><div><a href={specimen.productLink.url} target="_blank" rel="noopener noreferrer">Explore TimeScope ↗</a><Link href="/incubation">Return to the specimen archive →</Link></div></div>
        </section>
        <footer className={styles.footer}><p>GAMA Dynamics / Specimen 009 / GAMA TimeScope</p><p>Native source and documentation inspected 13 October 2026. Cinematic artwork is conceptual. Native views and the browser example use synthetic data. App Store availability remains subject to the actual release state.</p></footer>
      </div>
    </main>
  );
}
