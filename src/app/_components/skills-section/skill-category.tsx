"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  GitBranch, 
  TestTube2, 
  Puzzle,
  LucideIcon
} from "lucide-react";
import { useRef } from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
  icon: LucideIcon;
  iconColor: string;
  gradient: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
};

export function SkillCategory({ 
  title, 
  skills, 
  index, 
  icon: Icon, 
  iconColor,
  gradient,
}: SkillCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "rounded-xl p-6 border",
        "bg-gradient-to-br from-background to-background/50",
        "hover:shadow-lg hover:shadow-accent/5",
        "transition-all duration-300"
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            gradient,
            "bg-opacity-10"
          )}>
            <Icon className={cn("w-5 h-5", iconColor)} />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, idx) => (
            <motion.div
              variants={item}
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="transition-all duration-300"
            >
              <div className={cn(
                "px-3 py-1.5 rounded-md text-sm",
                "bg-accent/5 dark:bg-accent/10",
                "border border-accent/10 dark:border-accent/20",
                "text-muted-foreground",
                "hover:bg-accent/10 dark:hover:bg-accent/15",
                "hover:text-foreground dark:hover:text-foreground",
                "hover:border-accent/20 dark:hover:border-accent/30",
                "transition-all duration-300"
              )}>
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
