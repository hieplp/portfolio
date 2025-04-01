"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Building2, ExternalLink } from "lucide-react";

export interface ProjectProps {
  title: string;
  company: string;
  description: string[];
  hasLink?: boolean;
  skills: string[];
  index: number;
}

export function ProjectItem({ title, company, description, hasLink, skills, index }: ProjectProps) {
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
            <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
              {title}
              {hasLink && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
            </h3>
            <Badge
              variant="secondary"
              className="w-fit flex items-center gap-2"
            >
              <Building2 className="w-3 h-3" />
              {company}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="space-y-2">
            <ul className="space-y-2 pl-4">
              {description.map((desc, idx) => (
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
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
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