import { roles } from "@/content/experience";
import Position from "./position";
import SectionHeading from "./section-heading";

export default function ExperienceSection() {
  return (
    <section
      className="portfolio-section page-gutter"
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-title"
    >
      <div className="section-layout">
        <SectionHeading />
        <div className="experience-list">
          {roles.map((role, index) => (
            <Position key={index} role={role} open={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}