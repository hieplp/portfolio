"use client";

import { useRef } from "react";
import { profile } from "@/content/profile";
import PosterFooter from "./poster-footer";
import PosterHeading from "./poster-heading";
import { usePixelField } from "./use-pixel-field";

/* Full-screen personal poster with an event-driven pixel field. */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  usePixelField(heroRef, canvasRef, headingRef);

  return (
    <section
      ref={heroRef}
      className="hero page-gutter"
      aria-labelledby="hero-title"
    >
      <canvas
        ref={canvasRef}
        id="poster-pixels"
        className="poster-pixels"
        aria-hidden="true"
      />
      <PosterHeading headingRef={headingRef} profile={profile} />
      <PosterFooter />
    </section>
  );
}