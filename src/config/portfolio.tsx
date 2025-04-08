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
      Hi! I&apos;m a full-stack developer with 4+ years of experience in{" "}
      <HighlightText underline={false} text="healthcare" />,{" "}
      <HighlightText underline={false} text="banking" />, and{" "}
      <HighlightText underline={false} text="manufacturing" /> industries. I
      build robust backends with{" "}
      <HighlightText underline={true} text="Java Spring Boot" /> and{" "}
      <HighlightText underline={false} text="Vert.x" />, create responsive
      interfaces using <HighlightText underline={true} text="React" /> and{" "}
      <HighlightText underline={false} text="jQuery" />, and implement cloud
      solutions with <HighlightText underline={true} text="Docker" /> and{" "}
      <HighlightText underline={false} text="Kubernetes" />. From database
      optimization to intuitive UI, I deliver complete solutions that make an
      impact.
    </span>,
  ],
  statDescriptions: [
    <span key="statDescription1">
      <HighlightText underline={false} text="Full Stack Engineer" /> with 4+
      years in <HighlightText underline={false} text="healthcare" />,{" "}
      <HighlightText underline={false} text="banking" />, and{" "}
      <HighlightText underline={false} text="manufacturing" /> sectors.
    </span>,
    <span key="statDescription2">
      <HighlightText underline={false} text="Java" /> backend specialist (Spring
      Boot, Vert.x) with <HighlightText underline={false} text="React" />
      /TypeScript frontend expertise.
    </span>,
    <span key="statDescription3">
      <HighlightText underline={false} text="DevOps" /> practitioner using
      Docker/Kubernetes and cross-cultural team collaborator.
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
    title: "Full Stack Developer",
    company: "Posco DX",
    location: "Ho Chi Minh",
    period: "Jan 2024 - Present",
    description:
      "Contributed to development for MarketingDX Order Management System:",
    achievements: [
      "Upgraded legacy order system to modern technology stack, improving system performance and user experience.",
      "Built comprehensive order management features handling the full process from creation to delivery.",
      "Created database design and APIs using Spring Boot and Oracle for reliable data handling.",
      "Developed user-friendly interfaces with jQuery and IBSheet that display large amounts of data clearly.",
      "Collaborated effectively in mixed Korean-Vietnamese team to deliver high-quality solutions.",
    ],
    skills: ["Spring Boot", "JPA", "Oracle", "jQuery", "IBSheet"],
  },
  {
    title: "Software Engineer",
    company: "CMC Global",
    location: "Ho Chi Minh",
    period: "Oct 2023 - Dec 2023",
    description: "Developed CCash Banking System for Techcombank:",
    achievements: [
      "Built testing tool for banking security features while updating APIs for new database structure.",
      "Developed secure APIs for banking operations following strict security standards.",
      "Created unit tests to ensure system reliability and data protection.",
      "Used Scrum methodology with daily standups and sprint planning to deliver on time.",
    ],
    skills: ["Spring Boot", "Oracle", "JUnit", "Mockito", "Encryption"],
  },
  {
    title: "Backend Engineer",
    company: "Intelin",
    location: "Ho Chi Minh",
    period: "Mar 2021 - Jul 2023",
    description: "Designed and developed healthcare platforms:",
    achievements: [
      "Built two successful healthcare platforms (Giot Mau Vang and Me Easy) from the ground up using Vert.x and MariaDB.",
      "Created message system with RabbitMQ and implemented Redis caching to handle user traffic effectively.",
      "Developed optimized APIs and database queries to improve application response times.",
      "Set up Docker containers and Kubernetes for reliable system deployment and scaling.",
    ],
    skills: ["Vert.x", "MariaDB", "RabbitMQ", "Redis", "Docker", "Kubernetes"],
  },
  {
    title: "Software Engineer Intern",
    company: "FPT Software",
    location: "Ho Chi Minh",
    period: "Sept 2019 - Dec 2019",
    description:
      "Contributed to Japanese outsourcing project as a full-stack developer:",
    achievements: [
      "Created features using Vue.js (frontend) and Spring Boot (backend) for Japanese business client.",
      "Designed clean user interfaces following Japanese design standards with ElementUI.",
      "Built reliable APIs and database connections using Spring Boot and PostgreSQL.",
    ],
    skills: ["Vue.js", "ElementUI", "Spring Boot", "PostgreSQL"],
  },
];

export const projects = [
  {
    title: "MarketingDX",
    company: "Posco DX",
    overview:
      "Order management system for steel products and materials for a Korean steel manufacturing company.",
    description: [
      "Upgraded outdated system to modern technology, improving speed and user experience.",
      "Built database queries and APIs using Spring Boot and Oracle.",
      "Created user-friendly screens for order entry and tracking.",
      "Implemented data tables with sorting and filtering using IBSheet/jQuery.",
    ],
    skills: ["Spring Boot", "JPA", "Oracle", "IBSheet", "jQuery"],
  },
  {
    title: "CCash",
    company: "CMC Global",
    overview:
      "Banking system for managing cash flow and financial transactions for Techcombank, a major Vietnamese bank.",
    description: [
      "Enhanced security features and database functionality.",
      "Built tool for testing encryption/decryption of sensitive banking data.",
      "Updated APIs to work with new database structure.",
      "Created thorough tests to ensure system reliability and security.",
    ],
    skills: ["Spring Boot", "Oracle", "JUnit", "Mockito", "Encryption"],
  },
  {
    title: "Giot Mau Vang",
    company: "Intelin",
    overview:
      "Digital platform connecting blood donors with donation centers for Vietnam Red Cross and hospitals.",
    description: [
      "Built API system for blood donation registration and tracking.",
      "Connected platform with hospital systems for seamless data sharing.",
      "Generated statistical reports for donation centers using JasperReports.",
    ],
    hasLink: true,
    skills: ["Vert.x", "MariaDB", "RabbitMQ", "JasperReports", "Docker"],
  },
  {
    title: "Me Easy",
    company: "Intelin",
    overview:
      "Mobile platform for pregnancy tracking and parenting advice for healthcare providers and expectant mothers.",
    description: [
      "Created APIs for user profiles, health tracking, and content delivery.",
      "Implemented caching system to improve app performance.",
      "Built report generation feature for health summaries.",
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
    value: "5+",
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
    value: "12+",
    label: "Technologies Used",
    iconColor: "text-orange-500",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Users,
    value: "20+",
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
