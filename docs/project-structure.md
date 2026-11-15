# Project structure

Next.js 16.1.6 (App Router, `src/`), React 19.2, TypeScript. The visual layer is plain CSS in
`src/app/globals.css`: design tokens plus component rules. No Tailwind, no CSS-in-JS, no component
library.

One route ships: `/`. `robots.txt`, `sitemap.xml`, and the favicon are metadata routes.

```
portfolio/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # next/font families, metadata, pre-paint theme script, header/main/footer
│  │  ├─ page.tsx          # section composition only
│  │  ├─ globals.css       # tokens + every component rule, in document order
│  │  ├─ icon.svg          # favicon
│  │  ├─ robots.ts         # /robots.txt
│  │  └─ sitemap.ts        # /sitemap.xml
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ header/        # brand, nav (+ active-section hook), theme toggle, mobile menu
│  │  │  └─ footer/        # owner line, real profile links
│  │  └─ sections/
│  │     ├─ hero-section/  # poster, canvas pixel field, glyph mask
│  │     ├─ experience-section/   # sticky aside + roles
│  │     ├─ projects-section/     # rail, cards, case-study <dialog>
│  │     ├─ techstack-section/    # stacked heading + grouped tags
│  │     ├─ about-section/        # copy, facts, editorial image
│  │     └─ contact-section/      # statement + mailto CTA
│  ├─ content/             # all copy and data: profile, experience, projects, techstack,
│  │                       # about, contact, site (SEO), theme
│  └─ archived/            # pre-v3 components, not imported anywhere
├─ public/
│  ├─ assets/stock/        # editorial image + credits.json
│  └─ og.png               # 1200x630 social card
└─ docs/
```

## Conventions

- **Copy lives in `src/content/`, never in components.** Every section reads its strings from there.
- **Design tokens** are the CSS custom properties at the top of `globals.css`. Light and dark are the
  same token names with different values, switched by `data-theme` on `<html>`.
- **Two radii:** `--radius` for cards and media, `--control` for buttons, tags, chips. Nothing else.
- **One accent** (`--accent`), used for links-in-state, project tags, the given name, and the contact
  CTA.
- **Fonts** come from `next/font/google` (Syne, Manrope, IBM Plex Mono), latin subset, woff2, with
  Next's fallback metrics. The first build of a fresh clone needs network access to fetch them.
- **Motion** is either CSS with a `prefers-reduced-motion` counterpart or the canvas field, which
  checks the same query and paints a single static frame.

## Updating `public/og.png`

It is a 1200x630 capture of the first screen, not a generated image. Recapture it after a hero
change.