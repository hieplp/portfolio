import type { Metadata } from "next";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

export const metadata: Metadata = { title: "Resume" };

const awards = [
  {
    title: "Staff of the Year",
    company: "INTELIN",
    date: "January 2023",
    description:
      "Recognized for outstanding performance and significant contributions to the organization",
  },
];

export default function ResumePage() {
  return (
    <main className="max-w-6xl w-full  mx-auto px-5 py-32">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to home
        </Link>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 border border-border px-5 py-2 rounded-full text-sm font-medium hover:bg-accent transition-colors"
        >
          <Download className="w-4 h-4" strokeWidth={1.5} />
          Download PDF
        </a>
      </div>

      {/* Header */}
      <div className="border-b-2 border-primary pb-5 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-primary font-medium text-lg mt-1">{profile.title}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
          <span>{profile.contact.phone}</span>
          <span>{profile.contact.email}</span>
          <a href={profile.contact.linkedin} aria-label="LinkedIn profile" className="hover:text-primary transition-colors">
            {profile.contact.linkedin.replace("https://", "")}
          </a>
          <a href={profile.contact.github} aria-label="GitHub profile" className="hover:text-primary transition-colors">
            {profile.contact.github.replace("https://", "")}
          </a>
          {profile.about?.location && <span>{profile.about.location}</span>}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <SectionHeader title="Summary" />
        {profile.about?.paragraphs.map((p) => (
          <p key={p} className="text-sm text-muted-foreground leading-relaxed mb-2">
            {p}
          </p>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <SectionHeader title="Skills" />
        <div className="flex flex-col gap-1.5">
          {skills.map((cat) => (
            <p key={cat.category} className="text-sm">
              <strong>{cat.category}:</strong>{" "}
              <span className="text-muted-foreground">
                {cat.items.map((i) => i.name).join(", ")}
              </span>
            </p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <SectionHeader title="Experience" />
        <div className="flex flex-col gap-6">
          {experience.map((entry) => (
            <div key={entry.company}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-primary">{entry.company}</span>
                <span className="text-xs text-muted-foreground">{entry.period}</span>
              </div>
              <p className="text-sm italic text-muted-foreground mb-1">{entry.role}</p>
              <p className="text-sm text-muted-foreground mb-2">{entry.description}</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {entry.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education + Awards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <SectionHeader title="Education" />
          {education.map((ed) => (
            <div key={ed.institution}>
              <p className="font-semibold text-sm">{ed.institution}</p>
              <p className="text-xs text-muted-foreground">{ed.period}</p>
              <p className="text-sm text-muted-foreground">
                {ed.degree} — {ed.field}
              </p>
            </div>
          ))}
        </section>
        <section>
          <SectionHeader title="Awards" />
          {awards.map((award) => (
            <div key={award.title}>
              <p className="font-semibold text-sm text-primary">{award.title}</p>
              <p className="text-xs text-muted-foreground">
                {award.company} · {award.date}
              </p>
              <p className="text-sm text-muted-foreground">{award.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-3">
      {title}
    </h2>
  );
}
