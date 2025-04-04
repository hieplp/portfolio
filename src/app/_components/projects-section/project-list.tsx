import { projects } from "@/config/portfolio";
import { ProjectItem } from "./project-item";

export function ProjectList() {
  return (
    <div className="space-y-2">
      {projects.map((project, index) => (
        <ProjectItem key={project.title} {...project} index={index} />
      ))}
    </div>
  );
}
