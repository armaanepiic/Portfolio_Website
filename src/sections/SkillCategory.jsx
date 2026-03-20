// components/SkillCategory.jsx
// ─────────────────────────────────────────────
// A skill group card with pill badges.
//
// Props:
//   category  (string)    – e.g. "Frontend"
//   items     (string[])  – skill names
// ─────────────────────────────────────────────

const styles = `
  .skill-cat {
    border: 1px solid var(--border);
    padding: 1.5rem;
    background: var(--surface);
    transition: border-color 0.2s;
  }
  .skill-cat:hover { border-color: var(--accent); }
  .skill-cat__name {
    font-family: var(--font-mono); font-size: 0.7rem;
    color: var(--accent); text-transform: uppercase;
    letter-spacing: 0.1em; margin-bottom: 1rem;
  }
  .skill-cat__pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .pill {
    padding: 0.3rem 0.8rem;
    font-family: var(--font-mono); font-size: 0.75rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    color: var(--text);
    transition: background 0.2s, border-color 0.2s;
  }
  .pill:hover { background: rgba(232,160,32,0.1); border-color: var(--accent); }
`;

export default function SkillCategory({ category, items = [] }) {
  return (
    <>
      <style>{styles}</style>
      <div className="skill-cat">
        <p className="skill-cat__name">{category}</p>
        <div className="skill-cat__pills">
          {items.map((skill) => (
            <span className="pill" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </>
  );
}
