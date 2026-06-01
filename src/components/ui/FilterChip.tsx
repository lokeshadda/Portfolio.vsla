import { cn } from "../../lib/utils";

type FilterChipProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
        isActive
          ? "border border-teal-400/40 bg-teal-400/15 text-teal-100 shadow-sm shadow-teal-500/10"
          : "border border-white/10 bg-white/5 text-slate-400 hover:border-teal-400/25 hover:text-slate-200"
      )}
    >
      {label}
    </button>
  );
}
