# Harsh Yadav — Portfolio

A premium, production-ready personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)

## ✨ Features

- **Dark Bento Grid Design** — Modern, high-density layout inspired by Linear and Vercel
- **Fully Static (SSG)** — Pre-rendered at build time for instant page loads
- **Content-UI Separation** — All personal data lives in `src/content/` files, zero hardcoding
- **Framer Motion Animations** — Smooth scroll-triggered reveals and micro-interactions
- **Responsive Design** — Mobile-first layout with adaptive navigation
- **SEO Optimized** — Meta tags, Open Graph, structured semantic HTML
- **Accessible** — WCAG AA compliant, keyboard navigable, focus-visible styles
- **Custom Scrollbar & Selection** — Premium dark theme polish throughout

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts, SEO, header/footer
│   ├── page.tsx            # Home page assembling all sections
│   └── projects/[slug]/    # Dynamic project detail pages
├── components/
│   ├── layout/             # Header & Footer
│   ├── sections/           # Hero, BentoGrid, Projects, Experience, Skills, Education, Contact
│   ├── icons.tsx           # Custom SVG brand icons (GitHub, LinkedIn)
│   └── theme-provider.tsx  # Dark/Light theme wrapper
├── content/                # 📝 EDIT THESE to update your portfolio
│   ├── profile.ts          # Name, headline, about, contact info
│   ├── projects.ts         # Project entries with descriptions & links
│   ├── experience.ts       # Work experience with highlights
│   ├── education.ts        # Degrees and institutions
│   ├── certifications.ts   # Certifications and training
│   ├── skills.ts           # Technical skills by category
│   ├── social.ts           # Social links (GitHub, LinkedIn, Email)
│   ├── navigation.ts       # Header navigation items
│   ├── seo.ts              # SEO metadata configuration
│   ├── site.ts             # Site-wide settings
│   └── theme.ts            # Theme colors and fonts
├── lib/
│   ├── fonts.ts            # Google Fonts (Inter + JetBrains Mono)
│   └── utils.ts            # Utility functions (cn)
└── types/
    └── index.ts            # TypeScript type definitions
```

## ✏️ Customizing Your Portfolio

All your personal data lives in the `src/content/` directory. To update:

1. **Profile** → Edit `src/content/profile.ts` (name, headline, about, contact)
2. **Projects** → Edit `src/content/projects.ts` (add/remove/reorder projects)
3. **Experience** → Edit `src/content/experience.ts` (work history)
4. **Skills** → Edit `src/content/skills.ts` (add new skills or categories)
5. **Resume** → Replace `public/resume/Harsh_Yadav_Resume.docx` with your file

No component code changes needed — just edit the content files and rebuild.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React + Custom SVGs |
| Theme | next-themes |
| Fonts | Inter + JetBrains Mono (next/font) |
| Deploy | Vercel (recommended) |

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy — zero configuration needed

### Other Platforms

```bash
npm run build
npm start
```

The `out/` directory contains the static export if needed.

## 📄 License

MIT — feel free to use this as a template for your own portfolio.
