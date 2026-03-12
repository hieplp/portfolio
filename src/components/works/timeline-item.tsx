import { ArrowUpRight } from "lucide-react";
import { ExperienceEntry } from "@/types/resume";
import { CompanyProjects } from "./company-projects";
import { TagBadge } from "@/components/ui/tag-badge";

export function TimelineItem({ item, isLast }: { item: ExperienceEntry; isLast: boolean }) {
  return (
    <div className="relative flex gap-8">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/10 shrink-0 mt-1.5" />
        {!isLast && <div className="w-px flex-1 mt-2 border-l-2 border-dashed border-foreground/15" />}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 pb-12 flex-1 min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
              {item.role}
            </p>
            <h3 className="text-2xl font-semibold">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors group"
                >
                  {item.company}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                item.company
              )}
            </h3>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap pt-1">
            {item.period}
          </span>
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <TagBadge tags={item.tags} />
        )}

        {/* Description */}
        {item.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <ul className="flex flex-col gap-2">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Associated Projects */}
        {item.projects && item.projects.length > 0 && (
          <CompanyProjects
            projects={item.projects.map((p) => ({ ...p, company: item.company, type: "company" as const }))}
          />
        )}
      </div>
    </div>
  );
}
