import { groups } from "@/content/techstack";
import SectionHeading from "./section-heading";
import StackGroup from "./stack-group";

export default function TechstackSection() {
  return (
    <section
      className="portfolio-section page-gutter"
      id="stack"
      tabIndex={-1}
      aria-labelledby="stack-title"
    >
      <div className="section-layout">
        <SectionHeading />
        <div className="skill-grid">
          {groups.map((group) => (
            <StackGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}