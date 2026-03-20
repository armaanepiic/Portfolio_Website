// App.jsx
// ─────────────────────────────────────────────
// Root component — wires together all sections.
// You should rarely need to edit this file.
// To update content → edit src/data/portfolioData.js
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";

import "./index.css";

import portfolioData from "./data/portfolioData";

import Navbar   from "./sections/Navbar";
import Footer   from "./sections/Footer";

import Hero                  from "./sections/Hero";
import About                 from "./sections/About";
import Skills                from "./sections/Skills";
import Projects              from "./sections/Projects";
import CompetitiveProgramming from "./sections/CompetitiveProgramming";
import Contact               from "./sections/Contact";

// Nav links — order controls scroll order too
const NAV_LINKS = [
  { id: "about",    label: "About"    },
  { id: "skills",   label: "Skills"   },
  { id: "projects", label: "Projects" },
  { id: "cp",       label: "CP"       },
  { id: "contact",  label: "Contact"  },
];

const ALL_SECTIONS = ["home", ...NAV_LINKS.map((l) => l.id)];

export default function App() {
  const [activeId, setActiveId] = useState("home");

  // Track which section is in view for nav highlight
  useEffect(() => {
    const onScroll = () => {
      for (const id of ALL_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 120 && bottom >= 120) { setActiveId(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        links={NAV_LINKS}
        activeId={activeId}
        onNav={navTo}
      />

      <Hero    data={portfolioData} onNav={navTo} />
      <About   data={portfolioData} />
      <Skills  data={portfolioData} />
      <Projects data={portfolioData} />
      <CompetitiveProgramming data={portfolioData} />
      <Contact data={portfolioData} />

      <Footer name={portfolioData.footerName} />
    </>
  );
}