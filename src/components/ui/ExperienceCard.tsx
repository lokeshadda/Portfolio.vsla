import { ExperienceItem } from "@/types";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-slate-900">{experience.title}</h3>
        <p className="mt-1 text-sm font-medium text-blue-600">{experience.company}</p>
        <p className="mt-1 text-sm text-slate-500">{experience.duration}</p>
      </div>

      <ul className="space-y-3 text-slate-700">
        {experience.points.map((point, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}