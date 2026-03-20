// components/Navbar.jsx

import { useState } from "react";

const styles = `
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(12,12,14,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  /* Inner wrapper — matches section max-width */
  .nav-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1.1rem 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    .nav-inner { padding: 1.1rem 1.5rem; }
  }

  /* Logo icon */
  .nav-logo {
    display: flex; align-items: center; gap: 0.55rem;
    cursor: pointer; background: none; border: none;
    color: var(--text); font-family: 'Oswald', sans-serif;
    font-size: 1rem; font-weight: 500; letter-spacing: 0.08em;
    text-transform: uppercase; position: relative; z-index: 300;
    transition: color 0.2s;
  }
  .nav-logo:hover { color: var(--accent); }
  .nav-logo svg { flex-shrink: 0; transition: stroke 0.2s; }
  .nav-logo:hover svg { stroke: var(--accent); }

  /* Desktop links */
  .nav-links-desktop {
    display: flex; gap: 2rem; list-style: none;
  }
  .nav-links-desktop button {
    background: none; border: none; color: var(--muted);
    font-family: 'Oswald', sans-serif; font-size: 0.82rem;
    font-weight: 400; cursor: pointer; letter-spacing: 0.1em;
    transition: color 0.2s; text-transform: uppercase; padding: 0;
  }
  .nav-links-desktop button:hover,
  .nav-links-desktop button.active { color: var(--accent); }

  /* Hamburger */
  .hamburger {
    display: none; background: none; border: none;
    color: var(--text); cursor: pointer;
    position: relative; z-index: 300; padding: 0.2rem;
  }
  .hamburger svg { display: block; }

  /* Mobile overlay */
  .mobile-menu-overlay { display: none; }
  .mobile-menu-overlay.open {
    display: flex; position: fixed; inset: 0; z-index: 250;
    background: #0c0c0e; flex-direction: column;
    align-items: center; justify-content: center;
  }
  .mobile-menu-overlay ul {
    list-style: none; display: flex; flex-direction: column;
    align-items: center; gap: 0.5rem; width: 100%; padding: 0 2rem;
  }
  .mobile-menu-overlay li { width: 100%; }
  .mobile-menu-overlay button {
    width: 100%; background: none; border: none; color: var(--muted);
    font-family: 'Oswald', sans-serif; font-size: 1.1rem;
    font-weight: 400; letter-spacing: 0.15em; text-transform: uppercase;
    cursor: pointer; padding: 1rem 1.5rem; text-align: center;
    border-bottom: 1px solid var(--border);
    transition: color 0.2s, background 0.2s;
  }
  .mobile-menu-overlay button:hover,
  .mobile-menu-overlay button.active {
    color: var(--accent); background: rgba(232,160,32,0.05);
  }
  .mobile-menu-close {
    position: absolute; top: 1.2rem; right: 1.5rem;
    background: none; border: none; color: var(--muted);
    cursor: pointer; z-index: 260; transition: color 0.2s;
  }
  .mobile-menu-close:hover { color: var(--accent); }
  .mobile-menu-close svg { display: block; }

  @media (max-width: 640px) {
    .nav-links-desktop { display: none; }
    .hamburger { display: block; }
  }
`;

// Simple code/terminal icon SVG
const LogoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6"  x2="6"  y2="18" />
    <line x1="6"  y1="6"  x2="18" y2="18" />
  </svg>
);

export default function Navbar({ links, activeId, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    onNav(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{styles}</style>

      <nav>
        <div className="nav-inner">
          {/* Logo */}
          <button className="nav-logo" onClick={() => handleNav("home")}>
            <LogoIcon />
            Arman
          </button>

          {/* Desktop links */}
          <ul className="nav-links-desktop">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  className={activeId === l.id ? "active" : ""}
                  onClick={() => handleNav(l.id)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <CloseIcon />
        </button>
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <button
                className={activeId === l.id ? "active" : ""}
                onClick={() => handleNav(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}