import GlassPanel from "../ui/GlassPanel";
import LogRow from "../cards/LogRow";

const logEntries = [
  {
    title: "KASU - Credit card policies now affect goal feasibility",
    meta: "Week-based projection model / ChronoFlow",
    badge: "Update",
  },
  {
    title: "Tensland - Safety-first moderation model drafted",
    meta: "Community guidelines + filters",
    badge: "Design",
  },
  {
    title: "VOID - Voice command grammar prototype",
    meta: "Intent parsing + permission layers",
    badge: "Concept",
  },
];

export default function EvolutionLog() {
  return (
    <section id="log" className="max-w-6xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassPanel className="lg:col-span-2 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Evolution log
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl leading-relaxed">
            A simple timeline of what changed. Later we'll plug it into the API
            and show real releases, experiments, and metrics.
          </p>

          <div className="mt-8 space-y-4">
            {logEntries.map((entry) => (
              <LogRow
                key={entry.title}
                title={entry.title}
                meta={entry.meta}
                badge={entry.badge}
              />
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-8 md:p-10">
          <h3 className="text-lg font-semibold tracking-tight">Laboratory rules</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed list-disc pl-4">
            <li>Build small. Measure. Evolve.</li>
            <li>UI first, engine aligned.</li>
            <li>Optimized for performance.</li>
            <li>Systems can cooperate into bigger systems.</li>
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-medium">Working thesis:</span> Software is not
              code. It's a way of thinking about time.
            </p>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
