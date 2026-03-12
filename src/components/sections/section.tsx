import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  href?: string;
  subtitle?: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  className?: string;
  noBorder?: boolean;
}

export function Section({
  id,
  title,
  href,
  subtitle,
  children,
  headerRight,
  className,
  noBorder = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col max-w-6xl w-full mx-auto py-24",
        !noBorder && "border-t border-foreground/10",
        className
      )}
    >
      <AnimatedSection>
        <div className={cn("mb-10", headerRight && "flex items-center justify-between")}>
          <div>
            {href ? (
              <Link href={href} className="group inline-flex items-center gap-2 hover:text-primary transition-colors">
                <h2 className="text-3xl font-bold tracking-tight mb-1">{title}</h2>
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-200 mb-1" />
              </Link>
            ) : (
              <h2 className="text-3xl font-bold tracking-tight mb-1">{title}</h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-sm">{subtitle}</p>
            )}
          </div>
          {headerRight}
        </div>

        {children}
      </AnimatedSection>
    </section>
  );
}
