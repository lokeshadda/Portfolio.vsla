import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "../../data/personal";
import { cn } from "../../lib/utils";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export default function SocialLinks({
  className,
  iconClassName = "h-4 w-4",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-200"
        aria-label="LinkedIn"
      >
        <Linkedin className={iconClassName} />
      </a>
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-200"
        aria-label="GitHub"
      >
        <Github className={iconClassName} />
      </a>
    </div>
  );
}
