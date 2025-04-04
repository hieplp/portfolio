"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  const Icon = icon;
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground 
                 hover:text-primary transition-colors bg-secondary rounded-lg hover:bg-secondary/80"
    >
      <Icon className="w-4 h-4" />
      {label}
    </motion.a>
  );
}
