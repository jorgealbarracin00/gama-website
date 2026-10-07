import Image from "next/image";
import Link from "next/link";
import type { PublicSpecimen, SpecimenArtwork, SpecimenChapter } from "@/lib/specimens/types";
import SpecimenNavigation from "./SpecimenNavigation";
import SpecimenEvolution from "./SpecimenEvolution";
import styles from "./SpecimenFile.module.css";

function Artwork({ artwork, priority = false, className = "" }: { artwork: SpecimenArtwork; priority?: boolean; className?: string }) {
  return <Image src={artwork.src} alt={artwork.alt} width={artwork.width} height={artwork.height} priority={priority} sizes="(max-width: 700px) 100vw, (max-width: 1200px) 90vw, 1320px" className={className} />;
}

// Product evidence stays a separate, untouched image above the metaphorical set.
function Scene({ artwork, label, note, capture }: { artwork: SpecimenArtwork; label: string; note?: string; capture?: PublicSpecimen["captures"][number] }) {
  return <figure className={styles.scene}>
    <div className={styles.sceneFrame}>
      <Artwork artwork={artwork} />
      {capture && <div className={styles.inspectionMount}><Artwork artwork={capture} /><span>{capture.title}</span></div>}
    </div>
    <figcaption><span>{label}</span><p>{note}</p>{capture && <small>Original app capture</small>}</figcaption>
  </figure>;
}

