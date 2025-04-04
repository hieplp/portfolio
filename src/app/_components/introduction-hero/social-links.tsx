"use client";
import { socialLinks } from "@/config/portfolio";
import { motion } from "framer-motion";
import { SocialLink } from "./social-link";

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap gap-2"
    >
      {socialLinks.map((link) => (
        <SocialLink
          key={link.name}
          href={link.href}
          icon={link.icon}
          label={link.name}
        />
      ))}
    </motion.div>
  );
}
