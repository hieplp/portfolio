"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
};

const experiences: Experience[] = [
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
    skills: ["Spring Boot", "JPA", "Oracle", "ReactJS", "jQuery", "IBSheet"]
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
    skills: ["Spring Boot", "Oracle", "JUnit", "Mockito"]
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
    skills: ["Vert.x", "MariaDB", "RabbitMQ", "Redis", "Kubernetes"]
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
    skills: ["Vue.js", "ElementUI", "Spring Boot", "PostgreSQL"]
  },
];

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-3 p-6 rounded-lg 
        hover:bg-slate-50 dark:hover:bg-slate-800/50 
        transition-colors duration-200"
    >
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-primary dark:text-primary/90">
              {experience.title}
            </h3>
            <span className="text-sm px-3 py-1 rounded-full 
              bg-primary/10 dark:bg-primary/20 
              text-primary dark:text-primary/90 font-medium">
              {experience.period}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center 
          text-muted-foreground dark:text-muted-foreground/80">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">{experience.company}</h4>
            <span>•</span>
            <p className="text-sm">{experience.location}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 font-medium">
            {experience.description}
          </p>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                key={idx}
                className="flex items-start gap-2 text-sm 
                  text-muted-foreground dark:text-muted-foreground/80"
              >
                <span className="mt-1.5">
                  <svg
                    className="h-1.5 w-1.5 fill-current"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                </span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 + idx * 0.05 }}
              key={idx}
              className="px-2 py-1 text-xs font-medium rounded-md
                bg-secondary dark:bg-secondary/10
                text-secondary-foreground dark:text-secondary-foreground/90
                hover:bg-secondary/80 dark:hover:bg-secondary/20
                transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-8 space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h2 className="text-2xl font-bold tracking-tight 
          text-foreground dark:text-foreground/90">
          Experience
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ originX: 0 }}
        >
          <Separator className="bg-primary/30 dark:bg-primary/20 h-[2px]" />
        </motion.div>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}
