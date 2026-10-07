import Image from "next/image";
import type { SpecimenMutation } from "@/lib/specimens/types";
import styles from "./SpecimenFile.module.css";

export default function SpecimenEvolution({ mutations }: { mutations: SpecimenMutation[] }) {
  return (
    <ol className={styles.mutations} aria-label="Seven specimen mutations">
      {mutations.map((mutation) => (
        <li key={mutation.id} className={styles.mutation}>
          <div className={styles.capsule}>
            <span className={styles.mutationNumeral}>{mutation.numeral}</span>
            <Image src={mutation.artwork.src} alt={mutation.artwork.alt} width={mutation.artwork.width} height={mutation.artwork.height} sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, (max-width: 1400px) 33vw, 420px" />
            <span className={styles.capsuleBase} aria-hidden="true" />
          </div>
          <div className={styles.mutationCopy}>
            <h3>{mutation.title}</h3>
            <p>{mutation.summary}</p>
            <details><summary aria-label={`Observe ${mutation.title} mutation`}>Observe mutation <span aria-hidden="true">+</span></summary><p>{mutation.meaning}</p><span className={styles.form}>{mutation.form}</span></details>
          </div>
        </li>
      ))}
    </ol>
  );
}
