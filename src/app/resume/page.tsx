import type { Metadata } from "next";

import { education } from "@/content/education";
import { roles } from "@/content/experience";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { groups } from "@/content/techstack";

const title = "Resume - Ly Phuoc Hiep";
const description =
  "Resume of Ly Phuoc Hiep, software engineer: five years building and modernizing enterprise systems in banking, procurement, and healthcare.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resume" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/resume",
    siteName: "Ly Phuoc Hiep",
    locale: "en_US",
    images: [
      { url: site.ogImage, width: 1200, height: 630, alt: "Ly Phuoc Hiep" },
    ],
  },
  twitter: { title, description, images: [site.ogImage] },
};

export default function Resume() {
  return (
    <article className="resume">
      <header className="resume-header">
        <h1>{profile.name}</h1>
        <p>
          {profile.role} / {profile.location}
        </p>
        <p className="resume-contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span aria-hidden="true"> / </span>
          <a href={profile.linkedin}>
            {profile.linkedin.replace(/^https?:\/\//, "")}
          </a>
          <span aria-hidden="true"> / </span>
          <a href={profile.github}>
            {profile.github.replace(/^https?:\/\//, "")}
          </a>
        </p>
      </header>

      <section className="resume-section" aria-labelledby="resume-experience">
        <h2 id="resume-experience">Experience</h2>
        {roles.map((role) => (
          <div className="resume-entry" key={role.company}>
            <div className="resume-entry-head">
              <h3>{role.company}</h3>
              <p className="resume-dates">{role.dates}</p>
            </div>
            <p className="resume-org">{role.title}</p>
            <p className="resume-summary">{role.summary}</p>
            <ul>
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="resume-stack">
              <span>Technologies:</span> {role.stack}
            </p>
          </div>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="resume-education">
        <h2 id="resume-education">Education</h2>
        <div className="resume-entry">
          <div className="resume-entry-head">
            <h3>{education.school}</h3>
            <p className="resume-dates">{education.dates}</p>
          </div>
          <p className="resume-org">
            {education.degree} / {education.location}
          </p>
        </div>
      </section>

      <section className="resume-section" aria-labelledby="resume-skills">
        <h2 id="resume-skills">Technical skills</h2>
        <dl className="resume-skills">
          {groups.map((group) => (
            <div key={group.title}>
              <dt>{group.title}</dt>
              <dd>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
