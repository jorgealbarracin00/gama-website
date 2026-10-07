import Image from 'next/image';
import Link from 'next/link';
import type { MemoirSpecimen, SpecimenArtwork } from '@/lib/specimens/types';
import SpecimenNavigation from './SpecimenNavigation';
import styles from './MemoirFile.module.css';

function Art({ artwork, priority = false, className = '' }: { artwork: SpecimenArtwork; priority?: boolean; className?: string }) {
  return <Image {...artwork} alt={artwork.alt} priority={priority} sizes="(max-width: 768px) 100vw, 1280px" className={`${styles.art} ${className}`} />;
}
function Chapter({ specimen, index }: { specimen: MemoirSpecimen; index: number }) {
  const chapter = specimen.chapters[index];
  return <header className={styles.chapterHead}>
    <p className={styles.label}>Folder 0{index + 1} / {chapter.title}</p>
    <h2>{chapter.heading}</h2>
    <div className={styles.prose}>{chapter.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
  </header>;
}
function MountedScene({ artwork, capture, final = false, priority = false }: { artwork: SpecimenArtwork; capture: SpecimenArtwork; final?: boolean; priority?: boolean }) {
  return <div className={`${styles.mountedScene} ${final ? styles.finalScene : ''}`}>
    <Art artwork={artwork} priority={priority} />
    <div className={styles.tablet}><Image {...capture} alt={capture.alt} sizes="(max-width: 600px) 86vw, 45vw" priority={priority} /></div>
  </div>;
}

export default function MemoirFile({ specimen: s }: { specimen: MemoirSpecimen }) {
  const captures = Object.fromEntries(s.captures.map(c => [c.id, c]));
  const phone = captures['recording-iphone'];
  return <main className={styles.file}>
    <div className={styles.wrap}>
      <div className={styles.filebar}><Link href="/incubation">← GAMA Dynamics / Specimen archive</Link><span>File {s.number} · {s.status.toUpperCase()}</span></div>
      <header className={styles.opening}>
        <div className={styles.identity}><p className={styles.label}>Specimen {s.number} / {s.epithet}</p><h1>Memoir <em>Echoes</em></h1></div>
        <div className={styles.openingNote}><p>{s.mission}</p><span>Native Apple application<br />{s.platforms.join(' + ')} · Shipped</span></div>
      </header>
      <figure className={styles.hero}>
        <MountedScene artwork={s.artwork.hero} capture={captures.welcome} priority />
        <figcaption><span>Plate 001 / Archive of a life</span><span>Native iPad welcome screen in an imagined archive</span></figcaption>
      </figure>
      <div className={styles.question}><p>{s.question}</p><span className={styles.label}>Record. Reflect. Remember.</span></div>
    </div>
    <SpecimenNavigation chapters={s.chapters} className={styles.navigation} />
    <div className={styles.wrap}>
      <section id="origin" className={`${styles.chapter} ${styles.origin}`}>
        <figure><Art artwork={s.artwork.origin} /><figcaption>Plate 002 / The unrecorded story</figcaption></figure>
        <div><Chapter specimen={s} index={0} /><p className={styles.marginNote}>{s.chapters[0].annotation}</p></div>
      </section>
      <section id="experiment" className={styles.chapter}>
        <Chapter specimen={s} index={1} />
        <figure className={styles.fullPlate}><Art artwork={s.artwork.experiment} /><figcaption>Plate 003 / Voice becoming memory · A physical metaphor</figcaption></figure>
        <ol className={styles.workflow}>{s.workflow.map((step, i) => <li key={step.title}><span className={styles.label}>0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
        <p className={styles.quietLine}>{s.chapters[1].annotation}</p>
      </section>
      <section id="system" className={styles.chapter}>
        <Chapter specimen={s} index={2} />
        <div className={styles.deviceStory}>
          <div><p className={styles.label}>iPhone / Capture</p><h3>When the memory arrives.</h3><p>In the kitchen. On a walk. After a conversation. Begin with a spoken thought or a few written words, while they are still close.</p></div>
          <figure><div className={`${styles.mountedScene} ${styles.captureScene}`}><Art artwork={s.artwork.capture} /><a className={styles.phone} href={phone.src} target="_blank" rel="noopener noreferrer" aria-label="Open full-size native iPhone recording screen"><Image {...phone} alt={phone.alt} sizes="(max-width: 600px) 70vw, 25vw" /></a></div><figcaption>Native iPhone recording screen / An ordinary moment becomes an Echo ↗</figcaption></figure>
        </div>
        <div className={`${styles.deviceStory} ${styles.reflection}`}>
          <div><p className={styles.label}>iPad / Reflection</p><h3>When you return to it.</h3><p>A larger page. Room to read, organise and see the threads between memories. The archive begins to feel like a book.</p></div>
          <figure><MountedScene artwork={s.artwork.reflection} capture={captures.home} /><figcaption>Native iPad workspace / Echoes, chapters and Narrator Mirror</figcaption></figure>
        </div>
        <div className={styles.phoneArchive}>
          <div className={styles.phoneArchiveIntro}>
            <p className={styles.label}>iPhone / The growing memoir</p>
            <h3>A story today.
A book, gradually.</h3>
            <p>Return to the archive in your pocket. Open the memoir, arrange what belongs and choose which Echoes become part of the book.</p>
          </div>
          <div className={styles.phoneScreens}>{['home-iphone', 'book-index-iphone'].map(id => <figure key={id}>
            <a href={captures[id].src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${captures[id].title}`}><Image {...captures[id]} alt={captures[id].alt} sizes="(max-width: 600px) 300px, 240px" /></a>
            <figcaption>{id === 'home-iphone' ? 'Native iPhone / The place to begin' : 'Native iPhone / Decide what belongs'} ↗</figcaption>
          </figure>)}</div>
        </div>
        <div className={styles.realScreens}>
          <p className={styles.label}>Inside the living book / Authentic native iPad captures</p>
          <div className={styles.screenSpread}>{['book-index', 'reading'].map(id => <figure key={id}><a href={captures[id].src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${captures[id].title}`}><Image {...captures[id]} alt={captures[id].alt} sizes="(max-width: 900px) 92vw, 46vw" /></a><figcaption>{id === 'book-index' ? 'The memoir, gathered into chapters' : 'A photograph and the story it cannot tell alone'} <span>↗</span></figcaption></figure>)}</div>
        </div>
        <dl className={styles.surfaces}>{s.systemSurfaces.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.body}</dd></div>)}</dl>
      </section>
      <section id="problems" className={styles.chapter}>
        <Chapter specimen={s} index={3} />
        <div className={styles.failures}>{s.failures.map(f => <article key={f.id}>
          <figure><Art artwork={f.artwork} /><figcaption>Failure study {f.id} / Engineering metaphor</figcaption></figure>
          <h3>{f.title}</h3><p>{f.body}</p><details><summary>What it taught the system</summary><p>{f.lesson}</p></details>
        </article>)}</div>
      </section>
      <section id="solutions" className={styles.chapter}>
        <Chapter specimen={s} index={4} />
        <figure className={styles.fullPlate}><Art artwork={s.artwork.solutions} /><figcaption>Plate 010 / One path across the archive</figcaption></figure>
        <div className={styles.solutionNotes}>{s.solutions.map((item, i) => <article key={item.title}><p className={styles.label}>Preservation note 0{i + 1}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        <aside className={styles.validation}><span className={styles.label}>Recorded device validation</span><h3>{s.validation.heading}</h3><p>{s.validation.body}</p><small>{s.validation.source}</small></aside>
        <div className={styles.privacy}><div><p className={styles.label}>Privacy / A condition of preservation</p><h3>{s.privacy.heading}</h3>{s.privacy.paragraphs.map(p => <p key={p}>{p}</p>)}<a href={s.privacy.url} target="_blank" rel="noopener noreferrer">Read the privacy policy ↗</a></div><dl>{s.privacy.details.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.body}</dd></div>)}</dl></div>
      </section>
      <section id="evolution" className={styles.chapter}>
        <Chapter specimen={s} index={5} />
        <p className={styles.label}>{s.chapters[5].annotation}</p>
        <div className={styles.mutations}>{s.mutations.map(m => <article key={m.id}><figure><Art artwork={m.artwork} /></figure><p className={styles.label}>Mutation {m.id} / {m.numeral}</p><h3>{m.title}</h3><p>{m.summary}</p><details><summary>{m.form}</summary><p>{m.meaning}</p></details></article>)}</div>
        <div className={styles.current}><div><p className={styles.label}>Current state / {s.status.toUpperCase()}</p><h3>{s.currentStage.heading}</h3><p>{s.currentStage.body}</p></div><a href={s.productLink.url} target="_blank" rel="noopener noreferrer">{s.productLink.label} ↗</a></div>
      </section>
      <footer className={styles.ending}>
        <p className={styles.label}>What remains</p><p className={styles.lastQuestion}>Which story would you leave for someone you may never meet?</p>
        <figure><MountedScene artwork={s.artwork.final} capture={captures.reading} final /><figcaption>A future reader, imagined / The written Echo, authentic</figcaption></figure>
        <Link className={styles.return} href="/incubation">Return to the specimen archive ↗</Link>
        <p className={styles.closing}>{s.closingLines[0]}<br /><em>{s.closingLines[1]}</em></p>
      </footer>
    </div>
  </main>;
}
