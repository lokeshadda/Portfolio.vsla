"use client";

import { Briefcase } from "lucide-react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { experiences } from "../../data/experience";
import { cardInteractive, sectionAlt, sectionPadding } from "../../lib/styles";
import { cn } from "../../lib/utils";

export default function Experience() {
  return (
    <section id="experience" className={cn(sectionAlt, sectionPadding)}>
      <Container>
        <Reveal>
          <SectionTitle
            title="Experience"
            sectionNumber="02"
            subtitle="Roles where I delivered measurable analytics and data quality outcomes."
          />
        </Reveal>

        <div className="space-y-7">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.title}-${experience.company}`} delay={index * 100}>
              <article className={cn(cardInteractive, "group p-6 md:p-8")}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300 transition-transform duration-300 group-hover:scale-110">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-50">
                        {experience.title}
                      </h3>
                      <p className="mt-1 font-medium text-teal-300/90">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <time className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-400">
                    {experience.duration}
                  </time>
                </div>

                <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex gap-3 text-sm leading-7 text-slate-400 transition-colors group-hover:text-slate-300 md:text-base"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
