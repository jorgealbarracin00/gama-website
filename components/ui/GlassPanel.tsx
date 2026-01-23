import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-white/60 ${
        className ?? ""
      }`.trim()}
    >
      <div className="pointer-events-none absolute -top-16 right-8 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(255,255,255,0))] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
      {children}
    </div>
  );
}
