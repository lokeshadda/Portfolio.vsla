import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo } from "../../data/personal";
import { card, sectionPadding } from "../../lib/styles";
import { cn } from "../../lib/utils";

export default function About() {
  return (
    <section id="about" className={sectionPadding}>
      <Container>
        <SectionTitle
          title="About"
          sectionNumber="01"
          subtitle="Background, focus areas, and what I build."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="space-y-5 text-base leading-relaxed text-slate-400 md:text-lg">
            {personalInfo.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-4">
            <div className={cn(card, "p-5")}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Location
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {personalInfo.location} - open to relocate across US
              </p>
            </div>

            <div className={cn(card, "p-5")}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Links
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-300 hover:text-teal-300"
                >
                  github.com/{personalInfo.githubHandle}
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-300 hover:text-teal-300"
                >
                  LinkedIn profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
