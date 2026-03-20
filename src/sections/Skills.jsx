// sections/Skills.jsx

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SkillCategory from "./SkillCategory";

const styles = `
  .skills-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
  }
  @media (max-width: 480px) { .skills-grid { grid-template-columns: 1fr; } }
`;

export default function Skills({ data }) {
  return (
    <>
      <style>{styles}</style>
      <Section id="skills">
        <div className="wrapper">
          <SectionHeader label="02 — Skills" title="What I work with" />
          <div className="skills-grid">
            {data.skills.map((cat) => (
              <SkillCategory
                key={cat.category}
                category={cat.category}
                items={cat.items}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
