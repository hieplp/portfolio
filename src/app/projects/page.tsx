import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "@/content/projects";
import ProjectFilter from "./project-filter";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of enterprise systems built and modernized in banking, procurement, marketing, and healthcare.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <section className="project-index">
      <Link className="text-link" href="/">
        <span aria-hidden="true">←</span> Home
      </Link>
      <h1>All projects.</h1>
      <p className="project-index-intro">
        {projects.length} systems I built or rebuilt. Enterprise work, so the
        case studies are written rather than screenshotted. Filter by name,
        type, or tech stack, then open one for the details.
      </p>
      <ProjectFilter projects={projects} />
    </section>
  );
}
