"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

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
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function SkillCategory({
  title,
  skills,
  index,
  icon: Icon,
  iconColor,
  gradient,
}: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
          <div className={cn("p-2 rounded-lg", gradient, "bg-opacity-10")}>
            <Icon className={cn("w-5 h-5", iconColor)} />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, idx) => (
            <motion.div
              variants={item}
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="transition-all duration-300"
            >
              <Badge
                variant="outline"
                className="bg-background hover:bg-accent transition-colors"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
