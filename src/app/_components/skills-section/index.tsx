"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { skillCategories } from "@/config/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SkillCategory } from "./skill-category";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalSkills = skillCategories.reduce(
    (sum, category) => sum + category.skills.length,
    0
  );

  return (
    <section className="py-8 space-y-2" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ originX: 0 }}
        >
          <Separator className="bg-gradient-to-r from-primary/30 to-transparent h-[2px]" />
        </motion.div>
      </motion.div>

      <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} {...category} index={index} />
        ))}
      </div>
    </section>
  );
}
