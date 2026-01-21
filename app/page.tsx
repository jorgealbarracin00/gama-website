export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-28">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Gama Dynamics
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-2xl leading-relaxed">
          A software laboratory where intelligent systems are grown,
          observed, and evolved.
        </p>
      </section>

      {/* SPECIMEN */}
      <section className="max-w-6xl mx-auto px-6 pb-36">
        <div className="relative rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-12">

          {/* Status */}
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="tracking-widest uppercase text-indigo-500">
              Specimen 001
            </span>

            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Actively evolving
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            KASU Finance
          </h2>

          <p className="mt-4 text-slate-600 max-w-xl leading-relaxed">
            A time-based financial intelligence system that simulates cash flow,
            goal feasibility, and credit behavior across weeks.
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
      </section>

    </main>
  );
}
