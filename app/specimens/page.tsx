import Link from "next/link";
import { specimens } from "../../lib/data/specimens";

export default function SpecimensPage() {
  return (
    <main className="relative min-h-screen px-6 py-16 text-slate-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/backgrounds/bg-specimens.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[6px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link className="text-sm text-slate-500 hover:text-slate-900" href="/">
          Back to home
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Specimens</h1>
        <p className="mt-3 text-slate-600">
          A directory of systems currently being built or explored.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specimens.map((specimen) => (
            <Link
              key={specimen.slug}
              href={`/specimens/${specimen.slug}`}
              className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-5 shadow-[0_18px_35px_rgba(15,23,42,0.12)] ring-1 ring-white/60 hover:bg-white transition"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
              <div className="text-xs uppercase tracking-widest text-indigo-600">
                Specimen {specimen.index}
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight">
                {specimen.title}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {specimen.subtitle}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
