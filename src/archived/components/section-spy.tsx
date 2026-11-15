"use client";

import { useEffect } from "react";

/** Anchor navigation with focus handoff, plus aria-current tracking for the nav. */
export default function SectionSpy() {
  useEffect(() => {
    const reduced = () => matchMedia("(prefers-reduced-motion:reduce)").matches;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const href = link?.getAttribute("href");
      if (!link || !href) return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduced() ? "instant" : "smooth" });
      if (target.hasAttribute("tabindex")) target.focus({ preventScroll: true });
      if (href === "#top") {
        document.querySelector<HTMLElement>(".brand")?.focus({ preventScroll: true });
      }
    };
    document.addEventListener("click", onClick);

    const links = [...document.querySelectorAll<HTMLAnchorElement>(".nav a")];
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!active) return;
        links.forEach((link) => {
          if (link.getAttribute("href") === `#${active.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: [0, 0.1, 0.3] },
    );
    document.querySelectorAll("main > section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, []);

  return null;
}