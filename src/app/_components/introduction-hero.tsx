"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function IntroductionHero() {
  return (
    <div className="py-50 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-8xl bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Ly Phuoc Hiep
          </h1>
          <p className="text-4xl text-muted-foreground font-semibold">
            Software Engineer
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
          Hi! I&apos;m a full-stack developer who brings ideas to life using{" "}
          {highlightText("Java Spring")} for robust backends and{" "}
          {highlightText("React")} for smooth user experiences. From database to
          deployment, I build complete solutions that make an impact.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-4"
      >
        <SocialLink 
          href="https://github.com/lyphuochiep"
          icon={<Github className="w-4 h-4" />}
          label="Github"
        />
        <SocialLink 
          href="https://www.linkedin.com/in/lyphuochiep"
          icon={<Linkedin className="w-4 h-4" />}
          label="LinkedIn"
        />
        <SocialLink 
          href="mailto:your.email@example.com"
          icon={<Mail className="w-4 h-4" />}
          label="Email"
        />
      </motion.div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
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
      {icon}
      {label}
    </motion.a>
  );
}

const highlightText = (text: string) => {
  return (
    <span className="font-bold text-primary relative inline-block">
      {text}
      <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-primary/30" />
    </span>
  );
};
