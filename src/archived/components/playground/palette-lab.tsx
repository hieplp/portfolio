"use client";

import { useState } from "react";

const palettes = [
  { name: "Blue hour", colors: ["#17294A", "#25416C", "#3159CE", "#597ECA", "#A8C1F0"] },
  { name: "Forest walk", colors: ["#173C32", "#285748", "#39765D", "#70A284", "#BBD6BB"] },
  { name: "Clay studio", colors: ["#542C34", "#824451", "#AD6270", "#CF929B", "#F0C7CB"] },
  { name: "Graphite", colors: ["#252932", "#434A57", "#656E7E", "#99A2B2", "#D6DBE4"] },
];

export default function PaletteLab() {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const palette = palettes[index];

  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("no clipboard");
      await navigator.clipboard.writeText(palette.colors.join(", "));
      setFeedback("Palette colors copied.");
    } catch {
      setFeedback(
        "Select the color values above and copy them with your keyboard or device menu.",
      );
    }
  };

  return (
    <div className="palette-app" aria-label="Interactive palette explorer">
      <div className="palette-header">
        <h3>Palette lab.</h3>
        <span>COLOR, CONSIDERED.</span>
      </div>
      <div
        id="swatches"
        className="swatches"
        role="img"
        aria-label={`${palette.name} palette: ${palette.colors.join(", ")}`}
      >
        {palette.colors.map((color, position) => (
          <div
            className="swatch"
            key={color}
            style={{
              background: color,
              color: position >= 3 ? "#172133" : "#fdfdfd",
            }}
            title={color}
          >
            {(position + 1) * 100}
          </div>
        ))}
      </div>
      <div className="palette-controls">
        <p id="palette-name" aria-live="polite">{palette.name}</p>
        <div className="palette-buttons">
          <button
            id="shuffle-palette"
            type="button"
            onClick={() => {
              setIndex((index + 1) % palettes.length);
              setFeedback("");
            }}
          >
            Next palette ↻
          </button>
          <button id="copy-palette" type="button" onClick={copy}>
            Copy colors ↗
          </button>
        </div>
      </div>
      <p className="palette-values" id="palette-values">{palette.colors.join(", ")}</p>
      <p className="palette-feedback" id="palette-feedback" role="status">
        {feedback}
      </p>
    </div>
  );
}