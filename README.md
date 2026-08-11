# Sangram Behera — Portfolio

A full-viewport, app-style developer portfolio built with React 19, React Router, Tailwind CSS v4, and Motion (Framer Motion).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is written to `dist/` — deploy that folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).

## Project structure

```
src/
├── components/       Navbar, PageTransition, Button, ProjectCard,
│                     SkillCard, StatCard, ArchitectureDiagram, Terminal
├── pages/            Home, About, Skills, Experience, Projects,
│                     Architecture, Contact
├── data/             projects.js, skills.js, experience.js — edit these
│                     to update your content without touching components
├── App.jsx           Routes + page transitions
├── main.jsx          Entry point
└── index.css         Tailwind v4 theme tokens (colors, fonts) + base styles
```

## Customizing

- **Your info**: edit `src/data/projects.js`, `skills.js`, `experience.js`,
  and the copy directly inside `src/pages/*.jsx`.
- **Colors / fonts**: all design tokens live in the `@theme` block at the
  top of `src/index.css` (`--color-*`, `--font-*`). Change them once and
  every component picks it up automatically via Tailwind utilities like
  `bg-card`, `text-violet`, `font-display`.
- **Links**: update the `mailto:`, GitHub, and LinkedIn URLs — footer
  socials live in `App.jsx`, hero/contact socials live in
  `src/pages/Contact.jsx`.
- **Contact form**: currently simulates a successful submission client-side
  (no backend wired up). Connect it to your form provider of choice
  (Formspree, Resend, your own API route, etc.) inside the `handleSubmit`
  function in `src/pages/Contact.jsx`.

## Notes

- Desktop treats each route as a full 100vh "screen" with no page scroll;
  mobile falls back to vertical scroll within a page when content is dense,
  to keep everything reachable on small viewports.
- Reduced-motion preference is respected globally.
