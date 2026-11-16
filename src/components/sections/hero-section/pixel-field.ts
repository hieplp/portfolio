export type Pixel = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  /* Position in the ambient wave, in radians. */
  phase: number;
};

/* Deterministic grain field inside an elliptical envelope, brightest along a noise ridge. */
export function buildPixels(width: number, height: number): Pixel[] {
  const step = width < 600 ? 7 : 6;
  const pixels: Pixel[] = [];
  for (let y = 8; y < height * 0.9; y += step) {
    for (let x = width * 0.18; x < width - 4; x += step) {
      const nx = (x - width * 0.74) / (width * 0.54);
      const ny = (y - height * 0.4) / (height * 0.5);
      const radius = nx * nx + ny * ny;
      if (radius > 1) continue;
      const envelope = Math.pow(1 - radius, 0.6);
      const wave =
        (Math.sin(nx * 7.5 + ny * 3.2 + Math.sin(ny * 4.2) * 1.8) + 1) / 2;
      const ridge = Math.pow(wave, 1.8);
      const density = envelope * (0.2 + 0.8 * ridge);
      if (density < 0.055) continue;
      const size = 1.25 + density * (width < 600 ? 5 : 4.25);
      // density is in [0,1], so alpha stays in [0.24, 0.96] without clamping.
      pixels.push({
        x,
        y,
        size,
        alpha: 0.24 + density * 0.72,
        phase: (x / width) * 4.4 + (y / height) * 2.6,
      });
    }
  }
  return pixels;
}

/* Paints every [data-pixel-mask] run's glyphs into `mask`, in hero-local CSS pixels.
   The caller owns the canvas size and the device-pixel transform. */
export function paintGlyphMask(
  mask: CanvasRenderingContext2D,
  heading: HTMLElement,
  heroRect: DOMRect,
  width: number,
  height: number,
) {
  mask.clearRect(0, 0, width, height);
  for (const element of heading.querySelectorAll<HTMLElement>(
    "[data-pixel-mask]",
  )) {
    const textNode = element.firstChild;
    if (!textNode || textNode.nodeType !== Node.TEXT_NODE) continue;
    const value = textNode.textContent;
    if (!value?.trim()) continue;
    const baseline = element.querySelector<HTMLElement>(".pixel-baseline");
    if (!baseline) continue;

    const range = document.createRange();
    range.selectNodeContents(textNode);
    const textRect = range.getBoundingClientRect();
    const computed = getComputedStyle(element);

    mask.save();
    mask.font = `${computed.fontStyle} ${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`;
    mask.textBaseline = "alphabetic";
    mask.letterSpacing =
      computed.letterSpacing === "normal" ? "0px" : computed.letterSpacing;
    const measured = mask.measureText(value).width;
    const scale = measured > 0 ? textRect.width / measured : 1;
    // The DOM baseline is the only reliable metric: line boxes and font metrics disagree.
    mask.translate(
      textRect.left - heroRect.left,
      baseline.getBoundingClientRect().top - heroRect.top,
    );
    mask.scale(scale, 1);
    mask.fillStyle = "#000";
    mask.strokeStyle = "#000";
    mask.lineJoin = "round";
    mask.lineWidth = 8 / Math.max(scale, 0.1);
    mask.strokeText(value, 0, 0);
    mask.fillText(value, 0, 0);
    mask.restore();
  }
}
