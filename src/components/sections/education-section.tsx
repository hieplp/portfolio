import { education } from "@/data/education";
import { Section } from "@/components/sections/section";
import { EducationEntry } from "@/types/resume";

function EducationCard({ item }: { item: EducationEntry }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-3xl border border-foreground/10 bg-foreground/[0.01]">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-wider opacity-60">{item.degree}</p>
        <h3 className="text-xl font-semibold">{item.institution}</h3>
        <p className="text-sm text-muted-foreground">{item.field} · {item.period}</p>
        {item.gpa && (
          <p className="text-xs text-muted-foreground">GPA: {item.gpa}</p>
        )}
      </div>

      {item.highlights && item.highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {item.highlights.map((h) => (
            <span
              key={h}
              className="px-2.5 py-1 rounded-md bg-foreground/5 text-[10px] font-medium tracking-wider opacity-70"
            >
              {h}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and certifications">
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <EducationCard key={item.institution} item={item} />
        ))}
      </div>
    </Section>
  );
}
