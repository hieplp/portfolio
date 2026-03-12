import { SkillCategory } from "@/types/resume";

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Vert.x" },
      { name: "jOOQ" },
      { name: "MyBatis" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "jQuery" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "Oracle" },
      { name: "MariaDB" },
      { name: "PostgreSQL" },
    ],
  },
  {
    category: "Messaging & Cache",
    items: [
      { name: "RabbitMQ" },
      { name: "Redis" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GitHub Copilot" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "JUnit" },
      { name: "Mockito" },
    ],
  },
  {
    category: "Reporting & Data",
    items: [
      { name: "JasperReports" },
      { name: "Apache POI" },
    ],
  },
];
