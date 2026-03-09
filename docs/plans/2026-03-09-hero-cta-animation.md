# Hero CTA Animation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a smooth arrow slide animation to the "View my work" button in the hero section that triggers on hover.

**Architecture:** Define a custom CSS keyframe animation (`slideRight`) in the global stylesheet and apply it to the ArrowRight icon using Tailwind's `group-hover` utilities. The animation works alongside the existing `hover:opacity-90` effect.

**Tech Stack:** Next.js 16, React 19, TailwindCSS 4, Tailwind CSS Animations

---

## Task 1: Add CSS keyframe animation

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Read the current globals.css file**

Run: `cat src/app/globals.css`

Expected output: Current global styles and Tailwind directives.

**Step 2: Add the slideRight keyframe animation**

Add this CSS to `src/app/globals.css` (before or after other @keyframes, or at the end):

```css
@keyframes slideRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(4px);
  }
}

.animate-slideRight {
  animation: slideRight 150ms ease-in-out;
}
```

**Step 3: Verify the file saves correctly**

Run: `grep -n "slideRight" src/app/globals.css`

Expected: Two lines showing the @keyframes definition and .animate-slideRight class.

**Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "style: add slideRight animation keyframes for CTA button"
```

---

## Task 2: Update hero-section.tsx component

**Files:**
- Modify: `src/components/hero-section.tsx:46-52` (the primary CTA link)

**Step 1: Read the current component**

Run: `cat src/components/hero-section.tsx`

Expected output: Current HeroSection component code.

**Step 2: Update the primary CTA link with group and animation classes**

Replace the primary CTA link (lines 46-52) from:

```tsx
<a
  href="#work"
  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
>
  View my work
  <ArrowRight className="w-4 h-4" strokeWidth={2}/>
</a>
```

To:

```tsx
<a
  href="#work"
  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
>
  View my work
  <ArrowRight className="w-4 h-4 group-hover:animate-slideRight" strokeWidth={2}/>
</a>
```

**Changes made:**
- Add `group` class to the link wrapper
- Add `group-hover:animate-slideRight` to the ArrowRight icon

**Step 3: Verify the component is correct**

Run: `grep -A 8 "href=\"#work\"" src/components/hero-section.tsx | head -10`

Expected: Output shows the updated link with `group` and `group-hover:animate-slideRight` classes.

**Step 4: Commit**

```bash
git add src/components/hero-section.tsx
git commit -m "feat: add arrow slide animation to hero CTA button on hover"
```

---

## Task 3: Test the animation in the browser

**Files:**
- No new files

**Step 1: Start the development server**

Run: `npm run dev`

Expected: Server starts on http://localhost:3000

**Step 2: Open the hero section in browser**

Navigate to: `http://localhost:3000`

**Step 3: Test the animation**

- Hover over the "View my work" button
- Observe: The arrow should smoothly slide 4px to the right
- Observe: The button's opacity should reduce on hover (existing effect)
- Move mouse away: Animation should reverse smoothly
- Test on mobile: Check responsive behavior if applicable

**Step 4: Verify no console errors**

Open DevTools (F12) → Console tab

Expected: No errors related to the animation or component.

**Step 5: Stop the dev server and commit**

Run:
```bash
# Press Ctrl+C to stop dev server
git status
```

Expected: `git status` shows clean working directory (no uncommitted changes).

---

## Success Criteria

- ✅ Arrow animates smoothly on hover with 150ms duration
- ✅ Animation slides arrow 4px to the right
- ✅ Button opacity effect still works
- ✅ No console errors
- ✅ Animation works across all browsers
- ✅ Responsive behavior maintained

---

## Notes

- The animation uses `ease-in-out` timing for smooth acceleration/deceleration
- The `group` class is a Tailwind utility that enables child selectors with `group-hover:`
- The custom `.animate-slideRight` class is defined in globals.css and can be reused elsewhere
- The animation doesn't conflict with existing styles or events
