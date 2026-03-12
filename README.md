# hieplp.dev

Personal portfolio website for Ly Phuoc Hiep — Full-stack Software Engineer.

🌐 **Live:** [hieplp.dev](https://hieplp.dev)

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Runtime:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Package Manager:** Bun

## Development

```bash
bun install       # Install dependencies
bun run dev       # Start dev server at http://localhost:3000
bun run build     # Build static export to out/
bun run lint      # Run ESLint
```

## Deployment

Deployed automatically to [GitHub Pages](https://hieplp.github.io) via GitHub Actions on every push to `main`, served at [hieplp.dev](https://hieplp.dev).

## Content

All portfolio content (experience, projects, skills, awards) is managed in a single file:

```
src/config/portfolio.tsx
```
