type LogRowProps = {
  title: string;
  meta: string;
  badge: string;
};

export default function LogRow({ title, meta, badge }: LogRowProps) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-5 ring-1 ring-white/60">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-slate-900">{title}</div>
          <div className="mt-1 text-xs text-slate-500">{meta}</div>
        </div>
        <span className="text-xs rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
          {badge}
        </span>
      </div>
    </div>
  );
}
