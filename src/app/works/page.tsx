import type { Metadata } from "next";
import Link from "next/link";

// The v2 /works page is retired; keep the URL alive so parked links and the old
// sitemap entry land on the section instead of a 404, and fold it into "/".
export const metadata: Metadata = {
  title: "Work experience",
  alternates: { canonical: "/" },
};

export default function Works() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/#experience" />
      <section className="case-study">
        <h1>Work experience</h1>
        <p className="project-description">
          This page moved to the home page. Continue to{" "}
          <Link className="text-link" href="/#experience">
            professional experience
          </Link>
          .
        </p>
      </section>
    </>
  );
}