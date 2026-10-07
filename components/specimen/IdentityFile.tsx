import Image from 'next/image';
import Link from 'next/link';
import type { IdentitySpecimen, SpecimenArtwork } from '@/lib/specimens/types';
import SpecimenNavigation from './SpecimenNavigation';
import IdentityDoors from './IdentityDoors';
import styles from './IdentityFile.module.css';

function Scene({ artwork, label, priority = false, className = '' }: { artwork: SpecimenArtwork; label: string; priority?: boolean; className?: string }) {
  return <figure className={`${styles.scene} ${className}`}><Image {...artwork} alt={artwork.alt} priority={priority} sizes="(max-width: 760px) 100vw, 1280px" /><figcaption><span>{label}</span><span>Conceptual artwork</span></figcaption></figure>;
}
function Chapter({ s, index }: { s: IdentitySpecimen; index: number }) {
  const c = s.chapters[index];
  return <header className={styles.chapterHead}><p className={styles.eyebrow}>0{index + 1} / {c.title}</p><h2>{c.heading}</h2><div className={styles.prose}>{c.paragraphs.map(p => <p key={p}>{p}</p>)}</div></header>;
}
function Screen({ capture }: { capture: IdentitySpecimen['captures'][number] }) {
  return <figure className={styles.screen}><a href={capture.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${capture.title} screenshot`}><Image src={capture.src} width={capture.width} height={capture.height} alt={capture.alt} sizes="(max-width: 760px) 90vw, 560px" /></a><figcaption><strong>{capture.title} ↗</strong><span>{capture.note}</span></figcaption></figure>;
}

export default function IdentityFile({ specimen: s }: { specimen: IdentitySpecimen }) {
  return <main className={styles.file}>
    <a className={styles.skip} href="#system">Skip to the identity system</a>
    <div className={styles.wrap}>
      <div className={styles.filebar}><Link href="/incubation">← GAMA Dynamics / Specimen archive</Link><span><i aria-hidden="true" />005 · Deployed</span></div>
      <header className={styles.opening}>
        <div><p className={styles.eyebrow}>GAMA Identity / Shared platform infrastructure</p><h1>Different products.<br /><span>Same person.</span></h1><p className={styles.lede}>One fundamental question.<br />A shared answer to who is here.</p></div>
        <aside className={styles.identityIndex} aria-label="Specimen metadata"><div className={styles.particle} aria-hidden="true"><i /></div><dl><div><dt>Specimen</dt><dd>005 / GAMA Identity</dd></div><div><dt>State</dt><dd>Live / Production</dd></div><div><dt>Role</dt><dd>Identity + sessions</dd></div></dl></aside>
      </header>
      <Scene artwork={s.artwork.hero} label="One person / Four different worlds" priority className={styles.hero} />
      <div className={styles.legend}><p><i className={styles.humanDot} aria-hidden="true" />Warm nucleus <span>The person</span></p><p><i className={styles.systemDot} aria-hidden="true" />Aqua pathways <span>The infrastructure</span></p><p className={styles.legendNote}>The architecture changes.<br />The person remains.</p></div>
    </div>
    <SpecimenNavigation chapters={s.chapters} className={styles.navigation} />
    <div className={styles.wrap}>
      <section id="origin" className={styles.chapter}>
        <div className={styles.split}><Chapter s={s} index={0} /><div className={styles.originAside}><span className={styles.largeNumber}>01</span><p className={styles.statement}>Another account.<br />Another session.<br /><span>The same human.</span></p></div></div>
        <Scene artwork={s.artwork.origin} label="The origin question / What if identity belonged to GAMA?" />
        <div className={styles.editorial}><p className={styles.eyebrow}>The foundational problem</p><h3>Four personalities.<br />One person outside.</h3><p>Products should be free to feel different. The person should not have to become a new technical identity every time the product changes.</p></div>
      </section>
      <section id="experiment" className={styles.chapter}>
        <Chapter s={s} index={1} />
        <Scene artwork={s.artwork.doors} label="Many doors / Explicit relationships to one principal" />
        <div className={styles.definitionPair}><article><p className={styles.eyebrow}>Authentication</p><h3>Can you prove access?</h3><p>A provider or credential establishes the way in.</p></article><article><p className={styles.eyebrow}>Identity</p><h3>Who arrived?</h3><p>The GAMA principal is the platform’s durable answer.</p></article></div>
        <IdentityDoors />
        <div className={styles.split}><div><p className={styles.eyebrow}>Principal / HumanIdentity</p><h3>Email is not identity.<br />A provider is not a person.</h3><p>An email is credential or provider metadata. The current HumanIdentity model has its own identifier and lifecycle.</p><p>Returning through an established provider relationship resolves to that Human. Adding a new route requires an explicit link to the authenticated account.</p><p className={styles.annotation}>The door can change. The person should not.</p></div><Scene artwork={s.artwork.principal} label="A stable core / Independent of display credentials" /></div>
      </section>
      <section id="system" className={styles.chapter}>
        <Chapter s={s} index={2} />
        <Scene artwork={s.artwork.architecture} label="The shared layer / Deliberate boundaries and destinations" />
        <div className={styles.architecture} aria-label="Conceptual identity flow"><p className={styles.eyebrow}>A readable architecture / Not an operational topology</p><ol>{[
          ['Person', 'One human arrives'], ['Authentication', 'Apple · Google · Email'], ['GAMA Identity', 'Principal + session'], ['Product access', 'Separate permission checks'], ['Destination', 'An integrated application'],
        ].map(([title, body], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></div>
        <div className={styles.split}><Scene artwork={s.artwork.session} label="The session / Continuity with a defined lifetime" /><div><p className={styles.eyebrow}>Renewable sessions</p><h3>Nothing happened.<br />The session renewed.</h3><p>The service exchanges valid renewal state for fresh access and rotated renewal state. The principal stays the same.</p><p>IdentityKit can restore a locally saved session, validate it with the server, and renew it when appropriate. Restoring local state alone does not prove current validity.</p><ol className={styles.sessionSteps}><li>Sign in</li><li>Establish a session</li><li>Renew within its lifetime</li><li>Continue as the same principal</li></ol><p className={styles.annotation}>Expiry and revocation still matter. Continuity is controlled, not permanent.</p></div></div>
        <div className={styles.split}><div><p className={styles.eyebrow}>Shared Apple client / GAMAIdentityKit</p><h3>A common foundation.<br />Fewer reinventions.</h3><p>The Swift actor owns shared authentication behaviour, in-memory state and Keychain session persistence. Validation, renewable access, provider linking and logout have one reusable home.</p><details><summary>What the kit owns today</summary><ul className={styles.evidenceList}><li>Registration and login response mapping</li><li>Provider credential exchange and sign-in method management</li><li>Local restore followed by server validation</li><li>Renewal shared across concurrent unauthorised responses, with one retry</li><li>Remote logout followed by local session removal</li></ul><p>Applications still choose their integration and account interface. The kit is shared logic; it does not make sessions automatically portable between apps.</p></details></div><Scene artwork={s.artwork.kit} label="The kit / One dependable module, many integrations" /></div>
        <div className={styles.accessStory}><Scene artwork={s.artwork.entitlement} label="Identity ≠ entitlement / Destinations have their own rules" /><div><p className={styles.eyebrow}>Two different questions</p><h3>Who you are.<br /><span>What you can use.</span></h3><div className={styles.accessDefinitions}><p><strong>Identity</strong>Which Human is authenticated?</p><p><strong>Entitlement</strong>Does that Human have this product access?</p></div><p>The platform evaluates product, membership and entitlement state separately from the Human’s identity. A valid sign-in alone does not grant workforce or platform authority.</p><details><summary>Where App Store purchases fit</summary><p>The inspected Grocery NEXT implementation keeps principal identity, purchase account mapping and transaction environment in separate records. A purchase is evidence for product access; it is not the person’s identity.</p><p>This describes the current Grocery NEXT source. It is not a claim that every shipped product has moved to this model.</p></details></div></div>
        <div className={styles.evidenceHeading}><p className={styles.eyebrow}>Real interface / Coco the Llama</p><h3>The machinery<br />wears the product’s clothes.</h3><p>Three sign-in routes. One familiar shop. Recovery is part of the same account experience.</p></div>
        <div className={styles.captureGrid}>{s.captures.map(c => <Screen key={c.id} capture={c} />)}</div>
        <div className={styles.currentIntegrations}><p className={styles.eyebrow}>Implementation reality / Reviewed 8 October 2026</p><h3>A shared direction.<br />An explicit adoption map.</h3><div className={styles.integrationRows}>
          <div><strong>Coco the Llama</strong><span>GAMA Identity in the customer website and native Backstage authentication source.</span><b>Integrated</b></div>
          <div><strong>Grocery NEXT</strong><span>GAMAIdentityKit resolves a validated principal; purchase access remains a separate product concern.</span><b>Source verified</b></div>
          <div><strong>GroceryMaster / 001</strong><span>The approved app’s inspected authentication source uses Firebase Auth.</span><b>Existing foundation</b></div>
          <div><strong>Memoir Echoes + TARA</strong><span>The inspected apps use Apple account / CloudKit continuity for their cloud data.</span><b>Existing foundation</b></div>
        </div><p className={styles.annotation}>The four worlds illustrate the reason for GAMA Identity. They do not claim that all four already share one automatic sign-in. Each integration maintains its own session and access boundary.</p></div>
      </section>
      <section id="problems" className={`${styles.chapter} ${styles.problems}`}>
        <Chapter s={s} index={3} /><p className={styles.annotation}>Four failure studies, grounded in current regression tests and documented client fixes. Conceptual scenes show the lesson, not production account data.</p>
        <div className={styles.failures}>{s.failures.map((f, i) => <article key={f.id} className={styles.failure}><Scene artwork={f.artwork} label={`Failure study / 0${i + 1}`} /><div><p className={styles.eyebrow}>Failure 0{i + 1}</p><h3>{f.title}</h3><p>{f.body}</p><p className={styles.lesson}>{f.lesson}</p><details><summary>Implementation evidence</summary><p>{f.evidence}</p></details></div></article>)}</div>
      </section>
      <section id="solutions" className={styles.chapter}>
        <Chapter s={s} index={4} />
        <div className={styles.solutionGrid}>{[
          ['Stable principal', 'A HumanIdentity exists independently of its credentials and sessions.'],
          ['Explicit relationships', 'Verified provider links connect to an authenticated Human; email matching is not a shortcut.'],
          ['Renewable continuity', 'Valid renewal state rotates. Expired, invalid and revoked states have explicit outcomes.'],
          ['Shared client logic', 'IdentityKit brings common lifecycle behaviour to Apple integrations.'],
          ['Controlled boundaries', 'Provider configuration, trusted app destinations and product access remain deliberate.'],
          ['A product’s own interface', 'The identity foundation works underneath the app’s personality.'],
        ].map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className={styles.split}><Scene artwork={s.artwork.recovery} label="Recovery / A deliberate route back" /><div><p className={styles.eyebrow}>Ordinary human realities</p><h3>People forget.<br />Devices change.</h3><p>The service coordinates email verification and password recovery. Reset challenges are time limited and consumed; replacing a password revokes the Human’s sessions.</p><p>A returning device must restore and validate its session, or ask the person to authenticate again. Reinstallation alone is not proof of identity.</p><p className={styles.annotation}><strong>Leaving matters, too.</strong> IdentityKit logout ends the remote session before clearing local state. Local-only removal is a separate operation.</p></div></div>
        <div className={styles.invisible}><Scene artwork={s.artwork.invisible} label="Invisible success / Infrastructure in service of the person" /><div><p className={styles.eyebrow}>The emotional north star</p><h3>Good infrastructure<br />gets out of the way.</h3><p>A person returns. A valid session continues. The right access rules apply.</p><p>Nothing dramatic happens.</p><p className={styles.annotation}>That is the work.</p></div></div>
        <details className={styles.sourceReceipt}><summary>Inside the evidence / What was verified</summary><div className={styles.receiptGrid}><div><h3>Implementation</h3><p>HumanIdentity, federated authentication and linking, session lifecycle, email recovery, PostgreSQL adapters, provider configuration and the current IdentityKit source.</p></div><div><h3>Regression coverage</h3><p>40 selected service tests passed during this specimen audit: provider identity collisions, explicit links, session rotation and configuration boundaries. SDK renewal and contract tests were inspected separately.</p></div><div><h3>Public evidence</h3><p>Two unmodified-content captures from Coco’s live public account interface. They demonstrate available screens, not a completed authenticated session or a cross-product login.</p></div><div><h3>Publication boundary</h3><p>Conceptual routes and the interactive account are illustrative. No private identifiers, credentials, tokens or database records are shown. Source and artwork provenance accompany this specimen.</p></div></div></details>
      </section>
      <section id="evolution" className={styles.chapter}>
        <Chapter s={s} index={5} /><Scene artwork={s.artwork.evolution} label="Seven mutations / An architectural reading of the system" />
        <ol className={styles.mutations}>{s.mutations.map(m => <li key={m.id}><div className={styles.mutationLabel}><span>Mutation {m.numeral}</span><p>{m.form}</p></div><Scene artwork={m.artwork} label={`Mutation ${m.numeral} / ${m.title}`} /><div><h3>{m.title}</h3><p className={styles.mutationSummary}>{m.summary}</p><p>{m.meaning}</p></div></li>)}</ol>
        <div className={styles.closing}><p className={styles.eyebrow}>GAMA Identity / Specimen 005 / Live & evolving</p><h2>One person.<br />Many products.<br /><span>One identity.</span></h2><p>Identity should not be another thing<br />the person has to manage.</p></div>
        <Scene artwork={s.artwork.final} label="The same human / The direction of the shared ecosystem" />
        <footer className={styles.footer}><Link href="/incubation">← Explore the specimen archive</Link><Link href="/incubation/coco">See identity inside Coco ↗</Link><p>Conceptual imagery generated with imagegen. Architecture and adoption reflect inspected source, 8 October 2026.</p></footer>
      </section>
    </div>
  </main>;
}
