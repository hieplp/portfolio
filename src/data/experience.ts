import { ExperienceEntry, ProjectEntry } from "@/types/resume";

export const experience: ExperienceEntry[] = [
  {
    company: "POSCO DX",
    role: "IT Developer",
    period: "Jan 2024 — Present",
    tags: ["Spring Boot", "Oracle", "jQuery", "IBSheet", "JavaFX", "GitHub Copilot"],
    description: "Working on modernization and development of enterprise internal systems, focusing on legacy migration and maintainable architecture design.",
    highlights: [
      "Migrated multiple Servlet-based systems to Spring Boot microservice architecture (MarketingDX & PurchaseDX).",
      "Refactored business logic into service-based structure to improve modularity and maintainability.",
      "Implemented data access layer using JPA and MyBatis for Oracle integration.",
      "Led Indonesia POC: migrated legacy modules (Swing → JavaFX, Java 1.4 → Java 21, JDBC → Glue Framework).",
      "Designed prompts for AI-assisted code conversion using GitHub Copilot, reducing estimated migration effort by 60%.",
    ],
    projects: [
      {
        title: "IndoRefresh",
        description: "Proof of concept using GitHub Copilot to migrate a large Java legacy system, cutting estimated effort by 60%.",
        teamSize: 10,
        tags: ["JavaFX", "Glue Framework", "GitHub Copilot", "Java 21"],
        highlights: [
          "Analyzed legacy system built with Swing, Java 1.4, JDBC, JavaEE, and EJB.",
          "Migrated selected modules (Swing → JavaFX, Java 1.4 → Java 21, JDBC → Glue Framework) and redesigned the UI.",
          "Designed prompts to support AI-assisted code conversion using GitHub Copilot.",
          "Reduced estimated migration effort by 60%.",
          "Evaluated feasibility of applying AI-driven migration to large legacy systems.",
        ],
      },
      {
        title: "MarketingDX",
        description: "Modernized enterprise marketing internal system from Servlet-based to Spring Boot microservices.",
        teamSize: 4,
        tags: ["Spring Boot", "jQuery", "IBSheet", "IBChart", "Oracle", "JPA", "MyBatis"],
        highlights: [
          "Migrated Servlet-based system to Spring Boot microservice architecture.",
          "Refactored business logic into service-based structure to improve modularity.",
          "Implemented data access layer using JPA and MyBatis for Oracle integration.",
          "Modernized frontend components using jQuery, IBSheet, and IBChart.",
        ],
      },
      {
        title: "PurchaseDX",
        description: "Modernized enterprise procurement internal system from Servlet-based to Spring Boot microservices.",
        teamSize: 4,
        tags: ["Spring Boot", "jQuery", "IBSheet", "IBChart", "Oracle", "JPA", "MyBatis"],
        highlights: [
          "Migrated Servlet-based system to Spring Boot microservice architecture.",
          "Refactored business logic into service-based structure to improve modularity.",
          "Implemented data access layer using JPA and MyBatis for Oracle integration.",
          "Modernized frontend components using jQuery, IBSheet, and IBChart.",
        ],
      },
    ],
  },
  {
    company: "CMC GLOBAL",
    role: "Software Engineer",
    period: "Oct 2023 — Dec 2023",
    tags: ["Spring Boot", "Oracle", "JUnit", "Mockito"],
    description: "Short-term contract onsite at Techcombank to develop banking APIs and testing tools in an Agile team.",
    highlights: [
      "Developed an internal tool for QA team to simulate encrypted API requests (CCash).",
      "Updated and maintained APIs following database schema changes.",
      "Wrote unit tests using JUnit and Mockito, achieving over 95% test coverage.",
    ],
    projects: [
      {
        title: "CCash",
        description: "Internal QA tool at Techcombank to simulate encrypted banking API requests with 95%+ test coverage.",
        teamSize: 8,
        tags: ["Spring Boot", "Oracle", "JUnit", "Mockito"],
        highlights: [
          "Developed an internal tool for QA team to simulate encrypted API requests.",
          "Updated and maintained APIs following database schema changes.",
          "Achieved over 95% test coverage with JUnit and Mockito.",
        ],
      },
    ],
  },
  {
    company: "INTELIN",
    role: "Backend Engineer",
    period: "Mar 2021 — Jul 2023",
    tags: ["Vert.x", "jOOQ", "MariaDB", "Redis", "RabbitMQ", "JasperReports", "Apache POI"],
    description: "Built and maintained backend systems for two product platforms, focusing on API design, system integration, and scalable architecture.",
    highlights: [
      "Designed REST APIs for donor registration, appointment scheduling, and donation tracking integrated with third-party hospital systems (Giọt Máu Vàng).",
      "Used JasperReports to generate donation reports and blood request forms per hospital.",
      "Joined Mẹ Easy from ideation to production, setting up project structure and coding standards.",
      "Built REST APIs for social features: posts, challenges, comments, and user feeds.",
      "Generated reports and data exports using Apache POI for business analytics.",
    ],
    projects: [
      {
        title: "Giọt Máu Vàng",
        description: "Blood donation platform with REST APIs for donor registration, scheduling, and hospital system integration.",
        teamSize: 6,
        url: "https://giotmauvang.org.vn/",
        tags: ["Vert.x", "jOOQ", "MariaDB", "Redis", "RabbitMQ", "JasperReports"],
        highlights: [
          "Designed REST APIs for donor registration, appointment scheduling, and donation tracking.",
          "Integrated with third-party hospital systems.",
          "Used JasperReports to generate donation reports and blood request forms per hospital.",
          "Maintained the system post-launch and resolved production issues.",
        ],
      },
      {
        title: "Mẹ Easy",
        description: "Social networking platform for mothers, built from ideation to production with posts, challenges, and user feeds.",
        teamSize: 5,
        tags: ["Vert.x", "jOOQ", "MariaDB", "Redis", "RabbitMQ", "Apache POI"],
        highlights: [
          "Joined from ideation to production, setting up project structure and coding standards.",
          "Built REST APIs for social features: posts, challenges, comments, and user feeds.",
          "Generated reports and data exports using Apache POI for business analytics.",
        ],
      },
    ],
  },
  {
    company: "FPT SOFTWARE",
    role: "Software Engineer Intern",
    period: "Sep 2019 — Dec 2019",
    tags: ["Vue.js", "Spring Boot", "PostgreSQL", "ElementUI"],
    description: "Developed frontend pages with Vue.js and backend APIs with Spring Boot for a Japanese outsourcing project.",
    highlights: [
      "Developed frontend pages with Vue.js (ElementUI).",
      "Built backend APIs with Spring Boot and PostgreSQL.",
    ],
  },
];

/** Flat list of all company projects derived from experience entries. */
export const projects: ProjectEntry[] = experience.flatMap((e) =>
  (e.projects ?? []).map((p) => ({ ...p, company: e.company, type: "company" as const }))
);
