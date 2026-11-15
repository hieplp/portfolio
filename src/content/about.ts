import { profile } from "./profile";

export const paragraphs = [
  "Software Engineer with five years of experience building and modernizing enterprise systems across banking, procurement, and healthcare. Strong in Java with Spring Boot and Vert.x, relational databases with Oracle, MariaDB, and PostgreSQL, and distributed systems with Redis and RabbitMQ.",
  "I work mostly where a system already exists: legacy migration, microservices, performance, and containerized delivery with Docker and Kubernetes. Most of what I ship is internal or regulated, so the work rarely comes with a screenshot.",
];

export const facts = [
  { label: "Location", value: profile.location },
  { label: "Availability", value: profile.availability },
  {
    label: "Education",
    value: "FPT University, BSc Computer Science, 2017 - 2021",
  },
];

export const image = {
  src: "/assets/stock/architecture.jpg",
  alt: "Concrete staircase, photographed as an editorial architectural detail",
  credit: "Markus Winkler / Pexels",
};