import { SkillCategory } from "@/types/resume";

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Vert.x" },
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
    category: "Reporting",
    items: [
      { name: "JasperReports" },
      { name: "Apache POI" },
    ],
  },
];
