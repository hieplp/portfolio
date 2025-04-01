"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

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

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col gap-3 p-6 rounded-lg",
        "hover:bg-slate-50 dark:hover:bg-slate-800/50",
        "transition-colors duration-200"
      )}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
            <h3 className="text-lg font-bold text-primary">
              {experience.title}
            </h3>
            <Badge
              variant="secondary"
              className="w-fit flex items-center gap-2"
            >
              <Calendar className="w-3 h-3" />
              {experience.period}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">{experience.company}</h4>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-sm">
                {experience.location}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-medium">
              {experience.description}
            </p>
            <ul className="space-y-2 pl-4">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + idx * 0.1,
                  }}
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
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

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + idx * 0.05,
                }}
                key={idx}
              >
                <Badge
                  variant="outline"
                  className="bg-background hover:bg-accent transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-8 space-y-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
          <Badge variant="secondary" className="text-xs">
            {experiences.length} Positions
          </Badge>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ originX: 0 }}
        >
          <Separator className="bg-gradient-to-r from-primary/30 to-transparent h-[2px]" />
        </motion.div>
      </motion.div>

      <div className="space-y-2">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}
