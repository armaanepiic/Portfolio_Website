// components/SectionHeader.jsx
// ─────────────────────────────────────────────
// Reusable label + title block used by every section.
//
// Props:
//   label  (string)  – small mono label, e.g. "01 — About"
//   title  (string)  – large display heading
// ─────────────────────────────────────────────

export default function SectionHeader({ label, title }) {
  return (
    <>
      <p className="sec-label">{label}</p>
      <h2 className="sec-title">{title}</h2>
    </>
  );
}
