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
        w-[82vw] sm:w-[70vw] md:w-[26rem] lg:w-[28rem]
        min-h-[32rem]
        rounded-[2.25rem]
        bg-white/70 backdrop-blur-2xl
        border border-white/70
        shadow-[0_25px_45px_rgba(15,23,42,0.12)]
        p-7 md:p-8
      "
    >
      <div className="pointer-events-none absolute -top-20 -right-12 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),rgba(99,102,241,0))] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),rgba(56,189,248,0))] blur-2xl" />
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
            <span className="tracking-[0.3em] uppercase text-indigo-600">
              Specimen {specimen.index}
            </span>
            <span className="flex items-center gap-2">
              <Dot kind={specimen.statusDot} />
              {specimen.statusLabel}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-white/70 bg-white/70 backdrop-blur shadow-inner" />
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {specimen.title}
              </h3>
              <p className="text-sm text-slate-600">{specimen.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur shadow-inner">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-100 via-white to-indigo-100" />
        </div>

        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            {specimen.description}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            Focus: {specimen.tags.join(", ")}. Built to ship fast, learn faster, and
            evolve toward the next release.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
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
