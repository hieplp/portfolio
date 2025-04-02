import { ExperienceItem, ExperienceProps } from "./experience-item";

const experiences: Omit<ExperienceProps, "index">[] = [
  {
    title: "IT Developer",
    company: "Posco DX",
    location: "Ho Chi Minh",
    period: "Jan 2024 - Present",
    description: "Contributed to internal applications as a full-stack developer:",
    achievements: [
      "Built backend services using Spring Boot with JPA for Oracle database integration.",
      "Developed responsive frontend interfaces using ReactJS, jQuery, and IBSheet.",
    ],
    skills: ["Spring Boot", "JPA", "Oracle", "ReactJS", "jQuery", "IBSheet"],
  },
  {
    title: "Software Engineer",
    company: "CMC Global",
    location: "Ho Chi Minh",
    period: "Oct 2023 - Dec 2023",
    description: "Contributed to banking enterprise applications as a Java backend developer at Techcombank:",
    achievements: [
      "Refactored and developed RESTful APIs using Spring Boot and Oracle to support new database schema.",
      "Created encryption testing tool and implemented unit tests with JUnit/Mockito for quality assurance.",
    ],
    skills: ["Spring Boot", "Oracle", "JUnit", "Mockito"],
  },
  {
    title: "Backend Engineer",
    company: "Intelin",
    location: "Ho Chi Minh",
    period: "Mar 2021 - Jul 2023",
    description: "Contributed to healthcare project as a Java backend developer:",
    achievements: [
      "Built monolithic applications and microservices using Vert.x framework with MariaDB.",
      "Implemented message queuing with RabbitMQ and Redis for data caching.",
      "Developed RESTful APIs and optimized database queries for better performance.",
      "Monitored system health and performance using Kubernetes dashboard.",
    ],
    skills: ["Vert.x", "MariaDB", "RabbitMQ", "Redis", "Kubernetes"],
  },
  {
    title: "Software Engineer Intern",
    company: "FPT Software",
    location: "Ho Chi Minh",
    period: "Sept 2019 - Dec 2019",
    description: "Contributed to Japanese outsourcing project as a full-stack developer:",
    achievements: [
      "Developed responsive UI components with Vue.js and ElementUI framework.",
      "Built RESTful APIs using Spring Boot and PostgreSQL for data management.",
    ],
    skills: ["Vue.js", "ElementUI", "Spring Boot", "PostgreSQL"],
  },
];

export function ExperienceList() {
  return (
    <div className="space-y-2">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} index={index} />
      ))}
    </div>
  );
} 