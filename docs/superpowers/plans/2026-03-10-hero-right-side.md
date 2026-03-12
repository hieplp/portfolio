# Hero Right Side Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a profile photo on the right side of the hero section, creating a two-column layout inspired by pablodelucca.com.

**Architecture:** Convert `hero-section.tsx` from a single-column flex layout to a two-column row — left column keeps all existing text content, right column shows the avatar image as a rounded rectangle with Framer Motion fade-in animations on both sides.

**Tech Stack:** Next.js 15, React 19, Framer Motion 12, Tailwind CSS 4, TypeScript

---

## Chunk 1: Implement Two-Column Hero with Photo

### Task 1: Rewrite hero-section.tsx

**Files:**
- Modify: `src/components/sections/hero-section.tsx`

> Note: No test framework is configured for this project (static portfolio). Verify visually with `npm run dev`.

- [ ] **Step 1: Add `"use client"` directive and import `motion` from framer-motion**

The component needs `"use client"` because Framer Motion hooks require a browser environment.

At the top of `src/components/sections/hero-section.tsx`, replace the current imports with:

```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Fragment } from "react";
import { motion } from "framer-motion";
```

- [ ] **Step 2: Restructure the section into a two-column flex row**

Replace the entire `<section>` JSX with the two-column layout below. The outer section becomes `flex-row` on desktop and `flex-col` on mobile (image stacked above text on mobile).

```tsx
export function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center max-w-6xl w-full mx-auto justify-between gap-12 min-h-screen md:h-screen py-16 md:py-0"
    >
      {/* Left: Text content */}
      <motion.div
        className="flex flex-col flex-1"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Tags */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {profile.tags.map((tag, i) => (
            <Fragment key={i}>
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                {tag}
              </span>
              {i < profile.tags.length - 1 && (
                <span className="text-primary font-bold">·</span>
              )}
            </Fragment>
          ))}
        </div>

        {/* Greeting */}
        <p className="text-4xl md:text-3xl lg:text-5xl font-bold tracking-tight leading-tight max-w-4xl">
          Hi, I&apos;m <span className="text-primary">{profile.name}</span>!
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold tracking-tight leading-tight mb-6 max-w-4xl">
          {profile.title}
        </h1>

        {/* Bio */}
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
          {profile.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity group"
          >
            View my work
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
          >
            Get in touch
          </a>
        </div>
      </motion.div>

      {/* Right: Profile photo */}
      <motion.div
        className="flex-shrink-0 flex justify-center"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-56 h-72 md:w-64 md:h-80 object-cover rounded-3xl border border-border shadow-2xl bg-muted"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 3: Start dev server and verify visually**

```bash
npm run dev
```

Open http://localhost:3000 and check:
- Desktop: text on left, photo on right, both fade in on load
- Mobile (< 768px): photo on top, text below (flex-col-reverse)
- Photo is a rounded rectangle with shadow

- [ ] **Step 4: Run lint**

```bash
npm run lint
```

Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/hero-section.tsx
git commit -m "feat: add profile photo to right side of hero section"
```
