# hieplp.dev

Personal portfolio for Ly Phuoc Hiep, software engineer. One page: a full-screen typographic poster,
then experience, projects, stack, about, and contact.

Next.js 16 (App Router) with plain CSS and no UI framework. All copy lives in `src/content/`;
`docs/project-structure.md` explains the layout.

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3001
```

```bash
pnpm build && pnpm start
```

`pnpm lint` and `npx tsc --noEmit` are the checks.

## Editing content

Each section reads from one file in `src/content/`:

| File | Holds |
|---|---|
| `profile.ts` | name parts, role, tagline, email, socials, location |
| `experience.ts` | roles, dates, contributions, stack |
| `projects.ts` | projects, companies, roles, team size, case-study highlights, live links |
| `techstack.ts` | grouped technologies |
| `about.ts` | biography, facts, the editorial image and its credit |
| `contact.ts` | contact blurb and address |
| `site.ts` | page title, description, canonical URL, OG image |

Adding a project or role is a data edit; no component changes.