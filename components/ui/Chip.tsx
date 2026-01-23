import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
};

export default function Chip({ children }: ChipProps) {
  return (
    <span className="text-xs rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-slate-700">
      {children}
    </span>
  );
}
