import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { skills } from "../../data/skills";
import { card, sectionAlt, sectionPadding } from "../../lib/styles";
import { cn } from "../../lib/utils";

export default function Skills() {
  return (
    <section id="skills" className={cn(sectionAlt, sectionPadding)}>
      <Container>
        <Reveal>
          <SectionTitle
            title="Skills"
            sectionNumber="04"
            subtitle="Core tools and practices I use in analytics and engineering work."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <div key={group.category} className={cn(card, "p-5")} style={{ animationDelay: `${index * 50}ms` }}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2 border-t border-white/[0.08] pt-4">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-slate-300">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
