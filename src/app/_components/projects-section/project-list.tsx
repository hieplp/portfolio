import { ProjectItem, ProjectProps } from "./project-item";

const projects: Omit<ProjectProps, "index">[] = [
  {
    title: "MarketingDX",
    company: "Posco DX",
    description: [
      "Developed full-stack solution at Posco DX by migrating legacy system to Spring Boot/Oracle.",
      "Implemented data access layer with JPA and built dynamic interfaces using IBSheet/jQuery.",
    ],
    skills: ["Spring Boot", "JPA", "Oracle", "IBSheet", "jQuery"],
  },
  {
    title: "CCash",
    company: "Techcombank",
    description: [
      "Developed backend for banking liquidity system at Techcombank using Spring Boot and Oracle.",
      "Created encryption testing tool and refactored services for new database schema with JUnit/Mockito tests.",
    ],
    skills: ["Spring Boot", "Oracle", "JUnit", "Mockito"],
  },
  {
    title: "Giot Mau Vang",
    company: "Intelin",
    description: [
      "Developed backend for blood donation platform at Intelin using Vert.x and MariaDB.",
      "Refactored services, integrated with hospital systems, and generated reports using JasperReports.",
    ],
    hasLink: true,
    skills: ["Vert.x", "MariaDB", "JasperReports"],
  },
  {
    title: "Me Easy",
    company: "Intelin",
    description: [
      "Developed backend for pregnancy/parenting platform at Intelin using Vert.x and MariaDB.",
      "Implemented caching (Redis), messaging (RabbitMQ) and report generation (Apache POI).",
    ],
    hasLink: true,
    skills: ["Vert.x", "MariaDB", "Redis", "RabbitMQ", "Apache POI"],
  },
];

export function ProjectList() {
  return (
    <div className="space-y-2">
      {projects.map((project, index) => (
        <ProjectItem key={project.title} {...project} index={index} />
      ))}
    </div>
  );
} 