"use client";

import { useEffect, useState } from "react";
import type { SpecimenChapter } from "@/lib/specimens/types";
import styles from "./SpecimenFile.module.css";

export default function SpecimenNavigation({ chapters }: { chapters: Pick<SpecimenChapter, "id" | "title">[] }) {
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    const sections = chapters.map(({ id }) => document.getElementById(id)).filter((node): node is HTMLElement => !!node);
    const update = () => {
      const current = sections.filter((section) => section.getBoundingClientRect().top <= 160).at(-1);
      setActive(current?.id as SpecimenChapter["id"] ?? chapters[0].id);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [chapters]);

  return (
    <nav className={styles.navigation} aria-label="Specimen chapters">
      {chapters.map(({ id, title }, index) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setActive(id)}>
          <span aria-hidden="true">0{index + 1}</span>{title}
        </a>
      ))}
    </nav>
  );
}
