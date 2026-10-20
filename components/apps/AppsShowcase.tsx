import Image from 'next/image';
import Link from 'next/link';
import { visibleShowcaseApps } from '@/lib/apps/registry';
import ProductScene from './ProductScene';
import styles from './Showcase.module.css';

export default function AppsShowcase() {
  const iosApps = visibleShowcaseApps.filter(app => app.platform === 'ios');
  const webApps = visibleShowcaseApps.filter(app => app.platform === 'web');

  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#apps-content">Skip to our apps</a>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="GAMA Dynamics home">
          <Image src="/brand/logo-transp.png" alt="GAMA Dynamics" width={1019} height={341} sizes="190px" />
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/apps" aria-current="page">Apps</Link>
          <Link href="/incubation">Incubation Chamber</Link>
        </nav>
      </header>

      <main id="apps-content" className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}><span aria-hidden="true" />Made for everyday life</p>
          <h1>Explore Our <span>Apps</span></h1>
          <p className={styles.subtitle}>Different ideas. A common purpose.</p>
          <p className={styles.intro}>Practical tools, creative experiences and useful apps for everyday life.</p>
        </div>

        <section className={styles.productSection} aria-labelledby="ios-heading">
          <div className={styles.sectionHeading}>
            <h2 id="ios-heading">A little company for your day.</h2>
            <p>On the App Store <span aria-hidden="true">↗</span></p>
          </div>
          <div className={styles.iosGrid}>
            {iosApps.map((app, index) => <ProductScene key={app.id} app={app} priority={index === 0} />)}
          </div>
        </section>

        <section className={`${styles.productSection} ${styles.webSection}`} aria-labelledby="web-heading">
          <div className={styles.sectionHeading}>
            <h2 id="web-heading">A whole world, one click away.</h2>
            <p>Explore on the web <span aria-hidden="true">↗</span></p>
          </div>
          <div className={styles.webGrid}>
            {webApps.map(app => <ProductScene key={app.id} app={app} />)}
          </div>
        </section>

        <p className={styles.scanHint}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 7h3v3H7zM14 7h3v3h-3zM7 14h3v3H7zM14 14h3v3h-3z" /></svg>
          Scan a code with your phone, or use the direct link. Every app opens in a new tab.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Different ideas. The same curious spirit.</p>
        <Link href="/">GAMA DYNAMICS <span aria-hidden="true">↗</span></Link>
      </footer>
    </div>
  );
}
