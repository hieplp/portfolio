export type Role = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  responsibilities: string[];
  stack: string;
};

export const roles: Role[] = [
  {
    company: "POSCO DX",
    title: "IT Developer",
    dates: "Jan 2024 - Present",
    summary:
      "Modernizing and extending enterprise internal systems, focused on legacy migration and maintainable architecture.",
    responsibilities: [
      "Migrated Servlet-based systems to Spring Boot microservices (MarketingDX, PurchaseDX).",
      "Refactored business logic into a service-based structure for modularity and maintainability.",
      "Implemented the data access layer with JPA and MyBatis against Oracle.",
      "Led the IndoRefresh migration project: Swing to JavaFX, Java 1.4 to Java 21, JDBC to Glue Framework.",
      "Designed the prompts behind AI-assisted code conversion with GitHub Copilot, cutting estimated migration effort by 60%.",
    ],
    stack: "Spring Boot / Oracle / jQuery / IBSheet / JavaFX / GitHub Copilot",
  },
  {
    company: "CMC Global",
    title: "Software Engineer",
    dates: "Oct 2023 - Dec 2023",
    summary:
      "Short-term contract onsite at Techcombank, building banking APIs and QA tooling in an Agile team.",
    responsibilities: [
      "Built CCash, an internal tool that lets the QA team simulate encrypted banking API requests.",
      "Updated and maintained APIs through database schema changes.",
      "Wrote unit tests with JUnit and Mockito, reaching over 95% coverage.",
    ],
    stack: "Spring Boot / Oracle / JUnit / Mockito",
  },
  {
    company: "INTELIN",
    title: "Backend Engineer",
    dates: "Mar 2021 - Jul 2023",
    summary:
      "Built and maintained backend systems for two product platforms, covering API design, integration, and scale.",
    responsibilities: [
      "Designed REST APIs for donor registration, appointment scheduling, and donation tracking (Giọt Máu Vàng).",
      "Integrated the platform with third-party hospital systems.",
      "Generated per-hospital donation reports and blood request forms with JasperReports.",
      "Joined Mẹ Easy from ideation to production, setting project structure and coding standards.",
      "Built APIs for social features: posts, challenges, comments, and user feeds.",
    ],
    stack: "Vert.x / jOOQ / MariaDB / Redis / RabbitMQ / JasperReports / Apache POI",
  },
  {
    company: "FPT Software",
    title: "Software Engineer Intern",
    dates: "Sep 2019 - Dec 2019",
    summary:
      "Frontend pages and backend APIs for a Japanese outsourcing project.",
    responsibilities: [
      "Developed frontend pages with Vue.js and ElementUI.",
      "Built backend APIs with Spring Boot and PostgreSQL.",
    ],
    stack: "Vue.js / ElementUI / Spring Boot / PostgreSQL",
  },
];