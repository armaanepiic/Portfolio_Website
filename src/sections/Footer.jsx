// components/Footer.jsx
// ─────────────────────────────────────────────
// Simple footer with name and current year.
//
// Props:
//   name  (string)  – your name
// ─────────────────────────────────────────────

const styles = `
  .footer {
    text-align: center; padding: 2rem;
    font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted);
    border-top: 1px solid var(--border);
    position: relative; z-index: 1;
  }
  .footer span { color: var(--accent); }
`;

export default function Footer({ name }) {
  return (
    <>
      <style>{styles}</style>
      <footer className="footer">
        Built by <span>{name}</span> · {new Date().getFullYear()}
      </footer>
    </>
  );
}
