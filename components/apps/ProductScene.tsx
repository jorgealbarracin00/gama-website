import Image from 'next/image';
import { getShowcaseActionLabel, getShowcaseQrPath, type ShowcaseApp } from '@/lib/apps/registry';
import styles from './Showcase.module.css';

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={styles.appleMark}>
      <path d="M16.37 1.43c.08 1.16-.35 2.25-1.03 3.08-.72.88-1.87 1.56-2.99 1.48-.15-1.13.42-2.33 1.06-3.06.72-.84 1.94-1.47 2.96-1.5ZM19.86 17.3c-.5 1.12-.74 1.63-1.38 2.62-.9 1.37-2.16 3.08-3.72 3.1-1.38.01-1.74-.9-3.62-.89-1.87.01-2.26.9-3.64.88-1.57-.01-2.76-1.55-3.65-2.92-2.49-3.83-2.75-8.32-1.21-10.7C3.73 7.7 5.45 6.7 7.07 6.7c1.65 0 2.69.9 4.05.9 1.32 0 2.13-.91 4.04-.91 1.44 0 2.97.78 4.06 2.12-3.57 1.95-2.99 7.04.64 8.49Z" />
    </svg>
  );
}

function DirectAction({ app }: { app: ShowcaseApp }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${getShowcaseActionLabel(app)} — ${app.name} (opens in a new tab)`}
      className={`${styles.action} ${app.platform === 'web' ? styles.webAction : ''}`}
      data-app-action={app.id}
    >
      {app.platform === 'ios' ? (
        <><AppleMark /><span className={styles.storeLabel}><span>Download on the</span><strong>App Store</strong></span></>
      ) : (
        <><span>Launch Web App</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg></>
      )}
    </a>
  );
}

export default function ProductScene({ app, priority = false }: { app: ShowcaseApp; priority?: boolean }) {
  const isBook = app.composition === 'book';
  const headingId = `${app.id}-name`;

  return (
    <article
      className={`${styles.scene} ${styles[app.id]} ${app.platform === 'web' ? styles.webScene : ''} ${isBook ? styles.bookScene : ''}`}
      aria-labelledby={headingId}
      data-app={app.id}
      data-composition={app.composition}
    >
      <picture className={styles.artwork}>
        {app.artwork.mobileSrc ? <source media="(max-width: 600px)" srcSet={app.artwork.mobileSrc} type="image/webp" /> : null}
        <Image
          src={app.artwork.src}
          alt={app.artwork.alt}
          fill
          sizes={app.platform === 'web' ? '(max-width: 600px) 100vw, (max-width: 1000px) 90vw, 48vw' : '(max-width: 600px) 100vw, (max-width: 1399px) 48vw, 24vw'}
          quality={75}
          preload={priority}
        />
      </picture>

      <div className={styles.sign}>
        <div className={styles.signCopy}>
          {isBook ? <span className={styles.bookEyebrow}>A life in words</span> : null}
          <h3 id={headingId} className={styles.productName}>
            {isBook ? <>Memoir<wbr />Echoes</> : app.name}
          </h3>
          <p className={styles.description}>{app.description}</p>
          {isBook ? <span className={styles.bookFlourish} aria-hidden="true">✦</span> : null}
        </div>
        <div className={styles.scanRow}>
          <Image
            className={styles.qr}
            src={getShowcaseQrPath(app)}
            alt={`Scan to open ${app.name} ${app.platform === 'ios' ? 'on the App Store' : 'on the web'}.`}
            width={196}
            height={196}
            unoptimized
            data-app-qr={app.id}
          />
          <DirectAction app={app} />
        </div>
      </div>
    </article>
  );
}
