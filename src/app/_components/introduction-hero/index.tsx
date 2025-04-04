"use client";
import { personalInfo } from "@/config/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SocialLinks } from "./social-links";

export function IntroductionHero() {
  return (
    <div className="py-50 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <div className="space-y-3 md:space-y-4">
          <h1
            className={cn(
              "text-6xl font-bold tracking-tight sm:text-8xl",
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
    </div>
  );
}
