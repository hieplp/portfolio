"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  applyTheme,
  initials,
  profile,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/archived/content/profile";

const homeLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#stack", label: "Tech stack" },
  { href: "#about", label: "About" },
  { href: "/playground", label: "Playground ↗", route: true },
  { href: "#contact", label: "Contact" },
];

const playgroundLinks = [
  { href: "/", label: "← Portfolio", route: true },
  { href: "#commit", label: "Task planner" },
  { href: "#palette", label: "Color explorer" },
];

/** Theme lives on <html data-theme>, set before paint by the inline script. */
function subscribeTheme(onChange: () => void) {
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

export default function SiteHeader({ variant }: { variant: "home" | "playground" }) {
  const [open, setOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, readTheme, serverTheme);
  const links = variant === "home" ? homeLinks : playgroundLinks;

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

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      {variant === "home" ? (
        <a
          className="brand"
          href="#top"
          aria-label="Portfolio home"
          onClick={closeMenu}
        >
          <span>{profile.name}</span>
        </a>
      ) : (
        <Link
          className="brand"
          href="/"
          aria-label="Back to portfolio"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          <span>{profile.name}</span>
        </Link>
      )}
      <button
        className="menu-toggle"
        type="button"
        id="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        className={`nav${open ? " is-open" : ""}`}
        id="navigation"
        aria-label={variant === "home" ? "Main navigation" : "Playground navigation"}
      >
        {links.map((link) =>
          link.route ? (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ) : (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ),
        )}
      </nav>
      <button
        type="button"
        className="theme-toggle"
        id="theme-toggle"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}
