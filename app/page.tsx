"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -500 : 500;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900 overflow-x-hidden">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-20">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Gama Dynamics
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-2xl leading-relaxed">
          A software laboratory where intelligent systems are grown,
          observed, and evolved.
        </p>
      </section>

      {/* CAROUSEL */}
      <section className="relative pb-36">

        {/* Arrows */}
        <button
          onClick={() => scrollByAmount("left")}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/70 backdrop-blur border border-white/60 shadow hover:bg-white transition"
        >
          ←
        </button>

        <button
          onClick={() => scrollByAmount("right")}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/70 backdrop-blur border border-white/60 shadow hover:bg-white transition"
        >
          →
        </button>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth"
        >

          <SpecimenCard
            index="001"
            title="KASU Finance"
            description="A time-based financial intelligence system that simulates cash flow, goal feasibility, and credit behavior across weeks."
            status="Actively evolving"
          />

          <SpecimenCard
            index="002"
            title="Tensland"
            description="A stigma-free social discovery system built around shared spaces, traits, and cooperative play."
            status="Incubating"
          />

          <SpecimenCard
            index="003"
            title="VOID"
            description="A voice-first, windowless command system for hierarchical organizations."
            status="Concept phase"
          />

          <SpecimenCard
            index="004"
            title="ChronoFlow"
            description="A time-based simulation engine powering multiple financial and planning systems."
            status="Internal engine"
          />

        </div>
      </section>

    </main>
  );
}

/* ---------- COMPONENT ---------- */

function SpecimenCard({
  index,
  title,
  description,
  status,
}: {
  index: string;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        snap-center shrink-0
        w-[85vw] md:w-[60vw] lg:w-[46rem]
        rounded-3xl
        bg-white/60 backdrop-blur-2xl
        border border-white/50
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        p-8 md:p-12
      "
    >
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span className="tracking-widest uppercase text-indigo-500">
          Specimen {index}
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {status}
        </span>
      </div>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-4 text-slate-600 max-w-xl leading-relaxed">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="rounded-full bg-indigo-600 text-white px-7 py-3 text-sm font-medium hover:bg-indigo-700 transition">
          Observe
        </button>

        <button className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium hover:bg-slate-100 transition">
          Evolution Log
        </button>
      </div>
    </motion.div>
  );
}
