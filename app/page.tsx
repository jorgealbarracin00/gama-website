export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900 overflow-x-hidden">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">
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
        <div className="flex gap-8 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">

          {/* SPECIMEN 001 */}
          <SpecimenCard
            index="001"
            title="KASU Finance"
            description="A time-based financial intelligence system that simulates cash flow, goal feasibility, and credit behavior across weeks."
            status="Actively evolving"
            active
          />

          {/* SPECIMEN 002 */}
          <SpecimenCard
            index="002"
            title="Tensland"
            description="A stigma-free social discovery system built around shared spaces, traits, and cooperative play."
            status="Incubating"
          />

          {/* SPECIMEN 003 */}
          <SpecimenCard
            index="003"
            title="VOID"
            description="A voice-first, windowless command system for hierarchical organizations."
            status="Concept phase"
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
  active = false,
}: {
  index: string;
  title: string;
  description: string;
  status: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        snap-center shrink-0
        w-[85vw] md:w-[60vw] lg:w-[48rem]
        rounded-3xl
        bg-white/60 backdrop-blur-2xl
        border border-white/50
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        p-8 md:p-12
        transition
        ${active ? "" : "opacity-90"}
      `}
    >
      {/* STATUS */}
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
    </div>
  );
}
