"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectEntry } from "@/types/resume";
import { ProjectModal } from "@/components/project/project-card-modal";

export function CompanyProjects({ projects }: { projects: ProjectEntry[] }) {
  const [selected, setSelected] = useState<ProjectEntry | null>(null);
  const companyProjects = projects;

  if (companyProjects.length === 0) return null;

  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Projects
        </p>
        <div className="flex flex-wrap gap-2">
          {companyProjects.map((project) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelected(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] text-sm hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer"
            >
              {project.title}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
