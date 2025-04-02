"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StatsList } from "./stats-list";

export function SummarySection() {
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
          <h2 className="text-2xl font-bold tracking-tight">Professional Summary</h2>
          <Badge variant="secondary" className="text-xs">
            Overview
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
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground max-w-3xl"
        >
          Full-stack developer with expertise in enterprise solutions, specializing in Java backend development 
          and modern frontend technologies. Proven track record in delivering high-quality software across 
          various industries including banking, healthcare, and marketing.
        </motion.p>
      </motion.div>

      <div className="mt-8">
        <StatsList />
      </div>
    </section>
  );
} 