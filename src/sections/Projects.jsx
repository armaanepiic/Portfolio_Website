// sections/Projects.jsx

import ProjectCard from "./ProjectCard";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const styles = `
  .projects-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
  }
  @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr; } }
`;

export default function Projects({ data }) {
  return (
    <>
      <style>{styles}</style>
      <Section id="projects">
        <div className="wrapper">
          <SectionHeader label="03 — Projects" title="Things I've built" />
          <div className="projects-grid">
            {data.projects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                tech={p.tech}
                link={p.link}
                github={p.github}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
