import { ProjectAccent } from "../types";

export const accentBadge: Record<ProjectAccent, string> = {
  blue: "border-blue-400/30 bg-blue-500/15 text-blue-200",
  emerald: "border-emerald-400/30 bg-emerald-500/15 text-emerald-200",
  amber: "border-amber-400/30 bg-amber-500/15 text-amber-200",
  cyan: "border-cyan-400/30 bg-cyan-500/15 text-cyan-200",
  violet: "border-violet-400/30 bg-violet-500/15 text-violet-200",
};

export const accentBorderHover: Record<ProjectAccent, string> = {
  blue: "hover:border-blue-400/40",
  emerald: "hover:border-emerald-400/40",
  amber: "hover:border-amber-400/40",
  cyan: "hover:border-cyan-400/40",
  violet: "hover:border-violet-400/40",
};
