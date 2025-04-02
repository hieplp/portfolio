"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
  iconColor: string;
  gradient: string;
}

export function StatItem({
  icon: Icon,
  value,
  label,
  index,
  iconColor,
  gradient,
}: StatItemProps) {
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
      <div
        className={cn(
          "space-y-4 flex flex-row md:flex-col",
          "gap-10 md:gap-2",
          "items-center ",
          "md:items-start md:justify-start"
        )}
      >
        <div
          className={cn(
            "w-fit rounded-lg",
            gradient,
            "bg-opacity-10",
            "flex items-center justify-center",
            "md:justify-start md:items-start"
          )}
        >
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="text-3xl font-bold"
          >
            {value}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="text-sm text-muted-foreground mt-1"
          >
            {label}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
