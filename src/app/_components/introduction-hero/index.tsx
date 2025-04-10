"use client";
import { personalInfo } from "@/config/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SocialLinks } from "./social-links";
import { ArrowDown } from "lucide-react";

export function IntroductionHero() {
  return (
    <div className="relative h-[90vh] flex flex-col justify-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <div className="space-y-3 md:space-y-4">
          <h1
            className={cn(
              "font-bold tracking-tight",
              "text-5xl md:text-8xl",
              "text-primary"
            )}
          >
            {personalInfo.name}
          </h1>
          <p
            className={cn(
              "text-2xl text-muted-foreground font-semibold sm:text-3xl",
              "text-primary"
            )}
          >
            {personalInfo.title}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full space-y-4"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          {personalInfo.descriptions.map((description, index) => (
            <span key={index}>{description}</span>
          ))}
        </p>
      </motion.div>

      <SocialLinks />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.4 },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </div>
  );
}
