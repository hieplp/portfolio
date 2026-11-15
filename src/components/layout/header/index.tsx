"use client";

import Brand from "./brand";
import Nav from "./nav";
import ThemeToggle from "./theme-toggle";
import { useActiveSection } from "./use-active-section";
import { useMenu } from "./use-menu";

export default function Header() {
  const { open, toggle, close } = useMenu();
  const active = useActiveSection();

  return (
    <header className="site-header">
      <Brand onClick={close} />
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={toggle}
      >
        {open ? "Close" : "Menu"}
      </button>
      <Nav active={active} open={open} onNavigate={close} />
      <ThemeToggle />
    </header>
  );
}