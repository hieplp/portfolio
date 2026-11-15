export type StackGroup = {
  title: string;
  items: string[];
};

export const groups: StackGroup[] = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Vert.x", "JPA", "jOOQ", "MyBatis"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "jQuery", "IBSheet"],
  },
  {
    title: "Data",
    items: ["Oracle", "MariaDB", "PostgreSQL", "Redis", "RabbitMQ"],
  },
  {
    title: "Delivery",
    items: ["Docker", "Kubernetes", "GitHub Copilot"],
  },
  {
    title: "Quality",
    items: ["JUnit", "Mockito", "JasperReports", "Apache POI"],
  },
];