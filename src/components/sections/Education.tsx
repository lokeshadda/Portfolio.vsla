import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { education } from "../../data/education";
import { cardInteractive, sectionPadding } from "../../lib/styles";
import { cn } from "../../lib/utils";

export default function Education() {
  return (
    <section id="education" className={sectionPadding}>
      <Container>
        <Reveal>
          <SectionTitle
            title="Education"
            sectionNumber="05"
            subtitle="Academic background aligned to analytics and business outcomes."
          />
        </Reveal>

        <div className="space-y-5">
          {education.map((item, index) => (
            <Reveal key={`${item.degree}-${item.institution}`} delay={index * 100}>
              <article
                className={cn(
                  cardInteractive,
                  "group flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between"
                )}
              >
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-slate-100">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-teal-300/90">{item.institution}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.duration}</p>
                </div>
                {item.gpa ? (
                  <span className="inline-flex shrink-0 items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                    {item.gpa}
                  </span>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
