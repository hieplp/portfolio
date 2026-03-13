import { profile } from "@/data/profile";
import { ResumeSection } from "./resume-section";

export function ResumeSummary() {
  return (
    <ResumeSection title="Summary">
      {profile.about?.paragraphs.map((p) => (
        <p key={p} className="text-sm text-muted-foreground leading-relaxed mb-2">
          {p}
        </p>
      ))}
    </ResumeSection>
  );
}
