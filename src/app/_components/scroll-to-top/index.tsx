"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 200);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20
      }}
      className={cn(
        "fixed bottom-4 right-4 z-50",
        "transition-opacity duration-200",
        !isVisible && "pointer-events-none"
      )}
    >
      <Button
        variant="secondary"
        size="icon"
        onClick={scrollToTop}
        className={cn(
          "h-10 w-10 rounded-full",
          "shadow-lg shadow-accent/20",
          "hover:shadow-accent/30",
          "transition-shadow duration-200"
        )}
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </motion.div>
  );
} 