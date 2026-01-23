import { ideas } from "../../lib/data/ideas";

export default function IdeasPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight">Ideas Vault</h1>
        <p className="mt-3 text-slate-600">
          Early-stage concepts and experiments in the pipeline.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ideas.map((idea) => (
            <div
              key={idea.title}
              className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-[0_12px_25px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold tracking-tight">
                  {idea.title}
                </div>
                <span className="text-xs rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
                  {idea.stage}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {idea.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
