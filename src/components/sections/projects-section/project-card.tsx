import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="project-type">
        <span
          className="project-tag"
          data-kind={project.kind === "Company project" ? "company" : "personal"}
        >
          {project.kind}
        </span>{" "}
        / {project.company}
      </p>
      <h3>
        <Link href={`/work/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="project-description">{project.description}</p>
      <dl className="project-facts">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Team</dt>
          <dd>{project.team}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>{project.stack}</dd>
        </div>
      </dl>
      <Link className="project-open" href={`/work/${project.slug}`}>
        Read case study <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}