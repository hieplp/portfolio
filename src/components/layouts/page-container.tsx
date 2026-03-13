import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={cn("max-w-6xl w-full mx-auto px-5 md:px-0 py-32", className)}>
      {children}
    </main>
  );
}
