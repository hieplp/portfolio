"use client";
import { motion } from "framer-motion";
import { AnimatedLetter } from "./animated-letter";

interface AnimatedLogoProps {
  text: string;
  className?: string;
}

export function AnimatedLogo({ text, className }: AnimatedLogoProps) {
  const letters = text.split("");

  return (
    <motion.h1 
      className={className}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {letters.map((letter, index) => (
        <AnimatedLetter
          key={index}
          letter={letter}
          index={index}
        />
      ))}
    </motion.h1>
  );
} 