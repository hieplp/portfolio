"use client";

import { useEffect, useSyncExternalStore } from "react";
import { applyTheme, THEME_STORAGE_KEY, type Theme } from "@/content/theme";

/* Theme lives on <html data-theme>, set before paint by the inline script. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function serverTheme(): Theme {
  return "light";
}

function storeTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, serverTheme);

  // Follow the OS default only while the user has not picked a theme.
  useEffect(() => {
    const system = matchMedia("(prefers-color-scheme:dark)");
    const onChange = (event: MediaQueryListEvent) => {
      let saved = null;
      try {
        saved = localStorage.getItem(THEME_STORAGE_KEY);
      } catch {}
      if (!saved) applyTheme(event.matches ? "dark" : "light");
    };
    system.addEventListener("change", onChange);
    return () => system.removeEventListener("change", onChange);
  }, []);

  return {
    theme,
    // Read the live attribute, not the render snapshot: a click during hydration lag must still flip.
    toggle: () => storeTheme(readTheme() === "dark" ? "light" : "dark"),
  };
}