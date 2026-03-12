"use client";

import { useEffect, useState, useRef } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const historyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      let closest = sectionIds[0];
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const sectionCenter = el.offsetTop + el.offsetHeight / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = id;
        }
      });

      setActiveSection(closest);

      // Debounce history.replaceState to prevent iOS IPC flooding throttling
      if (historyTimeoutRef.current) {
        clearTimeout(historyTimeoutRef.current);
      }
      historyTimeoutRef.current = setTimeout(() => {
        history.replaceState(null, "", `#${closest}`);
      }, 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (historyTimeoutRef.current) {
        clearTimeout(historyTimeoutRef.current);
      }
    };
  }, [sectionIds]);

  return activeSection;
}
