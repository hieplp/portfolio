import { HighlightText } from "@/components/highlight-text";
import {
  Award,
  Boxes,
  Briefcase,
  Building2,
  Code2,
  Database,
  GitBranch,
  GithubIcon,
  Layout,
  Linkedin,
  Mail,
  Puzzle,
  TestTube2,
  Users,
} from "lucide-react";

export const personalInfo = {
  appName: "Hiep.LP",
  name: "Ly Phuoc Hiep",
  title: "Software Engineer",
  email: "hiepphuocly@gmail.com",
  github: "https://github.com/hieplp",
  linkedin: "https://www.linkedin.com/in/hiep-ly-563a231a2",
  descriptions: [
    <span key="description">
      Hi! I&apos;m a full-stack developer who brings ideas to life using{" "}
      <HighlightText text="Java Spring" /> for robust backends and{" "}
      <HighlightText text="React" /> for smooth user experiences. From database
      to deployment, I build complete solutions that make an impact.
    </span>,
  ],
  statDescriptions: [
    <span key="statDescription">
      Full-stack developer with expertise in enterprise solutions, specializing
      in Java backend development and modern frontend technologies. Proven track
      record in delivering high-quality software across various industries
      including banking, healthcare, and marketing.
    </span>,
  ],
};

export const socialLinks = [
  {
    name: "GitHub",
    href: personalInfo.github,
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];

export const experiences = [
  {
    title: "IT Developer",
    company: "Posco DX",
    location: "Ho Chi Minh",
    period: "Jan 2024 - Present",
    description:
      "Contributed to internal applications as a full-stack developer:",
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
    description:
      "Contributed to banking enterprise applications as a Java backend developer at Techcombank:",
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
    description:
      "Contributed to healthcare project as a Java backend developer:",
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
    description:
      "Contributed to Japanese outsourcing project as a full-stack developer:",
    achievements: [
      "Developed responsive UI components with Vue.js and ElementUI framework.",
      "Built RESTful APIs using Spring Boot and PostgreSQL for data management.",
    ],
    skills: ["Vue.js", "ElementUI", "Spring Boot", "PostgreSQL"],
  },
];

export const projects = [
  {
    title: "MarketingDX",
    company: "Posco DX",
    overview:
      "A comprehensive marketing automation platform that streamlines campaign management and customer engagement through an integrated dashboard.",
    description: [
      "Developed full-stack solution at Posco DX by migrating legacy system to Spring Boot/Oracle.",
      "Implemented data access layer with JPA and built dynamic interfaces using IBSheet/jQuery.",
    ],
    skills: ["Spring Boot", "JPA", "Oracle", "IBSheet", "jQuery"],
  },
  {
    title: "CCash",
    company: "Techcombank",
    overview:
      "A banking liquidity management system that helps financial institutions monitor and optimize their cash positions across multiple accounts.",
    description: [
      "Developed backend for banking liquidity system at Techcombank using Spring Boot and Oracle.",
      "Created encryption testing tool and refactored services for new database schema with JUnit/Mockito tests.",
    ],
    skills: ["Spring Boot", "Oracle", "JUnit", "Mockito"],
  },
  {
    title: "Giot Mau Vang",
    company: "Intelin",
    overview:
      "A blood donation management platform that connects donors with hospitals and facilitates efficient blood supply chain management.",
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
    overview:
      "A comprehensive pregnancy and parenting platform providing resources, tracking tools, and community features for new parents.",
    description: [
      "Developed backend for pregnancy/parenting platform at Intelin using Vert.x and MariaDB.",
      "Implemented caching (Redis), messaging (RabbitMQ) and report generation (Apache POI).",
    ],
    hasLink: true,
    skills: ["Vert.x", "MariaDB", "Redis", "RabbitMQ", "Apache POI"],
  },
];

export const awards = [
  {
    title: "Staff of the Year",
    organization: "Intelin",
    date: "Jan 2023",
    description:
      "Recognized for outstanding performance and significant contributions to the organization",
  },
];

export const stats = [
  {
    icon: Briefcase,
    value: "4+",
    label: "Years of Experience",
    iconColor: "text-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Enterprise Projects",
    iconColor: "text-green-500",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Building2,
    value: "4",
    label: "Companies",
    iconColor: "text-purple-500",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Boxes,
    value: "15+",
    label: "Technologies Used",
    iconColor: "text-orange-500",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Users,
    value: "5+",
    label: "Team Collaborations",
    iconColor: "text-yellow-500",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Award,
    value: "1",
    label: "Professional Award",
    iconColor: "text-indigo-500",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

export const skillCategories = [
  {
    title: "Backend",
    skills: ["Spring Boot", "Vert.x", "JPA", "jOOQ"],
    icon: Code2,
    iconColor: "text-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Database",
    skills: ["Oracle", "MariaDB", "PostgreSQL", "Redis"],
    icon: Database,
    iconColor: "text-green-500",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Frontend",
    skills: ["ReactJS", "Vue.js", "jQuery", "Material-UI", "IBSheet"],
    icon: Layout,
    iconColor: "text-purple-500",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "DevOps",
    skills: ["Jenkins", "Docker", "Kubernetes"],
    icon: GitBranch,
    iconColor: "text-orange-500",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Testing",
    skills: ["JUnit", "Mockito"],
    icon: TestTube2,
    iconColor: "text-yellow-500",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Others",
    skills: ["RabbitMQ", "JasperReports", "Apache POI"],
    icon: Puzzle,
    iconColor: "text-indigo-500",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];
