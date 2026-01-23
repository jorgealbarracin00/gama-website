type DotProps = {
  kind: "emerald" | "amber" | "violet" | "slate";
};

export default function Dot({ kind }: DotProps) {
  const cls =
    kind === "emerald"
      ? "bg-emerald-500"
      : kind === "amber"
      ? "bg-amber-500"
      : kind === "violet"
      ? "bg-violet-500"
      : "bg-slate-400";

  return <span className={`h-2 w-2 rounded-full ${cls}`} />;
}
