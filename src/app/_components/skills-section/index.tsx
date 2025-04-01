"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { SkillCategory } from "./skill-category";
import { 
  Code2, 
  Database, 
  Layout, 
  GitBranch, 
  TestTube2, 
  Puzzle 
} from "lucide-react";

const skillCategories = [
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
  }
];

export function SkillsSection() {
  const totalSkills = skillCategories.reduce(
    (sum, category) => sum + category.skills.length,
    0
  );

  return (
    <section className="py-8 space-y-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
          <Badge variant="secondary" className="text-xs">
            {totalSkills} Technologies
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

      <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            {...category}
            index={index}
          />
        ))}
      </div>
    </section>
  );
} 