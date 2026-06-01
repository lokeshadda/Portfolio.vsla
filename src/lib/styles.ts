/** Shared Tailwind class strings (avoids @apply in globals.css for reliable CSS builds). */

/** Padding inside each content section */
export const sectionPadding = "py-14 md:py-16";

/** Space between stacked sections (use on main content wrapper) */
export const sectionStack = "mt-20 flex flex-col gap-20 md:mt-24 md:gap-24";

export const sectionTitleSpacing = "mb-10 md:mb-12";

export const heroSectionPadding = "pb-16 pt-20 md:pb-24 md:pt-28 lg:pt-32";

export const card =
  "rounded-2xl border border-white/[0.08] bg-[#121a2e] shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-300";

export const cardInteractive = [
  card,
  "hover:-translate-y-1 hover:border-teal-400/30",
  "hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
].join(" ");

/** Alternating section band for visual separation */
export const sectionAlt = "border-y border-white/[0.06] bg-[#0e1525]";

export const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 active:scale-[0.98]";

export const btnSecondary =
  "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-white/10 active:scale-[0.98]";

export const rolePill =
  "inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-1.5 text-sm font-medium text-teal-200";

export const textGradient =
  "bg-gradient-to-r from-teal-200 via-teal-300 to-indigo-300 bg-clip-text text-transparent";

export const navLinkActive = "relative text-teal-300 after:absolute after:-bottom-0.5 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-teal-400";

export const headerScrolled =
  "border-white/10 bg-[#0a0f1a]/95 shadow-lg shadow-black/20";
