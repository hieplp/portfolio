"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ProjectList } from "./project-list";

export function ProjectsSection() {
  return (
    <section className="py-8 space-y-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <Badge variant="secondary" className="text-xs">
            4 Projects
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

      <ProjectList />
    </section>
  );
}

export * from "./project-item"; 