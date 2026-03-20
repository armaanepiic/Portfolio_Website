// components/ContactLink.jsx
// ─────────────────────────────────────────────
// A single contact row (icon + label + value).
//
// Props:
//   icon   (string)  – emoji or character
//   label  (string)  – e.g. "Email"
//   value  (string)  – displayed text
//   href   (string)  – link destination
// ─────────────────────────────────────────────

const styles = `
  .contact-link {
    display: flex; align-items: center; gap: 1rem;
    padding: 1.2rem 1.5rem;
    border: 1px solid var(--border);
    background: var(--surface);
    text-decoration: none; color: var(--text);
    font-family: var(--font-mono); font-size: 0.85rem;
    transition: border-color 0.2s, background 0.2s;
  }
  .contact-link:hover {
    border-color: var(--accent);
    background: rgba(232,160,32,0.04);
  }
  .contact-link__icon { color: var(--accent); font-size: 1.1rem; flex-shrink: 0; }
  .contact-link__label {
    color: var(--muted); font-size: 0.7rem;
    text-transform: uppercase; letter-spacing: 0.08em;
  }
  .contact-link__value { margin-top: 0.15rem; }
`;

export default function ContactLink({ icon, label, value, href }) {
  return (
    <>
      <style>{styles}</style>
      <a className="contact-link" href={href} target="_blank" rel="noreferrer">
        <span className="contact-link__icon">{icon}</span>
        <div>
          <div className="contact-link__label">{label}</div>
          <div className="contact-link__value">{value}</div>
        </div>
      </a>
    </>
  );
}
