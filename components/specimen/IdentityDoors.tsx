'use client';

import { useState } from 'react';
import styles from './IdentityFile.module.css';

const doors = [
  { name: 'Apple', detail: 'A verified Apple provider relationship resolves to this example Human.' },
  { name: 'Google', detail: 'A verified Google provider relationship resolves to this example Human.' },
  { name: 'Email + password', detail: 'The authenticated password credential belongs to this example Human.' },
];

export default function IdentityDoors() {
  const [selected, setSelected] = useState(0);
  return <div className={styles.doorDemo}>
    <div className={styles.demoIntro}><p className={styles.eyebrow}>An interactive architectural example</p><h3>Choose a door.<br />Keep the person.</h3><p>All three methods are explicitly linked to this fictional account. Selecting a door illustrates recognition; it does not sign you in.</p></div>
    <div className={styles.doorButtons} role="group" aria-label="Explore linked authentication methods">{doors.map((door, i) => <button type="button" key={door.name} aria-pressed={selected === i} aria-controls="identity-door-result" onClick={() => setSelected(i)}><span aria-hidden="true">0{i + 1}</span>{door.name}<span aria-hidden="true">↗</span></button>)}</div>
    <div id="identity-door-result" className={styles.demoResult} role="region" aria-label="Example principal resolution" aria-live="polite" aria-atomic="true"><div className={styles.particle} aria-hidden="true"><i /></div><div><p className={styles.eyebrow}>Same fictional principal</p><strong>EXAMPLE-HUMAN</strong><p>{doors[selected].detail}</p><span>Selected route: {doors[selected].name}</span></div></div>
    <p className={styles.demoFoot}>An unlinked provider is a different case. Email equality alone never establishes this relationship.</p>
  </div>;
}
