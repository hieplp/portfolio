"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/content/projects";
import ProjectCard from "./project-card";
import ProjectDialog from "./project-dialog";

const GAP = 16;

export default function ProjectRail({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [selected, setSelected] = useState<Project | null>(null);
  const closeDialog = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setEdges({
        start: track.scrollLeft <= 1,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function step(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({
      left: direction * ((card?.offsetWidth ?? track.clientWidth) + GAP),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  return (
    <>
      <div className="project-grid" ref={trackRef}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>
      <div className="rail-controls">
        <button
          type="button"
          className="rail-button"
          aria-label="Previous projects"
          disabled={edges.start}
          onClick={() => step(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className="rail-button"
          aria-label="Next projects"
          disabled={edges.end}
          onClick={() => step(1)}
        >
          →
        </button>
      </div>
      {projects.map((project) => (
        <ProjectDialog
          key={project.title}
          project={project}
          open={selected === project}
          onClose={closeDialog}
        />
      ))}
    </>
  );
}