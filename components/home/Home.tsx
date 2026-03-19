import Link from "next/link";
import Chip from "../ui/Chip";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-14 text-center">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
        A software laboratory
      </h1>

      <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
        We grow intelligent systems like living experiments - iterating in the open,
        measuring reality, and evolving until they feel inevitable.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="#specimens"
          className="w-full sm:w-auto rounded-full bg-slate-900 text-white px-7 py-3 text-sm font-medium shadow-[0_14px_30px_rgba(15,23,42,0.25)] hover:bg-black transition"
        >
          Enter the Lab
        </Link>

        <Link
          href="#ideas"
          className="w-full sm:w-auto rounded-full border border-white/70 bg-white/70 backdrop-blur px-7 py-3 text-sm font-medium text-slate-800 shadow-[0_12px_24px_rgba(15,23,42,0.08)] hover:bg-white transition"
        >
          Browse Experiments
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <Chip>Apple-style polish</Chip>
        <Chip>Liquid-glass UI</Chip>
        <Chip>Fast + lightweight</Chip>
        <Chip>Designed to evolve</Chip>
      </div>
    </section>
  );
}
