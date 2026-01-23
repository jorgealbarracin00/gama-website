"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Specimen } from "../../lib/types";
import Dot from "../ui/Dot";

type SpecimenCardProps = {
  specimen: Specimen;
};

export default function SpecimenCard({ specimen }: SpecimenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0.9, scale: 0.97 }}
      whileHover={{ opacity: 1, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="
        relative overflow-hidden
        snap-center shrink-0
        w-[88vw] md:w-[62vw] lg:w-[46rem]
        rounded-3xl
        bg-white/70 backdrop-blur-2xl
        border border-white/70
        shadow-[0_25px_45px_rgba(15,23,42,0.12)]
        p-7 md:p-10
      "
    >
      <div className="pointer-events-none absolute -top-20 -right-12 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),rgba(99,102,241,0))] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),rgba(56,189,248,0))] blur-2xl" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="tracking-widest uppercase text-indigo-600">
              Specimen {specimen.index}
            </span>
            <span className="flex items-center gap-2">
              <Dot kind={specimen.statusDot} />
              {specimen.statusLabel}
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight">
            {specimen.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{specimen.subtitle}</p>

          <p className="mt-4 text-slate-700 max-w-2xl leading-relaxed">
            {specimen.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {specimen.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="h-40 w-40 rounded-2xl border border-white/60 bg-gradient-to-br from-white/70 via-indigo-50/60 to-slate-100/70 shadow-inner" />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`/specimens/${specimen.slug}`}
          className="rounded-full bg-indigo-600 text-white px-7 py-3 text-sm font-medium hover:bg-indigo-700 transition"
        >
          Observe
        </Link>

        <Link
          href={specimen.hrefSecondary ?? "#"}
          className="rounded-full border border-slate-200 bg-white/70 px-7 py-3 text-sm font-medium text-slate-800 hover:bg-white transition"
        >
          Evolution Log
        </Link>
      </div>
    </motion.div>
  );
}
