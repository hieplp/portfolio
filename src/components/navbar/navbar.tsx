import { ThemeToggle } from "../theme-toggle";

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary pt-4">
      <div className="flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <h1 className="font-bold">Hiep.LP</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
