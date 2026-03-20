

import ActiveExperimentsPanel from "@/components/home/ActiveExperimentsPanel";

export default function SpecimensPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b16] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute right-[-120px] bottom-[-160px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-20 sm:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Specimens System
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Active Specimens
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
            Inspect, monitor, and understand the current state of all live specimens
            in the system. Each specimen reflects ongoing evolution, signals, and
            measurable outcomes.
          </p>
        </div>
      </div>

      {/* Main panel */}
      <ActiveExperimentsPanel />
    </main>
  );
}