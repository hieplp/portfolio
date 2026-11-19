"use client";

import { useState } from "react";

import type { Project } from "@/content/projects";
import ProjectCard from "@/components/sections/projects-section/project-card";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [name, setName] = useState("");
  const [kind, setKind] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagQuery, setTagQuery] = useState("");

  const kinds = [...new Set(projects.map((p) => p.kind))];
  // One checkbox per technology, first appearance first.
  const allTags = [...new Set(projects.flatMap((p) => p.stack.split(" / ")))];
  const shownTags = allTags.filter((tag) =>
    tag.toLowerCase().includes(tagQuery.trim().toLowerCase()),
  );
  const query = name.trim().toLowerCase();

  const shown = projects.filter(
    (p) =>
      (!query || p.title.toLowerCase().includes(query)) &&
      (!kind || p.kind === kind) &&
      (tags.length === 0 || tags.some((tag) => p.stack.split(" / ").includes(tag))),
  );

  return (
    <>
      <div className="project-filters">
        <input
          className="project-search"
          type="search"
          placeholder="Search by name"
          aria-label="Search projects by name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <details className="project-tech">
          <summary className="project-filter">
            Tech stack
            {tags.length > 0 && ` (${tags.length})`}
          </summary>
          <div
            className="project-tech-menu"
            role="group"
            aria-label="Filter by technology"
          >
            <input
              className="project-search"
              type="search"
              placeholder="Find a technology"
              aria-label="Find a technology"
              value={tagQuery}
              onChange={(event) => setTagQuery(event.target.value)}
            />
            <div className="project-tech-options">
              {shownTags.map((tag) => (
                <label key={tag}>
                  <input
                    type="checkbox"
                    checked={tags.includes(tag)}
                    onChange={() =>
                      setTags((current) =>
                        current.includes(tag)
                          ? current.filter((item) => item !== tag)
                          : [...current, tag],
                      )
                    }
                  />
                  {tag}
                </label>
              ))}
              {shownTags.length === 0 && (
                <p className="project-tech-none">No technologies match.</p>
              )}
            </div>
          </div>
        </details>
        <div className="project-types" role="group" aria-label="Filter by project type">
          <button
            type="button"
            className="project-filter"
            aria-pressed={kind === ""}
            onClick={() => setKind("")}
          >
            All types
          </button>
          {kinds.map((item) => (
            <button
              key={item}
              type="button"
              className="project-filter"
              aria-pressed={kind === item}
              onClick={() => setKind(item)}
            >
              {item.replace(" project", "")}
            </button>
          ))}
        </div>
      </div>
      <p className="project-index-count" aria-live="polite">
        {shown.length} of {projects.length} projects.
      </p>
      {shown.length === 0 ? (
        <p className="project-empty">No projects match these filters.</p>
      ) : (
        <div className="project-index-grid">
          {shown.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
