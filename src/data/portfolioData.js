// ─────────────────────────────────────────────────────────────
//  portfolioData.js  —  Edit ALL your content here, nowhere else
// ─────────────────────────────────────────────────────────────

const portfolioData = {
  // ── Personal info ──────────────────────────────────────────
  name: "Arman Hossain",
  initials: "AH",
  tagline: "Frontend Developer · MERN Stack Learner · Competitive Programmer",
  availabilityLabel: "Available for internship opportunities",

  email: "armaanepiic@gmail.com",
  phone: "+8801874015451",
  github: "https://github.com/armaanepiic",
  linkedin: "https://linkedin.com/in/armaanepiic",

  // ── About paragraph ────────────────────────────────────────
  about: `Computer Science graduate with a strong foundation in algorithms, problem-solving, 
and frontend development. Proficient in JavaScript, React, NodeJS, and modern web technologies, 
with a passion for creating responsive and user-friendly interfaces. I aim to contribute to 
innovative frontend projects while learning from experienced developers.`,

  // ── Education ──────────────────────────────────────────────
  education: {
    degree: "BSc in Computer Science and Engineering",
    school: "International Islamic University Chittagong",
    period: "2019 – 2024",
    cgpa: "3.20 / 4.00",
  },

  // ── Skills  (add/remove categories or items freely) ────────
  skills: [
    { category: "Languages",    items: ["JavaScript", "TypeScript", "C++", "C"] },
    { category: "Frontend",     items: ["React", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend & DB", items: ["Node.js", "MongoDB", "Docker basics"] },
    { category: "Tools",        items: ["Git", "GitHub", "Figma", "Canva", "MS Excel"] },
  ],

  // ── Projects  (set link:"#" if no live link yet) ───────────
  projects: [
    {
      title: "Food Delivery Website",
      tech: ["HTML", "Tailwind CSS"],
      desc: "Modern, responsive site with mobile-first design approach and intuitive user interface.",
      link: "#",
      github: "#",
    },
    {
      title: "Modern Landing Page",
      tech: ["Tailwind CSS", "JavaScript"],
      desc: "Animated landing page with smooth transitions, hover effects, and modern UI aesthetics.",
      link: "#",
      github: "#",
    },
    {
      title: "Todo List Application",
      tech: ["JavaScript", "DOM API"],
      desc: "Dynamic app with local storage, task add/delete/toggle functionality.",
      link: "#",
      github: "#",
    },
    {
      title: "Clipboard Landing Page",
      tech: ["Tailwind CSS"],
      desc: "Professional one-page website showcasing advanced Tailwind techniques and pixel-perfect responsive design.",
      link: "#",
      github: "#",
    },
  ],

  // ── Competitive Programming profiles ───────────────────────
  cp: {
    profiles: [
      { platform: "Codeforces", handle: "armaanepiic", solved: 578,   rating: "1004", link: "https://codeforces.com/profile/armaanepiic" },
      { platform: "AtCoder",    handle: "armaanepiic", solved: 155,   rating: "103",  link: "https://atcoder.jp/users/armaanepiic" },
      { platform: "CodeChef",   handle: "armaanepiic", solved: "200", rating: "2★",   link: "https://www.codechef.com/users/armaanepiic" },
      { platform: "LeetCode",   handle: "armaanepiic", solved: "37",  rating: "—",    link: "https://leetcode.com/armaanepiic" },
    ],
    stats: [
      { label: "contests participated", value: "150+" },
      { label: "onsite contests",       value: "3"    },
      { label: "total problems solved", value: "970+" },
    ],
  },

  // ── Footer ─────────────────────────────────────────────────
  footerName: "Arman Hossain",
};

export default portfolioData;