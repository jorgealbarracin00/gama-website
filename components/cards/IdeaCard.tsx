import type { Idea } from "../../lib/types";

type IdeaCardProps = {
  idea: Idea;
};

export default function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-[0_12px_25px_rgba(15,23,42,0.10)] ring-1 ring-white/60">
      <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),rgba(59,130,246,0))]" />
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{idea.title}</h3>
        <span className="text-xs rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
          {idea.stage}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
        {idea.blurb}
      </p>
    </div>
  );
}
