import { ThemeToggle } from "@/components/theme-toggle";
import { personalInfo } from "@/config/portfolio";
import { AnimatedLogo } from "./animated-logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary pt-4">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-6">
          <AnimatedLogo
            text={personalInfo.appName}
            className="font-bold flex items-center gap-[0.05em]"
          />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
