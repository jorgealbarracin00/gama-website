import Link from "next/link";

const mobileSpecimens = [
  {
    id: "001",
    name: "GroceryMaster",
    status: "Deployed",
    subtitle: "Shared family shopping system",
    summary: "One living grocery list for the whole household, with Shopping Mode, pantry magnets, and real-time syncing.",
    href: "https://grocerymaster.gamadynamics.com.au",
    incubationHref: "/incubation/grocerymaster",
    tone: "border-emerald-200/20 bg-emerald-300/8 text-emerald-100",
  },
  {
    id: "002",
    name: "PVD Assistant",
    status: "Deployed",
    subtitle: "Industrial coating intelligence",
    summary: "A factory-floor assistant for PVD run history, color data, machine conditions, and process learning.",
    href: "https://pvdassistant.gamadynamics.com.au",
    incubationHref: "/incubation/pvdassistant",
    tone: "border-blue-200/20 bg-blue-300/8 text-blue-100",
  },
  {
    id: "003",
    name: "Memoir",
    status: "Incubating",
    subtitle: "AI-assisted memory book",
    summary: "A private memoir system that turns spoken memories into polished Echoes and one personal life book.",
    href: "https://memoir.gamadynamics.com.au",
    incubationHref: "/incubation/memoir",
    tone: "border-pink-200/20 bg-pink-300/8 text-pink-100",
  },
  {
    id: "004",
    name: "CashCast",
    status: "Incubating",
    subtitle: "Financial forecasting engine",
    summary: "A future-focused money simulator for testing decisions before they become real-life pressure.",
    href: "https://cashcast.gamadynamics.com.au",
    incubationHref: "/incubation/cashcast",
    tone: "border-green-200/20 bg-green-300/8 text-green-100",
  },
  {
    id: "005",
    name: "GamaRepair",
    status: "Experimental",
    subtitle: "Repair workflow assistant",
    summary: "A repair workflow concept for jobs, notes, photos, parts, customer updates, and messy real-world history.",
    href: "https://gamarepair.gamadynamics.com.au",
    incubationHref: "/incubation/gamarepair",
    tone: "border-amber-200/20 bg-amber-300/8 text-amber-100",
  },
  {
    id: "006",
    name: "ExpenseTrackWatch",
    status: "Experimental",
    subtitle: "Fast expense capture",
    summary: "A lightweight watch-first idea for recording small daily spending before it disappears from memory.",
    href: "https://expensetrackwatch.gamadynamics.com.au",
    incubationHref: "/incubation/expensetrackwatch",
    tone: "border-indigo-200/20 bg-indigo-300/8 text-indigo-100",
  },
  {
    id: "007",
    name: "Tensland",
    status: "Experimental",
    subtitle: "Strategy world builder",
    summary: "A strategy-world experiment where maps, resources, factions, and rules grow into a playable system.",
    href: "https://tensland.gamadynamics.com.au",
    incubationHref: "/incubation/tensland",
    tone: "border-fuchsia-200/20 bg-fuchsia-300/8 text-fuchsia-100",
  },
  {
    id: "008",
    name: "VOID",
    status: "Experimental",
    subtitle: "Unknown AI systems",
    summary: "A strange research space for AI interfaces, prototype workflows, and systems that do not fit normal categories yet.",
    href: "https://void.gamadynamics.com.au",
    incubationHref: "/incubation/void",
    tone: "border-cyan-200/20 bg-cyan-300/8 text-cyan-100",
  },
];

export default function HomeMobile() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b16] text-white">
      <section className="relative px-5 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.12),rgba(5,11,22,1)_74%)]" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-red-300/30 bg-red-500/14 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-red-100">
            Phone Version
          </div>

          <h1 className="mt-7 text-4xl font-semibold tracking-[0.08em] text-white">
            GAMA DYNAMICS
          </h1>

          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Mobile Field Terminal
          </p>

          <p className="mt-5 max-w-sm text-base leading-relaxed text-white/70">
            This is the compact phone version of the lab. The full cinematic laboratory is best experienced on desktop.
          </p>

          <div className="mt-8 rounded-[30px] border border-white/12 bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/46">
              Lab status
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-emerald-200/14 bg-emerald-300/8 p-3">
                <p className="text-2xl font-semibold text-emerald-100">02</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/44">Deployed</p>
              </div>
              <div className="rounded-2xl border border-cyan-200/14 bg-cyan-300/8 p-3">
                <p className="text-2xl font-semibold text-cyan-100">02</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/44">Incubating</p>
              </div>
              <div className="rounded-2xl border border-fuchsia-200/14 bg-fuchsia-300/8 p-3">
                <p className="text-2xl font-semibold text-fuchsia-100">04</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/44">Research</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/incubation"
              className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100"
            >
              Open Incubation Chamber
            </Link>
            <a
              href="https://grocerymaster.gamadynamics.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/14 bg-white/8 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/76"
            >
              Open latest deployed app
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Specimen files
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Compact project index
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {mobileSpecimens.map((specimen) => (
            <article
              key={specimen.name}
              className="rounded-[28px] border border-white/12 bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.24)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                    Specimen {specimen.id}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {specimen.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
                    {specimen.subtitle}
                  </p>
                </div>

                <span className={`shrink-0 rounded-full border px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] ${specimen.tone}`}>
                  {specimen.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/64">
                {specimen.summary}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  href={specimen.incubationHref}
                  className="rounded-full border border-white/14 bg-white/8 px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white/74"
                >
                  Incubator
                </Link>
                <a
                  href={specimen.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100"
                >
                  App Site
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
