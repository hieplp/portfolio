# Hero Section Right Side — Design Spec

**Date:** 2026-03-10
**Status:** Approved

## Summary

Add a profile photo to the right side of the hero section, turning the current single-column layout into a two-column layout. Inspired by pablodelucca.com.

## Layout

- **Two-column flex row** — left: text content, right: photo
- **Mobile:** stacks vertically, photo appears above or below text
- **Desktop:** side-by-side, photo right-aligned

## Right Side Component

- Displays `profile.avatar` (path: `/avatar.png`)
- Styled as a **rounded rectangle** (`border-radius: 24px`) — editorial feel, not circular
- Fixed size: ~240×300px on desktop, scales down on mobile
- Subtle box shadow and border for depth
- Falls back gracefully if avatar image is missing (placeholder bg)

## Animations

- Both columns fade in on mount using Framer Motion
- Left side: fade + slight slide from left
- Right side: fade + slight slide from right
- Staggered timing (right side slightly delayed)

## Files Changed

- `src/components/sections/hero-section.tsx` — only file to modify

## Data

No data changes needed — `profile.avatar` already exists in `src/data/profile.ts`.
