# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with Next.js 15 and React 19. Static export architecture with no backend/database — all content is defined in `/src/config/portfolio.tsx`. Features dark/light theme toggle, smooth animations (Framer Motion), and responsive design (Tailwind CSS v4).

## Quick Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Build & Deployment
npm run build           # Build static export (outputs to out/)
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint -- --fix   # Auto-fix lint issues
```

## Architecture & File Organization

### Directory Structure
- **`src/app/`** - App Router pages and root layout
  - **`page.tsx`** - Home page that composes all section components
  - **`layout.tsx`** - Root layout with fonts and metadata
  - **`globals.css`** - Global styles
  - **`_components/`** - Page-specific sections
    - Each section (introduction, experience, projects, skills, awards, summary) has own folder with index.tsx + child components
- **`src/components/`** - Reusable/shared components
  - **`layouts/home-layout.tsx`** - Main page wrapper (navbar, theme, layout structure)
  - **`navbar/`** - Animated navigation with logo
  - **`footer/`** - Footer component
  - **`theme-provider.tsx`** - next-themes wrapper
  - **`theme-toggle.tsx`** - Dark/light mode switcher
  - **`ui/`** - shadcn/ui generated components
- **`src/config/portfolio.tsx`** - Single source of truth for all portfolio content
  - Exports: `personalInfo`, `socialLinks`, `experiences`, `projects`, `skills`, `awards`
  - Uses `HighlightText` component for rich text with inline styling
- **`src/lib/utils.ts`** - Utility functions
  - `cn()` - Merge Tailwind classes (clsx + tailwind-merge)

### Component Patterns
- **Client Components**: Use `"use client"` directive for interactive components (hero animations, theme toggle, scroll listeners)
- **Server Components**: Default for sections that don't need interactivity
- **Composition**: Page (home) imports sections → sections import sub-components → sub-components import ui/shared components
- **Data Flow**: All data flows from `src/config/portfolio.tsx` down through props

## Tech Stack & Key Libraries

| Layer | Tech | Version | Notes |
|-------|------|---------|-------|
| Framework | Next.js | 15.4.8 | App Router, static export enabled |
| Runtime | React | 19.0.0 | Latest with hooks support |
| Language | TypeScript | 5 | Strict mode enabled |
| Styling | Tailwind CSS | 4 | PostCSS v4, CSS variables for theming |
| UI Components | shadcn/ui | New York style | Radix UI based, RSC compatible |
| Animations | Framer Motion | 12.6.2 | Page and component transitions |
| Icons | lucide-react | 0.486.0 | Used throughout components |
| Theming | next-themes | 0.4.6 | Light/dark mode with localStorage persistence |
| Utilities | clsx, tailwind-merge | Latest | For dynamic class merging |

## Development Notes

### Static Export & Deployment
- **`next.config.ts`** has `output: "export"` - generates static HTML/CSS/JS to `out/` folder
- Images unoptimized for static hosting (no Next.js Image component optimization)
- No API routes or server-side rendering
- Can deploy to Vercel, GitHub Pages, Netlify, or any static host

### Fonts
- **Geist Sans/Mono** - From next/font/google (default Next.js fonts)
- **Josefin Sans** - Custom serif for branding (configured in layout.tsx)
- Variables: `--font-geist-sans`, `--font-geist-mono`, `--font-josefin`

### Styling System
- Tailwind CSS v4 with CSS variables for theme colors
- shadcn/ui base color: `neutral`
- No custom theme config needed (uses Tailwind defaults with shadcn overrides)
- `cn()` utility for conditional/merged classes

### TypeScript Configuration
- `tsconfig.json` has path alias `@/*` → `./src/*` for clean imports
- Strict mode enabled
- Target: ES2017
- JSX preserved for Next.js processing

### ESLint & Code Quality
- Uses Next.js core-web-vitals and TypeScript flat config
- Auto-linting on save configured (check editor settings)
- Run `npm run lint -- --fix` to auto-fix issues before committing

## Portfolio Content Management

**All content is in `/src/config/portfolio.tsx`** — structure:

```typescript
personalInfo = { name, title, email, github, linkedin, descriptions[], statDescriptions[] }
socialLinks = [{ name, href, icon }]
experiences = [{ title, company, period, description, technologies }]
projects = [{ title, description, technologies, links }]
skills = [{ category, items }]
awards = [{ title, year, description }]
```

**Adding Content**:
1. Edit `/src/config/portfolio.tsx`
2. Import necessary icons from lucide-react
3. Use `HighlightText` component for inline styling (bold/underline)
4. Components automatically import from config and render

**Rich Text**: Wrap text in `<HighlightText text="..." underline={true/false} />` to highlight specific words.

## Common Tasks

### Add a New Section to Homepage
1. Create `/src/app/_components/my-section/index.tsx`
2. Create child components (e.g., `my-section-item.tsx`, `my-section-list.tsx`)
3. Import and add to `/src/app/page.tsx` in the `<HomeLayout>` (in visual order)
4. Update `/src/config/portfolio.tsx` if section needs data

### Update Theme Colors
- No custom Tailwind config needed — shadcn/ui handles theming
- Theme variables in `globals.css`
- Classes use Tailwind semantic names: `text-primary`, `bg-secondary`, `border-muted`, etc.

### Add Animation to Component
- Import `motion` from "framer-motion"
- Wrap component with `<motion.div>` and add `initial`, `animate`, `transition` props
- See `introduction-hero/index.tsx` for examples (fade-in, slide-in, bounce animations)

### Prepare for Deployment
1. Run `npm run build` — outputs static site to `out/`
2. Deploy `out/` folder to your hosting (Vercel, GitHub Pages, Netlify, etc.)
3. No environment variables or server setup needed

## Dependencies Rationale

- **Framer Motion**: Smooth, performant animations for hero sections and transitions
- **Tailwind CSS v4**: Modern utility-first CSS with CSS variables for dynamic theming
- **shadcn/ui**: Production-ready, accessible UI components with TypeScript support
- **next-themes**: Solves dark mode persistence and hydration mismatch elegantly
- **lucide-react**: Lightweight icon library integrated with Radix UI

## Testing & Verification

No testing framework configured — this is a static portfolio site. Verify with:
```bash
npm run build           # Check for build errors
npm run lint            # Check for code issues
npm run dev             # Visual inspection in browser
```

## Security & Best Practices

- All content is static (no input validation needed)
- Emails in config are visible (acceptable for portfolio)
- No secrets or API keys in codebase
- TypeScript strict mode prevents type-related bugs
- ESLint enforces Next.js best practices

## Notes for Future Contributors

- Keep components under 300 lines — split into smaller pieces if needed
- Use path alias `@/` for all imports (never `../`)
- Add animations sparingly — prioritize performance on slower devices
- Test responsive design (mobile-first, then desktop)
- Update `/src/config/portfolio.tsx` as primary method of content updates
- Run `npm run lint -- --fix` before committing code changes
