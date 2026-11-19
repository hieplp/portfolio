import { useEffect, type RefObject } from "react";
import { buildPixels, paintGlyphMask, type Pixel } from "./pixel-field";

type Box = { x: number; y: number; w: number; h: number };

/* A frame only repaints the box the pointer disturbs; 40px covers the 28px push and size growth. */
const PAD = 40;

/* The field breathes on a ~12.5s wave. 30fps is enough for grain and halves the paint cost. */
const AMBIENT_STEP = 1000 / 30;
const AMBIENT_SPEED = 0.5;
const AMBIENT_RESUME = 600;

/* Event-driven pixel field canvas: rebuilds on resize/font/theme, reacts to pointer, breathes when idle. */
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
    let dpr = 1;
    let pixels: Pixel[] = [];
    let accent = "";
    let frame = 0;
    let lastTime = 0;
    let inView = true;
    // Box the last frame disturbed, in CSS px, so the next frame can put the field back.
    let drawn: Box | null = null;
    let ambientFrame = 0;
    let ambientTimer = 0;
    let ambientClock = 0;
    let ambientTime = 0;
    let ambientAcc = 0;

    const letterMask = document.createElement("canvas");
    const maskContext = letterMask.getContext("2d");
    // The undisturbed field, painted once per rebuild: keeps pointer work to the dirty box.
    const field = document.createElement("canvas");
    const fieldContext = field.getContext("2d");
    // The breathing field; pointer restores read from whichever layer is current.
    const tide = document.createElement("canvas");
    const tideContext = tide.getContext("2d");
    let base: HTMLCanvasElement = field;
    const pointer = { x: 0, y: 0, strength: 0 };
    const target = { x: 0, y: 0, strength: 0 };

    const resetPointer = () => {
      pointer.x = pointer.y = pointer.strength = 0;
      target.x = target.y = target.strength = 0;
    };

    const clampBox = (box: Box): Box | null => {
      const x = Math.max(0, Math.floor(box.x));
      const y = Math.max(0, Math.floor(box.y));
      const right = Math.min(width, Math.ceil(box.x + box.w));
      const bottom = Math.min(height, Math.ceil(box.y + box.h));
      if (right - x < 1 || bottom - y < 1) return null;
      return { x, y, w: right - x, h: bottom - y };
    };

    const paintField = () => {
      if (!fieldContext) return;
      field.width = canvas.width;
      field.height = canvas.height;
      fieldContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      fieldContext.clearRect(0, 0, width, height);
      fieldContext.fillStyle = accent;
      for (const pixel of pixels) {
        fieldContext.globalAlpha = pixel.alpha;
        const size = Math.max(1, Math.round(pixel.size));
        fieldContext.fillRect(
          Math.round(pixel.x - pixel.size / 2),
          Math.round(pixel.y - pixel.size / 2),
          size,
          size,
        );
      }
      fieldContext.globalAlpha = 1;
      fieldContext.globalCompositeOperation = "source-over";
    };

    /* Device-pixel rect of `box`. Integer bounds: a fractional one makes drawImage resample. */
    const areaOf = (box: Box): [number, number, number, number] => {
      const x = Math.floor(box.x * dpr);
      const y = Math.floor(box.y * dpr);
      return [
        x,
        y,
        Math.ceil((box.x + box.w) * dpr) - x,
        Math.ceil((box.y + box.h) * dpr) - y,
      ];
    };

    /* Puts the undisturbed field back over `box` (or everything). The layer is kept unpunched so
       this stays a plain copy; `punch` cuts the glyphs out afterwards, once per repaint. */
    const restore = (box: Box | null) => {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      if (box) {
        const area = areaOf(box);
        ctx.clearRect(...area);
        ctx.drawImage(base, ...area, ...area);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(base, 0, 0);
      }
      ctx.restore();
    };

    /* Cuts the heading out of the field, over `box` or the whole canvas. Must run after the
       displaced pixels are drawn, or they bleed through the letters. */
    const punch = (box: Box | null) => {
      const area: [number, number, number, number] = box
        ? areaOf(box)
        : [0, 0, canvas.width, canvas.height];
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(letterMask, ...area, ...area);
      ctx.restore();
    };

    /* Rebuilds the breathing layer in place. Quantised alpha keeps canvas state changes to a few
       thousand a frame instead of one per pixel. */
    const paintTide = () => {
      if (!tideContext) return false;
      if (tide.width !== canvas.width || tide.height !== canvas.height) {
        tide.width = canvas.width;
        tide.height = canvas.height;
      }
      tideContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      tideContext.clearRect(0, 0, width, height);
      tideContext.fillStyle = accent;
      const t = (ambientTime / 1000) * AMBIENT_SPEED;
      let lastAlpha = -1;
      for (const pixel of pixels) {
        const wave = Math.sin(pixel.phase - t);
        const lift = (wave + 1) / 2;
        const alpha = Math.min(1, Math.round(pixel.alpha * (0.5 + 0.5 * lift) * 100) / 100);
        if (alpha !== lastAlpha) {
          tideContext.globalAlpha = alpha;
          lastAlpha = alpha;
        }
        const size = pixel.size * (0.82 + 0.32 * lift);
        tideContext.fillRect(
          Math.round(pixel.x - size / 2),
          Math.round(pixel.y - size / 2),
          Math.max(1, Math.round(size)),
          Math.max(1, Math.round(size)),
        );
      }
      tideContext.globalAlpha = 1;
      return true;
    };

    const drawAmbient = () => {
      if (!paintTide()) return;
      base = tide;
      drawn = null;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(tide, 0, 0);
      ctx.restore();
      punch(null);
    };

    const stopAmbient = () => {
      cancelAnimationFrame(ambientFrame);
      ambientFrame = 0;
      if (ambientTimer) {
        clearTimeout(ambientTimer);
        ambientTimer = 0;
      }
    };

    const ambientTick = (now: number) => {
      ambientFrame = 0;
      if (!inView || reducedMotion.matches) return;
      const dt = Math.min(80, now - ambientClock);
      ambientClock = now;
      ambientTime += dt;
      ambientAcc += dt;
      if (ambientAcc >= AMBIENT_STEP) {
        ambientAcc %= AMBIENT_STEP;
        drawAmbient();
      }
      ambientFrame = requestAnimationFrame(ambientTick);
    };

    /* Delay the idle wave long enough that it does not compete with a pointer push settling. */
    const scheduleAmbient = (delay = 0) => {
      if (
        ambientFrame ||
        ambientTimer ||
        frame ||
        !inView ||
        reducedMotion.matches
      )
        return;
      ambientTimer = window.setTimeout(() => {
        ambientTimer = 0;
        if (
          ambientFrame ||
          frame ||
          !inView ||
          reducedMotion.matches
        )
          return;
        ambientClock = performance.now();
        ambientAcc = 0;
        ambientFrame = requestAnimationFrame(ambientTick);
      }, delay);
    };

    const draw = () => {
      const range = width < 600 ? 100 : 160;
      const radius = range + PAD;
      const box =
        pointer.strength > 0.001
          ? clampBox({
              x: pointer.x - radius,
              y: pointer.y - radius,
              w: radius * 2,
              h: radius * 2,
            })
          : null;
      // Both boxes: pixels pushed by the previous frame sit outside the current one.
      let region = box;
      if (drawn) {
        region = region
          ? {
              x: Math.min(region.x, drawn.x),
              y: Math.min(region.y, drawn.y),
              w:
                Math.max(region.x + region.w, drawn.x + drawn.w) -
                Math.min(region.x, drawn.x),
              h:
                Math.max(region.y + region.h, drawn.y + drawn.h) -
                Math.min(region.y, drawn.y),
            }
          : drawn;
      }
      if (!region) return;

      restore(region);
      const { x: px, y: py, strength } = pointer;
      if (strength > 0.001) {
        const range2 = range * range;
        // A pushed pixel must not also stay at its base spot: the original cleared the frame, so
        // the disturbed area reads as a hole in the field, not as a smudge over it.
        // Device pixels with the whole hull: a fractional erase leaves the base pixel half there.
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        for (const pixel of pixels) {
          const dx = pixel.x - px;
          const dy = pixel.y - py;
          const d2 = dx * dx + dy * dy;
          if (d2 >= range2 || d2 === 0) continue;
          const size = Math.max(1, Math.round(pixel.size));
          const left = Math.round(pixel.x - pixel.size / 2);
          const top = Math.round(pixel.y - pixel.size / 2);
          const x0 = Math.floor(left * dpr);
          const y0 = Math.floor(top * dpr);
          ctx.rect(x0, y0, Math.ceil((left + size) * dpr) - x0, Math.ceil((top + size) * dpr) - y0);
        }
        ctx.fill();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = accent;
        for (const pixel of pixels) {
          const dx = pixel.x - px;
          const dy = pixel.y - py;
          const d2 = dx * dx + dy * dy;
          if (d2 >= range2 || d2 === 0) continue;
          // Push along the unit vector: cos(atan2(dy, dx)) === dx / d, so no trig.
          const d = Math.sqrt(d2);
          const force = (1 - d / range) ** 2 * strength;
          const push = (force * 28) / d;
          const size = pixel.size + force * 2;
          ctx.globalAlpha = Math.min(1, pixel.alpha + force * 0.32);
          ctx.fillRect(
            Math.round(pixel.x + dx * push - size / 2),
            Math.round(pixel.y + dy * push - size / 2),
            Math.max(1, Math.round(size)),
            Math.max(1, Math.round(size)),
          );
        }
        ctx.globalAlpha = 1;
      }
      punch(region);
      drawn = box;
    };

    const rebuild = (force = false) => {
      const rect = hero.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
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
      stopAmbient();
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
      drawn = null;
      base = field;
      paintField();
      restore(null);
      punch(null);
      scheduleAmbient(AMBIENT_RESUME);
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
      else scheduleAmbient(AMBIENT_RESUME);
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
      stopAmbient();
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
      stopAmbient();
      resetPointer();
      base = field;
      restore(null);
      punch(null);
    };

    const onMotionChange = () => {
      if (reducedMotion.matches) freeze();
      else scheduleAmbient(300);
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
    reducedMotion.addEventListener("change", onMotionChange, { signal });

    const themeObserver = new MutationObserver(() => {
      accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      stopAmbient();
      base = field;
      paintField();
      drawn = null;
      restore(null);
      punch(null);
      scheduleAmbient();
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
      else scheduleAmbient(300);
    });
    viewObserver.observe(hero);

    rebuild();
    // Hidden by CSS until here, so the reveal starts on a painted field, not a blank one.
    canvas.dataset.drawn = "";
    document.fonts?.ready.then(() => {
      if (!signal.aborted) rebuild(true);
    });

    return () => {
      controller.abort();
      cancelAnimationFrame(frame);
      stopAmbient();
      themeObserver.disconnect();
      sizeObserver.disconnect();
      viewObserver.disconnect();
    };
  }, [heroRef, canvasRef, headingRef]);
}
