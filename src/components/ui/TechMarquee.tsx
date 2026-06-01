import { personalInfo } from "../../data/personal";

export default function TechMarquee() {
  const items = [...personalInfo.techStack, ...personalInfo.techStack];

  return (
    <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1a2438] py-5">
      <p className="mb-3 px-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Tools & technologies
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track px-3">
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
