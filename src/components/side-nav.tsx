"use client";

import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMemo } from "react";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function SideNav() {
  const sectionIds = useMemo(() => links.map((l) => l.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-0">
          {links.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                aria-label={label}
                className="group relative flex items-center justify-center p-2"
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              >
                <span
                  className={cn(
                    "block rounded-full border transition-all duration-300",
                    isActive
                      ? "w-2.5 h-2.5 bg-primary border-primary"
                      : "w-2 h-2 bg-transparent border-muted-foreground/40 group-hover:border-foreground"
                  )}
                />
                {/* Tooltip */}
                <span className="absolute right-full mr-2 px-2 py-0.5 rounded-md text-xs font-medium bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {label}
                </span>
              </button>
            );
          })}
    </aside>
  );
}
