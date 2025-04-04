"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

interface AnimatedLetterProps {
  letter: string;
  index: number;
  className?: string;
}

export function AnimatedLetter({
  letter,
  index,
  className,
}: AnimatedLetterProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    });
  }, [controls, index]);

  const handleHover = async () => {
    await controls.start({
      y: -3,
      color: "var(--primary)",
      transition: { duration: 0.2 },
    });
    await controls.start({
      y: 0,
      color: "var(--foreground)",
      transition: { duration: 0.2 },
    });
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      onHoverStart={handleHover}
      className={cn(
        "inline-block cursor-pointer transition-colors duration-200",
        letter === "." ? "text-primary hover:text-primary" : "",
        className
      )}
    >
      {letter}
    </motion.span>
  );
}
