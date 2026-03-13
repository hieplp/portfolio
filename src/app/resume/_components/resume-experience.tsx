import { experience } from "@/data/experience";
import { ResumeSection } from "./resume-section";
import type { EmbeddedProject } from "@/types/resume";

function ProjectItem({ project }: { project: EmbeddedProject }) {
  return (
    <div className="mt-4 pl-4 border-l border-foreground/10">
      <div className="flex justify-between items-baseline flex-wrap gap-x-2">
        <span className="font-semibold text-sm">{project.title}</span>
        {project.teamSize && (
          <span className="text-xs text-muted-foreground">Team size: {project.teamSize}</span>
        )}
      </div>
      {project.tags && project.tags.length > 0 && (
        <p className="text-xs text-muted-foreground mt-0.5">
          Tech stack: {project.tags.join(", ")}
        </p>
      )}
      {project.highlights && project.highlights.length > 0 && (
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5 mt-1.5">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ResumeExperience() {
  return (
    <ResumeSection title="Experience">
      <div className="flex flex-col gap-8">
        {experience.map((entry) => (
          <div key={entry.company}>
            <div className="flex justify-between items-baseline flex-wrap gap-x-2">
              <span className="font-bold text-primary">{entry.company}</span>
              <span className="text-xs text-muted-foreground">{entry.period}</span>
            </div>
            <p className="text-sm italic text-muted-foreground mb-1">{entry.role}</p>
            <p className="text-sm text-muted-foreground mb-2">{entry.description}</p>

            {entry.projects && entry.projects.length > 0 && (
              <div className="flex flex-col gap-3">
                {entry.projects.map((project) => (
                  <ProjectItem key={project.title} project={project} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}
