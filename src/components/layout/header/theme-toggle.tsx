"use client";

import { useTheme } from "./use-theme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={toggle}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}