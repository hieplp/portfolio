import { skills } from "@/data/skills";
import { Section } from "@/components/sections/section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-4 p-6 rounded-3xl border border-foreground/10 bg-foreground/[0.01]"
          >
            <h3 className="text-xs font-medium uppercase tracking-wider opacity-60">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 rounded-md bg-foreground/5 text-sm font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
