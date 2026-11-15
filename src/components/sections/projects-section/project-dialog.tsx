import { useEffect, useId, useRef } from "react";
import type { Project } from "@/content/projects";

/* Every project's dialog is rendered so its case-study copy is in the DOM, not only in props.
   Only the one selected modal opens; the rest stay display:none. */
export default function ProjectDialog({
  project,
  open,
  onClose,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const close = () => onClose();
    dialog.addEventListener("close", close);
    return () => dialog.removeEventListener("close", close);
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <div className="dialog-top">
        <div>
          <p className="dialog-meta">
            {project.kind} / {project.company}
          </p>
          <h2 id={titleId}>{project.title}</h2>
        </div>
        <button
          type="button"
          className="dialog-close"
          aria-label={`Close ${project.title} case study`}
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