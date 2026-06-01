"use client";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";
import { projects } from "../../data/projects";
import { sectionPadding } from "../../lib/styles";

export default function Projects() {
  return (
    <section id="projects" className={sectionPadding}>
      <Container>
        <Reveal>
          <SectionTitle
            title="Projects"
            sectionNumber="03"
            subtitle="Selected work across agentic AI, machine learning, big data, and BI."
          />
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
