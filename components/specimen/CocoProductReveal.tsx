'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './CocoFile.module.css';

export default function CocoProductReveal() {
  const [backstage, setBackstage] = useState(false);
  return <div className={styles.productReveal} data-view={backstage ? 'backstage' : 'customer'}>
    <div className={styles.productPhoto}><Image src="/specimens/coco/products/dinosaur-wondersuit-original.png" width={1080} height={1440} alt="Actual Bonds Dinosaur Print Wondersuit: blue with black dinosaur prints, carrot and bunny-ear motifs. Original Coco product photography." sizes="(max-width: 760px) 90vw, 500px" /><span>Original product photograph</span></div>
    <div className={styles.productReading}>
      <p className={styles.eyebrow}>One product. Two realities.</p>
      <div className={styles.revealButtons} role="group" aria-label="Choose a product perspective"><button type="button" aria-pressed={!backstage} aria-controls="coco-product-perspective" onClick={() => setBackstage(false)}>Customer sees</button><button type="button" aria-pressed={backstage} aria-controls="coco-product-perspective" onClick={() => setBackstage(true)}>Backstage knows</button></div>
      <div id="coco-product-perspective" className={styles.productPerspective} role="region" aria-label={backstage ? 'Backstage product explanation' : 'Customer product explanation'} aria-live="polite">
        <h3>Bonds Dinosaur<br />Print Wondersuit</h3>
        {backstage ? <><dl className={styles.productFacts}><div><dt>Brand / condition</dt><dd>Bonds / New in package</dd></div><div><dt>Public variant</dt><dd>Size 00 / Blue</dd></div><div><dt>Public price / state</dt><dd>$35 / Available</dd></div></dl><div className={styles.recordLayers}><p><strong>Product</strong> Shared title, photography, classification and publication.</p><p><strong>Variant</strong> Exact size and colour, SKU, effective price and stock.</p><p><strong>Allocation</strong> Quantity assigned to a physical storage location.</p></div><p className={styles.note}>An editorial explanation of the current model. Private SKUs, stock counts and locations are not reproduced.</p></> : <><p className={styles.productPrice}>$35 <span>Available</span></p><p>A playful blue sleepsuit. Size 00. New in package. The useful details, without the stockroom.</p><a className={styles.textLink} href="https://cocothellama.com/product/3140A469-F34C-4949-B6C2-B1E7C80603DB" target="_blank" rel="noopener noreferrer">See the real product ↗</a><p className={styles.note}>Public listing captured 8 October 2026. Price and availability can change.</p></>}
      </div>
    </div>
  </div>;
}
