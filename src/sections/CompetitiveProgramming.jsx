// sections/CompetitiveProgramming.jsx

import CPCard from "./CPCard";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const styles = `
  .cp-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem; margin-bottom: 2rem;
  }
  @media (max-width: 480px) { .cp-grid { grid-template-columns: 1fr; } }
  .cp-stat-bar {
    display: flex; gap: 2rem; margin-top: 1.5rem; flex-wrap: wrap;
    font-family: var(--font-mono); font-size: 0.8rem; color: var(--muted);
  }
  .cp-stat strong { color: var(--accent); display: block; font-size: 1.2rem; }
`;

export default function CompetitiveProgramming({ data }) {
  return (
    <>
      <style>{styles}</style>
      <Section id="cp">
        <div className="wrapper">
          <SectionHeader
            label="04 — Competitive Programming"
            title="Problem Solving"
          />
          <div className="cp-grid">
            {data.cp.profiles.map((p) => (
              <CPCard
                key={p.platform}
                platform={p.platform}
                handle={p.handle}
                solved={p.solved}
                rating={p.rating}
                link={p.link}
              />
            ))}
          </div>
          <div className="cp-stat-bar">
            {data.cp.stats.map((s) => (
              <div className="cp-stat" key={s.label}>
                <strong>{s.value}</strong> {s.label}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
