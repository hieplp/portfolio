"use client";

import { useRef } from "react";

import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = `project-${project.slug}-title`;

  return (
    <>
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
          <button type="button" onClick={() => dialog.current?.showModal()}>
            {project.title}
          </button>
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
        <button
          type="button"
          className="project-open"
          onClick={() => dialog.current?.showModal()}
        >
          View details <span aria-hidden="true">→</span>
        </button>
      </article>

      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="project-dialog-body">
          <div className="project-dialog-head">
            <p className="project-type">
              <span
                className="project-tag"
                data-kind={
                  project.kind === "Company project" ? "company" : "personal"
                }
              >
                {project.kind}
              </span>{" "}
              / {project.company}
            </p>
            <button
              type="button"
              className="project-dialog-close"
              aria-label="Close"
              onClick={() => dialog.current?.close()}
            >
              ×
            </button>
          </div>
          <h2 id={titleId}>{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <ul className="project-highlights">
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
            <a
              className="button"
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </dialog>
    </>
  );
}
