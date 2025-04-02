"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExperienceList } from "./experience-list";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 space-y-2" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
          <Badge variant="secondary" className="text-xs">
            4 Positions
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

      <ExperienceList />
    </section>
  );
}

export * from "./experience-item"; 