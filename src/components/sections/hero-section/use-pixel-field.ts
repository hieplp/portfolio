import { useEffect, type RefObject } from "react";
import { buildPixels, paintGlyphMask, type Pixel } from "./pixel-field";

/* Event-driven pixel field canvas: rebuilds on resize/font/theme, reacts to pointer. */
export function usePixelField(
  heroRef: RefObject<HTMLElement | null>,
  canvasRef: RefObject<HTMLCanvasElement | null>,
  headingRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    const heading = headingRef.current;
    const ctx = canvas?.getContext("2d");
    if (!hero || !canvas || !heading || !ctx) return;

    const reducedMotion = matchMedia("(prefers-reduced-motion:reduce)");
    const controller = new AbortController();
    const { signal } = controller;

    let width = 1;
    let height = 1;
    let pixels: Pixel[] = [];
    let accent = "";
    let frame = 0;
    let lastTime = 0;
    let inView = true;

    const letterMask = document.createElement("canvas");
    const maskContext = letterMask.getContext("2d");
    const pointer = { x: 0, y: 0, strength: 0 };
    const target = { x: 0, y: 0, strength: 0 };

    const resetPointer = () => {
      pointer.x = pointer.y = pointer.strength = 0;
      target.x = target.y = target.strength = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = accent;
      const range = width < 600 ? 100 : 160;
      const range2 = range * range;
      const { x: px, y: py, strength } = pointer;
      for (const pixel of pixels) {
        let x = pixel.x;
        let y = pixel.y;
        let size = pixel.size;
        let alpha = pixel.alpha;
        if (strength > 0.001) {
          // Push along the unit vector: cos(atan2(dy, dx)) === dx / d, so no trig.
          const dx = x - px;
          const dy = y - py;
          const d2 = dx * dx + dy * dy;
          if (d2 < range2 && d2 > 0) {
            const d = Math.sqrt(d2);
            const force = (1 - d / range) ** 2 * strength;
            const push = (force * 28) / d;
            x += dx * push;
            y += dy * push;
            size += force * 2;
            alpha = Math.min(1, alpha + force * 0.32);
          }
        }
        ctx.globalAlpha = alpha;
        ctx.fillRect(
          Math.round(x - size / 2),
          Math.round(y - size / 2),
          Math.max(1, Math.round(size)),
          Math.max(1, Math.round(size)),
        );
      }
      ctx.globalAlpha = 1;
      if (maskContext) {
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.drawImage(letterMask, 0, 0, width, height);
        ctx.restore();
      }
    };

    const rebuild = (force = false) => {
      const rect = hero.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      // ResizeObserver fires on every fractional change; the canvas bitmap encodes dpr.
      if (
        !force &&
        canvas.width === Math.round(w * dpr) &&
        canvas.height === Math.round(h * dpr)
      )
        return;
      cancelAnimationFrame(frame);
      frame = 0;
      width = w;
      height = h;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();

      letterMask.width = canvas.width;
      letterMask.height = canvas.height;
      if (maskContext) {
        maskContext.setTransform(dpr, 0, 0, dpr, 0, 0);
        paintGlyphMask(maskContext, heading, rect, width, height);
      }

      pixels = buildPixels(width, height);
      resetPointer();
      draw();
    };

    const animate = (now: number) => {
      frame = 0;
      if (!inView || reducedMotion.matches) return;
      const dt = Math.min(40, now - lastTime);
      lastTime = now;
      const settled =
        Math.abs(target.x - pointer.x) < 0.3 &&
        Math.abs(target.y - pointer.y) < 0.3 &&
        Math.abs(target.strength - pointer.strength) < 0.01;
      if (settled) {
        pointer.x = target.x;
        pointer.y = target.y;
        pointer.strength = target.strength;
      } else {
        const ease = 1 - Math.exp(-dt / 55);
        pointer.x += (target.x - pointer.x) * ease;
        pointer.y += (target.y - pointer.y) * ease;
        pointer.strength += (target.strength - pointer.strength) * ease;
      }
      draw();
      if (!settled) frame = requestAnimationFrame(animate);
    };

    const schedule = () => {
      if (!inView || reducedMotion.matches) return;
      if (!frame) {
        lastTime = performance.now();
        frame = requestAnimationFrame(animate);
      }
    };

    const react = (event: PointerEvent) => {
      if (reducedMotion.matches) return;
      const rect = hero.getBoundingClientRect();
      target.x = event.clientX - rect.left;
      target.y = event.clientY - rect.top;
      target.strength = 1;
      if (pointer.strength < 0.01) {
        pointer.x = target.x;
        pointer.y = target.y;
      }
      schedule();
    };

    const release = () => {
      target.strength = 0;
      schedule();
    };

    const freeze = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      resetPointer();
      draw();
    };

    hero.addEventListener("pointermove", react, { passive: true, signal });
    hero.addEventListener("pointerdown", react, { passive: true, signal });
    hero.addEventListener("pointerleave", release, { passive: true, signal });
    hero.addEventListener("pointercancel", release, { passive: true, signal });
    hero.addEventListener(
      "pointerup",
      (event) => {
        if (event.pointerType === "touch") release();
      },
      { passive: true, signal },
    );
    reducedMotion.addEventListener("change", freeze, { signal });

    const themeObserver = new MutationObserver(() => {
      accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const sizeObserver = new ResizeObserver(() => rebuild());
    sizeObserver.observe(hero);
    const viewObserver = new IntersectionObserver(([entry]) => {
      inView = entry?.isIntersecting ?? true;
      if (!inView) freeze();
    });
    viewObserver.observe(hero);

    rebuild();
    document.fonts?.ready.then(() => {
      if (!signal.aborted) rebuild(true);
    });

    return () => {
      controller.abort();
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      sizeObserver.disconnect();
      viewObserver.disconnect();
    };
  }, [heroRef, canvasRef, headingRef]);
}
