# Sangram Behera - Portfolio

A responsive, app-style developer portfolio built with React 19, Vite, React Router, Tailwind CSS v4, Motion, and Lucide icons.

The site presents Sangram's experience across full-stack development, backend systems, APIs, cloud infrastructure, and performance-focused applications.

## Features

- Routed portfolio sections for home, about, skills, experience, projects, and contact
- Responsive layout with desktop and mobile navigation
- Light and dark themes with the preference saved in `localStorage`
- Animated page transitions and content reveals with Motion
- Project, skill, experience, and architecture-focused components
- Contact form delivery through EmailJS
- Netlify SPA fallback configured in `public/_redirects`

## Requirements

- Node.js 20 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Production deployment

Build the site and deploy the generated `dist/` directory to a static host:

```bash
npm run build
npm run preview
```

The project can be deployed to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or another static hosting provider. Netlify uses `public/_redirects` to route client-side paths back to `index.html`.

## Project structure

```text
src/
  components/    Shared UI: navbar, buttons, cards, transitions, terminal, diagram
  data/          Project, skill, and experience content
  pages/         Routed portfolio pages
  App.jsx        Theme state, routes, page transitions, and footer
  main.jsx       React entry point and BrowserRouter setup
  index.css      Tailwind theme tokens and global styles
public/
  _redirects     Netlify single-page application fallback
```

## Customization

- Update portfolio content in `src/data/projects.js`, `src/data/skills.js`, and `src/data/experience.js`.
- Update page copy and links in `src/pages/` and the social links in `src/App.jsx`.
- Change colors and fonts in the `@theme` block at the top of `src/index.css`.
- Update the EmailJS service, template, and public key in `src/pages/Contact.jsx` when connecting the form to another EmailJS account.

## Contact form

The contact form sends two EmailJS requests when submitted: one for the portfolio owner and one for the sender confirmation. EmailJS credentials are currently defined in `src/pages/Contact.jsx`; replace them with the credentials for the deployment's EmailJS account before publishing.

## License

This repository is a personal portfolio. Contact the author before reusing its content, branding, or project information.
