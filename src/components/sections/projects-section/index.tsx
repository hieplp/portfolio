import { projects } from "@/content/projects";
import ProjectRail from "./project-rail";
import SectionHeading from "./section-heading";

export default function ProjectsSection() {
  return (
    <section
      className="portfolio-section page-gutter"
      id="work"
      tabIndex={-1}
      aria-labelledby="work-title"
    >
      <SectionHeading />
      <ProjectRail projects={projects} />
    </section>
  );
}