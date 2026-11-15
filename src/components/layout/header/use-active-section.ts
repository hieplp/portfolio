"use client";

import { useEffect, useState } from "react";

/**
 * Section ids in document order, lowest nav priority last. A single source for
 * both the nav links and the active-section read, so they cannot drift apart.
 */
export const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "stack", label: "Tech stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

const LINE = 0.45;

/** The section owning the line at 45% of the viewport; none while the hero shows. */
export function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * LINE;
      let current = "";
      for (const { id } of SECTIONS) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      // The last section can never cross the line when the page bottoms out.
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = SECTIONS[SECTIONS.length - 1].id;
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}