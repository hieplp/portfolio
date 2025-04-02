"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, Trophy } from "lucide-react";
import { useRef } from "react";

export interface AwardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  index: number;
}

export function AwardItem({
  title,
  organization,
  date,
  description,
  index,
}: AwardProps) {
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
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
            <div className="flex items-center justify-center gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Trophy className="w-4 h-4 text-yellow-500" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-lg font-bold text-primary"
              >
                {title}
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="flex items-center gap-2"
            >
              <Badge
                variant="secondary"
                className="w-fit flex items-center gap-2"
              >
                <Calendar className="w-3 h-3" />
                {date}
              </Badge>
              <Badge
                variant="secondary"
                className="w-fit flex items-center gap-2"
              >
                <Building2 className="w-3 h-3" />
                {organization}
              </Badge>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          className="text-sm text-muted-foreground"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
