import { sectionTitleSpacing } from "../../lib/styles";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  id?: string;
  sectionNumber?: string;
};

export default function SectionTitle({ title, subtitle, id, sectionNumber }: SectionTitleProps) {
  return (
    <div id={id} className={sectionTitleSpacing}>
      {sectionNumber ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/80">
          {sectionNumber}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
        {title}
      </h2>
      <div
        className="mt-4 h-px w-full rounded-full bg-gradient-to-r from-teal-400/80 via-cyan-400/50 to-transparent"
        aria-hidden
      />
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-slate-400 leading-7">{subtitle}</p>
      ) : null}
    </div>
  );
}
