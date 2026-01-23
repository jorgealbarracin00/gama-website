import type { Idea } from "../../lib/types";
import IdeaCard from "../cards/IdeaCard";
import GlassPanel from "../ui/GlassPanel";

type IdeasVaultProps = {
  ideas: Idea[];
};

export default function IdeasVault({ ideas }: IdeasVaultProps) {
  return (
    <section id="ideas" className="max-w-6xl mx-auto px-6 pb-16">
      <GlassPanel className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              App ideas vault
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl leading-relaxed">
              Not everything is built yet - but everything is engineered in the mind
              first. These are the next experiments queued for growth.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-xs text-slate-500 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              Apple-store style carousel coming
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {ideas.map((idea) => (
            <IdeaCard key={idea.title} idea={idea} />
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}
