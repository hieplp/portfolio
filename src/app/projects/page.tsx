import type { Metadata } from "next";
import Link from "next/link";

// Same retirement as /works: the v2 /projects list is now the home page rail.
export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/" },
};

export default function Projects() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/#work" />
      <section className="case-study">
        <h1>Projects</h1>
        <p className="project-description">
          This page moved to the home page. Continue to{" "}
          <Link className="text-link" href="/#work">
            selected projects
          </Link>
          .
        </p>
      </section>
    </>
  );
}