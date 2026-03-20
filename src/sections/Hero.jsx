// sections/Hero.jsx
// ─────────────────────────────────────────────
// Hero section with two-column layout:
//   left  — name, tagline, CTA buttons
//   right — circular profile photo
//
// To swap the photo: replace src/assets/image.png
// ─────────────────────────────────────────────

import Section from "../sections/Section";
import profilePhoto from "../assets/image.png";

const styles = `
  #home .wrapper { padding-top: 10rem; padding-bottom: 6rem; }

  /* ── Two-column hero layout ── */
  .hero-layout {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 5rem;
  }
  @media (max-width: 768px) {
    .hero-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .hero-photo-col { order: -1; display: flex; justify-content: center; }
  }

  /* ── Left text ── */
  .hero-label {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--accent);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .hero-label::before {
    content: '';
    display: inline-block;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }

  .hero-name {
    font-family: 'Fredericka the Great', serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: 0.02em;
    color: var(--text);
    margin-bottom: 1.4rem;
  }
  .hero-name .accent { color: var(--accent); }

  .hero-tagline {
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    max-width: 480px;
    line-height: 1.8;
    margin-bottom: 2.8rem;
  }

  .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }

  .scroll-indicator {
    margin-top: 4rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .scroll-line { width: 40px; height: 1px; background: var(--muted); }

  /* ── Photo column ── */
  .hero-photo-col { flex-shrink: 0; }

  .hero-photo-wrap {
    position: relative;
    width: 280px;
    height: 280px;
  }
  @media (max-width: 768px) {
    .hero-photo-wrap { width: 200px; height: 200px; }
  }

  /* Rotating dashed accent ring */
  .hero-photo-wrap::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 2px dashed rgba(232,160,32,0.35);
    animation: spin 18s linear infinite;
  }
  /* Solid accent arc */
  .hero-photo-wrap::after {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: var(--accent);
    border-right-color: var(--accent);
    animation: spin 18s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Gradient ring around photo */
  .hero-photo-inner {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, var(--accent) 0%, transparent 60%, rgba(232,160,32,0.3) 100%);
  }

  .hero-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top center;
    display: block;
    background: var(--surface);
    box-shadow:
      inset 0 0 30px rgba(0,0,0,0.5),
      0 0 40px rgba(232,160,32,0.12);
  }

  /* Green "available" dot */
  .hero-photo-dot {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 22px; height: 22px;
    border-radius: 50%;
    background: var(--accent);
    border: 3px solid var(--bg);
    z-index: 2;
  }
`;

export default function Hero({ data, onNav }) {
  return (
    <>
      <style>{styles}</style>
      <Section id="home">
        <div className="wrapper">
          <div className="hero-layout">

            {/* ── Left: text ── */}
            <div className="hero-text-col">
              <p className="hero-label">{data.availabilityLabel}</p>
              <h1 className="hero-name">
                {data.name.split(" ")[0]}<br />
                <span className="accent">{data.name.split(" ")[1]}.</span>
              </h1>
              <p className="hero-tagline">{data.tagline}</p>
              <div className="hero-cta">
                <button className="btn-primary" onClick={() => onNav("projects")}>
                  View Projects
                </button>
                <a className="btn-outline" href={data.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
              <div className="scroll-indicator">
                <span className="scroll-line" />
                scroll to explore
              </div>
            </div>

            {/* ── Right: photo ── */}
            <div className="hero-photo-col">
              <div className="hero-photo-wrap">
                <div className="hero-photo-inner">
                  <img
                    className="hero-photo"
                    src={profilePhoto}
                    alt={data.name}
                  />
                </div>
                <span className="hero-photo-dot" title="Available for work" />
              </div>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}