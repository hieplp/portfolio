import { useEffect, useRef } from "react";
import type { Project } from "@/content/projects";

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const close = () => onClose();
    dialog.addEventListener("close", close);
    return () => {
      document.body.style.overflow = overflow;
      dialog.removeEventListener("close", close);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <div className="dialog-top">
        <div>
          <p className="dialog-meta">
            {project.kind} / {project.company}
          </p>
          <h2 id="project-dialog-title">{project.title}</h2>
        </div>
        <button
          type="button"
          className="dialog-close"
          aria-label="Close case study"
          onClick={() => dialogRef.current?.close()}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="dialog-body">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

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

      {project.link && (
        <div className="dialog-actions">
          <a
            className="button"
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.label} <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </dialog>
  );
}