function ChapterIntro({ chapter, index }: { chapter: SpecimenChapter; index: number }) {
  return <header className={styles.chapterIntro}>
    <p className={styles.eyebrow}><span>0{index + 1}</span> {chapter.title}</p>
    <h2 id={`${chapter.id}-heading`}>{chapter.heading}</h2>
    {chapter.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
  </header>;
}

export default function SpecimenFile({ specimen }: { specimen: PublicSpecimen }) {
  const [origin, experiment, system, problems, solutions, evolution] = specimen.chapters;
  return (
    <main className={styles.file}>
      <a className={styles.skipLink} href="#origin">Skip to specimen story</a>
      <div className={styles.container}>
        <div className={styles.fileBar}>
          <Link className={styles.backLink} href="/">← Lab entrance</Link>
          <span>{specimen.id} <span aria-hidden="true">/</span> Specimen archive</span>
          <Link href="/incubation">All specimens ↗</Link>
        </div>

        <header className={styles.identity}>
          <div>
            <p className={styles.eyebrow}>Incubation chamber <span>/</span> Specimen {specimen.number}</p>
            <h1>{specimen.name}</h1>
            <p className={styles.epithet}>{specimen.epithet}</p>
            <p className={styles.narrative}>{specimen.narrative}</p>
          </div>
          <aside className={styles.metadata} aria-label="Lab metadata">
            <p className={styles.eyebrow}>Lab metadata</p>
            <dl>
              <div><dt>Status</dt><dd><span className={styles.statusDot} />{specimen.statusLabel}</dd></div>
              <div><dt>Generation</dt><dd>{specimen.generation}</dd></div>
              <div><dt>Platform</dt><dd>{specimen.platforms.join(" + ")}</dd></div>
              <div><dt>Class</dt><dd>{specimen.classification}</dd></div>
              <div><dt>Core</dt><dd>{specimen.technologySummary[0]}</dd></div>
            </dl>
          </aside>
        </header>

        <SpecimenNavigation chapters={specimen.chapters.map(({ id, title }) => ({ id, title }))} />

        <figure className={styles.hero}>
          <Artwork artwork={specimen.artwork.hero} priority />
          <figcaption>
            <p className={styles.eyebrow}>Observation file <span>/</span> {specimen.number}</p>
            {specimen.heroLines.map((line, index) => <p key={line} className={index === specimen.heroLines.length - 1 ? styles.heroConclusion : undefined}>{line}</p>)}
          </figcaption>
          <span className={styles.plate}>Grocery Ninja <span>/</span> Preparation. Memory. Movement.</span>
        </figure>

        <section id="origin" className={`${styles.chapter} ${styles.origin}`} aria-labelledby="origin-heading">
          <Scene artwork={specimen.artwork.origin} label="Field note 01" note={origin.annotation} />
          <div className={styles.originText}>
            <div><ChapterIntro chapter={origin} index={0} /></div>
            <div className={styles.receipt}>
              <p>Household evidence <span>001-A</span></p>
              <ul>{specimen.evidence.receipt.map(item => <li key={item}><span aria-hidden="true">□</span>{item}</li>)}</ul>
              <strong>{specimen.evidence.conclusion}</strong>
            </div>
          </div>
        </section>

        <section id="experiment" className={`${styles.chapter} ${styles.experiment}`} aria-labelledby="experiment-heading">
          <Scene artwork={specimen.artwork.experiment} label="Shared-state experiment" note="One list. Multiple people. One changing state." />
          <div><ChapterIntro chapter={experiment} index={1} /></div>
          <p className={styles.diagramNote}>{specimen.evidence.syncNote}</p>
          <blockquote className={styles.researchQuestion}>{experiment.annotation}</blockquote>
        </section>

        <section id="system" className={`${styles.chapter} ${styles.system}`} aria-labelledby="system-heading">
          <Scene artwork={specimen.artwork.system} label="System inspection / six connected surfaces" note={system.annotation} capture={specimen.captures.find(capture => capture.id === specimen.sceneCaptures.system)} />
          <div className={styles.systemTop}>
            <div><ChapterIntro chapter={system} index={2} /></div>
            <p className={styles.marginNote}>{system.annotation}</p>
          </div>
          <div className={styles.shelves}>
            {specimen.systemSurfaces.map((surface, index) => <article key={surface.id}>
              <span className={styles.shelfNumber}>S{String(index + 1).padStart(2, "0")}</span>
              <h3>{surface.name}</h3><p>{surface.description}</p>
            </article>)}
          </div>
          <figure className={styles.catalogue}>
            <Artwork artwork={specimen.artwork.catalogue} />
            <figcaption>
              <div><p className={styles.eyebrow}>The catalogue wall</p><strong>≈ {specimen.catalogue.approximateItemCount.toLocaleString("en-AU")}</strong><p>grocery item definitions / associated assets</p></div>
              <div><p>Names. Aliases. Categories. Visual memory.</p><p className={styles.languages}>{specimen.catalogue.languages.join(" / ")}</p><small>{specimen.catalogue.note}</small></div>
            </figcaption>
          </figure>
          <div className={styles.productEvidence}>
            <div className={styles.evidenceHeader}><p className={styles.eyebrow}>Behind the metaphor</p><h3>The actual specimen.</h3><p>Original product captures. The interface stays intact.</p></div>
            <div className={styles.captures}>
              {specimen.captures.map((capture, index) => <figure key={capture.id} className={index === 0 ? styles.phoneCapture : styles.tabletCapture}>
                <div><Artwork artwork={capture} /></div><figcaption><span>Evidence 0{index + 1}</span>{capture.title}</figcaption>
              </figure>)}
            </div>
          </div>
        </section>

        <section id="problems" className={`${styles.chapter} ${styles.problems}`} aria-labelledby="problems-heading">
          <div className={styles.failureSpecimens}>
            {specimen.failureSpecimens.map(failure => {
              const problem = specimen.problems.find(problem => problem.id === failure.problemId)!;
              return <figure key={failure.problemId}>
                <div className={styles.failureFrame}><Artwork artwork={failure.artwork} /><span>{problem.id} / Diagnostic specimen</span></div>
                <figcaption><h3>{problem.title}</h3></figcaption>
              </figure>;
            })}
          </div>
          <div className={styles.diagnosticHeader}><div><ChapterIntro chapter={problems} index={3} /></div><div className={styles.diagnosticStamp}>Assumptions<br />under review</div></div>
          <div className={styles.diagnostics}>
            {specimen.problems.map(problem => <article key={problem.id}><span>{problem.id}</span><div><h3>{problem.title}</h3><p>{problem.body}</p></div></article>)}
          </div>
          <p className={styles.fieldNote}><span>Lab note</span>{problems.annotation}</p>
        </section>

        <section id="solutions" className={`${styles.chapter} ${styles.solutions}`} aria-labelledby="solutions-heading">
          <Scene artwork={specimen.artwork.solutions} label="After the experiment" note={solutions.annotation} capture={specimen.captures.find(capture => capture.id === specimen.sceneCaptures.solutions)} />
          <div className={styles.solutionTop}>
            <div><ChapterIntro chapter={solutions} index={4} /></div>
            <div className={styles.milkNote}><span>Household interaction</span><p>We need milk.</p><p>Tap. Done.</p><small>{solutions.annotation}</small></div>
          </div>
          <div className={styles.solutionList}>
            {specimen.solutions.map(solution => <article key={solution.id}><span>{solution.id}</span><h3>{solution.title}</h3><p>{solution.body}</p></article>)}
          </div>
          <p className={styles.testing}><span aria-hidden="true">✓</span>{specimen.evidence.testing}</p>
        </section>

        <section id="evolution" className={`${styles.chapter} ${styles.evolution}`} aria-labelledby="evolution-heading">
          <div><ChapterIntro chapter={evolution} index={5} /></div>
          <SpecimenEvolution mutations={specimen.mutations} />
          <div className={styles.currentStage}>
            <div><p className={styles.eyebrow}>Current chamber state <span>/</span> {specimen.generation}</p><h3>{specimen.currentStage.heading}</h3><p>{specimen.currentStage.body}</p></div>
            <a className={styles.productLink} href={specimen.productLink.url} target="_blank" rel="noopener noreferrer">{specimen.productLink.label} <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <footer className={styles.closing}>
          <figure className={styles.closingScene}><Artwork artwork={specimen.artwork.final} /></figure>
          <Link href="/incubation">Return to the specimen archive ↗</Link>
          <span className={styles.eyebrow}>End of observation <span>/</span> {specimen.id}</span>
          <p>{specimen.closingLines[0]}<br /><strong>{specimen.closingLines[1]}</strong></p>
        </footer>
      </div>
    </main>
  );
}
