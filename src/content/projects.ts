export type Project = {
  kind: "Company project" | "Personal project";
  company: string;
  title: string;
  description: string;
  role: string;
  team: string;
  stack: string;
  highlights: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    kind: "Company project",
    company: "POSCO DX",
    title: "IndoRefresh",
    description:
      "A large Java legacy system migrated with GitHub Copilot, cutting estimated effort by 60%.",
    role: "IT Developer, migration lead",
    team: "10 engineers",
    stack: "JavaFX / Glue Framework / GitHub Copilot / Java 21",
    highlights: [
      "Analyzed a system built on Swing, Java 1.4, JDBC, JavaEE, and EJB.",
      "Migrated modules and redesigned the UI: Swing to JavaFX, Java 1.4 to Java 21, JDBC to Glue Framework.",
      "Designed the prompts that drive AI-assisted code conversion.",
      "Reduced estimated migration effort by 60%.",
    ],
  },
  {
    kind: "Company project",
    company: "POSCO DX",
    title: "MarketingDX",
    description:
      "A Servlet-era internal marketing system rebuilt as Spring Boot microservices.",
    role: "IT Developer",
    team: "4 engineers",
    stack: "Spring Boot / jQuery / IBSheet / IBChart / Oracle / JPA / MyBatis",
    highlights: [
      "Migrated the Servlet-based system to a Spring Boot microservice architecture.",
      "Refactored business logic into a service-based structure for modularity.",
      "Implemented the data access layer with JPA and MyBatis for Oracle.",
      "Modernized frontend components with jQuery, IBSheet, and IBChart.",
    ],
  },
  {
    kind: "Company project",
    company: "POSCO DX",
    title: "PurchaseDX",
    description:
      "The procurement counterpart to MarketingDX: the same Servlet to Spring Boot migration, on a different domain.",
    role: "IT Developer",
    team: "4 engineers",
    stack: "Spring Boot / jQuery / IBSheet / IBChart / Oracle / JPA / MyBatis",
    highlights: [
      "Migrated the Servlet-based system to Spring Boot microservices.",
      "Split business logic into services to make changes local.",
      "Implemented JPA and MyBatis persistence against Oracle.",
      "Rebuilt the grid-heavy frontend with IBSheet and IBChart.",
    ],
  },
  {
    kind: "Company project",
    company: "CMC Global",
    title: "CCash",
    description:
      "A tool that lets QA engineers at Techcombank simulate encrypted banking API requests.",
    role: "Software Engineer",
    team: "8 engineers",
    stack: "Spring Boot / Oracle / JUnit / Mockito",
    highlights: [
      "Built the request simulator the QA team uses to exercise encrypted banking APIs.",
      "Kept the APIs aligned through database schema changes.",
      "Reached over 95% test coverage with JUnit and Mockito.",
    ],
  },
  {
    kind: "Company project",
    company: "INTELIN",
    title: "Giọt Máu Vàng",
    description:
      "A donation platform connecting donors with hospitals: registration, scheduling, and tracking.",
    role: "Backend Engineer",
    team: "6 engineers",
    stack: "Vert.x / jOOQ / MariaDB / Redis / RabbitMQ / JasperReports",
    highlights: [
      "Designed REST APIs for donor registration, appointment scheduling, and donation tracking.",
      "Integrated with third-party hospital systems.",
      "Generated donation reports and blood request forms per hospital with JasperReports.",
      "Maintained the system after launch and resolved production issues.",
    ],
    link: { label: "giotmauvang.org.vn", href: "https://giotmauvang.org.vn/" },
  },
  {
    kind: "Company project",
    company: "INTELIN",
    title: "Mẹ Easy",
    description:
      "A social network for mothers, taken from ideation to production.",
    role: "Backend Engineer",
    team: "5 engineers",
    stack: "Vert.x / jOOQ / MariaDB / Redis / RabbitMQ / Apache POI",
    highlights: [
      "Set up the project structure and coding standards before the first feature.",
      "Built APIs for posts, challenges, comments, and user feeds.",
      "Generated business reports and data exports with Apache POI.",
    ],
  },
];