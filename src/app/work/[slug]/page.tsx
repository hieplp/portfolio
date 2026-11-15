import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function find(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = find((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} - ${project.company} case study`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} - ${project.company} case study`,
      description: project.description,
      url: `/work/${project.slug}`,
      siteName: "Ly Phuoc Hiep",
      locale: "en_US",
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      title: `${project.title} - ${project.company} case study`,
      description: project.description,
      images: [site.ogImage],
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = find((await params).slug);
  if (!project) notFound();

  return (
    <article className="case-study">
      <Link className="text-link" href="/#work">
        ← All projects
      </Link>
      <p className="project-type case-study-meta">
        {project.kind} / {project.company}
      </p>
      <h1>{project.title}</h1>
      <p className="project-description">{project.description}</p>
      <ul className="case-study-highlights">
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
    </article>
  );
}