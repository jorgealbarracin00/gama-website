import Link from "next/link";
import Chip from "../ui/Chip";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/home-hero-hd.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-sm md:text-base tracking-[0.2em] text-white/60 uppercase mb-4">
          GAMA DYNAMICS
        </h2>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          A software laboratory
        </h1>

        <p className="mt-5 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          We grow intelligent systems like living experiments - iterating in the open,
          measuring reality, and evolving until they feel inevitable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#specimens"
            className="w-full sm:w-auto rounded-full bg-white text-slate-900 px-7 py-3 text-sm font-medium shadow-[0_14px_30px_rgba(15,23,42,0.25)] hover:bg-black transition"
          >
            Enter the Lab
          </Link>

          <Link
            href="#ideas"
            className="w-full sm:w-auto rounded-full border border-white/20 bg-white/10 backdrop-blur px-7 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(15,23,42,0.08)] hover:bg-white transition"
          >
            Browse Experiments
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-white/70">
          <Chip>Apple-style polish</Chip>
          <Chip>Liquid-glass UI</Chip>
          <Chip>Fast + lightweight</Chip>
          <Chip>Designed to evolve</Chip>
        </div>
      </div>
    </section>
  );
}
