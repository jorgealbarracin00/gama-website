export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Gama Dynamics
        </h1>

        <p className="mt-4 text-xl text-slate-600 max-w-2xl">
          A software laboratory where intelligent systems are grown, observed,
          and evolved.
        </p>
      </section>

      {/* SPECIMEN */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-xl p-8 md:p-12">
          
          <span className="text-sm tracking-widest text-indigo-500 uppercase">
            Specimen 001
          </span>

          <h2 className="mt-2 text-3xl font-semibold">
            KASU Finance
          </h2>

          <p className="mt-4 text-slate-600 max-w-xl">
            A time-based financial intelligence system that simulates cash flow,
            goal feasibility, and credit behavior across weeks.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-indigo-600 text-white px-6 py-3 text-sm font-medium hover:bg-indigo-700 transition">
              Observe
            </button>

            <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-100 transition">
              Evolution Log
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
