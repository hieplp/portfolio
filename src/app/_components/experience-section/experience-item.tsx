"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import { useRef } from "react";

export interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  index: number;
}

export function ExperienceItem({
  title,
  company,
  location,
  period,
  description,
  achievements,
  skills,
  index,
}: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="text-lg font-bold text-primary"
            >
              {title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Badge
                variant="secondary"
                className="w-fit flex items-center gap-2"
              >
                <Calendar className="w-3 h-3" />
                {period}
              </Badge>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">{company}</h4>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-sm">
                {location}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              className="text-sm text-muted-foreground font-medium"
            >
              {description}
            </motion.p>
            <ul className="space-y-2 pl-4">
              {achievements.map((achievement, idx) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.5 + idx * 0.1,
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
            {skills.map((skill, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + 0.7 + idx * 0.05,
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