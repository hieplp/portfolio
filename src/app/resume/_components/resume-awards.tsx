import { ResumeSection } from "./resume-section";

const awards = [
  {
    title: "Staff of the Year",
    company: "INTELIN",
    date: "January 2023",
    description:
      "Recognized for outstanding performance and significant contributions to the organization",
  },
];

export function ResumeAwards() {
  return (
    <ResumeSection title="Awards">
      <div className="flex flex-col gap-3">
        {awards.map((award) => (
          <div key={award.title}>
            <p className="font-semibold text-sm text-primary">{award.title}</p>
            <p className="text-xs text-muted-foreground">
              {award.company} · {award.date}
            </p>
            <p className="text-sm text-muted-foreground">{award.description}</p>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}
