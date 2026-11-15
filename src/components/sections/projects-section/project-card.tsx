import type { Project } from "@/content/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
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
      <h3>{project.title}</h3>
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
      <button
        className="project-open"
        type="button"
        aria-haspopup="dialog"
        onClick={onOpen}
      >
        Read case study <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}