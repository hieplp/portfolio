"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/data/profile";

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-screen top-0 left-0 z-50 backdrop-blur-md flex justify-center px-0 py-4 md:py-8">
      <div className="flex items-center justify-between max-w-6xl w-full px-4 md:px-0">
        {/* Logo */}
        <button className="flex items-center gap-3 font-medium tracking-tight cursor-pointer text-lg">
          <span className="text-primary font-bold">{profile.name}</span>
        </button>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 dark:hidden" strokeWidth={1.5} />
            <Moon className="w-5 h-5 hidden dark:block" strokeWidth={1.5} />
          </button>

          {/* Mobile — Sheet */}
          <Sheet>
            <SheetTrigger
              className="md:hidden p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0">
              <SheetHeader className="px-4 py-4">
                <SheetTitle className="flex items-center gap-3 font-medium tracking-tight py-2">
                  <span className="text-primary font-medium text-lg">
                    {profile.name}
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2 mt-2">
                {links.map((link) => (
                  <button
                    key={link.href}
                    className="py-2 px-3 rounded-md opacity-70 hover:opacity-100 hover:bg-accent transition-all text-left w-full"
                    onClick={() =>
                      document
                        .getElementById(link.href.slice(1))
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
