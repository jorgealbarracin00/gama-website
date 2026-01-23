import type { ReactNode } from "react";
import GlassPanel from "../ui/GlassPanel";

type SpecimenDetailCardProps = {
  title: string;
  children: ReactNode;
};

export default function SpecimenDetailCard({
  title,
  children,
}: SpecimenDetailCardProps) {
  return (
    <GlassPanel className="p-6 md:p-8">
      <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
      <div className="relative">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        <div className="mt-3 text-sm text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </GlassPanel>
  );
}
