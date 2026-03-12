"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectEntry } from "@/types/resume";
import { TagBadge } from "@/components/ui/tag-badge";

export interface ProjectCardProps {
  item: ProjectEntry;
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}

export function ProjectCard({
  item,
  expandable = false,
  expanded = false,
  onToggle,
}: ProjectCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        onClick={expandable ? onToggle : undefined}
        className={cn(
          "group flex flex-col gap-4 p-6 rounded-3xl border transition-all duration-300 flex-1",
          expandable ? "cursor-pointer select-none" : "",
          expandable && !expanded ? "h-[220px] overflow-hidden" : "",
          expanded
            ? "border-primary/40 shadow-lg bg-foreground/[0.02]"
            : "border-foreground/10 hover:border-primary/30 hover:shadow-md bg-foreground/[0.01]"
        )}
      >
        {/* Type badge */}
        {item.type && (
          <span className={cn(
            "self-start px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase",
            item.type === "personal"
              ? "bg-blue-500/10 text-blue-500"
              : "bg-amber-500/10 text-amber-500"
          )}>
            {item.type}
          </span>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
          <div className="flex items-center gap-2 shrink-0">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                onClick={(e) => e.stopPropagation()}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {expandable && (
              <m.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-muted-foreground"
              >
                <ChevronDown className="w-4 h-4" />
              </m.span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={cn("text-sm text-muted-foreground", expandable && !expanded && "line-clamp-2")}>
          {item.description}
        </p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="mt-auto">
            <TagBadge
              tags={item.tags}
              className="opacity-70 group-hover:bg-primary/5 group-hover:text-primary transition-colors"
            />
          </div>
        )}

        {/* Expanded highlights */}
        <AnimatePresence initial={false}>
          {expandable && expanded && item.highlights && item.highlights.length > 0 && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-2 border-t border-foreground/10">
                <p className="text-xs uppercase tracking-wider opacity-50 mb-3 mt-3">Highlights</p>
                <ul className="flex flex-col gap-2">
                  {item.highlights.map((h, i) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </LazyMotion>
  );
}
