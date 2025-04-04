import { experiences } from "@/config/portfolio";
import { ExperienceItem } from "./experience-item";

export function ExperienceList() {
  return (
    <div className="space-y-2">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} index={index} />
      ))}
    </div>
  );
} 