"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Users, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectEntry } from "@/types/resume";
import { TagBadge } from "@/components/ui/tag-badge";

function TypeBadge({ type }: { type: ProjectEntry["type"] }) {
  if (!type) return null;
  return (
    <span className={cn(
      "self-start px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase",
      type === "personal" ? "bg-blue-500/10 text-blue-500" : "bg-amber-500/10 text-amber-500"
    )}>
      {type}
    </span>
  );
}

export function ProjectModal({ item, onClose }: { item: ProjectEntry; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return createPortal(
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <m.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl border border-foreground/10 bg-secondary shadow-2xl p-8 flex flex-col gap-5"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-foreground/5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <TypeBadge type={item.type} />
        <div className="flex items-start justify-between gap-4 pr-8">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-2xl font-bold tracking-tight">{item.title}</h2>
            {item.company && (
              <p className="text-xs text-muted-foreground">{item.company}</p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {item.github && (
              <a href={item.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="opacity-50 hover:opacity-100 transition-opacity">
                <Github className="w-5 h-5" />
              </a>
            )}
            {item.url && (
              <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                className="opacity-50 hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        {item.teamSize && (
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="w-4 h-4 shrink-0" />
            <span>Team size: {item.teamSize}</span>
          </div>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        {item.highlights && item.highlights.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider opacity-50">Highlights</p>
            <ul className="flex flex-col gap-2">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
        {item.tags.length > 0 && (
          <div className="pt-2 border-t border-foreground/10">
            <TagBadge tags={item.tags} className="opacity-70" />
          </div>
        )}
      </m.div>
    </m.div>,
    document.body
  );
}

export function ProjectCardModal({ item }: { item: ProjectEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={cn(
          "group flex flex-col gap-4 p-6 rounded-3xl border cursor-pointer select-none",
          "transition-all duration-300",
          "border-foreground/10 hover:border-primary/30 hover:shadow-md bg-foreground/[0.01]"
        )}
      >
        <TypeBadge type={item.type} />
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
            {item.company && (
              <p className="text-xs text-muted-foreground">{item.company}</p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {item.github && (
              <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                <Github className="w-4 h-4" />
              </span>
            )}
            {item.url && (
              <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        {item.tags.length > 0 && (
          <div className="mt-auto">
            <TagBadge
              tags={item.tags}
              className="opacity-70 group-hover:bg-primary/5 group-hover:text-primary transition-colors"
            />
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && <ProjectModal item={item} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </LazyMotion>
  );
}
