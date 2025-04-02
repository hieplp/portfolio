"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by mounting component only after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative overflow-hidden group">
        <div className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden group rounded-full"
    >
      {/* Hover ring animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-dashed border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      {/* Background glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="absolute inset-0 rounded-full"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)'
              : 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)'
          }}
        />
      </AnimatePresence>

      {/* Icons with animations */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {theme === 'light' ? (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 