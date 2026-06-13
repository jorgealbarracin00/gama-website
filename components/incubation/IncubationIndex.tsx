

import Link from "next/link";

const specimens = [
  {
    id: "SPECIMEN 001",
    name: "GroceryMaster",
    status: "Deployed",
    classification: "Family Systems",
    href: "/incubation/grocerymaster",
    summary:
      "A shared household grocery system grown from real family chaos, Apple review pressure, iPad redesigns, and live deployment.",
    stack: "SwiftUI / Firebase / StoreKit",
    tone: "border-emerald-200/18 bg-emerald-300/8 text-emerald-100",
  },
  {
    id: "SPECIMEN 002",
    name: "PVD Assistant",
    status: "Deployed",
    classification: "Industrial Intelligence",
    href: "/incubation/pvdassistant",
    summary:
      "A factory-floor assistant for PVD coating runs, color data, machine history, process notes, and operator knowledge preservation.",
    stack: "SwiftUI / Historical Engine / Color Lab",
    tone: "border-blue-200/18 bg-blue-300/8 text-blue-100",
  },
  {
    id: "SPECIMEN 003",
    name: "Memoir",
    status: "Incubating",
    classification: "AI Memory System",
    href: "/incubation/memoir",
    summary:
      "A private memory book system that turns spoken memories into polished Echoes and grows into one personal memoir.",
    stack: "SwiftUI / CloudKit / OpenAI Relay",
    tone: "border-pink-200/18 bg-pink-300/8 text-pink-100",
  },
  {
    id: "SPECIMEN 004",
    name: "CashCast",
    status: "Incubating",
    classification: "Financial Forecasting",
    href: "/incubation/cashcast",
    summary:
      "A forward-looking cash-flow simulator for testing financial decisions before they become real-life pressure.",
    stack: "SwiftUI / Forecast Engine / What-if Simulator",
    tone: "border-green-200/18 bg-green-300/8 text-green-100",
  },
  {
    id: "SPECIMEN 005",
    name: "GamaRepair",
    status: "Experimental",
    classification: "Repair Workflow",
    href: "/incubation/gamarepair",
    summary:
      "A repair workflow concept for jobs, parts, customer notes, photos, status changes, and messy real-world repair history.",
    stack: "Workflow Engine / Job History / Notes",
    tone: "border-amber-200/18 bg-amber-300/8 text-amber-100",
  },
  {
    id: "SPECIMEN 006",
    name: "ExpenseTrackWatch",
    status: "Experimental",
    classification: "Fast Expense Capture",
    href: "/incubation/expensetrackwatch",
    summary:
      "A watch-first expense capture experiment focused on speed, habit, and recording small spending before it disappears.",
    stack: "Watch-first UI / Micro Capture / Finance Companion",
    tone: "border-indigo-200/18 bg-indigo-300/8 text-indigo-100",
  },
  {
    id: "SPECIMEN 007",
    name: "Tensland",
    status: "Experimental",
    classification: "Strategy World Builder",
    href: "/incubation/tensland",
    summary:
      "A strategy-world experiment where maps, factions, resources, and rules grow into a playable system.",
    stack: "World Engine / Simulation / Game Systems",
    tone: "border-fuchsia-200/18 bg-fuchsia-300/8 text-fuchsia-100",
  },
  {
    id: "SPECIMEN 008",
    name: "VOID",
    status: "Experimental",
    classification: "Unknown Systems",
    href: "/incubation/void",
    summary:
      "A strange research space for AI interfaces, prototype workflows, and systems that do not yet fit normal software categories.",
    stack: "AI Experiments / Interface Research / Unknown",
    tone: "border-cyan-200/18 bg-cyan-300/8 text-cyan-100",
  },
];

export default function IncubationIndex() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b16] text-white">
      <section className="relative px-6 py-16 md:px-10 md:py-20 xl:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.14),rgba(5,11,22,1)_80%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:bg-white/14"
          >
            ← Return to lab entrance
          </Link>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Gama Dynamics / Incubation Chamber
              </p>
              <h1 className="mt-4 max-w-5xl text-5xl font-bold tracking-wide md:text-7xl">
                Specimen files, build notes and product evolution.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/68 md:text-xl">
                This chamber stores the stories behind each system: why it was born, what failed, what changed, how it works, and where it is going next.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/12 bg-black/24 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                Chamber Index
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/64">
                <div className="flex justify-between border-b border-white/8 pb-3">
                  <span>Total specimens</span>
                  <span className="font-semibold text-white">08</span>
                </div>
                <div className="flex justify-between border-b border-white/8 pb-3">
                  <span>Deployed</span>
                  <span className="font-semibold text-emerald-200">02</span>
                </div>
                <div className="flex justify-between border-b border-white/8 pb-3">
                  <span>Incubating</span>
                  <span className="font-semibold text-cyan-200">02</span>
                </div>
                <div className="flex justify-between">
                  <span>Experimental</span>
                  <span className="font-semibold text-fuchsia-200">04</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-b border-white/12">
            {["All Files", "Deployed", "Incubating", "Experimental", "Evolution Logs"].map((tab, index) => (
              <span
                key={tab}
                className={`rounded-t-2xl border border-b-0 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] ${
                  index === 0
                    ? "border-cyan-200/24 bg-cyan-300/10 text-cyan-100"
                    : "border-white/12 bg-white/[0.035] text-white/52"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 xl:px-14">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {specimens.map((specimen) => (
            <Link
              key={specimen.name}
              href={specimen.href}
              className="group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-cyan-200/26 hover:bg-white/[0.065]"
            >
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-cyan-300/8 blur-2xl transition group-hover:bg-cyan-300/18" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                      {specimen.id}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-wide text-white">
                      {specimen.name}
                    </h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                      {specimen.classification}
                    </p>
                  </div>

                  <span className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${specimen.tone}`}>
                    {specimen.status}
                  </span>
                </div>

                <p className="mt-6 min-h-[96px] text-sm leading-relaxed text-white/64">
                  {specimen.summary}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    System stack
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/74">
                    {specimen.stack}
                  </p>
                </div>

                <div className="mt-6 inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/84 transition group-hover:bg-cyan-300/12 group-hover:text-cyan-100">
                  Open specimen file
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}