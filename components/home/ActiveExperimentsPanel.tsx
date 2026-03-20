

export type ActiveExperiment = {
  id: string;
  name: string;
  status: "Running" | "Observing" | "Queued";
  owner: string;
  objective: string;
  signal: string;
};

const defaultExperiments: ActiveExperiment[] = [
  {
    id: "EXP-01",
    name: "Adaptive Growth Medium",
    status: "Running",
    owner: "Dr. Elena Voss",
    objective: "Measure response stability across nutrient shifts.",
    signal: "+12.4% viability",
  },
  {
    id: "EXP-02",
    name: "Cryo Recovery Window",
    status: "Observing",
    owner: "Dr. Malik Hart",
    objective: "Track post-thaw resilience over a 72 hour interval.",
    signal: "Thermal variance narrowing",
  },
  {
    id: "EXP-03",
    name: "Neural Tissue Mapping",
    status: "Queued",
    owner: "Dr. Iris Chen",
    objective: "Prepare comparative imaging before live cycle execution.",
    signal: "Awaiting chamber allocation",
  },
];

type ActiveExperimentsPanelProps = {
  experiments?: ActiveExperiment[];
};

function statusClasses(status: ActiveExperiment["status"]) {
  switch (status) {
    case "Running":
      return "border-emerald-300/40 bg-emerald-400/10 text-emerald-100";
    case "Observing":
      return "border-amber-300/40 bg-amber-400/10 text-amber-100";
    case "Queued":
      return "border-fuchsia-300/40 bg-fuchsia-400/10 text-fuchsia-100";
    default:
      return "border-white/15 bg-white/5 text-white";
  }
}

export default function ActiveExperimentsPanel({
  experiments = defaultExperiments,
}: ActiveExperimentsPanelProps) {
  return (
    <section
      id="experiments"
      className="relative mx-auto mt-24 w-full max-w-6xl px-6 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute right-[-80px] bottom-[-120px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-[120px]" />
      </div>
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(139,92,246,0.22)] backdrop-blur-xl">
        <div className="border-b border-white/10 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex rounded-full border border-purple-300/30 bg-purple-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-100">
                Live Research Deck
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Active Experiments
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
                Monitor ongoing trials, review current signals, and inspect which
                studies are actively moving through the lab pipeline.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Running
                </div>
                <div className="mt-1 text-2xl font-semibold text-white">
                  {experiments.filter((item) => item.status === "Running").length}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Observing
                </div>
                <div className="mt-1 text-2xl font-semibold text-white">
                  {experiments.filter((item) => item.status === "Observing").length}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 col-span-2 sm:col-span-1">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Queued
                </div>
                <div className="mt-1 text-2xl font-semibold text-white">
                  {experiments.filter((item) => item.status === "Queued").length}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-3">
          {experiments.map((experiment) => (
            <article
              key={experiment.id}
              className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 transition duration-200 hover:border-purple-300/30 hover:bg-[linear-gradient(180deg,rgba(168,85,247,0.12),rgba(255,255,255,0.04))]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    {experiment.id}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {experiment.name}
                  </h3>
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses(
                    experiment.status,
                  )}`}
                >
                  {experiment.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/72">
                {experiment.objective}
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                  <span className="text-white/45">Lead</span>
                  <span className="font-medium text-white">{experiment.owner}</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                  <span className="text-white/45">Current signal</span>
                  <span className="font-medium text-white">{experiment.signal}</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full border border-purple-300/30 bg-purple-400/10 px-4 py-3 text-sm font-semibold text-purple-50 transition hover:bg-purple-400/18"
              >
                Inspect experiment
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}