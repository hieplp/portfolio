import { Profile } from "@/types/resume";

export const profile: Profile = {
  name: "Ly Phuoc Hiep",
  title: "Software Engineer",
  tags: ["Backend", "Java", "Microservices", "5+ years"],
  bio: "Software Engineer with 5+ years of experience building and modernizing enterprise systems across banking, procurement, and healthcare.",
  avatar: "/avatar.png",
  contact: {
    email: "hiepphuocly@gmail.com",
    phone: "+84 33 545 2591",
    github: "https://github.com/hieplp",
    linkedin: "https://linkedin.com/in/hiep-ly",
  },
  about: {
    paragraphs: [
      "Software Engineer with 5+ years of experience building and modernizing enterprise systems across banking, procurement, and healthcare. Strong in Java (Spring Boot, Vert.x), relational databases (Oracle, MariaDB, PostgreSQL), and distributed systems (Redis, RabbitMQ).",
      "Experienced in legacy migration, microservices development, performance optimization, and containerized deployment with Docker and Kubernetes.",
    ],
    location: "Ho Chi Minh City, Vietnam",
    availability: "Open to full-time roles",
  },
};
