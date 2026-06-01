import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Droplets,
  Github,
  Sun,
  Users,
  Zap,
} from "lucide-react";
import { ProjectItem } from "../../types";
import { cardInteractive } from "../../lib/styles";
import { accentBadge, accentBorderHover } from "../../lib/projectStyles";
import { cn } from "../../lib/utils";
import SkillBadge from "./SkillBadge";

type ProjectCardProps = {
  project: ProjectItem;
};

const titleIcons: Record<string, LucideIcon> = {
  "AI Incident Resolution": Bot,
  "Solar Energy Consumption Analysis": Sun,
  "Water Potability Prediction": Droplets,
  "Smart Energy Monitoring Platform": Zap,
  "Human Resources Analytics Dashboard": Users,
  "Executive Sales Intelligence Dashboard": Users,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = project.accent ?? "blue";
  const Icon = titleIcons[project.title] ?? BarChart3;
  const isComingSoon = project.comingSoon === true;

  return (
    <article
      className={cn(
        cardInteractive,
        "group/card relative flex h-full flex-col p-6 md:p-7",
        accentBorderHover[accent],
        isComingSoon && "border-dashed border-teal-400/30"
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/0 via-transparent to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover/card:from-teal-400/[0.06] group-hover/card:to-indigo-500/[0.04] group-hover/card:opacity-100" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className={`rounded-xl border p-3 ${accentBadge[accent]}`}>
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-block rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${accentBadge[accent]}`}
              >
                {project.category}
              </span>
              {isComingSoon ? (
                <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-200">
                  Coming soon
                </span>
              ) : null}
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold text-slate-50">
              {project.title}
            </h3>
          </div>
        </div>

        {project.githubUrl && !isComingSoon ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-200"
            aria-label={`Open ${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-400">
        {project.description.map((item, index) => (
          <li key={index} className="flex gap-2.5 leading-6">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
        {project.tech.map((techItem) => (
          <SkillBadge key={techItem} label={techItem} />
        ))}
      </div>

      {project.githubUrl && !isComingSoon ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-400 hover:text-teal-300"
        >
          View code
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : null}
    </article>
  );
}
