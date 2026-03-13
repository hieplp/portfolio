import { skills } from "@/data/skills";
import { ResumeSection } from "./resume-section";

export function ResumeSkills() {
  return (
    <ResumeSection title="Skills">
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
    </ResumeSection>
  );
}
