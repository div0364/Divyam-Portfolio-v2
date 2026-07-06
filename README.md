# Divyam Sinha — Portfolio

Personal portfolio site. Built with **React + Vite + Tailwind CSS + Framer Motion** and **Lucide** icons. Dark mode by default with a light-mode toggle.

## Stack
- React 18 + Vite
- Tailwind CSS (custom "molten amber + teal" palette, `darkMode: 'class'`)
- Framer Motion (scroll reveals, hover micro-interactions)
- Lucide icons only
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (metrics)

## Getting started
```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## ⚠️ Before you deploy — update your links
All content is sourced from `src/data.js`. The resume lists LinkedIn / GitHub /
LeetCode / Codeforces as hyperlinks, but their URLs are **not** embedded as text
in the PDF, so the four URLs in `src/data.js` (`contact` object) are **placeholders**.
Replace them with your real profile URLs:

```js
// src/data.js
export const contact = {
  linkedin:   'https://www.linkedin.com/in/...',   // 🔧 update
  github:     'https://github.com/...',             // 🔧 update
  leetcode:   'https://leetcode.com/u/...',         // 🔧 update
  codeforces: 'https://codeforces.com/profile/...', // 🔧 update
  ...
}
```
Email, phone, and platform ratings are taken directly from the resume and are correct.

The resume PDF is served from `public/Divyam_resume_v6.pdf` (the Resume buttons link to it).

## Structure
```
src/
  data.js               # ← all resume content (single source of truth)
  App.jsx
  index.css
  hooks/useTheme.js
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Experience.jsx
    Projects.jsx  Skills.jsx  Achievements.jsx  Contact.jsx
    ui.jsx              # shared Reveal / Section / MetricBadge helpers
```

## Deploy
Static output in `dist/` — deploy to Vercel, Netlify, GitHub Pages, or any static host.
