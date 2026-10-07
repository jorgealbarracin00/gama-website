import { useId } from "react";

// Direct SVG translation of Shared/TARADesignSystem.swift's TARAMascot.
// Geometry, palette, expressions and outcome badges come from the iOS app.
export type MascotState =
  "awake" | "resting" | "moving" | "preferred" | "taken" | "skipped";
export function Mascot({
  state = "awake",
  className = "",
  simplified = false,
  decorative = true,
}: {
  state?: MascotState;
  className?: string;
  simplified?: boolean;
  decorative?: boolean;
}) {
  const gradient = `tara-${useId().replace(/:/g, "")}`;
  const resting = state === "resting";
  return (
    <svg
      viewBox="0 0 120 120"
      className={`mascot ${className}`}
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "TARA, your time companion"}
    >
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#e9dfec" />
          <stop offset="1" stopColor="#60415f" stopOpacity=".78" />
        </linearGradient>
      </defs>
      {state === "preferred" && (
        <circle cx="60" cy="60" r="59" fill="#e9a23b" opacity=".24" />
      )}
      {!simplified && (
        <g fill="#e9dfec">
          <rect
            x="4"
            y="55"
            width="16"
            height="34"
            rx="8"
            transform="rotate(22 12 72)"
          />
          <rect
            x="100"
            y="55"
            width="16"
            height="34"
            rx="8"
            transform="rotate(-22 108 72)"
          />
        </g>
      )}
      <rect
        x="17"
        y="24"
        width="86"
        height="72"
        rx="30"
        fill={`url(#${gradient})`}
      />
      <circle cx="89.5" cy="37.5" r="5.5" fill="#e9a23b" />
      <rect x="30" y="43" width="60" height="34" rx="18" fill="#252326" />
      <g fill="white">
        <rect
          x="46.5"
          y={resting ? 59.25 : 56.25}
          width="7"
          height={resting ? 1.5 : 7.5}
          rx={resting ? 0.75 : 3.75}
        />
        <rect
          x="66.5"
          y={resting ? 59.25 : 56.25}
          width="7"
          height={resting ? 1.5 : 7.5}
          rx={resting ? 0.75 : 3.75}
        />
      </g>
      {state === "taken" && (
        <g>
          <circle cx="95" cy="90" r="15" fill="#5f9278" />
          <path
            d="m88 90 5 5 9-10"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}
      {state === "skipped" && (
        <g>
          <circle cx="95" cy="90" r="17" fill="#747079" />
          <path d="m85 83 9 7-9 7z m10 0 9 7-9 7z" fill="white" />
        </g>
      )}
    </svg>
  );
}
