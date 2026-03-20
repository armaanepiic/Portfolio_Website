// components/ProjectCard.jsx
// ─────────────────────────────────────────────
// Single project card with animated left border.
//
// Props:
//   title   (string)
//   desc    (string)
//   tech    (string[])
//   link    (string)   – live demo URL
//   github  (string)   – source URL
// ─────────────────────────────────────────────

const styles = `
  .project-card {
    border: 1px solid var(--border);
    padding: 1.8rem;
    background: var(--surface);
    cursor: pointer;
    transition: border-color 0.2s, transform 0.2s;
    position: relative;
    overflow: hidden;
  }
  .project-card::before {
    content: '';
    position: absolute; top: 0; left: 0;
    width: 3px; height: 0;
    background: var(--accent);
    transition: height 0.3s ease;
  }
  .project-card:hover { border-color: var(--accent); transform: translateY(-4px); }
  .project-card:hover::before { height: 100%; }
  .project-card__title { font-size: 1rem; font-weight: 700; margin-bottom: 0.6rem; }
  .project-card__desc {
    font-family: var(--font-mono); font-size: 0.8rem;
    color: var(--muted); line-height: 1.7; margin-bottom: 1.2rem;
  }
  .project-card__footer {
    display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
    flex-wrap: wrap;
  }
  .project-card__tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .tech-tag {
    padding: 0.2rem 0.6rem;
    font-family: var(--font-mono); font-size: 0.68rem;
    color: var(--accent);
    border: 1px solid rgba(232,160,32,0.3);
    background: rgba(232,160,32,0.07);
  }
  .project-card__links { display: flex; gap: 0.6rem; }
  .project-link {
    font-family: var(--font-mono); font-size: 0.72rem;
    color: var(--muted); text-decoration: none;
    transition: color 0.2s;
  }
  .project-link:hover { color: var(--accent); }
`;

export default function ProjectCard({ title, desc, tech = [], link, github }) {
  return (
    <>
      <style>{styles}</style>
      <div className="project-card">
        <p className="project-card__title">{title}</p>
        <p className="project-card__desc">{desc}</p>
        <div className="project-card__footer">
          <div className="project-card__tech">
            {tech.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
          </div>
          <div className="project-card__links">
            {github && github !== "#" && (
              <a className="project-link" href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
            )}
            {link && link !== "#" && (
              <a className="project-link" href={link} target="_blank" rel="noreferrer">Live ↗</a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
