# Arman Hossain — Developer Portfolio

A clean, responsive personal portfolio built with **React + Vite**. Designed with a dark editorial aesthetic using **Fredericka the Great** for headings and **Oswald** for body text.

---

## ✨ Features

- Fully responsive — mobile, tablet, and desktop
- Smooth scroll navigation with active section highlighting
- Fade-in animations on scroll using IntersectionObserver
- Animated number counters in the Competitive Programming section
- Circular profile photo with rotating accent ring in the Hero section
- Mobile fullscreen menu overlay
- Single data file — update all content in one place

---

## 🗂️ Project Structure

```
├── index.html
└── src/
    ├── App.jsx                        # Root — wires all sections together
    ├── main.jsx                       # Vite entry point
    ├── assets/
    │   └── image.png                  # Your profile photo
    ├── data/
    │   └── portfolioData.js           # ✏️  All content lives here
    ├── styles/
    │   └── global.css                 # Design tokens, base styles, fonts
    ├── components/                    # Reusable UI pieces
    │   ├── Navbar.jsx                 # Top navigation bar
    │   ├── Section.jsx                # Fade-in section wrapper
    │   ├── SectionHeader.jsx          # Label + heading block
    │   ├── Counter.jsx                # Animated number counter
    │   ├── ProjectCard.jsx            # Single project card
    │   ├── SkillCategory.jsx          # Skill group with pill badges
    │   ├── CPCard.jsx                 # Competitive programming platform card
    │   ├── ContactLink.jsx            # Contact row (icon + label + value)
    │   └── Footer.jsx                 # Footer with name and year
    └── sections/                      # One file per page section
        ├── Hero.jsx                   # Intro + photo
        ├── About.jsx                  # About text + education card
        ├── Skills.jsx                 # Skills grid
        ├── Projects.jsx               # Projects grid
        ├── CompetitiveProgramming.jsx # CP profiles + stats
        └── Contact.jsx                # Contact links
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/armaanepiic/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

---

## ✏️ How to Customize

### Update your content

All personal information is centralized in one file:

```
src/data/portfolioData.js
```

Edit your name, tagline, email, links, skills, projects, and CP profiles there. You never need to touch any component file just to update content.

### Swap your profile photo

Replace the file at:

```
src/assets/image.png
```

Keep the same filename, or update the import in `src/sections/Hero.jsx`.

### Change the accent color

Open `src/styles/global.css` and change the `--accent` CSS variable:

```css
:root {
  --accent: #e8a020; /* ← change this */
}
```

All buttons, highlights, and borders update automatically.

### Add a new project

In `portfolioData.js`, add an object to the `projects` array:

```js
{
  title: "My New Project",
  tech: ["React", "Node.js"],
  desc: "A short description of what it does.",
  link: "https://live-demo.com",
  github: "https://github.com/armaanepiic/project",
}
```

### Add a new section

1. Create `src/sections/MySection.jsx`
2. Import and add it in `src/App.jsx`
3. Add `{ id: "my-section", label: "My Section" }` to the `NAV_LINKS` array in `App.jsx`

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0c0c0e` | Page background |
| `--surface` | `#131316` | Cards, nav |
| `--border` | `#222228` | Borders, dividers |
| `--text` | `#e8e6e0` | Primary text |
| `--muted` | `#6b6a6e` | Secondary text |
| `--accent` | `#e8a020` | Highlights, buttons |

| Role | Font |
|---|---|
| Section headings, hero name | Fredericka the Great |
| Everything else | Oswald |

---

## 📦 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Google Fonts](https://fonts.google.com/) — Fredericka the Great, Oswald
- Vanilla CSS with CSS custom properties — no CSS framework

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by **Arman Hossain** · [github.com/armaanepiic](https://github.com/armaanepiic) · [linkedin.com/in/armaanepiic](https://linkedin.com/in/armaanepiic)