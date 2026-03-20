// sections/About.jsx

import Section from "./Section";
import SectionHeader from "./SectionHeader";

const styles = `
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: start;
  }
  @media (max-width: 640px) { .about-grid { grid-template-columns: 1fr; gap: 2rem; } }
  .about-text {
    font-family: var(--font-mono); font-size: 0.88rem;
    line-height: 1.9; color: var(--muted);
  }
  .edu-card {
    border: 1px solid var(--border);
    padding: 1.8rem; background: var(--surface);
  }
  .edu-card__degree { font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
  .edu-card__school {
    font-family: var(--font-mono); font-size: 0.8rem;
    color: var(--accent); margin-bottom: 0.3rem;
  }
  .edu-card__period {
    font-family: var(--font-mono); font-size: 0.75rem;
    color: var(--muted); margin-bottom: 1rem;
  }
  .cgpa-badge {
    display: inline-block; padding: 0.35rem 0.9rem;
    background: rgba(232,160,32,0.12); color: var(--accent);
    font-family: var(--font-mono); font-size: 0.78rem;
    border: 1px solid rgba(232,160,32,0.3);
  }
`;

export default function About({ data }) {
  const { about, education } = data;
  return (
    <>
      <style>{styles}</style>
      <Section id="about">
        <div className="wrapper">
          <SectionHeader label="01 — About" title="Who I am" />
          <div className="about-grid">
            <p className="about-text">{about}</p>
            <div className="edu-card">
              <p className="edu-card__degree">{education.degree}</p>
              <p className="edu-card__school">{education.school}</p>
              <p className="edu-card__period">{education.period}</p>
              <span className="cgpa-badge">CGPA: {education.cgpa}</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
