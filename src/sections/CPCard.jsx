// components/CPCard.jsx
// ─────────────────────────────────────────────
// Competitive programming platform card.
// Animates the solved count on render.
//
// Props:
//   platform  (string)
//   handle    (string)
//   solved    (number | string)
//   rating    (string)
//   link      (string)
// ─────────────────────────────────────────────

import Counter from "./Counter";

const styles = `
  .cp-card {
    border: 1px solid var(--border);
    padding: 1.8rem;
    background: var(--surface);
    text-decoration: none;
    display: block;
    transition: border-color 0.2s, transform 0.2s;
  }
  .cp-card:hover { border-color: var(--accent); transform: translateY(-3px); }
  .cp-card__platform {
    font-family: var(--font-mono); font-size: 0.72rem;
    color: var(--accent); text-transform: uppercase;
    letter-spacing: 0.1em; margin-bottom: 0.6rem;
  }
  .cp-card__solved {
    font-size: 2.2rem; font-weight: 800;
    letter-spacing: -0.04em; color: var(--text);
  }
  .cp-card__meta {
    font-family: var(--font-mono); font-size: 0.75rem;
    color: var(--muted); margin-top: 0.3rem;
  }
`;

export default function CPCard({ platform, handle, solved, rating, link }) {
  return (
    <>
      <style>{styles}</style>
      <a className="cp-card" href={link} target="_blank" rel="noreferrer">
        <p className="cp-card__platform">{platform}</p>
        <p className="cp-card__solved">
          <Counter target={solved} suffix="+" />
        </p>
        <p className="cp-card__meta">
          @{handle} · Rating: {rating}
        </p>
      </a>
    </>
  );
}
