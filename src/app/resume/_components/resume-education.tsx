import { education } from "@/data/education";
import { ResumeSection } from "./resume-section";

export function ResumeEducation() {
  return (
    <ResumeSection title="Education">
      <div className="flex flex-col gap-3">
        {education.map((ed) => (
          <div key={ed.institution}>
            <p className="font-semibold text-sm">{ed.institution}</p>
            <p className="text-xs text-muted-foreground">{ed.period}</p>
            <p className="text-sm text-muted-foreground">
              {ed.degree} — {ed.field}
            </p>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}
