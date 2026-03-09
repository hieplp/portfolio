# Hero CTA Animation Design

**Date:** 2026-03-09
**Component:** Hero Section - "View my work" button
**Scope:** Add arrow slide animation on hover

## Overview

Enhance the primary call-to-action button in the hero section with a subtle arrow animation. When users hover over the button, the ArrowRight icon slides 4px to the right while the button maintains its current opacity hover effect.

## Requirements

- **Animation trigger:** Hover state only
- **Animated element:** ArrowRight icon
- **Animation type:** Translate (slide right)
- **Distance:** 4px to the right
- **Duration:** 150ms
- **Easing:** ease-in-out
- **Button behavior:** Keep existing `hover:opacity-90` effect
- **Dependencies:** None new (use Tailwind + CSS)

## Implementation Approach

### Approach: Pure Tailwind + CSS Keyframes

**Why this approach:**
- No new dependencies required
- Leverages existing Tailwind setup
- Easy to maintain and modify
- Clean, declarative code

**Implementation steps:**
1. Define custom `slideRight` keyframe animation in `globals.css`
2. Add `group` class to the link element
3. Apply animation to the ArrowRight icon using `group-hover:animate-slideRight`

**CSS definition:**
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

## Success Criteria

- [ ] Arrow animates smoothly on hover
- [ ] Animation triggers only when hovering over the button
- [ ] Button opacity effect works as before
- [ ] No visual jank or performance issues
- [ ] Animation duration is 150ms with ease-in-out timing

## Testing

- Hover over the button in desktop view
- Verify smooth arrow movement
- Check that animation doesn't interfere with existing hover state
- Test on different screen sizes (responsive behavior)
